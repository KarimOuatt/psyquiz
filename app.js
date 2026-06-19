/* ===================================================================
   PsyQuiz — logique de l'application
   Modes : chapter · revision · mixte · exam (examen blanc chronométré)
   Stats persistées dans localStorage :
   { q: { [id]: {ok, ko} }, chap: { [id]: {best, plays} },
     exam: { best, plays } }
   =================================================================== */
(function () {
  "use strict";

  var STORE_KEY = "psyquiz-stats-v1";
  var SESSION_SIZE = 10;     // questions par chapitre
  var REVISION_SIZE = 12;    // révision ciblée
  var MIXTE_SIZE = 20;       // quiz mixte
  var EXAM_SIZE = 50;        // examen blanc (l'examen réel fait 60-80 QCM ; monter ici si voulu)
  var EXAM_SEC_PER_Q = 60;   // 1 min / question
  var PASS_PCT = 60;         // seuil de réussite de l'examen

  // Niveau de difficulté actif : "base" (entraînement) ou "difficile" (sérieux).
  var currentLevel = "base";
  function levelOf(q) { return q.niveau === "difficile" ? "difficile" : "base"; }
  function inLevel(q) { return levelOf(q) === currentLevel; }
  function chapterPool(ch) { return ch.questions.filter(inLevel); }

  var MSG_OK = ["Bravo ! 🎉", "Exact ! ✨", "Bien vu ! 👏", "Parfait ! 💪", "Tu maîtrises ! 🧠", "Excellent ! 🌟"];
  var MSG_KO = ["Pas tout à fait… 🤏", "Raté ! 😅", "Presque ! 👀", "À revoir 📖", "Oups ! 🙈"];

  var KEYS = ["A", "B", "C", "D"];

  var stats = loadStats();
  var session = null;
  var qToChapter = buildChapterIndex();

  // ---------- utilitaires ----------
  function $(id) { return document.getElementById(id); }

  function loadStats() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && typeof p === "object") {
          return { q: p.q || {}, chap: p.chap || {}, exam: p.exam || { best: 0, plays: 0 } };
        }
      }
    } catch (e) { /* stockage corrompu/indisponible */ }
    return { q: {}, chap: {}, exam: { best: 0, plays: 0 } };
  }
  function saveStats() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); } catch (e) { /* mode privé, quota… */ }
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function buildChapterIndex() {
    var map = {};
    QUIZ_DATA.chapters.forEach(function (ch) {
      ch.questions.forEach(function (q) { map[q.id] = ch; });
    });
    return map;
  }
  function chapterOf(qid) { return qToChapter[qid]; }

  function allQuestions() {
    var out = [];
    QUIZ_DATA.chapters.forEach(function (ch) { ch.questions.forEach(function (q) { if (inLevel(q)) out.push(q); }); });
    return out;
  }
  function levelCount(level) {
    var n = 0;
    QUIZ_DATA.chapters.forEach(function (ch) { ch.questions.forEach(function (q) { if (levelOf(q) === level) n++; }); });
    return n;
  }

  function qStat(qid) { return stats.q[qid] || { ok: 0, ko: 0 }; }
  function qAttempts(qid) { var s = qStat(qid); return s.ok + s.ko; }
  function qRate(qid) { var s = qStat(qid), n = s.ok + s.ko; return n === 0 ? null : s.ok / n; }
  function rateClass(r) { return r >= 0.75 ? "good" : (r >= 0.5 ? "mid" : "bad"); }
  function hasHistory() { return allQuestions().some(function (q) { return qAttempts(q.id) > 0; }); }

  function typeLabel(t) {
    if (t === "cas") return { txt: "🩺 Cas clinique", cls: "cas" };
    if (t === "vf") return { txt: "Vrai / Faux", cls: "vf" };
    return null; // QCM standard : pas de badge
  }

  // Agrégat par notion sur un ensemble de questions.
  function notionAggregate(questions, getResult) {
    var map = {};
    questions.forEach(function (q) {
      var res = getResult(q);
      if (!res) return;
      if (!map[q.notion]) map[q.notion] = { notion: q.notion, ok: 0, total: 0 };
      map[q.notion].ok += res.ok;
      map[q.notion].total += res.ok + res.ko;
    });
    var rows = Object.keys(map).map(function (k) {
      var r = map[k]; r.rate = r.total === 0 ? 0 : r.ok / r.total; return r;
    });
    rows.sort(function (a, b) { return a.rate - b.rate || b.total - a.total; });
    return rows;
  }
  function globalWeakNotions() {
    return notionAggregate(allQuestions(), function (q) {
      var s = qStat(q.id); return (s.ok + s.ko) > 0 ? s : null;
    });
  }

  // ---------- navigation ----------
  function show(viewId) {
    ["view-home", "view-quiz", "view-results"].forEach(function (id) {
      $(id).classList.toggle("hidden", id !== viewId);
    });
    window.scrollTo(0, 0);
  }

  // ---------- accueil ----------
  function renderHome() {
    // état du sélecteur de niveau
    document.querySelectorAll(".level-opt").forEach(function (b) {
      b.classList.toggle("active", b.dataset.level === currentLevel);
    });
    var hard = currentLevel === "difficile";
    $("level-hint").textContent = hard
      ? "🔥 Mode sérieux : questions pièges niveau examen (différenciation fine, seuils exacts, exceptions, « lequel est FAUX »)."
      : "🎓 Mode entraînement : pour apprendre et réviser en douceur, avec correction immédiate.";
    var examPool = allQuestions().length;
    $("exam-desc").textContent = Math.min(EXAM_SIZE, examPool) + " questions chronométrées, tous les chapitres — "
      + (hard ? "version difficile" : "comme le jour J");

    var grid = $("chapter-grid");
    grid.innerHTML = "";

    QUIZ_DATA.chapters.forEach(function (ch) {
      var pool = chapterPool(ch);
      var total = pool.length;
      var card = document.createElement("button");
      card.className = "chapter-card";
      card.style.setProperty("--accent", ch.accent);

      if (total === 0) {
        // pas (encore) de questions à ce niveau pour ce chapitre
        card.classList.add("empty");
        card.disabled = true;
        card.innerHTML =
          '<div class="chapter-top">' +
            '<span class="chapter-emoji">' + ch.emoji + "</span>" +
            '<span class="chapter-name">' + ch.titre + "</span>" +
          "</div>" +
          '<span class="chapter-meta">Aucune question difficile pour l’instant</span>';
        grid.appendChild(card);
        return;
      }

      var seen = pool.filter(function (q) { return qAttempts(q.id) > 0; }).length;
      var ok = 0, n = 0;
      pool.forEach(function (q) { var s = qStat(q.id); ok += s.ok; n += s.ok + s.ko; });
      var mastery = n === 0 ? null : ok / n;
      var chapStat = stats.chap[ch.id + "-" + currentLevel];

      var html =
        '<div class="chapter-top">' +
          '<span class="chapter-emoji">' + ch.emoji + "</span>" +
          '<span class="chapter-name">' + ch.titre + "</span>" +
        "</div>" +
        '<span class="chapter-meta">' + total + " questions · session de " + Math.min(SESSION_SIZE, total) + "</span>" +
        '<div class="chapter-stats">' +
          '<span class="stat-row"><span class="stat-label">Progression</span>' +
            '<span class="progress-track"><span class="progress-fill" style="width:' + Math.round((seen / total) * 100) + '%"></span></span>' +
            '<span class="stat-val">' + seen + "/" + total + "</span></span>";
      if (mastery !== null) {
        html += '<span class="stat-row"><span class="stat-label">Maîtrise</span>' +
          '<span class="progress-track"><span class="progress-fill ' + rateClass(mastery) + '" style="width:' + Math.round(mastery * 100) + '%"></span></span>' +
          '<span class="stat-val">' + Math.round(mastery * 100) + "%</span></span>";
      }
      html += "</div>";
      if (chapStat && chapStat.plays > 0) html += '<span class="badge">🏆 Meilleur score : ' + chapStat.best + "%</span>";
      card.innerHTML = html;
      card.addEventListener("click", function () { startChapterSession(ch); });
      grid.appendChild(card);
    });

    var weak = globalWeakNotions().filter(function (r) { return r.rate < 1; }).slice(0, 6);
    var panel = $("weak-panel");
    if (weak.length === 0) { panel.classList.add("hidden"); }
    else { panel.classList.remove("hidden"); renderNotionList($("weak-list"), weak); }

    $("btn-revision").disabled = !hasHistory();
  }

  function renderNotionList(container, rows) {
    container.innerHTML = "";
    rows.forEach(function (r) {
      var div = document.createElement("div");
      div.className = "notion-row";
      var pct = Math.round(r.rate * 100);
      var cls = rateClass(r.rate);
      div.innerHTML =
        '<span class="notion-name">' + r.notion +
        '<span class="notion-sub">' + r.ok + "/" + r.total + " bonnes réponses</span></span>" +
        '<span class="progress-track"><span class="progress-fill ' + cls + '" style="width:' + pct + '%"></span></span>' +
        '<span class="notion-pct ' + cls + '">' + pct + "%</span>";
      container.appendChild(div);
    });
  }

  // ---------- construction des sessions ----------
  function pickChapterQuestions(ch) {
    var pool = chapterPool(ch);
    var unseen = shuffle(pool.filter(function (q) { return qAttempts(q.id) === 0; }));
    var seen = shuffle(pool.filter(function (q) { return qAttempts(q.id) > 0; }))
      .sort(function (a, b) { return qRate(a.id) - qRate(b.id); });
    return shuffle(unseen.concat(seen).slice(0, Math.min(SESSION_SIZE, pool.length)));
  }

  function pickRevisionQuestions() {
    var candidates = allQuestions().filter(function (q) { return qAttempts(q.id) > 0; })
      .sort(function (a, b) { return qRate(a.id) - qRate(b.id) || qAttempts(b.id) - qAttempts(a.id); });
    var weak = candidates.filter(function (q) { return qRate(q.id) < 1; });
    var picked = weak.slice(0, REVISION_SIZE);
    if (picked.length < REVISION_SIZE) {
      var unseen = shuffle(allQuestions().filter(function (q) { return qAttempts(q.id) === 0; }));
      picked = picked.concat(unseen.slice(0, REVISION_SIZE - picked.length));
    }
    return shuffle(picked);
  }

  // Examen : sélection équilibrée entre chapitres (au niveau actif).
  function pickExamQuestions() {
    var pool = allQuestions();
    var total = pool.length;
    var size = Math.min(EXAM_SIZE, total);
    var picked = [];
    QUIZ_DATA.chapters.forEach(function (ch) {
      var chq = chapterPool(ch);
      if (chq.length === 0) return;
      var n = Math.max(1, Math.round(size * chq.length / total));
      picked = picked.concat(shuffle(chq).slice(0, n));
    });
    picked = shuffle(picked);
    if (picked.length > size) picked = picked.slice(0, size);
    if (picked.length < size) {
      var rest = shuffle(pool.filter(function (q) { return picked.indexOf(q) === -1; }));
      picked = picked.concat(rest.slice(0, size - picked.length));
    }
    return picked;
  }

  var LEVEL_TAG = { base: "", difficile: " 🔥" };

  function startChapterSession(ch) {
    if (chapterPool(ch).length === 0) return;
    startSession({ kind: "chapter", chapterId: ch.id, chapter: ch, title: ch.emoji + " " + ch.court + LEVEL_TAG[currentLevel], questions: pickChapterQuestions(ch) });
  }
  function startRevisionSession() {
    var qs = pickRevisionQuestions();
    if (qs.length === 0) return;
    startSession({ kind: "revision", title: "🎯 Révision ciblée" + LEVEL_TAG[currentLevel], questions: qs });
  }
  function startMixteSession() {
    startSession({ kind: "mixte", title: "🔀 Quiz mixte" + LEVEL_TAG[currentLevel], questions: shuffle(allQuestions()).slice(0, MIXTE_SIZE) });
  }
  function startExamSession() {
    var qs = pickExamQuestions();
    if (qs.length === 0) return;
    var label = currentLevel === "difficile" ? "📝 Examen blanc — version difficile 🔥" : "📝 Examen blanc";
    var ok = window.confirm(
      label + "\n\n" +
      "• " + qs.length + " questions, tous les chapitres\n" +
      "• " + Math.round(qs.length * EXAM_SEC_PER_Q / 60) + " minutes chronométrées\n" +
      "• Aucune correction pendant l'épreuve\n" +
      "• Correction détaillée à la fin\n\n" +
      "Prêt·e à commencer ?"
    );
    if (!ok) return;
    startSession({ kind: "exam", exam: true, title: label, questions: qs, durationSec: qs.length * EXAM_SEC_PER_Q });
  }

  function startSession(cfg) {
    clearTimer();
    session = {
      kind: cfg.kind, exam: !!cfg.exam, level: currentLevel, chapterId: cfg.chapterId || null, chapter: cfg.chapter || null,
      title: cfg.title, questions: cfg.questions, idx: 0, correct: 0, streak: 0, bestStreak: 0,
      results: [], current: null, pending: null,
      durationSec: cfg.durationSec || 0, remaining: cfg.durationSec || 0, timerId: null, startTime: Date.now()
    };
    // configuration de l'en-tête selon le mode
    $("chip-score").classList.toggle("hidden", session.exam);
    $("chip-streak").classList.toggle("hidden", session.exam);
    $("chip-timer").classList.toggle("hidden", !session.exam);
    show("view-quiz");
    if (session.exam) startTimer();
    renderQuestion();
  }

  // ---------- minuteur (examen) ----------
  function startTimer() { session.remaining = session.durationSec; renderTimer(); session.timerId = setInterval(tick, 1000); }
  function tick() {
    session.remaining--;
    renderTimer();
    if (session.remaining <= 0) { clearTimer(); timeUp(); }
  }
  function renderTimer() {
    var m = Math.floor(Math.max(0, session.remaining) / 60), s = Math.max(0, session.remaining) % 60;
    var el = $("chip-timer");
    el.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s;
    el.classList.toggle("urgent", session.remaining <= 60);
  }
  function clearTimer() { if (session && session.timerId) { clearInterval(session.timerId); session.timerId = null; } }
  function timeUp() {
    // valide la question courante (réponse en attente ou « non répondu »)
    recordResult(session.current, session.pending);
    // marque les questions restantes comme non répondues
    for (var i = session.idx + 1; i < session.questions.length; i++) {
      session.results.push({ q: session.questions[i], chosen: null, ok: false, skipped: true });
    }
    endSession();
  }

  // ---------- déroulement ----------
  function renderQuestion() {
    var q = session.questions[session.idx];
    session.current = q;
    session.pending = null;

    $("quiz-title").textContent = session.title;
    $("quiz-counter").textContent = (session.idx + 1) + " / " + session.questions.length;
    $("quiz-progress").style.width = (session.idx / session.questions.length * 100) + "%";
    updateChips();

    $("notion-tag").textContent = q.notion;
    var tl = typeLabel(q.type);
    var tt = $("type-tag");
    if (tl) { tt.textContent = tl.txt; tt.className = "type-tag " + tl.cls; }
    else { tt.classList.add("hidden"); }
    if (tl) tt.classList.remove("hidden");

    $("question-text").textContent = q.question;
    $("feedback").classList.add("hidden");
    $("btn-next").classList.add("hidden");

    var order = q.type === "vf" ? q.options.map(function (_, i) { return i; })
                                : shuffle(q.options.map(function (_, i) { return i; }));
    var box = $("options");
    box.innerHTML = "";
    order.forEach(function (origIdx, pos) {
      var btn = document.createElement("button");
      btn.className = "option-btn";
      btn.dataset.idx = origIdx;
      btn.setAttribute("data-key", KEYS[pos] || "");
      btn.textContent = q.options[origIdx];
      btn.addEventListener("click", function () { onOption(q, origIdx, btn, box); });
      box.appendChild(btn);
    });

    // relance l'animation d'apparition
    var card = $("question-card");
    card.style.animation = "none"; void card.offsetWidth; card.style.animation = "";
  }

  function updateChips() {
    $("chip-score").textContent = "✅ " + session.correct;
    $("chip-streak").textContent = "🔥 " + session.streak;
    $("chip-streak").classList.toggle("hot", !session.exam && session.streak >= 3);
  }

  function onOption(q, idx, btn, box) {
    if (session.exam) {
      // examen : on sélectionne, sans correction
      box.querySelectorAll(".option-btn").forEach(function (b) { b.classList.remove("selected"); });
      btn.classList.add("selected");
      session.pending = idx;
      showNext();
    } else {
      commitAnswer(q, idx, btn, box);
    }
  }

  // Enregistre un résultat (et la stat persistée). chosenIdx null => non répondu.
  function recordResult(q, chosenIdx) {
    var skipped = (chosenIdx === null || chosenIdx === undefined);
    var ok = !skipped && chosenIdx === q.reponse;
    session.results.push({ q: q, chosen: skipped ? null : chosenIdx, ok: ok, skipped: skipped });
    if (ok) { session.correct++; session.streak++; if (session.streak > session.bestStreak) session.bestStreak = session.streak; }
    else { session.streak = 0; }
    if (!skipped) {
      if (!stats.q[q.id]) stats.q[q.id] = { ok: 0, ko: 0 };
      if (ok) stats.q[q.id].ok++; else stats.q[q.id].ko++;
      saveStats();
    }
  }

  function commitAnswer(q, chosenIdx, chosenBtn, box) {
    box.querySelectorAll(".option-btn").forEach(function (b) {
      b.disabled = true;
      if (parseInt(b.dataset.idx, 10) === q.reponse) b.classList.add("correct");
      else if (b !== chosenBtn) b.classList.add("dimmed");
    });
    var ok = chosenIdx === q.reponse;
    if (!ok) chosenBtn.classList.add("wrong");
    recordResult(q, chosenIdx);
    updateChips();
    $("quiz-progress").style.width = ((session.idx + 1) / session.questions.length * 100) + "%";

    var fb = $("feedback");
    fb.classList.remove("hidden", "ok", "ko");
    fb.classList.add(ok ? "ok" : "ko");
    var msgs = ok ? MSG_OK : MSG_KO;
    var msg = msgs[Math.floor(Math.random() * msgs.length)];
    if (ok && session.streak >= 3) msg += "  (série de " + session.streak + " ! 🔥)";
    $("feedback-msg").textContent = msg;
    $("feedback-expl").textContent = q.explication;
    showNext();
  }

  function showNext() {
    var next = $("btn-next");
    var last = session.idx + 1 >= session.questions.length;
    if (session.exam) next.textContent = last ? "Terminer l'examen 🏁" : "Question suivante →";
    else next.textContent = last ? "Voir mes résultats 🏁" : "Question suivante →";
    next.classList.remove("hidden");
    next.focus();
  }

  function onNext() {
    if (session.exam) recordResult(session.current, session.pending); // valide la sélection
    session.idx++;
    if (session.idx < session.questions.length) renderQuestion();
    else { clearTimer(); endSession(); }
  }

  // ---------- résultats ----------
  function chapterAggregate(results) {
    var map = {};
    results.forEach(function (r) {
      var ch = chapterOf(r.q.id);
      if (!map[ch.id]) map[ch.id] = { ch: ch, ok: 0, total: 0 };
      map[ch.id].total++;
      if (r.ok) map[ch.id].ok++;
    });
    return Object.keys(map).map(function (k) {
      var m = map[k];
      return { notion: m.ch.emoji + " " + m.ch.court, ok: m.ok, total: m.total, rate: m.total ? m.ok / m.total : 0 };
    }).sort(function (a, b) { return a.rate - b.rate; });
  }

  function renderReview(container, results) {
    container.innerHTML = "";
    results.forEach(function (r, i) {
      var q = r.q, ch = chapterOf(q.id);
      var card = document.createElement("div");
      card.className = "review-card " + (r.skipped ? "skipped" : (r.ok ? "ok" : "ko"));
      var mark = r.skipped ? "—" : (r.ok ? "✓" : "✗");
      var html =
        '<div class="review-head">' +
          '<span class="review-num">' + (i + 1) + "</span>" +
          '<span class="review-meta">' + ch.emoji + " " + ch.court + " · " + q.notion + "</span>" +
          '<span class="review-mark">' + mark + "</span>" +
        "</div>" +
        '<p class="review-q">' + q.question + "</p>";
      if (r.ok) {
        html += '<p class="review-line ok">✓ ' + q.options[q.reponse] + "</p>";
      } else {
        html += '<p class="review-line ko">' + (r.skipped ? "Non répondu" : "✗ Ta réponse : " + q.options[r.chosen]) + "</p>";
        html += '<p class="review-line ok">✓ Bonne réponse : ' + q.options[q.reponse] + "</p>";
      }
      html += '<p class="review-expl">' + q.explication + "</p>";
      card.innerHTML = html;
      container.appendChild(card);
    });
  }

  function endSession() {
    clearTimer();
    var total = session.questions.length;
    var pct = Math.round((session.correct / total) * 100);

    // sauvegarde meilleur score (par chapitre ET par niveau)
    if (session.kind === "chapter" && session.chapterId) {
      var key = session.chapterId + "-" + session.level;
      var c = stats.chap[key] || { best: 0, plays: 0 };
      c.plays++; if (pct > c.best) c.best = pct; stats.chap[key] = c; saveStats();
    } else if (session.exam) {
      if (!stats.exam || typeof stats.exam.best === "number") stats.exam = {};
      var e = stats.exam[session.level] || { best: 0, plays: 0 };
      e.plays++; if (pct > e.best) e.best = pct; stats.exam[session.level] = e; saveStats();
    }

    // verdict (examen) ou titre standard
    var verdict = $("exam-verdict");
    if (session.exam) {
      var passed = pct >= PASS_PCT;
      verdict.className = "verdict " + (passed ? "pass" : "fail");
      verdict.textContent = passed ? "✓ Réussi (seuil " + PASS_PCT + "%)" : "À retravailler (seuil " + PASS_PCT + "%)";
      verdict.classList.remove("hidden");
      $("results-title").textContent = passed ? "Examen réussi 🎓" : "Examen blanc terminé";
    } else {
      verdict.classList.add("hidden");
      $("results-title").textContent = pct >= 90 ? "Excellent ! 🏆" : pct >= 75 ? "Très bien ! 🎉" : pct >= 50 ? "Pas mal ! 💪" : "Courage, on révise ! 📚";
    }

    $("results-percent").textContent = pct + "%";
    $("results-detail").textContent = session.correct + "/" + total + " bonnes réponses";

    // temps (examen)
    var timeEl = $("results-time");
    if (session.exam) {
      var used = Math.round((Date.now() - session.startTime) / 1000);
      var skipped = session.results.filter(function (r) { return r.skipped; }).length;
      timeEl.innerHTML = "Temps utilisé : <strong>" + Math.floor(used / 60) + " min " + (used % 60) + " s</strong>" +
        (skipped ? " · " + skipped + " question" + (skipped > 1 ? "s" : "") + " non répondue" + (skipped > 1 ? "s" : "") : "");
      timeEl.classList.remove("hidden");
    } else { timeEl.classList.add("hidden"); }

    $("results-streak").textContent = (!session.exam && session.bestStreak >= 3)
      ? "Meilleure série : " + session.bestStreak + " bonnes réponses d'affilée 🔥" : "";

    // anneau de score
    var ring = $("ring-fg"), CIRC = 326.7;
    ring.style.stroke = pct >= 75 ? "var(--green)" : (pct >= 50 ? "var(--amber)" : "var(--red)");
    ring.style.strokeDashoffset = CIRC;
    requestAnimationFrame(function () { requestAnimationFrame(function () { ring.style.strokeDashoffset = CIRC * (1 - pct / 100); }); });

    // par chapitre (examen / mixte)
    var chapBlock = $("results-chapters-block");
    if (session.exam || session.kind === "mixte") {
      renderNotionList($("results-chapters"), chapterAggregate(session.results));
      chapBlock.classList.remove("hidden");
    } else { chapBlock.classList.add("hidden"); }

    // par notion (session)
    var sessionRows = notionAggregate(session.questions, function (q) {
      var r = session.results.filter(function (x) { return x.q.id === q.id; });
      if (r.length === 0) return null;
      var ok = r.filter(function (x) { return x.ok; }).length;
      return { ok: ok, ko: r.length - ok };
    });
    renderNotionList($("results-notions"), sessionRows);

    // à réviser en priorité
    var weakRows = sessionRows.filter(function (r) { return r.rate < 0.75; });
    var callout = $("results-weak");
    if (weakRows.length === 0) { callout.classList.add("hidden"); }
    else {
      callout.classList.remove("hidden");
      var ul = $("results-weak-list"); ul.innerHTML = "";
      weakRows.forEach(function (r) {
        var li = document.createElement("li");
        li.textContent = r.notion + " — " + Math.round(r.rate * 100) + "% de réussite";
        ul.appendChild(li);
      });
    }

    // correction détaillée (examen)
    var reviewBlock = $("results-review-block");
    if (session.exam) { renderReview($("results-review"), session.results); reviewBlock.classList.remove("hidden"); }
    else { reviewBlock.classList.add("hidden"); }

    $("btn-results-revision").classList.toggle("hidden", !hasHistory());

    show("view-results");
    var celebrate = session.exam ? pct >= PASS_PCT : pct >= 80;
    if (celebrate) confetti();
  }

  function replaySession() {
    if (session.kind === "chapter" && session.chapter) startChapterSession(session.chapter);
    else if (session.kind === "revision") startRevisionSession();
    else if (session.kind === "exam") startExamSession();
    else startMixteSession();
  }

  // ---------- confettis ----------
  function confetti() {
    var colors = ["#4f46e5", "#0c9b6a", "#c9820a", "#d83a4a", "#2a9d8f", "#c44d9b"];
    for (var i = 0; i < 90; i++) {
      var p = document.createElement("div");
      p.className = "confetti";
      var size = 6 + Math.random() * 8;
      p.style.width = size + "px";
      p.style.height = size * (0.6 + Math.random() * 0.8) + "px";
      p.style.left = Math.random() * 100 + "vw";
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = 2.2 + Math.random() * 2 + "s";
      p.style.animationDelay = Math.random() * 0.8 + "s";
      document.body.appendChild(p);
      setTimeout(function (x) { x.remove(); }, 5200, p);
    }
  }

  // ---------- événements ----------
  $("btn-exam").addEventListener("click", startExamSession);
  $("btn-revision").addEventListener("click", startRevisionSession);
  $("btn-mixte").addEventListener("click", startMixteSession);
  $("btn-next").addEventListener("click", onNext);

  // sélecteur de niveau (entraînement / sérieux)
  document.querySelectorAll(".level-opt").forEach(function (b) {
    b.addEventListener("click", function () {
      if (currentLevel === b.dataset.level) return;
      currentLevel = b.dataset.level;
      renderHome();
    });
  });

  function quitToHome() { clearTimer(); session = null; renderHome(); show("view-home"); }
  $("btn-quit").addEventListener("click", function () {
    var unanswered = session && session.results.length < session.questions.length;
    if (unanswered && !window.confirm("Quitter ? Ta progression de cette session ne sera pas enregistrée comme score.")) return;
    quitToHome();
  });
  $("btn-replay").addEventListener("click", replaySession);
  $("btn-results-revision").addEventListener("click", startRevisionSession);
  $("btn-home").addEventListener("click", quitToHome);
  $("btn-reset").addEventListener("click", function () {
    if (window.confirm("Effacer toutes tes statistiques (scores, notions, progression) ?")) {
      stats = { q: {}, chap: {}, exam: { best: 0, plays: 0 } }; saveStats(); renderHome();
    }
  });

  // raccourcis clavier : A-D ou 1-4 pour répondre/sélectionner
  document.addEventListener("keydown", function (e) {
    if ($("view-quiz").classList.contains("hidden")) return;
    var all = $("options").querySelectorAll(".option-btn");
    var i = -1;
    if (e.key >= "1" && e.key <= "4") i = parseInt(e.key, 10) - 1;
    else { var k = e.key.toUpperCase(); if (KEYS.indexOf(k) >= 0) i = KEYS.indexOf(k); }
    if (i >= 0 && i < all.length && !all[i].disabled) all[i].click();
  });

  // ---------- démarrage ----------
  renderHome();
})();
