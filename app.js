/* ===================================================================
   PsyQuiz — logique de l'application
   Modes : chapter · revision · mixte · exam · flashcards (mémo) · jeu (Défi Éclair)
   Formats : qcm · vf · cas · multi (choix multiples) · saisie (réponse à écrire)
   Niveaux : base (entraînement) · difficile (sérieux)
   =================================================================== */
(function () {
  "use strict";

  var STORE_KEY = "psyquiz-stats-v1";
  var SESSION_SIZE = 10;
  var REVISION_SIZE = 12;
  var MIXTE_SIZE = 20;
  var EXAM_SIZE = 50;        // examen blanc (réel : 60-80 QCM ; ajuster si besoin)
  var EXAM_SEC_PER_Q = 60;
  var PASS_PCT = 60;
  var FLASH_SIZE = 15;
  var GAME_QMS = 9000;       // ms par question dans le jeu

  var MSG_OK = ["Bravo ! 🎉", "Exact ! ✨", "Bien vu ! 👏", "Parfait ! 💪", "Tu maîtrises ! 🧠", "Excellent ! 🌟"];
  var MSG_KO = ["Pas tout à fait… 🤏", "Raté ! 😅", "Presque ! 👀", "À revoir 📖", "Oups ! 🙈"];
  var KEYS = ["A", "B", "C", "D"];

  // Niveau actif
  var currentLevel = "base";
  function levelOf(q) { return q.niveau === "difficile" ? "difficile" : "base"; }
  function inLevel(q) { return levelOf(q) === currentLevel; }
  function chapterPool(ch) { return ch.questions.filter(inLevel); }

  var stats = loadStats();
  var session = null, flash = null, game = null;
  var qToChapter = buildChapterIndex();

  function $(id) { return document.getElementById(id); }

  // ---------- stockage ----------
  function loadStats() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        if (p && typeof p === "object") {
          return { q: p.q || {}, chap: p.chap || {}, exam: p.exam || {}, game: p.game || { best: 0, plays: 0 } };
        }
      }
    } catch (e) { /* indisponible */ }
    return { q: {}, chap: {}, exam: {}, game: { best: 0, plays: 0 } };
  }
  function saveStats() { try { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); } catch (e) { /* */ } }

  // ---------- utilitaires ----------
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function buildChapterIndex() { var m = {}; QUIZ_DATA.chapters.forEach(function (ch) { ch.questions.forEach(function (q) { m[q.id] = ch; }); }); return m; }
  function chapterOf(qid) { return qToChapter[qid]; }
  function allQuestions() { var o = []; QUIZ_DATA.chapters.forEach(function (ch) { ch.questions.forEach(function (q) { if (inLevel(q)) o.push(q); }); }); return o; }

  function qStat(qid) { return stats.q[qid] || { ok: 0, ko: 0 }; }
  function qAttempts(qid) { var s = qStat(qid); return s.ok + s.ko; }
  function qRate(qid) { var s = qStat(qid), n = s.ok + s.ko; return n === 0 ? null : s.ok / n; }
  function rateClass(r) { return r >= 0.75 ? "good" : (r >= 0.5 ? "mid" : "bad"); }
  function hasHistory() { return allQuestions().some(function (q) { return qAttempts(q.id) > 0; }); }
  function isSingle(q) { return q.type === "qcm" || q.type === "vf" || q.type === "cas"; }

  function typeLabel(t) {
    if (t === "cas") return { txt: "🩺 Cas clinique", cls: "cas" };
    if (t === "vf") return { txt: "Vrai / Faux", cls: "vf" };
    if (t === "multi") return { txt: "☑️ Plusieurs réponses", cls: "multi" };
    if (t === "saisie") return { txt: "⌨️ Réponse à écrire", cls: "saisie" };
    return null;
  }

  // ---------- correction (tous formats) ----------
  function saisieNorm(s) {
    s = (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    s = s.replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
    s = s.replace(/^(le |la |les |l |un |une |des |du |de |d )/, "");
    return s;
  }
  function gradeAnswer(q, answer) {
    if (answer === null || answer === undefined) return false;
    if (q.type === "multi") {
      if (!Array.isArray(answer)) return false;
      var a = answer.slice().sort(function (x, y) { return x - y; });
      var b = q.reponses.slice().sort(function (x, y) { return x - y; });
      return a.length === b.length && a.every(function (v, i) { return v === b[i]; });
    }
    if (q.type === "saisie") {
      var n = saisieNorm(String(answer));
      if (!n) return false;
      var acc = (q.accepts || []).concat([q.reponse]).map(saisieNorm);
      return acc.indexOf(n) >= 0;
    }
    return answer === q.reponse;
  }
  function answerText(q, answer) {
    if (answer === null || answer === undefined) return "(non répondu)";
    if (q.type === "multi") return answer.length ? answer.map(function (i) { return q.options[i]; }).join(" · ") : "(aucune sélection)";
    if (q.type === "saisie") return String(answer).trim() || "(vide)";
    return q.options[answer];
  }
  function correctText(q) {
    if (q.type === "multi") return q.reponses.map(function (i) { return q.options[i]; }).join(" · ");
    if (q.type === "saisie") return q.reponse;
    return q.options[q.reponse];
  }

  // ---------- agrégats ----------
  function notionAggregate(questions, getResult) {
    var map = {};
    questions.forEach(function (q) {
      var res = getResult(q); if (!res) return;
      if (!map[q.notion]) map[q.notion] = { notion: q.notion, ok: 0, total: 0 };
      map[q.notion].ok += res.ok; map[q.notion].total += res.ok + res.ko;
    });
    var rows = Object.keys(map).map(function (k) { var r = map[k]; r.rate = r.total === 0 ? 0 : r.ok / r.total; return r; });
    rows.sort(function (a, b) { return a.rate - b.rate || b.total - a.total; });
    return rows;
  }
  function globalWeakNotions() { return notionAggregate(allQuestions(), function (q) { var s = qStat(q.id); return (s.ok + s.ko) > 0 ? s : null; }); }

  // ---------- navigation ----------
  function show(viewId) {
    ["view-home", "view-quiz", "view-flash", "view-game", "view-results"].forEach(function (id) {
      $(id).classList.toggle("hidden", id !== viewId);
    });
    window.scrollTo(0, 0);
  }

  // ---------- accueil ----------
  function renderHome() {
    document.querySelectorAll(".level-opt").forEach(function (b) { b.classList.toggle("active", b.dataset.level === currentLevel); });
    var hard = currentLevel === "difficile";
    $("level-hint").textContent = hard
      ? "🔥 Mode sérieux : questions pièges niveau examen (chiffres exacts, « lequel est FAUX », différentiels fins)."
      : "🎓 Mode entraînement : apprendre et réviser en douceur, avec correction immédiate.";
    var examPool = allQuestions().length;
    $("exam-desc").textContent = Math.min(EXAM_SIZE, examPool) + " questions chronométrées, tous les chapitres — " + (hard ? "version difficile" : "comme le jour J");

    var grid = $("chapter-grid"); grid.innerHTML = "";
    QUIZ_DATA.chapters.forEach(function (ch) {
      var pool = chapterPool(ch), total = pool.length;
      var card = document.createElement("button");
      card.className = "chapter-card"; card.style.setProperty("--accent", ch.accent);
      if (total === 0) {
        card.classList.add("empty"); card.disabled = true;
        card.innerHTML = '<div class="chapter-top"><span class="chapter-emoji">' + ch.emoji + '</span><span class="chapter-name">' + ch.titre + '</span></div><span class="chapter-meta">Aucune question difficile pour l’instant</span>';
        grid.appendChild(card); return;
      }
      var seen = pool.filter(function (q) { return qAttempts(q.id) > 0; }).length;
      var ok = 0, n = 0; pool.forEach(function (q) { var s = qStat(q.id); ok += s.ok; n += s.ok + s.ko; });
      var mastery = n === 0 ? null : ok / n;
      var chapStat = stats.chap[ch.id + "-" + currentLevel];
      var html = '<div class="chapter-top"><span class="chapter-emoji">' + ch.emoji + '</span><span class="chapter-name">' + ch.titre + '</span></div>' +
        '<span class="chapter-meta">' + total + " questions · session de " + Math.min(SESSION_SIZE, total) + "</span>" +
        '<div class="chapter-stats"><span class="stat-row"><span class="stat-label">Progression</span>' +
        '<span class="progress-track"><span class="progress-fill" style="width:' + Math.round((seen / total) * 100) + '%"></span></span>' +
        '<span class="stat-val">' + seen + "/" + total + "</span></span>";
      if (mastery !== null) html += '<span class="stat-row"><span class="stat-label">Maîtrise</span><span class="progress-track"><span class="progress-fill ' + rateClass(mastery) + '" style="width:' + Math.round(mastery * 100) + '%"></span></span><span class="stat-val">' + Math.round(mastery * 100) + "%</span></span>";
      html += "</div>";
      if (chapStat && chapStat.plays > 0) html += '<span class="badge">🏆 Meilleur score : ' + chapStat.best + "%</span>";
      card.innerHTML = html;
      card.addEventListener("click", function () { startChapterSession(ch); });
      grid.appendChild(card);
    });

    var weak = globalWeakNotions().filter(function (r) { return r.rate < 1; }).slice(0, 6);
    var panel = $("weak-panel");
    if (weak.length === 0) panel.classList.add("hidden");
    else { panel.classList.remove("hidden"); renderNotionList($("weak-list"), weak); }
    $("btn-revision").disabled = !hasHistory();
  }

  function renderNotionList(container, rows) {
    container.innerHTML = "";
    rows.forEach(function (r) {
      var div = document.createElement("div"); div.className = "notion-row";
      var pct = Math.round(r.rate * 100), cls = rateClass(r.rate);
      div.innerHTML = '<span class="notion-name">' + r.notion + '<span class="notion-sub">' + r.ok + "/" + r.total + " bonnes réponses</span></span>" +
        '<span class="progress-track"><span class="progress-fill ' + cls + '" style="width:' + pct + '%"></span></span>' +
        '<span class="notion-pct ' + cls + '">' + pct + "%</span>";
      container.appendChild(div);
    });
  }

  // ---------- sélection des questions ----------
  function pickChapterQuestions(ch) {
    var pool = chapterPool(ch);
    var unseen = shuffle(pool.filter(function (q) { return qAttempts(q.id) === 0; }));
    var seen = shuffle(pool.filter(function (q) { return qAttempts(q.id) > 0; })).sort(function (a, b) { return qRate(a.id) - qRate(b.id); });
    return shuffle(unseen.concat(seen).slice(0, Math.min(SESSION_SIZE, pool.length)));
  }
  function pickRevisionQuestions() {
    var cand = allQuestions().filter(function (q) { return qAttempts(q.id) > 0; }).sort(function (a, b) { return qRate(a.id) - qRate(b.id) || qAttempts(b.id) - qAttempts(a.id); });
    var weak = cand.filter(function (q) { return qRate(q.id) < 1; });
    var picked = weak.slice(0, REVISION_SIZE);
    if (picked.length < REVISION_SIZE) { var unseen = shuffle(allQuestions().filter(function (q) { return qAttempts(q.id) === 0; })); picked = picked.concat(unseen.slice(0, REVISION_SIZE - picked.length)); }
    return shuffle(picked);
  }
  function pickExamQuestions() {
    var pool = allQuestions(), total = pool.length, size = Math.min(EXAM_SIZE, total), picked = [];
    QUIZ_DATA.chapters.forEach(function (ch) {
      var chq = chapterPool(ch); if (chq.length === 0) return;
      var n = Math.max(1, Math.round(size * chq.length / total));
      picked = picked.concat(shuffle(chq).slice(0, n));
    });
    picked = shuffle(picked);
    if (picked.length > size) picked = picked.slice(0, size);
    if (picked.length < size) { var rest = shuffle(pool.filter(function (q) { return picked.indexOf(q) === -1; })); picked = picked.concat(rest.slice(0, size - picked.length)); }
    return picked;
  }

  var LEVEL_TAG = { base: "", difficile: " 🔥" };
  function startChapterSession(ch) { if (chapterPool(ch).length === 0) return; startSession({ kind: "chapter", chapterId: ch.id, chapter: ch, title: ch.emoji + " " + ch.court + LEVEL_TAG[currentLevel], questions: pickChapterQuestions(ch) }); }
  function startRevisionSession() { var qs = pickRevisionQuestions(); if (!qs.length) return; startSession({ kind: "revision", title: "🎯 Révision ciblée" + LEVEL_TAG[currentLevel], questions: qs }); }
  function startMixteSession() { startSession({ kind: "mixte", title: "🔀 Quiz mixte" + LEVEL_TAG[currentLevel], questions: shuffle(allQuestions()).slice(0, MIXTE_SIZE) }); }
  function startExamSession() {
    var qs = pickExamQuestions(); if (!qs.length) return;
    var label = currentLevel === "difficile" ? "📝 Examen blanc — version difficile 🔥" : "📝 Examen blanc";
    if (!window.confirm(label + "\n\n• " + qs.length + " questions, tous les chapitres\n• " + Math.round(qs.length * EXAM_SEC_PER_Q / 60) + " minutes chronométrées\n• Aucune correction pendant l'épreuve\n• Correction détaillée à la fin\n\nPrêt·e à commencer ?")) return;
    startSession({ kind: "exam", exam: true, title: label, questions: qs, durationSec: qs.length * EXAM_SEC_PER_Q });
  }

  function startSession(cfg) {
    clearTimer();
    session = {
      kind: cfg.kind, exam: !!cfg.exam, level: currentLevel, chapterId: cfg.chapterId || null, chapter: cfg.chapter || null,
      title: cfg.title, questions: cfg.questions, idx: 0, correct: 0, streak: 0, bestStreak: 0,
      results: [], current: null, pending: null, validated: false,
      durationSec: cfg.durationSec || 0, remaining: cfg.durationSec || 0, timerId: null, startTime: Date.now()
    };
    $("chip-score").classList.toggle("hidden", session.exam);
    $("chip-streak").classList.toggle("hidden", session.exam);
    $("chip-timer").classList.toggle("hidden", !session.exam);
    show("view-quiz");
    if (session.exam) startTimer();
    renderQuestion();
  }

  // ---------- minuteur ----------
  function startTimer() { session.remaining = session.durationSec; renderTimer(); session.timerId = setInterval(tick, 1000); }
  function tick() { session.remaining--; renderTimer(); if (session.remaining <= 0) { clearTimer(); timeUp(); } }
  function renderTimer() { var m = Math.floor(Math.max(0, session.remaining) / 60), s = Math.max(0, session.remaining) % 60; var el = $("chip-timer"); el.textContent = "⏱ " + m + ":" + (s < 10 ? "0" : "") + s; el.classList.toggle("urgent", session.remaining <= 60); }
  function clearTimer() { if (session && session.timerId) { clearInterval(session.timerId); session.timerId = null; } }
  function timeUp() {
    var cur = session.current;
    var ans = cur.type === "saisie" ? $("saisie-input").value : session.pending;
    record(cur, ans);
    for (var i = session.idx + 1; i < session.questions.length; i++) {
      var q = session.questions[i];
      session.results.push({ q: q, ok: false, skipped: true, chosenText: "(non répondu)", correctText: correctText(q) });
    }
    endSession();
  }

  // ---------- déroulement ----------
  function renderQuestion() {
    var q = session.questions[session.idx];
    session.current = q; session.validated = false;
    session.pending = isSingle(q) ? null : (q.type === "multi" ? [] : "");

    $("quiz-title").textContent = session.title;
    $("quiz-counter").textContent = (session.idx + 1) + " / " + session.questions.length;
    $("quiz-progress").style.width = (session.idx / session.questions.length * 100) + "%";
    updateChips();

    $("notion-tag").textContent = q.notion;
    var tl = typeLabel(q.type), tt = $("type-tag");
    if (tl) { tt.textContent = tl.txt; tt.className = "type-tag " + tl.cls; tt.classList.remove("hidden"); } else tt.classList.add("hidden");

    $("question-text").textContent = q.question;
    $("feedback").classList.add("hidden");
    $("btn-next").classList.add("hidden");
    $("multi-hint").classList.toggle("hidden", q.type !== "multi");

    var optBox = $("options"), saisieWrap = $("saisie-wrap"), input = $("saisie-input");
    if (q.type === "saisie") {
      optBox.classList.add("hidden"); optBox.innerHTML = "";
      saisieWrap.classList.remove("hidden");
      input.value = ""; input.disabled = false; input.className = "saisie-input";
      showPrimary("Valider ✓");
      setTimeout(function () { try { input.focus(); } catch (e) {} }, 60);
    } else {
      saisieWrap.classList.add("hidden"); optBox.classList.remove("hidden");
      buildOptions(q, optBox);
      if (q.type === "multi") showPrimary("Valider ✓");
    }
    var card = $("question-card"); card.style.animation = "none"; void card.offsetWidth; card.style.animation = "";
  }

  function buildOptions(q, box) {
    box.innerHTML = "";
    var order = q.type === "vf" ? q.options.map(function (_, i) { return i; }) : shuffle(q.options.map(function (_, i) { return i; }));
    order.forEach(function (origIdx, pos) {
      var btn = document.createElement("button");
      btn.className = "option-btn" + (q.type === "multi" ? " multi" : "");
      btn.dataset.idx = origIdx; btn.setAttribute("data-key", KEYS[pos] || "");
      btn.textContent = q.options[origIdx];
      btn.addEventListener("click", function () { onOption(q, origIdx, btn, box); });
      box.appendChild(btn);
    });
  }
  function showPrimary(label) { var b = $("btn-next"); b.textContent = label; b.classList.remove("hidden"); }
  function nextLabel() {
    var last = session.idx + 1 >= session.questions.length;
    if (session.exam) return last ? "Terminer l'examen 🏁" : "Question suivante →";
    return last ? "Voir mes résultats 🏁" : "Question suivante →";
  }
  function updateChips() {
    $("chip-score").textContent = "✅ " + session.correct;
    $("chip-streak").textContent = "🔥 " + session.streak;
    $("chip-streak").classList.toggle("hot", !session.exam && session.streak >= 3);
  }

  function onOption(q, idx, btn, box) {
    if (q.type === "multi") {
      btn.classList.toggle("selected");
      var sel = []; box.querySelectorAll(".option-btn.selected").forEach(function (b) { sel.push(parseInt(b.dataset.idx, 10)); });
      session.pending = sel; return;
    }
    if (session.exam) {
      box.querySelectorAll(".option-btn").forEach(function (b) { b.classList.remove("selected"); });
      btn.classList.add("selected"); session.pending = idx; showPrimary(nextLabel());
    } else { commitSingle(q, idx, btn, box); }
  }
  function commitSingle(q, idx, btn, box) {
    box.querySelectorAll(".option-btn").forEach(function (b) { b.disabled = true; if (parseInt(b.dataset.idx, 10) === q.reponse) b.classList.add("correct"); else if (b !== btn) b.classList.add("dimmed"); });
    var ok = idx === q.reponse; if (!ok) btn.classList.add("wrong");
    record(q, idx); updateChips();
    $("quiz-progress").style.width = ((session.idx + 1) / session.questions.length * 100) + "%";
    showFeedback(ok, q); showPrimary(nextLabel());
  }
  function revealMultiSaisie(q, answer, ok) {
    if (q.type === "multi") {
      $("options").querySelectorAll(".option-btn").forEach(function (b) {
        b.disabled = true; var i = parseInt(b.dataset.idx, 10);
        var isCorrect = q.reponses.indexOf(i) >= 0, isSel = b.classList.contains("selected");
        if (isCorrect && isSel) b.classList.add("correct");
        else if (isCorrect && !isSel) b.classList.add("missed");
        else if (!isCorrect && isSel) b.classList.add("wrong");
      });
    } else { var input = $("saisie-input"); input.disabled = true; input.classList.add(ok ? "correct" : "wrong"); }
  }
  function showFeedback(ok, q) {
    var fb = $("feedback"); fb.classList.remove("hidden", "ok", "ko"); fb.classList.add(ok ? "ok" : "ko");
    var msgs = ok ? MSG_OK : MSG_KO, msg = msgs[Math.floor(Math.random() * msgs.length)];
    if (ok && !session.exam && session.streak >= 3) msg += "  (série de " + session.streak + " ! 🔥)";
    $("feedback-msg").textContent = msg; $("feedback-expl").textContent = q.explication;
  }
  function record(q, answer) {
    var ok = gradeAnswer(q, answer);
    session.results.push({ q: q, ok: ok, skipped: false, chosenText: answerText(q, answer), correctText: correctText(q) });
    if (ok) { session.correct++; session.streak++; if (session.streak > session.bestStreak) session.bestStreak = session.streak; } else session.streak = 0;
    if (!stats.q[q.id]) stats.q[q.id] = { ok: 0, ko: 0 };
    if (ok) stats.q[q.id].ok++; else stats.q[q.id].ko++;
    saveStats(); return ok;
  }
  function advance() { session.idx++; if (session.idx < session.questions.length) renderQuestion(); else { clearTimer(); endSession(); } }

  function onPrimary() {
    var q = session.current;
    if (isSingle(q)) { if (session.exam) record(q, session.pending); advance(); return; }
    if (!session.validated) {
      var answer = q.type === "multi" ? session.pending.slice() : $("saisie-input").value;
      if (session.exam) { record(q, answer); advance(); return; }
      var ok = record(q, answer);
      revealMultiSaisie(q, answer, ok); updateChips(); showFeedback(ok, q);
      $("quiz-progress").style.width = ((session.idx + 1) / session.questions.length * 100) + "%";
      session.validated = true; showPrimary(nextLabel());
    } else advance();
  }

  // ---------- résultats ----------
  function chapterAggregate(results) {
    var map = {};
    results.forEach(function (r) { var ch = chapterOf(r.q.id); if (!map[ch.id]) map[ch.id] = { ch: ch, ok: 0, total: 0 }; map[ch.id].total++; if (r.ok) map[ch.id].ok++; });
    return Object.keys(map).map(function (k) { var m = map[k]; return { notion: m.ch.emoji + " " + m.ch.court, ok: m.ok, total: m.total, rate: m.total ? m.ok / m.total : 0 }; }).sort(function (a, b) { return a.rate - b.rate; });
  }
  function renderReview(container, results) {
    container.innerHTML = "";
    results.forEach(function (r, i) {
      var q = r.q, ch = chapterOf(q.id);
      var card = document.createElement("div");
      card.className = "review-card " + (r.skipped ? "skipped" : (r.ok ? "ok" : "ko"));
      var mark = r.skipped ? "—" : (r.ok ? "✓" : "✗");
      var html = '<div class="review-head"><span class="review-num">' + (i + 1) + '</span><span class="review-meta">' + ch.emoji + " " + ch.court + " · " + q.notion + '</span><span class="review-mark">' + mark + "</span></div>" +
        '<p class="review-q">' + q.question + "</p>";
      if (r.ok) html += '<p class="review-line ok">✓ ' + r.correctText + "</p>";
      else { html += '<p class="review-line ko">' + (r.skipped ? "Non répondu" : "✗ Ta réponse : " + r.chosenText) + "</p>"; html += '<p class="review-line ok">✓ Bonne réponse : ' + r.correctText + "</p>"; }
      html += '<p class="review-expl">' + q.explication + "</p>";
      card.innerHTML = html; container.appendChild(card);
    });
  }

  function endSession() {
    clearTimer();
    var total = session.questions.length, pct = Math.round((session.correct / total) * 100);
    if (session.kind === "chapter" && session.chapterId) {
      var key = session.chapterId + "-" + session.level; var c = stats.chap[key] || { best: 0, plays: 0 };
      c.plays++; if (pct > c.best) c.best = pct; stats.chap[key] = c; saveStats();
    } else if (session.exam) {
      if (!stats.exam || typeof stats.exam.best === "number") stats.exam = {};
      var e = stats.exam[session.level] || { best: 0, plays: 0 }; e.plays++; if (pct > e.best) e.best = pct; stats.exam[session.level] = e; saveStats();
    }

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

    var timeEl = $("results-time");
    if (session.exam) {
      var used = Math.round((Date.now() - session.startTime) / 1000);
      var sk = session.results.filter(function (r) { return r.skipped; }).length;
      timeEl.innerHTML = "Temps utilisé : <strong>" + Math.floor(used / 60) + " min " + (used % 60) + " s</strong>" + (sk ? " · " + sk + " non répondue" + (sk > 1 ? "s" : "") : "");
      timeEl.classList.remove("hidden");
    } else timeEl.classList.add("hidden");

    $("results-streak").textContent = (!session.exam && session.bestStreak >= 3) ? "Meilleure série : " + session.bestStreak + " bonnes réponses d'affilée 🔥" : "";

    var ring = $("ring-fg"), CIRC = 326.7;
    ring.style.stroke = pct >= 75 ? "var(--green)" : (pct >= 50 ? "var(--amber)" : "var(--red)");
    ring.style.strokeDashoffset = CIRC;
    requestAnimationFrame(function () { requestAnimationFrame(function () { ring.style.strokeDashoffset = CIRC * (1 - pct / 100); }); });

    var chapBlock = $("results-chapters-block");
    if (session.exam || session.kind === "mixte") { renderNotionList($("results-chapters"), chapterAggregate(session.results)); chapBlock.classList.remove("hidden"); } else chapBlock.classList.add("hidden");

    var sessionRows = notionAggregate(session.questions, function (q) {
      var r = session.results.filter(function (x) { return x.q.id === q.id; }); if (!r.length) return null;
      var ok = r.filter(function (x) { return x.ok; }).length; return { ok: ok, ko: r.length - ok };
    });
    renderNotionList($("results-notions"), sessionRows);

    var weakRows = sessionRows.filter(function (r) { return r.rate < 0.75; });
    var callout = $("results-weak");
    if (!weakRows.length) callout.classList.add("hidden");
    else { callout.classList.remove("hidden"); var ul = $("results-weak-list"); ul.innerHTML = ""; weakRows.forEach(function (r) { var li = document.createElement("li"); li.textContent = r.notion + " — " + Math.round(r.rate * 100) + "% de réussite"; ul.appendChild(li); }); }

    var reviewBlock = $("results-review-block");
    if (session.exam) { renderReview($("results-review"), session.results); reviewBlock.classList.remove("hidden"); } else reviewBlock.classList.add("hidden");

    $("btn-results-revision").classList.toggle("hidden", !hasHistory());
    show("view-results");
    if (session.exam ? pct >= PASS_PCT : pct >= 80) confetti();
  }

  function replaySession() {
    if (session.kind === "chapter" && session.chapter) startChapterSession(session.chapter);
    else if (session.kind === "revision") startRevisionSession();
    else if (session.kind === "exam") startExamSession();
    else startMixteSession();
  }

  // ---------- Flashcards (Mémo) ----------
  function pickFlashQuestions() {
    var pool = allQuestions();
    var unseen = shuffle(pool.filter(function (q) { return qAttempts(q.id) === 0; }));
    var seen = shuffle(pool.filter(function (q) { return qAttempts(q.id) > 0; })).sort(function (a, b) { return qRate(a.id) - qRate(b.id); });
    return unseen.concat(seen).slice(0, Math.min(FLASH_SIZE, pool.length));
  }
  function startFlash() {
    var qs = pickFlashQuestions(); if (!qs.length) return;
    flash = { questions: qs, idx: 0, ok: 0, ko: 0, current: null };
    $("flash-stage").classList.remove("hidden"); $("flash-over").classList.add("hidden");
    show("view-flash"); renderFlash();
  }
  function renderFlash() {
    var q = flash.questions[flash.idx]; flash.current = q;
    $("flash-counter").textContent = (flash.idx + 1) + " / " + flash.questions.length;
    $("flash-progress").style.width = (flash.idx / flash.questions.length * 100) + "%";
    var ch = chapterOf(q.id);
    $("flash-tag").textContent = ch.emoji + " " + ch.court + " · " + q.notion;
    $("flash-front-text").textContent = q.question;
    $("flash-answer").textContent = correctText(q);
    $("flash-expl").textContent = q.explication;
    $("flashcard").classList.remove("flipped");
    $("btn-flip").classList.remove("hidden");
    $("flash-rate").classList.add("hidden");
  }
  function flipFlash() {
    if ($("flashcard").classList.contains("flipped")) return;
    $("flashcard").classList.add("flipped");
    $("btn-flip").classList.add("hidden");
    $("flash-rate").classList.remove("hidden");
  }
  function rateFlash(r) {
    var q = flash.current, ok = r === "ok";
    if (!stats.q[q.id]) stats.q[q.id] = { ok: 0, ko: 0 };
    if (ok) { stats.q[q.id].ok++; flash.ok++; } else { stats.q[q.id].ko++; flash.ko++; }
    saveStats();
    flash.idx++;
    if (flash.idx < flash.questions.length) renderFlash(); else flashEnd();
  }
  function flashEnd() {
    $("flash-stage").classList.add("hidden"); $("flash-over").classList.remove("hidden"); $("flash-progress").style.width = "100%";
    $("flash-over-text").innerHTML = "Tu as marqué <strong>" + flash.ok + "</strong> carte" + (flash.ok > 1 ? "s" : "") + " comme sue" + (flash.ok > 1 ? "s" : "") + " et <strong>" + flash.ko + "</strong> à revoir. " + (flash.ko === 0 ? "Parfait ! 🎉" : "Reviens-y bientôt pour ancrer la mémoire. 💪");
  }
  function quitFlash() { flash = null; renderHome(); show("view-home"); }

  // ---------- Défi Éclair (jeu) ----------
  function gameSinglePool() { return allQuestions().filter(isSingle); }
  function comboMult() { return Math.min(5, 1 + Math.floor(game.combo / 3)); }
  function startGame() {
    var pool = gameSinglePool(); if (pool.length < 4) return;
    game = { pool: shuffle(pool), idx: 0, score: 0, combo: 0, lives: 3, answered: false, timer: null, current: null, qStart: 0 };
    $("game-play").classList.remove("hidden"); $("game-over").classList.add("hidden");
    show("view-game"); $("game-score").textContent = "0"; renderLives(); gameRender();
  }
  function renderLives() {
    var el = $("game-lives"); el.innerHTML = "";
    for (var i = 0; i < 3; i++) { var s = document.createElement("span"); s.textContent = "❤️"; if (i >= game.lives) s.className = "life-lost"; el.appendChild(s); }
  }
  function gameRender() {
    if (game.idx >= game.pool.length) { game.pool = shuffle(game.pool); game.idx = 0; }
    var q = game.pool[game.idx]; game.current = q; game.answered = false;
    $("game-combo").textContent = "×" + comboMult();
    var ch = chapterOf(q.id);
    $("game-notion").textContent = ch.emoji + " " + ch.court;
    $("game-question").textContent = q.question;
    var card = $("game-card"); card.className = "game-card"; void card.offsetWidth; card.classList.add("game-card");
    var box = $("game-options"); box.innerHTML = "";
    var order = q.type === "vf" ? q.options.map(function (_, i) { return i; }) : shuffle(q.options.map(function (_, i) { return i; }));
    order.forEach(function (origIdx, pos) {
      var btn = document.createElement("button");
      btn.className = "option-btn"; btn.dataset.idx = origIdx; btn.setAttribute("data-key", KEYS[pos] || "");
      btn.textContent = q.options[origIdx];
      btn.addEventListener("click", function () { gameAnswer(origIdx, btn); });
      box.appendChild(btn);
    });
    var fill = $("game-timerfill"); fill.style.transition = "none"; fill.style.width = "100%"; void fill.offsetWidth;
    fill.style.transition = "width " + GAME_QMS + "ms linear"; fill.style.width = "0%";
    clearTimeout(game.timer); clearTimeout(game.transTimer); game.qStart = Date.now(); game.timer = setTimeout(gameTimeout, GAME_QMS);
  }
  function gameRecordStat(q, ok) { if (!stats.q[q.id]) stats.q[q.id] = { ok: 0, ko: 0 }; if (ok) stats.q[q.id].ok++; else stats.q[q.id].ko++; saveStats(); }
  function gameFreezeBar() { var fill = $("game-timerfill"); var w = getComputedStyle(fill).width; fill.style.transition = "none"; fill.style.width = w; }
  function gameAnswer(idx, btn) {
    if (!game || game.answered) return; game.answered = true; clearTimeout(game.timer); gameFreezeBar();
    var q = game.current, ok = idx === q.reponse;
    $("game-options").querySelectorAll(".option-btn").forEach(function (b) { b.disabled = true; if (parseInt(b.dataset.idx, 10) === q.reponse) b.classList.add("correct"); else if (b === btn) b.classList.add("wrong"); });
    gameRecordStat(q, ok);
    if (ok) {
      var remain = Math.max(0, GAME_QMS - (Date.now() - game.qStart)), bonus = Math.round(remain / GAME_QMS * 50);
      var pts = (100 + bonus) * comboMult(); game.score += pts; game.combo++;
      $("game-score").textContent = game.score;
      var cb = $("game-combo"); cb.textContent = "×" + comboMult(); cb.classList.remove("bump"); void cb.offsetWidth; cb.classList.add("bump");
      popup("+" + pts, true); $("game-card").classList.add("flash-ok");
      game.transTimer = setTimeout(nextGame, 650);
    } else {
      game.combo = 0; game.lives--; renderLives(); $("game-combo").textContent = "×1";
      popup("✗", false); $("game-card").classList.add("flash-ko");
      game.transTimer = setTimeout(function () { if (game && game.lives <= 0) gameOver(); else nextGame(); }, 950);
    }
  }
  function gameTimeout() {
    if (!game || game.answered) return; game.answered = true;
    var q = game.current;
    $("game-options").querySelectorAll(".option-btn").forEach(function (b) { b.disabled = true; if (parseInt(b.dataset.idx, 10) === q.reponse) b.classList.add("correct"); });
    gameRecordStat(q, false);
    game.combo = 0; game.lives--; renderLives(); $("game-combo").textContent = "×1";
    popup("⏱", false); $("game-card").classList.add("flash-ko");
    game.transTimer = setTimeout(function () { if (game && game.lives <= 0) gameOver(); else nextGame(); }, 950);
  }
  function nextGame() { if (!game) return; game.idx++; gameRender(); }
  function popup(text, good) { var p = $("game-popup"); p.textContent = text; p.className = "game-popup " + (good ? "good" : "bad"); void p.offsetWidth; p.classList.add("show"); }
  function gameOver() {
    if (!game) return; clearTimeout(game.timer); clearTimeout(game.transTimer);
    var best = (stats.game && stats.game.best) || 0, isBest = game.score > best;
    if (!stats.game) stats.game = { best: 0, plays: 0 };
    stats.game.plays++; if (isBest) stats.game.best = game.score; saveStats();
    $("game-play").classList.add("hidden"); $("game-over").classList.remove("hidden");
    $("game-over-title").textContent = isBest ? "Nouveau record ! 🏆" : "Partie terminée";
    $("game-final-score").textContent = game.score;
    $("game-best").textContent = "Meilleur score : " + Math.max(best, game.score) + " pts";
    $("game-recap").textContent = isBest ? "Tu exploses ton record. Continue comme ça !" : "Rejoue pour battre ton record et ancrer tes connaissances.";
    if (isBest) confetti();
  }
  function quitGame() { if (game) { clearTimeout(game.timer); clearTimeout(game.transTimer); } game = null; renderHome(); show("view-home"); }

  // ---------- confettis ----------
  function confetti() {
    var colors = ["#4f46e5", "#0c9b6a", "#c9820a", "#d83a4a", "#2a9d8f", "#c44d9b"];
    for (var i = 0; i < 90; i++) {
      var p = document.createElement("div"); p.className = "confetti";
      var size = 6 + Math.random() * 8;
      p.style.width = size + "px"; p.style.height = size * (0.6 + Math.random() * 0.8) + "px";
      p.style.left = Math.random() * 100 + "vw"; p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = 2.2 + Math.random() * 2 + "s"; p.style.animationDelay = Math.random() * 0.8 + "s";
      document.body.appendChild(p); setTimeout(function (x) { x.remove(); }, 5200, p);
    }
  }

  // ---------- événements ----------
  $("btn-exam").addEventListener("click", startExamSession);
  $("btn-revision").addEventListener("click", startRevisionSession);
  $("btn-mixte").addEventListener("click", startMixteSession);
  $("btn-flash").addEventListener("click", startFlash);
  $("btn-game").addEventListener("click", startGame);
  $("btn-next").addEventListener("click", onPrimary);

  document.querySelectorAll(".level-opt").forEach(function (b) { b.addEventListener("click", function () { if (currentLevel === b.dataset.level) return; currentLevel = b.dataset.level; renderHome(); }); });

  function quitToHome() { clearTimer(); session = null; renderHome(); show("view-home"); }
  $("btn-quit").addEventListener("click", function () {
    var unanswered = session && session.results.length < session.questions.length;
    if (unanswered && !window.confirm("Quitter ? Ta progression de cette session ne sera pas enregistrée comme score.")) return;
    quitToHome();
  });
  $("btn-replay").addEventListener("click", replaySession);
  $("btn-results-revision").addEventListener("click", startRevisionSession);
  $("btn-home").addEventListener("click", quitToHome);

  // flashcards
  $("flash-quit").addEventListener("click", quitFlash);
  $("btn-flip").addEventListener("click", flipFlash);
  $("flashcard").addEventListener("click", flipFlash);
  $("flash-replay").addEventListener("click", startFlash);
  $("flash-home").addEventListener("click", quitFlash);
  document.querySelectorAll(".rate-btn").forEach(function (b) { b.addEventListener("click", function () { rateFlash(b.dataset.rate); }); });

  // jeu
  $("game-quit").addEventListener("click", quitGame);
  $("game-replay").addEventListener("click", startGame);
  $("game-home").addEventListener("click", quitGame);

  $("btn-reset").addEventListener("click", function () {
    if (window.confirm("Effacer toutes tes statistiques (scores, notions, progression) ?")) { stats = { q: {}, chap: {}, exam: {}, game: { best: 0, plays: 0 } }; saveStats(); renderHome(); }
  });

  function keyIndex(e) { if (e.key >= "1" && e.key <= "4") return parseInt(e.key, 10) - 1; var k = e.key.toUpperCase(); return KEYS.indexOf(k); }
  document.addEventListener("keydown", function (e) {
    if (!$("view-quiz").classList.contains("hidden")) {
      if (e.key === "Enter" && !$("btn-next").classList.contains("hidden")) { e.preventDefault(); onPrimary(); return; }
      if (document.activeElement === $("saisie-input")) return;
      var all = $("options").querySelectorAll(".option-btn"); var i = keyIndex(e);
      if (i >= 0 && i < all.length && !all[i].disabled) all[i].click();
      return;
    }
    if (!$("view-game").classList.contains("hidden") && $("game-over").classList.contains("hidden")) {
      var ga = $("game-options").querySelectorAll(".option-btn"); var gi = keyIndex(e);
      if (gi >= 0 && gi < ga.length && !ga[gi].disabled) ga[gi].click();
      return;
    }
    if (!$("view-flash").classList.contains("hidden") && $("flash-over").classList.contains("hidden")) {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); if (!$("flashcard").classList.contains("flipped")) flipFlash(); return; }
      if (!$("flash-rate").classList.contains("hidden")) { if (e.key === "1") rateFlash("ko"); else if (e.key === "2") rateFlash("mid"); else if (e.key === "3") rateFlash("ok"); }
    }
  });

  // ---------- démarrage ----------
  renderHome();
})();
