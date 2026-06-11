// Banque de questions générée à partir des notes de cours PSY2115T.
// Chaque question est rattachée à une "notion" pour le suivi des points faibles.
// type "qcm": options multiples (mélangées à l'affichage). type "vf": Vrai/Faux.
// "reponse" = index de la bonne réponse dans "options".

const QUIZ_DATA = {
  chapters: [
    {
      id: "cours7",
      titre: "Cours 7 — Troubles des conduites alimentaires",
      court: "Troubles alimentaires",
      emoji: "🍽️",
      accent: "#e76f51",
      questions: [
        {
          id: "c7-01", notion: "Vue d'ensemble (DSM-5-TR)", type: "qcm",
          question: "Quel trouble a été ajouté avec le DSM-5 ?",
          options: ["Les accès hyperphagiques (binge-eating disorder)", "Le pica", "Le mérycisme", "L'anorexie mentale"],
          reponse: 0,
          explication: "Le DSM-5 a ajouté le trouble accès hyperphagiques. Les diagnostics de cette catégorie sont mutuellement exclusifs (sauf le pica)."
        },
        {
          id: "c7-02", notion: "Vue d'ensemble (DSM-5-TR)", type: "vf",
          question: "Les diagnostics des troubles des conduites alimentaires sont mutuellement exclusifs, à l'exception du pica.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Exact : seuls les diagnostics de pica peuvent se cumuler avec un autre trouble de cette catégorie."
        },
        {
          id: "c7-03", notion: "Pica, mérycisme & ARFID", type: "qcm",
          question: "Le pica correspond à l'ingestion répétée de substances non nutritives pendant au moins…",
          options: ["1 mois", "2 semaines", "3 mois", "6 mois"],
          reponse: 0,
          explication: "Ingestion répétée de substances non nutritives ou non comestibles (peinture, craie, cailloux…) de façon continue pendant au moins 1 mois."
        },
        {
          id: "c7-04", notion: "Pica, mérycisme & ARFID", type: "qcm",
          question: "Quelle est la prévalence du pica chez les enfants d'âge scolaire ?",
          options: ["5 %", "1-2 %", "10 %", "0,5 %"],
          reponse: 0,
          explication: "Le pica touche 5 % des enfants d'âge scolaire (le mérycisme : 1-2 %). Il peut être associé à une déficience en vitamines ou minéraux."
        },
        {
          id: "c7-05", notion: "Pica, mérycisme & ARFID", type: "qcm",
          question: "Le mérycisme se caractérise par…",
          options: [
            "La régurgitation répétée de nourriture après les repas, pendant au moins 1 mois",
            "L'ingestion de substances non comestibles",
            "Le refus de manger devant les autres",
            "Des vomissements provoqués pour contrôler le poids"
          ],
          reponse: 0,
          explication: "La nourriture régurgitée peut être remâchée, ravalée ou recrachée. Le mérycisme semble avoir une fonction d'apaisement et d'auto-stimulation, surtout chez les personnes avec trouble du développement intellectuel."
        },
        {
          id: "c7-06", notion: "Pica, mérycisme & ARFID", type: "qcm",
          question: "La restriction ou l'évitement de l'ingestion d'aliments peut être associé à…",
          options: [
            "Les caractéristiques sensorielles de la nourriture ou un manque d'intérêt pour manger",
            "Une peur intense de prendre du poids",
            "Des comportements purgatifs réguliers",
            "Une distorsion de l'image corporelle"
          ],
          reponse: 0,
          explication: "Ce trouble (évitement sensoriel, dégoût, réponse conditionnelle négative comme s'étouffer ou vomir) se manifeste par l'incapacité à atteindre les besoins nutritifs — sans peur de grossir ni distorsion corporelle, contrairement à l'anorexie."
        },
        {
          id: "c7-07", notion: "Anorexie — critères DSM", type: "qcm",
          question: "Quel est le critère A de l'anorexie mentale ?",
          options: [
            "Restriction des apports énergétiques conduisant à un poids significativement bas",
            "Peur intense de perdre du poids",
            "Présence d'accès hyperphagiques hebdomadaires",
            "Un IMC inférieur à 85 % du poids attendu"
          ],
          reponse: 0,
          explication: "Critère A : restriction des apports par rapport aux besoins, conduisant à un poids significativement bas compte tenu de l'âge, du sexe, du stade de développement et de la santé physique."
        },
        {
          id: "c7-08", notion: "Anorexie — critères DSM", type: "qcm",
          question: "Quels critères du DSM-IV ont été EXCLUS du DSM-5 pour l'anorexie ?",
          options: [
            "Le seuil de poids (< 85 % du poids attendu) et l'aménorrhée",
            "La peur de grossir et l'aménorrhée",
            "La distorsion corporelle et le seuil de poids",
            "L'hyperactivité physique et la restriction alimentaire"
          ],
          reponse: 0,
          explication: "Deux critères ont été retirés : la mesure de poids chiffrée (< 85 % du poids attendu dans le DSM-IV) et l'aménorrhée."
        },
        {
          id: "c7-09", notion: "Anorexie — critères DSM", type: "qcm",
          question: "Dans le type restrictif de l'anorexie, sur quelle période vérifie-t-on l'absence de crises ou de purges ?",
          options: ["Les 3 derniers mois", "Le dernier mois", "Les 6 derniers mois", "La dernière année"],
          reponse: 0,
          explication: "Pendant les 3 derniers mois : pas d'accès hyperphagiques ni de comportements purgatifs. La perte de poids vient du régime, du jeûne et/ou de l'exercice excessif."
        },
        {
          id: "c7-10", notion: "Anorexie — sévérité (IMC)", type: "qcm",
          question: "Un IMC de 15,5 kg/m² correspond à quel niveau de sévérité de l'anorexie ?",
          options: ["Grave", "Moyen", "Léger", "Extrême"],
          reponse: 0,
          explication: "Échelle de sévérité (adultes) : léger ≥ 17 · moyen 16-16,99 · grave 15-15,99 · extrême < 15 kg/m²."
        },
        {
          id: "c7-11", notion: "Anorexie — sévérité (IMC)", type: "qcm",
          question: "Le niveau « léger » de l'anorexie correspond à un IMC…",
          options: ["≥ 17 kg/m²", "16-16,99 kg/m²", "15-15,99 kg/m²", "< 15 kg/m²"],
          reponse: 0,
          explication: "Léger : IMC ≥ 17. Le degré peut être majoré selon les symptômes cliniques, l'incapacité fonctionnelle et la nécessité de prise en charge."
        },
        {
          id: "c7-12", notion: "Anorexie — caractéristiques", type: "qcm",
          question: "Quelle est la prévalence à vie de l'anorexie chez les femmes ?",
          options: ["1 %", "0,3 %", "3,5 %", "5 %"],
          reponse: 0,
          explication: "Femmes : 1 % · Hommes : 0,3 % (ratio H:F de 1:10 dans les populations cliniques)."
        },
        {
          id: "c7-13", notion: "Anorexie — caractéristiques", type: "vf",
          question: "L'anorexie mentale apparaît rarement après 40 ans.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Elle apparaît généralement au début ou au milieu de l'adolescence, souvent après une diète ou un épisode de stress."
        },
        {
          id: "c7-14", notion: "Anorexie — caractéristiques", type: "qcm",
          question: "Le lanugo (fin duvet corporel) est une conséquence typique de…",
          options: ["L'anorexie mentale", "La boulimie", "Des accès hyperphagiques", "Du mérycisme"],
          reponse: 0,
          explication: "Parmi les conséquences de l'anorexie : lanugo, ↓ tension artérielle et rythme cardiaque, ↓ masse osseuse, anémie, perte de cheveux, ↓ taille du cerveau, arythmie pouvant mener à une mort soudaine."
        },
        {
          id: "c7-15", notion: "Anorexie — pronostic", type: "qcm",
          question: "Avec traitement, quelle proportion des personnes anorexiques atteint une rémission complète ?",
          options: ["La moitié", "Le quart", "Les trois quarts", "10 %"],
          reponse: 0,
          explication: "Avec traitement : ½ rémission complète, ¼ rémission partielle, ¼ absence de rémission."
        },
        {
          id: "c7-16", notion: "Anorexie — pronostic", type: "qcm",
          question: "Sans traitement, en cas de symptômes sévères, environ quel pourcentage de personnes anorexiques meurt ?",
          options: ["10 %", "2 %", "25 %", "50 %"],
          reponse: 0,
          explication: "Sans traitement et avec symptômes sévères, environ 10 % meurent (perturbations des électrolytes, arythmie…)."
        },
        {
          id: "c7-17", notion: "Boulimie — critères DSM", type: "qcm",
          question: "Un accès hyperphagique (crise de gloutonnerie) se définit par 2 caractéristiques :",
          options: [
            "Quantité largement supérieure à la normale + sentiment de perte de contrôle",
            "Manger rapidement + manger seul",
            "Quantité supérieure + comportements compensatoires",
            "Perte de contrôle + vomissements provoqués"
          ],
          reponse: 0,
          explication: "1) Absorption en temps limité (< 2 h) d'une quantité largement supérieure à ce que la plupart des gens mangeraient ; 2) sentiment de perte de contrôle pendant la crise."
        },
        {
          id: "c7-18", notion: "Boulimie — critères DSM", type: "qcm",
          question: "Pour diagnostiquer une boulimie, crises et comportements compensatoires doivent survenir en moyenne au moins…",
          options: [
            "1 fois/semaine pendant 3 mois",
            "2 fois/semaine pendant 6 mois",
            "1 fois/mois pendant 3 mois",
            "3 fois/semaine pendant 1 mois"
          ],
          reponse: 0,
          explication: "Critère C : au moins 1 fois par semaine pendant 3 mois. Même fréquence exigée pour le trouble accès hyperphagiques."
        },
        {
          id: "c7-19", notion: "Boulimie — critères DSM", type: "qcm",
          question: "La sévérité de la boulimie est établie selon…",
          options: [
            "La fréquence des comportements compensatoires inappropriés",
            "L'IMC",
            "La quantité de nourriture ingérée",
            "Le nombre d'années depuis le début du trouble"
          ],
          reponse: 0,
          explication: "Léger : 1-3 épisodes compensatoires/semaine · moyen : 4-7 · grave : 8-13 · extrême : ≥ 14. (Anorexie → IMC ; accès hyperphagiques → fréquence des crises.)"
        },
        {
          id: "c7-20", notion: "Boulimie — caractéristiques", type: "qcm",
          question: "Laquelle de ces conséquences est typique de la boulimie ?",
          options: [
            "Endommagement de l'émail des dents par l'acide gastrique",
            "Le lanugo",
            "La diminution de la taille du cerveau",
            "La diminution de la masse osseuse"
          ],
          reponse: 0,
          explication: "Vomissements → atteinte des dents, de la gorge et de l'estomac ; aussi : perte de potassium, diarrhées (laxatifs) → perturbation des électrolytes → irrégularités cardiaques, glandes salivaires enflées. Les autres réponses concernent l'anorexie."
        },
        {
          id: "c7-21", notion: "Boulimie — caractéristiques", type: "qcm",
          question: "Comparée à l'anorexie de type accès hyperphagiques/purgatif, la boulimie se caractérise par…",
          options: [
            "Plus d'impulsivité et un poids souvent fluctuant",
            "Plus de contrôle et de perfectionnisme",
            "Un poids bas maintenu malgré les risques",
            "Un surcontrôle émotionnel fréquent"
          ],
          reponse: 0,
          explication: "Boulimie : impulsivité, honte intense après les crises, variabilité émotionnelle visible, poids fluctuant (souvent normal ou en surcharge). AN-AH/P : contrôle rigide, surcontrôle émotionnel, poids bas maintenu."
        },
        {
          id: "c7-22", notion: "Accès hyperphagiques", type: "qcm",
          question: "Qu'est-ce qui distingue le trouble accès hyperphagiques de la boulimie ?",
          options: [
            "L'absence de comportements compensatoires",
            "L'absence de perte de contrôle pendant les crises",
            "La présence de vomissements",
            "Une fréquence des crises plus élevée"
          ],
          reponse: 0,
          explication: "≠ boulimie : pas de comportements compensatoires réguliers. ≠ anorexie : pas de perte de poids."
        },
        {
          id: "c7-23", notion: "Accès hyperphagiques", type: "qcm",
          question: "Le critère B des accès hyperphagiques exige au moins 3 caractéristiques. Laquelle en fait partie ?",
          options: [
            "Manger beaucoup plus rapidement que la normale",
            "Des vomissements provoqués",
            "L'exercice physique excessif",
            "Une peur intense de prendre du poids"
          ],
          reponse: 0,
          explication: "Les 5 caractéristiques : manger très vite · jusqu'à distension abdominale pénible · sans faim physique · seul par gêne · avec dégoût de soi, déprime ou culpabilité ensuite."
        },
        {
          id: "c7-24", notion: "Accès hyperphagiques", type: "qcm",
          question: "Quelle comorbidité est la plus marquée (+++) avec les accès hyperphagiques ?",
          options: ["Les troubles de l'humeur", "Les troubles psychotiques", "Le TOC", "Les troubles neurodéveloppementaux"],
          reponse: 0,
          explication: "Comorbidité : troubles de l'humeur +++ et troubles liés à l'usage de substances +."
        },
        {
          id: "c7-25", notion: "Zones grises cliniques", type: "qcm",
          question: "L'orthorexie désigne…",
          options: [
            "L'obsession de manger sainement",
            "L'obsession de la masse musculaire",
            "L'exercice physique compulsif",
            "Le grignotage constant pour réguler ses émotions"
          ],
          reponse: 0,
          explication: "Zones grises cliniques : orthorexie (manger sainement), bigorexie (masse musculaire), exercice compulsif, compulsion alimentaire (grignotage lié à l'autorégulation affective)."
        },
        {
          id: "c7-26", notion: "Zones grises cliniques", type: "qcm",
          question: "La bigorexie (dysmorphie musculaire) est aussi appelée…",
          options: ["Anorexie inversée", "Orthorexie", "Compulsion alimentaire", "Syndrome d'alimentation nocturne"],
          reponse: 0,
          explication: "Obsession liée à la masse musculaire, souvent chez les hommes — une spécification de l'obsession de dysmorphie corporelle."
        },
        {
          id: "c7-27", notion: "Étiologie des TCA", type: "qcm",
          question: "Quels traits de personnalité sont typiques dans l'étiologie de l'anorexie ?",
          options: [
            "Perfectionnisme, rigidité cognitive, besoin de contrôle",
            "Impulsivité et recherche de sensations",
            "Extraversion et théâtralisme",
            "Dépendance affective et passivité"
          ],
          reponse: 0,
          explication: "Anorexie : perfectionnisme, rigidité, contrôle, inhibition émotionnelle, forte autocritique. La boulimie penche plutôt vers l'impulsivité."
        },
        {
          id: "c7-28", notion: "Étiologie des TCA", type: "qcm",
          question: "Dans l'étiologie de la boulimie, quel style de pensée est typique ?",
          options: [
            "La pensée dichotomique « tout ou rien »",
            "La pensée magique",
            "La rumination obsessionnelle",
            "La pensée paranoïde"
          ],
          reponse: 0,
          explication: "Pensée « tout ou rien » et préoccupations excessives liées au poids. Déclencheurs fréquents : stress, conflits, émotions négatives, restriction alimentaire."
        },
        {
          id: "c7-29", notion: "Traitement des TCA", type: "qcm",
          question: "Quel traitement est recommandé pour les ADOLESCENTS souffrant d'anorexie ?",
          options: [
            "Le Family-Based Treatment (FBT / méthode Maudsley)",
            "La psychanalyse",
            "La fluoxétine seule",
            "L'hospitalisation systématique"
          ],
          reponse: 0,
          explication: "Adolescents : FBT (méthode Maudsley). Adultes : CBT-E, thérapie interpersonnelle, approches psychodynamiques, thérapies centrées sur les émotions."
        },
        {
          id: "c7-30", notion: "Traitement des TCA", type: "qcm",
          question: "Quel médicament est particulièrement soutenu par les données probantes pour la boulimie ?",
          options: ["La fluoxétine (ISRS)", "L'olanzapine", "Le topiramate", "L'halopéridol"],
          reponse: 0,
          explication: "Boulimie : fluoxétine. Anorexie : aucun traitement curatif reconnu (parfois ISRS après reprise pondérale, parfois olanzapine)."
        },
        {
          id: "c7-31", notion: "Traitement des TCA", type: "qcm",
          question: "Quel mode d'alimentation est enseigné dans le traitement de la boulimie et des accès hyperphagiques ?",
          options: [
            "3 repas + 3 collations par jour",
            "2 repas par jour sans collation",
            "Le jeûne intermittent",
            "5 petits repas sans collation"
          ],
          reponse: 0,
          explication: "Apprendre un mode d'alimentation normal et régulier : 3 repas + 3 collations par jour, identifier les déclencheurs, pleine conscience et relaxation."
        },
        {
          id: "c7-32", notion: "Traitement des TCA", type: "vf",
          question: "Le pronostic du trouble accès hyperphagiques est meilleur que celui de la boulimie.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Oui — le traitement vise à comprendre le cycle des crises, travailler la gestion émotionnelle et la reconnexion à soi (versus dissociation)."
        },
        {
          id: "c7-33", notion: "Cas clinique — TCA", type: "cas",
          question: "Élise, 18 ans, IMC 16,1. Elle restreint drastiquement son alimentation depuis 8 mois, a une peur intense de grossir et se trouve « énorme » malgré sa maigreur. Aucune crise ni vomissement. Quel diagnostic et quelle sévérité ?",
          options: [
            "Anorexie mentale, type restrictif, sévérité moyenne",
            "Anorexie mentale, type accès hyperphagiques/purgatif, sévérité légère",
            "Boulimie, sévérité moyenne",
            "Trouble de restriction/évitement de l'ingestion d'aliments (ARFID)"
          ],
          reponse: 0,
          explication: "Restriction + peur de grossir + distorsion corporelle = anorexie. Absence de crises/purges depuis 3 mois = type restrictif. IMC 16-16,99 = sévérité moyenne. (L'ARFID n'implique ni peur de grossir ni distorsion de l'image du corps.)"
        },
        {
          id: "c7-34", notion: "Cas clinique — TCA", type: "cas",
          question: "Maya, 22 ans, poids normal. Depuis 4 mois, elle a des crises où elle mange d'énormes quantités avec un sentiment de perte de contrôle, suivies de vomissements provoqués, environ 3 fois/semaine. Son estime de soi dépend fortement de son poids. Diagnostic ?",
          options: [
            "Boulimie",
            "Anorexie mentale, type accès hyperphagiques/purgatif",
            "Trouble accès hyperphagiques (binge-eating disorder)",
            "Trouble purgatif"
          ],
          reponse: 0,
          explication: "Crises + comportements compensatoires (vomissements) ≥ 1/semaine sur 3 mois + estime de soi influencée par le poids, à poids normal = boulimie. (Le type AH/purgatif de l'anorexie supposerait un poids bas ; le trouble accès hyperphagiques n'a pas de comportements compensatoires.)"
        },
        {
          id: "c7-35", notion: "Discrimination AN / boulimie / AH", type: "qcm",
          question: "Qu'est-ce qui distingue spécifiquement le trouble accès hyperphagiques de l'anorexie AH/purgatif ET de la boulimie ?",
          options: [
            "L'absence à la fois de poids bas ET de comportements compensatoires réguliers",
            "La présence de crises de gloutonnerie",
            "Le sentiment de perte de contrôle pendant les crises",
            "Une fréquence d'au moins 1 crise par semaine"
          ],
          reponse: 0,
          explication: "Les trois partagent les crises avec perte de contrôle. Le trouble accès hyperphagiques se distingue par : pas de poids significativement bas (≠ anorexie) ET pas de comportements compensatoires réguliers (≠ boulimie)."
        }
      ]
    },

    {
      id: "cours8",
      titre: "Cours 8 — Schizophrénie",
      court: "Schizophrénie",
      emoji: "🌀",
      accent: "#6c4ee0",
      questions: [
        {
          id: "c8-01", notion: "Introduction & épidémiologie", type: "qcm",
          question: "Quelle est la caractéristique principale de la schizophrénie ?",
          options: [
            "L'épisode psychotique : perte de contact avec la réalité",
            "Une tristesse persistante",
            "L'alternance d'épisodes maniaques et dépressifs",
            "Une anxiété généralisée"
          ],
          reponse: 0,
          explication: "Anomalies des perceptions, pensées, affects, comportements, du sens de soi et du lien aux autres ; la caractéristique principale est la psychose."
        },
        {
          id: "c8-02", notion: "Introduction & épidémiologie", type: "qcm",
          question: "Quelle est la prévalence à vie de la schizophrénie ?",
          options: ["0,7 %", "7 %", "2,5 %", "0,07 %"],
          reponse: 0,
          explication: "0,7 % à vie, avec des variations géographiques/culturelles (prévalences les plus faibles dans les populations asiatiques). Plus fréquente chez les hommes."
        },
        {
          id: "c8-03", notion: "Introduction & épidémiologie", type: "qcm",
          question: "La schizophrénie apparaît typiquement…",
          options: ["Entre 18 et 30 ans", "Dans l'enfance", "Entre 40 et 50 ans", "Après 60 ans"],
          reponse: 0,
          explication: "Fin de l'adolescence / début de l'âge adulte, un peu plus tôt chez les hommes (20-24 ans). Chez les femmes, le taux ré-augmente vers 40 et 60 ans."
        },
        {
          id: "c8-04", notion: "Introduction & épidémiologie", type: "qcm",
          question: "L'espérance de vie des personnes atteintes de schizophrénie est réduite d'environ…",
          options: ["20 ans", "5 ans", "10 ans", "35 ans"],
          reponse: 0,
          explication: "≈ 20 ans de moins : consommation de drogues, effets secondaires des antipsychotiques, faible engagement familial."
        },
        {
          id: "c8-05", notion: "Introduction & épidémiologie", type: "qcm",
          question: "Quel pourcentage des personnes atteintes décède par suicide ?",
          options: ["Environ 5-6 %", "Environ 20 %", "Environ 1 %", "Environ 15 %"],
          reponse: 0,
          explication: "Suicide chez ~5-6 % ; tentatives chez ~20 %."
        },
        {
          id: "c8-06", notion: "Introduction & épidémiologie", type: "vf",
          question: "La rémission (diminution ou disparition temporaire des symptômes) concerne environ 1 personne sur 3.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Autour de 35 %. Plus fréquente quand : symptômes plus légers, meilleur fonctionnement, réponse rapide au traitement, psychose non traitée plus courte."
        },
        {
          id: "c8-07", notion: "Critères diagnostiques (DSM)", type: "qcm",
          question: "Critère A de la schizophrénie : combien de symptômes faut-il, avec quelle contrainte ?",
          options: [
            "Au moins 2, dont au moins un parmi : idées délirantes, hallucinations, discours désorganisé",
            "Au moins 3, peu importe lesquels",
            "Un seul suffit s'il s'agit d'hallucinations",
            "Au moins 2, dont obligatoirement des symptômes négatifs"
          ],
          reponse: 0,
          explication: "2 symptômes ou plus pendant une proportion significative d'un mois, dont au moins un parmi (1) idées délirantes, (2) hallucinations, (3) discours désorganisé."
        },
        {
          id: "c8-08", notion: "Critères diagnostiques (DSM)", type: "qcm",
          question: "Critère C : des signes continus du trouble doivent persister depuis au moins…",
          options: ["6 mois", "1 mois", "1 an", "3 mois"],
          reponse: 0,
          explication: "6 mois, dont au moins 1 mois de symptômes de phase active (critère A). Le reste peut être des symptômes prodromiques ou résiduels."
        },
        {
          id: "c8-09", notion: "Critères diagnostiques (DSM)", type: "qcm",
          question: "Les symptômes prodromiques sont…",
          options: [
            "Des symptômes avant-coureurs qui précèdent la psychose",
            "Des symptômes qui persistent après l'épisode aigu",
            "Les symptômes de la phase aiguë",
            "Des effets secondaires des médicaments"
          ],
          reponse: 0,
          explication: "Prodromiques = avant-coureurs ; résiduels = persistent après l'épisode mais en moindre intensité. Dans les deux cas : symptômes négatifs ou positifs atténués."
        },
        {
          id: "c8-10", notion: "Idées délirantes", type: "qcm",
          question: "« Une personne célèbre est amoureuse de moi » illustre un délire de type…",
          options: ["Érotomaniaque", "Mégalomaniaque", "De persécution", "Somatique"],
          reponse: 0,
          explication: "Type érotomaniaque : conviction qu'une personne est amoureuse du sujet. Mégalomaniaque : grand talent non reconnu ou découvertes importantes."
        },
        {
          id: "c8-11", notion: "Idées délirantes", type: "qcm",
          question: "« Le gouvernement implante des pensées dans ma tête » illustre…",
          options: ["L'insertion de pensée", "Le vol de pensée", "La diffusion de la pensée", "Le contrôle externe de la pensée"],
          reponse: 0,
          explication: "Insertion de pensée. Vol = « on vole mes pensées avant que je parle » ; diffusion = « tout le monde peut entendre mes pensées »."
        },
        {
          id: "c8-12", notion: "Idées délirantes", type: "qcm",
          question: "« Tout le monde peut entendre mes pensées » illustre…",
          options: ["La diffusion de la pensée", "L'insertion de pensée", "Le vol de pensée", "Un délire nihiliste"],
          reponse: 0,
          explication: "Diffusion de la pensée. Délire nihiliste extrême : « je suis déjà mort mais mon corps continue de marcher »."
        },
        {
          id: "c8-13", notion: "Idées délirantes", type: "qcm",
          question: "Un délire BIZARRE se définit comme…",
          options: [
            "Clairement invraisemblable, impossible dans la réalité",
            "Plausible mais faux",
            "Toujours un délire de persécution",
            "Systématisé et bien organisé"
          ],
          reponse: 0,
          explication: "Bizarre : impossible physiquement/biologiquement, souvent plus désorganisé, typique de la schizophrénie. Non bizarre : possible mais faux, plus systématisé, fréquent dans le trouble délirant."
        },
        {
          id: "c8-14", notion: "Idées délirantes", type: "qcm",
          question: "« Les animateurs à la télévision parlent de moi » est un délire de…",
          options: ["Référence", "Jalousie", "Grandeur", "Persécution"],
          reponse: 0,
          explication: "Délire de référence (non bizarre). Persécution : « mes collègues veulent me faire perdre mon emploi » ; jalousie : « mon conjoint me trompe » sans preuve."
        },
        {
          id: "c8-15", notion: "Hallucinations & discours désorganisé", type: "qcm",
          question: "Quelles sont les hallucinations les plus fréquentes dans la schizophrénie ?",
          options: ["Auditives", "Visuelles", "Tactiles", "Olfactives"],
          reponse: 0,
          explication: "Les hallucinations auditives : voix qui commentent les actions, voix qui discutent entre elles, ou ordres reçus (hallucinations impératives)."
        },
        {
          id: "c8-16", notion: "Hallucinations & discours désorganisé", type: "qcm",
          question: "Une « salade de mots » (phrases incompréhensibles) correspond à…",
          options: ["L'incohérence", "Le déraillement", "La tangentialité", "L'alogie"],
          reponse: 0,
          explication: "Incohérence : « Le soleil téléphone aux chaussures de l'univers. » Déraillement : passer d'un sujet à l'autre sans lien logique."
        },
        {
          id: "c8-17", notion: "Hallucinations & discours désorganisé", type: "qcm",
          question: "Répondre à côté de la question s'appelle…",
          options: ["La tangentialité", "Le déraillement", "L'écholalie", "L'avolition"],
          reponse: 0,
          explication: "Tangentialité = répondre à côté. Pour compter comme discours désorganisé, cela doit altérer significativement l'efficacité de la communication."
        },
        {
          id: "c8-18", notion: "Catatonie & comportement désorganisé", type: "qcm",
          question: "L'écholalie désigne…",
          options: [
            "La répétition automatique des paroles d'autrui",
            "La répétition des gestes d'autrui",
            "Le maintien de postures inhabituelles",
            "Le mutisme"
          ],
          reponse: 0,
          explication: "Écholalie = répéter les paroles ; échopraxie = répéter les gestes. La catatonie inclut aussi immobilité prolongée, mutisme et postures inhabituelles."
        },
        {
          id: "c8-19", notion: "Catatonie & comportement désorganisé", type: "vf",
          question: "La catatonie survient exclusivement dans la schizophrénie.",
          options: ["Vrai", "Faux"],
          reponse: 1,
          explication: "Faux : elle survient aussi dans les troubles neurodéveloppementaux, bipolaires, dépressifs et d'autres causes médicales (p. ex. encéphalopathie hépatique)."
        },
        {
          id: "c8-20", notion: "Symptômes négatifs", type: "qcm",
          question: "L'avolition (aboulie) désigne…",
          options: [
            "La perte de motivation et d'initiative",
            "La perte de la capacité à ressentir du plaisir",
            "La pauvreté du discours",
            "Le manque d'intérêt pour les relations sociales"
          ],
          reponse: 0,
          explication: "Avolition : difficulté à accomplir les tâches quotidiennes (hygiène, travail). Anhédonie = plaisir ; alogie = discours ; asocialité = relations."
        },
        {
          id: "c8-21", notion: "Symptômes négatifs", type: "qcm",
          question: "L'alogie désigne…",
          options: [
            "La diminution de la parole et la pauvreté du contenu du discours",
            "La perte de plaisir",
            "L'absence d'expression des émotions",
            "L'isolement volontaire"
          ],
          reponse: 0,
          explication: "Alogie : réponses très courtes, pauvreté du vocabulaire, silences."
        },
        {
          id: "c8-22", notion: "Symptômes négatifs", type: "qcm",
          question: "Visage figé, voix monotone, absence de contact visuel : c'est…",
          options: ["L'émoussement affectif (affect plat)", "L'anhédonie", "L'asocialité", "L'alogie"],
          reponse: 0,
          explication: "Émoussement affectif = réduction de l'expression des émotions."
        },
        {
          id: "c8-23", notion: "Symptômes négatifs", type: "qcm",
          question: "Lequel de ces symptômes est un symptôme NÉGATIF ?",
          options: ["L'anhédonie", "Les hallucinations", "Les idées délirantes", "Le discours désorganisé"],
          reponse: 0,
          explication: "Négatifs : affect plat, alogie, avolition, anhédonie, asocialité. Ils persistent après l'épisode aigu et ont un impact majeur (invalidité, peu d'amitiés)."
        },
        {
          id: "c8-24", notion: "Spectre psychotique (durées)", type: "qcm",
          question: "Le trouble psychotique bref dure…",
          options: ["De 1 jour à 1 mois", "De 1 à 6 mois", "6 mois et plus", "Au moins 1 an"],
          reponse: 0,
          explication: "1 jour à 1 mois, au moins 1 symptôme parmi les 3 premiers du critère A, pas de symptômes négatifs, puis retour au fonctionnement normal."
        },
        {
          id: "c8-25", notion: "Spectre psychotique (durées)", type: "qcm",
          question: "Le trouble schizophréniforme dure…",
          options: ["De 1 à 6 mois", "De 1 jour à 1 mois", "6 mois et plus", "2 semaines maximum"],
          reponse: 0,
          explication: "Moins de 6 mois, symptômes de la schizophrénie + symptômes négatifs possibles, pas nécessairement d'impact sur le fonctionnement. Schizophrénie : ≥ 6 mois."
        },
        {
          id: "c8-26", notion: "Spectre psychotique (durées)", type: "qcm",
          question: "Le trouble schizoaffectif se distingue de la schizophrénie par…",
          options: [
            "La survenue d'au moins 1 épisode de dépression ou de manie",
            "L'absence d'hallucinations",
            "Une durée plus courte",
            "L'absence de symptômes négatifs"
          ],
          reponse: 0,
          explication: "Psychose + symptômes thymiques notables : ≥ 1 épisode de dépression ou de manie (type bipolaire ou type dépressif)."
        },
        {
          id: "c8-27", notion: "Étiologie (génétique & dopamine)", type: "qcm",
          question: "Selon l'hypothèse dopaminergique, les symptômes POSITIFS s'expliquent par…",
          options: [
            "Une hyperactivité dopaminergique de la voie mésolimbique",
            "Une hypoactivité dopaminergique de la voie mésocorticale",
            "Un excès de sérotonine",
            "Un déficit en glutamate"
          ],
          reponse: 0,
          explication: "Hyperactivité mésolimbique = symptômes positifs ; hypoactivité mésocorticale = symptômes négatifs et cognitifs. Les antipsychotiques sont des antagonistes dopaminergiques."
        },
        {
          id: "c8-28", notion: "Étiologie (génétique & dopamine)", type: "qcm",
          question: "Quel est le facteur de risque génétique le plus élevé pour la schizophrénie ?",
          options: ["Une psychose chez la mère", "Un cousin atteint", "Le sexe féminin", "L'âge avancé du père"],
          reponse: 0,
          explication: "Le risque augmente avec le niveau de parenté ; la psychose chez la mère est le facteur de risque le plus élevé. Trouble polygénique (multiples variantes)."
        },
        {
          id: "c8-29", notion: "Étiologie (génétique & dopamine)", type: "qcm",
          question: "Lequel ne fait PAS partie des 5 troubles partageant des variations génétiques communes ?",
          options: ["Le trouble panique", "La schizophrénie", "Le trouble bipolaire", "Le TDAH"],
          reponse: 0,
          explication: "Les 5 : schizophrénie, trouble dépressif caractérisé, trouble du spectre de l'autisme, trouble bipolaire, TDAH."
        },
        {
          id: "c8-30", notion: "Facteurs environnementaux", type: "qcm",
          question: "Quelle substance consommée à l'adolescence est particulièrement liée au déclenchement de la schizophrénie ?",
          options: ["Le cannabis", "La caféine", "Le tabac", "L'alcool"],
          reponse: 0,
          explication: "Autres facteurs : traumatismes à l'enfance (abus physiques, négligence), milieu urbain dense, pauvreté, minorité ethnique migrante, stress."
        },
        {
          id: "c8-31", notion: "Traitement", type: "qcm",
          question: "Quel antipsychotique est le plus efficace pour les cas complexes, mais exige une surveillance sanguine stricte ?",
          options: ["La clozapine", "L'halopéridol", "La rispéridone", "La quétiapine"],
          reponse: 0,
          explication: "La clozapine. Les formes injectables à action prolongée (APAP) sont administrées toutes les quelques semaines."
        },
        {
          id: "c8-32", notion: "Traitement", type: "qcm",
          question: "Les antipsychotiques de 2e génération (atypiques) incluent…",
          options: [
            "Rispéridone, olanzapine, aripiprazole, quétiapine",
            "Halopéridol et chlorpromazine",
            "Fluoxétine et sertraline",
            "Lithium et valproate"
          ],
          reponse: 0,
          explication: "2e génération = effets secondaires plus favorables. 1re génération (typiques) : halopéridol, chlorpromazine — risque plus élevé d'effets secondaires."
        },
        {
          id: "c8-33", notion: "Traitement", type: "qcm",
          question: "La remédiation cognitive cible…",
          options: [
            "L'attention, la mémoire et les fonctions exécutives",
            "Les idées délirantes",
            "Le stress familial",
            "L'observance médicamenteuse"
          ],
          reponse: 0,
          explication: "Exercices neurocognitifs pour corriger les déficits cognitifs. La TCC adaptée à la psychose aide à modifier les réactions face aux hallucinations et restructurer les pensées délirantes."
        },
        {
          id: "c8-34", notion: "Traitement", type: "vf",
          question: "Le suivi intensif dans le milieu diminue l'itinérance et les hospitalisations.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai : équipes multidisciplinaires fournissant médication, traitement des abus de substances, psychothérapie, formation professionnelle, aide au logement et à l'emploi."
        },
        {
          id: "c8-35", notion: "Cas clinique — psychoses", type: "cas",
          question: "Karim, 23 ans, présente depuis 8 mois des hallucinations auditives, des idées délirantes de persécution et un discours parfois déraillant. Il s'est isolé, néglige son hygiène et a quitté son emploi. Aucun épisode thymique. Diagnostic le plus probable ?",
          options: [
            "Schizophrénie",
            "Trouble schizophréniforme",
            "Trouble psychotique bref",
            "Trouble schizoaffectif"
          ],
          reponse: 0,
          explication: "≥ 2 symptômes du critère A (hallucinations + délire + discours désorganisé), baisse marquée du fonctionnement, durée ≥ 6 mois (8 mois) et pas d'épisode thymique → schizophrénie. (Schizophréniforme < 6 mois ; psychotique bref < 1 mois ; schizoaffectif exigerait des épisodes thymiques marqués.)"
        },
        {
          id: "c8-36", notion: "Cas clinique — psychoses", type: "cas",
          question: "Léa, 28 ans, développe brutalement des idées délirantes et des hallucinations après un événement très stressant. Trois semaines plus tard, elle revient à son fonctionnement normal, sans symptômes négatifs. Diagnostic ?",
          options: [
            "Trouble psychotique bref",
            "Trouble schizophréniforme",
            "Schizophrénie",
            "Trouble délirant"
          ],
          reponse: 0,
          explication: "Durée de 1 jour à 1 mois (ici 3 semaines), au moins 1 symptôme positif, pas de symptômes négatifs, retour au fonctionnement antérieur = trouble psychotique bref."
        },
        {
          id: "c8-37", notion: "Discrimination des psychoses", type: "qcm",
          question: "Un patient présente les symptômes de la schizophrénie depuis 4 mois, avec symptômes négatifs, mais sans réel impact sur le fonctionnement. Quel diagnostic ?",
          options: [
            "Trouble schizophréniforme",
            "Schizophrénie",
            "Trouble psychotique bref",
            "Trouble schizoaffectif"
          ],
          reponse: 0,
          explication: "Durée de 1 à 6 mois avec symptômes de la schizophrénie = trouble schizophréniforme. L'impact sur le fonctionnement n'est pas requis (la schizophrénie, elle, exige ≥ 6 mois ET une baisse du fonctionnement)."
        }
      ]
    },

    {
      id: "cours9a",
      titre: "Cours 9a — Troubles liés à des traumatismes",
      court: "Traumatismes & stress",
      emoji: "⛈️",
      accent: "#2a9d8f",
      questions: [
        {
          id: "c9a-01", notion: "Catégorie & critère A (exposition)", type: "qcm",
          question: "Quel est le critère diagnostique principal des troubles liés à des traumatismes ou facteurs de stress ?",
          options: [
            "L'exposition à un événement traumatique ou stressant",
            "La présence d'anxiété généralisée",
            "Une humeur dépressive persistante",
            "Des obsessions et compulsions"
          ],
          reponse: 0,
          explication: "Catégorie en relation étroite avec les troubles anxieux, le TOC et les troubles dissociatifs. La détresse exprimée varie : peur/anxiété et/ou symptômes anhédoniques, dysphoriques, de colère, agressifs ou dissociatifs."
        },
        {
          id: "c9a-02", notion: "Catégorie & critère A (exposition)", type: "qcm",
          question: "Parmi les modes d'exposition du critère A du TSPT, lequel est valide ?",
          options: [
            "Être témoin direct d'un événement traumatique survenu à d'autres",
            "Voir des images choquantes dans un film de fiction",
            "Lire un article de journal sur une catastrophe",
            "Imaginer un événement traumatique"
          ],
          reponse: 0,
          explication: "4 voies : exposition directe · témoin direct · apprendre qu'un proche a vécu l'événement · exposition répétée/extrême aux caractéristiques aversives (p. ex. intervenants de première ligne, policiers)."
        },
        {
          id: "c9a-03", notion: "Catégorie & critère A (exposition)", type: "qcm",
          question: "Pour qu'apprendre la mort d'un proche compte dans le critère A, l'événement doit avoir été…",
          options: ["Violent ou accidentel", "Récent", "Prévisible", "Médiatisé"],
          reponse: 0,
          explication: "Dans le cas de mort effective ou de menace de mort d'un membre de la famille ou d'un ami, l'événement doit avoir été violent ou accidentel."
        },
        {
          id: "c9a-04", notion: "Symptômes envahissants (critère B)", type: "qcm",
          question: "Les flashbacks sont classés comme…",
          options: ["Des réactions dissociatives", "Des hallucinations", "Des obsessions", "Des illusions"],
          reponse: 0,
          explication: "Réactions dissociatives : la personne sent ou agit comme si l'événement allait se reproduire — sur un continuum pouvant aller jusqu'à l'abolition de la conscience de l'environnement."
        },
        {
          id: "c9a-05", notion: "Symptômes envahissants (critère B)", type: "qcm",
          question: "Lequel est un symptôme envahissant (critère B) du TSPT ?",
          options: [
            "Des rêves répétitifs de détresse liés à l'événement",
            "L'hypervigilance",
            "L'évitement des conversations liées au trauma",
            "Le sentiment de détachement d'autrui"
          ],
          reponse: 0,
          explication: "Critère B : souvenirs involontaires envahissants, rêves répétitifs, réactions dissociatives (flashbacks), détresse psychique intense et réactions physiologiques aux indices rappelant le trauma."
        },
        {
          id: "c9a-06", notion: "Évitement & altérations cognitives (C, D)", type: "qcm",
          question: "Le critère C (évitement) comporte…",
          options: [
            "L'évitement des souvenirs/pensées internes et/ou des rappels externes",
            "Uniquement l'évitement des lieux",
            "L'isolement social complet",
            "L'amnésie dissociative"
          ],
          reponse: 0,
          explication: "2 manifestations possibles (1 suffit) : éviter souvenirs, pensées ou sentiments liés au trauma ; éviter les rappels externes (personnes, endroits, conversations, activités, objets, situations)."
        },
        {
          id: "c9a-07", notion: "Évitement & altérations cognitives (C, D)", type: "qcm",
          question: "L'incapacité à se rappeler un aspect important du trauma est typiquement due à…",
          options: ["L'amnésie dissociative", "Un traumatisme crânien", "L'alcool", "Le vieillissement"],
          reponse: 0,
          explication: "Critère D : typiquement l'amnésie dissociative — et non un traumatisme crânien, l'alcool ou des drogues."
        },
        {
          id: "c9a-08", notion: "Évitement & altérations cognitives (C, D)", type: "qcm",
          question: "« Je suis mauvais », « on ne peut faire confiance à personne » illustrent…",
          options: [
            "Des croyances négatives persistantes et exagérées (critère D)",
            "Des idées délirantes",
            "Des hallucinations",
            "Des obsessions"
          ],
          reponse: 0,
          explication: "Croyances ou attentes négatives exagérées sur soi, les autres ou le monde. Le critère D exige 2 éléments ou plus (état émotionnel négatif, perte d'intérêt, détachement, incapacité d'émotions positives…)."
        },
        {
          id: "c9a-09", notion: "Éveil & réactivité (critère E)", type: "qcm",
          question: "Lequel appartient au critère E (altérations de l'éveil et de la réactivité) ?",
          options: [
            "La réaction de sursaut exagérée",
            "Les flashbacks",
            "L'évitement des lieux liés au trauma",
            "Les croyances négatives sur soi"
          ],
          reponse: 0,
          explication: "Critère E (2 ou plus) : irritabilité/accès de colère, comportement irréfléchi ou autodestructeur, hypervigilance, sursaut exagéré, problèmes de concentration, perturbation du sommeil."
        },
        {
          id: "c9a-10", notion: "Durée & spécifications", type: "qcm",
          question: "Pour diagnostiquer un TSPT, la perturbation (symptômes B, C, D, E) doit durer…",
          options: ["Plus d'1 mois", "Plus de 3 jours", "Plus de 6 mois", "Plus d'1 an"],
          reponse: 0,
          explication: "Plus d'un mois, avec souffrance cliniquement significative ou altération du fonctionnement, et non imputable à une substance ou affection médicale."
        },
        {
          id: "c9a-11", notion: "Durée & spécifications", type: "qcm",
          question: "La spécification « à expression retardée » signifie que…",
          options: [
            "L'ensemble des critères n'est présent que 6 mois après l'événement",
            "Les symptômes durent plus de 6 mois",
            "Le trauma date de l'enfance",
            "Le traitement a commencé tardivement"
          ],
          reponse: 0,
          explication: "L'ensemble des critères se présente 6 mois (ou plus) après l'événement. Autre spécification : avec symptômes dissociatifs (dépersonnalisation ou déréalisation)."
        },
        {
          id: "c9a-12", notion: "Durée & spécifications", type: "qcm",
          question: "La déréalisation correspond à…",
          options: [
            "Le monde semble irréel, comme dans un rêve, éloigné ou déformé",
            "Se sentir détaché de soi-même, comme un observateur",
            "Une perte de mémoire",
            "Des flashbacks intenses"
          ],
          reponse: 0,
          explication: "Déréalisation = le monde paraît irréel ; dépersonnalisation = se sentir détaché de soi, être un observateur de soi-même."
        },
        {
          id: "c9a-13", notion: "Prévalence & évolution du TSPT", type: "qcm",
          question: "Quelle est la prévalence à vie du TSPT ?",
          options: ["6,1 à 8,3 %", "1 à 2 %", "15 à 20 %", "25 %"],
          reponse: 0,
          explication: "À vie : 6,1-8,3 % ; sur 12 mois : 4,7 % ; plus fréquent chez les femmes."
        },
        {
          id: "c9a-14", notion: "Prévalence & évolution du TSPT", type: "qcm",
          question: "Chez les survivants de viol, de combat militaire, de captivité ou de génocide, le TSPT touche…",
          options: ["1/3 à 1/2", "1/10", "2/3 à 3/4", "Moins de 5 %"],
          reponse: 0,
          explication: "1/3 à 1/2. Le risque augmente aussi chez les vétérans et les emplois exposés (policiers, ambulanciers, personnel médical)."
        },
        {
          id: "c9a-15", notion: "Prévalence & évolution du TSPT", type: "qcm",
          question: "Le rétablissement complet survient autour de 3 mois chez…",
          options: ["La moitié des adultes", "Le quart des adultes", "10 % des adultes", "La quasi-totalité des adultes"],
          reponse: 0,
          explication: "Environ la moitié des adultes se rétablissent complètement autour de 3 mois. Juste après l'événement : symptômes de stress aigu."
        },
        {
          id: "c9a-16", notion: "Prévalence & évolution du TSPT", type: "qcm",
          question: "Quel pourcentage des personnes avec TSPT présente au moins un autre trouble mental ?",
          options: ["Plus de 80 %", "Environ 50 %", "Environ 30 %", "Environ 10 %"],
          reponse: 0,
          explication: "Comorbidité très élevée : 80 % et plus de risque d'avoir au moins 1 autre trouble mental."
        },
        {
          id: "c9a-17", notion: "Prévalence & évolution du TSPT", type: "qcm",
          question: "Le stress aigu se limite à une période de…",
          options: ["3 jours à 1 mois après l'événement", "1 à 6 mois", "6 mois et plus", "48 heures"],
          reponse: 0,
          explication: "Le stress aigu couvre 3 jours à 1 mois après l'événement ; au-delà d'un mois, on parle de TSPT si les critères sont remplis."
        },
        {
          id: "c9a-18", notion: "Facteurs de risque", type: "qcm",
          question: "Lequel de ces facteurs augmente le risque de TSPT ?",
          options: [
            "La dissociation pendant l'événement et sa persistance ensuite",
            "Un haut niveau d'éducation",
            "Un bon soutien social",
            "L'âge avancé"
          ],
          reponse: 0,
          explication: "Facteurs de risque : sévérité du trauma, perception de menace mortelle, blessures physiques, violence interpersonnelle, et chez les militaires : avoir commis des violences, tué ou été témoin d'atrocités."
        },
        {
          id: "c9a-19", notion: "Traitement du TSPT", type: "qcm",
          question: "L'exposition prolongée vise à…",
          options: [
            "Réduire l'évitement et diminuer la peur conditionnée",
            "Prescrire des anxiolytiques",
            "Éviter de parler du trauma",
            "Renforcer l'hypervigilance"
          ],
          reponse: 0,
          explication: "Revisiter progressivement les souvenirs traumatiques et les endroits sécuritaires évités, pour traiter l'aspect émotionnel du souvenir."
        },
        {
          id: "c9a-20", notion: "Traitement du TSPT", type: "qcm",
          question: "L'EMDR consiste à…",
          options: [
            "Évoquer le souvenir traumatique pendant une stimulation bilatérale (mouvements oculaires)",
            "Réapprendre à dormir sans cauchemars",
            "Une exposition en réalité virtuelle",
            "Un entraînement à la relaxation musculaire"
          ],
          reponse: 0,
          explication: "Eye Movement Desensitization and Reprocessing : facilite le retraitement du souvenir traumatique grâce à une stimulation bilatérale."
        },
        {
          id: "c9a-21", notion: "Traitement du TSPT", type: "qcm",
          question: "« L'intégration du souvenir traumatique » vise à transformer…",
          options: [
            "Un souvenir fragmenté et envahissant en souvenir autobiographique intégré",
            "Les cauchemars en rêves agréables",
            "La colère en tristesse",
            "Le souvenir en oubli complet"
          ],
          reponse: 0,
          explication: "Composantes du traitement : psychoéducation, régulation émotionnelle, travail sur l'évitement, intégration du souvenir, reconstruction du sens. L'alliance thérapeutique est centrale."
        },
        {
          id: "c9a-22", notion: "Traitement du TSPT", type: "qcm",
          question: "La TCC du TSPT cible notamment…",
          options: [
            "Les croyances dysfonctionnelles découlant du trauma (« c'est ma faute », « je suis brisé »)",
            "La régulation du poids",
            "L'extinction des hallucinations",
            "Le sevrage médicamenteux"
          ],
          reponse: 0,
          explication: "Travail sur la honte, la culpabilité, les croyances de danger permanent et les généralisations négatives sur soi et les autres."
        },
        {
          id: "c9a-23", notion: "Troubles de l'adaptation", type: "qcm",
          question: "Dans le trouble de l'adaptation, les symptômes apparaissent dans les … suivant le facteur de stress.",
          options: ["3 mois", "6 mois", "1 mois", "12 mois"],
          reponse: 0,
          explication: "Symptômes émotionnels ou comportementaux dans les 3 mois suivant l'exposition au(x) facteur(s) de stress identifiable(s) — p. ex. rupture, difficultés financières, retraite."
        },
        {
          id: "c9a-24", notion: "Troubles de l'adaptation", type: "qcm",
          question: "Une fois le facteur de stress (ou ses conséquences) terminé, les symptômes ne persistent pas au-delà de…",
          options: ["6 mois", "3 mois", "1 an", "1 mois"],
          reponse: 0,
          explication: "Période additionnelle maximale de 6 mois. La détresse est hors de proportion par rapport au stresseur, ou le fonctionnement est altéré."
        },
        {
          id: "c9a-25", notion: "Troubles de l'adaptation", type: "qcm",
          question: "Quelle est la prévalence des troubles de l'adaptation en ambulatoire ?",
          options: ["5 à 20 %", "1 à 3 %", "30 à 50 %", "Moins de 1 %"],
          reponse: 0,
          explication: "Fréquents ! 5-20 % en ambulatoire. Associés à un risque accru de tentatives de suicide et de suicide ; accompagnent souvent des affections médicales."
        },
        {
          id: "c9a-26", notion: "Troubles de l'adaptation", type: "vf",
          question: "Un deuil normal permet de diagnostiquer un trouble de l'adaptation.",
          options: ["Vrai", "Faux"],
          reponse: 1,
          explication: "Faux : les symptômes d'un deuil normal sont explicitement exclus. Le trouble du deuil prolongé, lui, se diagnostique après 12 mois."
        },
        {
          id: "c9a-27", notion: "Troubles de l'adaptation", type: "qcm",
          question: "Parmi les spécifications du trouble de l'adaptation, on trouve…",
          options: [
            "Avec humeur dépressive, avec anxiété, avec perturbation des conduites",
            "Avec catatonie",
            "Avec symptômes psychotiques",
            "À expression retardée"
          ],
          reponse: 0,
          explication: "6 spécifications : humeur dépressive · anxiété · mixte anxiété/dépression · perturbation des conduites · perturbation mixte des émotions et des conduites · non spécifié."
        },
        {
          id: "c9a-28", notion: "Cas clinique — trauma & stress", type: "cas",
          question: "Un ancien militaire, 4 mois après un combat, fait des cauchemars et des flashbacks de l'événement, évite tout ce qui le rappelle, est hypervigilant, sursaute au moindre bruit et se sent détaché des autres. Diagnostic ?",
          options: [
            "Trouble de stress post-traumatique",
            "Trouble de stress aigu",
            "Trouble de l'adaptation avec anxiété",
            "Trouble panique"
          ],
          reponse: 0,
          explication: "Exposition + symptômes envahissants (cauchemars, flashbacks) + évitement + altérations cognitivo-émotionnelles (détachement) + hyperréactivité (hypervigilance, sursaut), durée > 1 mois (4 mois) = TSPT. (< 1 mois → trouble de stress aigu.)"
        },
        {
          id: "c9a-29", notion: "Cas clinique — trauma & stress", type: "cas",
          question: "Deux mois après une rupture amoureuse, un homme présente une humeur dépressive et de l'anxiété qui altèrent son travail, sans atteindre les critères d'un trouble dépressif caractérisé. Ce n'est pas un deuil. Diagnostic ?",
          options: [
            "Trouble de l'adaptation",
            "Trouble de stress post-traumatique",
            "Trouble dépressif caractérisé",
            "Deuil prolongé"
          ],
          reponse: 0,
          explication: "Symptômes émotionnels dans les 3 mois suivant un facteur de stress identifiable, cliniquement significatifs, ne répondant pas à un autre trouble et n'étant pas un deuil normal = trouble de l'adaptation. (Une rupture n'est pas un événement traumatique au sens du critère A du TSPT.)"
        },
        {
          id: "c9a-30", notion: "Discrimination stress aigu / TSPT", type: "qcm",
          question: "Quel élément distingue principalement le trouble de stress aigu du TSPT ?",
          options: [
            "La durée : 3 jours à 1 mois pour le stress aigu, plus d'1 mois pour le TSPT",
            "La nature de l'événement traumatique",
            "La présence de flashbacks",
            "L'altération du fonctionnement"
          ],
          reponse: 0,
          explication: "Le critère distinctif est temporel : le stress aigu couvre 3 jours à 1 mois après l'événement ; au-delà d'un mois (si les critères sont remplis), on parle de TSPT."
        }
      ]
    },

    {
      id: "cours9b",
      titre: "Cours 9b — Troubles liés à l'utilisation d'une substance",
      court: "Substances",
      emoji: "🧪",
      accent: "#e9a23b",
      questions: [
        {
          id: "c9b-01", notion: "Classes & organisation du DSM", type: "qcm",
          question: "Le DSM-5-TR regroupe combien de classes de drogues ?",
          options: ["10", "5", "12", "8"],
          reponse: 0,
          explication: "10 classes : alcool, caféine, cannabis, hallucinogènes (dont PCP), substances inhalées, opiacés, sédatifs/hypnotiques/anxiolytiques, stimulants, tabac, substance autre/inconnue."
        },
        {
          id: "c9b-02", notion: "Classes & organisation du DSM", type: "qcm",
          question: "Laquelle n'est PAS une des 10 classes de drogues du DSM-5-TR ?",
          options: ["Le sucre", "La caféine", "Le tabac", "Les substances inhalées"],
          reponse: 0,
          explication: "La caféine et le tabac font bien partie des 10 classes — pas le sucre."
        },
        {
          id: "c9b-03", notion: "Classes & organisation du DSM", type: "qcm",
          question: "Quelle caractéristique est commune aux 10 classes de drogues prises en excès ?",
          options: [
            "La stimulation du système cérébral de récompense",
            "La sédation du système nerveux",
            "L'augmentation de la sérotonine",
            "La diminution de la dopamine"
          ],
          reponse: 0,
          explication: "Prises en excès, elles stimulent le circuit de récompense et produisent plaisir et « high ». Un faible contrôle de soi (mécanismes cérébraux d'inhibition) augmente le risque."
        },
        {
          id: "c9b-04", notion: "Classes & organisation du DSM", type: "qcm",
          question: "Quel trouble NON lié à une substance est inclus dans le DSM-5-TR ?",
          options: [
            "Le jeu d'argent pathologique",
            "L'addiction au sexe",
            "L'addiction aux achats",
            "L'addiction à l'exercice physique"
          ],
          reponse: 0,
          explication: "Seul le jeu d'argent pathologique est inclus. Les autres addictions comportementales sont exclues : données insuffisantes pour établir des critères diagnostiques."
        },
        {
          id: "c9b-05", notion: "Classes & organisation du DSM", type: "qcm",
          question: "Les troubles induits par une substance comprennent…",
          options: [
            "L'intoxication, le sevrage et les troubles mentaux induits",
            "Uniquement l'intoxication",
            "La tolérance et le craving",
            "Uniquement le sevrage"
          ],
          reponse: 0,
          explication: "Pour chaque substance, 2 groupes : troubles de l'usage ET troubles induits (intoxication, sevrage, autres troubles mentaux induits — psychotiques, bipolaires, dépressifs, anxieux, du sommeil…)."
        },
        {
          id: "c9b-06", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "Les critères du trouble de l'usage d'une substance s'organisent en 4 groupes. Lequel en fait partie ?",
          options: [
            "La réduction du contrôle",
            "Les symptômes psychotiques",
            "L'humeur dépressive",
            "Les troubles du sommeil"
          ],
          reponse: 0,
          explication: "4 groupes : réduction du contrôle · altération du fonctionnement social · consommation risquée · critères pharmacologiques (tolérance, sevrage)."
        },
        {
          id: "c9b-07", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "Sévérité du trouble de l'usage : le niveau « moyen » correspond à…",
          options: ["4-5 symptômes", "2-3 symptômes", "6 symptômes et plus", "8 symptômes et plus"],
          reponse: 0,
          explication: "Léger : 2-3 · moyen : 4-5 · grave : 6 et plus."
        },
        {
          id: "c9b-08", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "Le trouble de l'usage de l'alcool exige au moins 2 manifestations sur une période de…",
          options: ["12 mois", "6 mois", "3 mois", "24 mois"],
          reponse: 0,
          explication: "Au moins 2 manifestations au cours d'une période de 12 mois, conduisant à une altération du fonctionnement ou une souffrance cliniquement significative."
        },
        {
          id: "c9b-09", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "Le craving désigne…",
          options: [
            "Une envie impérieuse, un besoin pressant de consommer",
            "La tolérance à la substance",
            "Les symptômes de sevrage",
            "Le déni du problème"
          ],
          reponse: 0,
          explication: "Envie impérieuse, fort désir ou besoin pressant de consommer — il fait partie du groupe « réduction du contrôle » (critère A4)."
        },
        {
          id: "c9b-10", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "La tolérance se définit par…",
          options: [
            "Le besoin de quantités plus fortes, ou un effet diminué à quantité égale",
            "La consommation quotidienne",
            "Le besoin de consommer pour éviter le sevrage",
            "Une perte de mémoire après consommation"
          ],
          reponse: 0,
          explication: "Critère pharmacologique : quantités notablement plus fortes pour obtenir l'effet désiré, OU effet notablement diminué avec la même quantité."
        },
        {
          id: "c9b-11", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "La « rémission précoce » du trouble de l'usage correspond à l'absence de critères (sauf le craving) pendant…",
          options: ["3 à 12 mois", "Au moins 12 mois", "1 à 3 mois", "2 ans"],
          reponse: 0,
          explication: "Rémission précoce : 3 à 12 mois ; rémission prolongée : au moins 12 mois (le craving A4 peut persister). Autre spécification : en environnement protégé."
        },
        {
          id: "c9b-12", notion: "Intoxication & sevrage (alcool)", type: "qcm",
          question: "L'intoxication ne s'applique PAS à quelle substance ?",
          options: ["Le tabac", "L'alcool", "Le cannabis", "La caféine"],
          reponse: 0,
          explication: "L'intoxication (syndrome réversible dû à la prise récente d'une substance) ne s'applique pas au tabac."
        },
        {
          id: "c9b-13", notion: "Intoxication & sevrage (alcool)", type: "qcm",
          question: "Lequel est un signe d'INTOXICATION à l'alcool ?",
          options: ["Le nystagmus", "Les crises convulsives", "L'hyperactivité neurovégétative", "Le tremblement des mains"],
          reponse: 0,
          explication: "Intoxication (≥ 1 signe) : discours bredouillant, incoordination motrice, démarche ébrieuse, nystagmus, altération de l'attention/mémoire, stupeur ou coma. Les autres réponses = sevrage."
        },
        {
          id: "c9b-14", notion: "Intoxication & sevrage (alcool)", type: "qcm",
          question: "Le nystagmus est…",
          options: [
            "Un mouvement involontaire, répétitif et rapide des yeux",
            "Un tremblement des mains",
            "Une démarche ébrieuse",
            "Un trouble de la mémoire"
          ],
          reponse: 0,
          explication: "Mouvement oculaire involontaire, répétitif et rapide — un des signes possibles de l'intoxication à l'alcool."
        },
        {
          id: "c9b-15", notion: "Intoxication & sevrage (alcool)", type: "qcm",
          question: "Le sevrage à l'alcool requiert au moins 2 manifestations apparaissant…",
          options: [
            "De quelques heures à quelques jours après l'arrêt",
            "Immédiatement après le dernier verre",
            "Une semaine après l'arrêt",
            "Un mois après l'arrêt"
          ],
          reponse: 0,
          explication: "Après l'arrêt (ou la réduction) d'un usage massif et prolongé : hyperactivité neurovégétative, tremblements, insomnie, nausées, hallucinations transitoires, agitation, anxiété, convulsions."
        },
        {
          id: "c9b-16", notion: "Intoxication & sevrage (alcool)", type: "qcm",
          question: "Quelle manifestation grave peut survenir lors du sevrage à l'alcool ?",
          options: [
            "Des crises convulsives généralisées tonicocloniques",
            "Le nystagmus",
            "La stupeur ou le coma",
            "Un discours bredouillant"
          ],
          reponse: 0,
          explication: "Crises tonicocloniques : phase tonique (raidissement, 10-30 s) puis phase clonique (secousses, 1-3 min)."
        },
        {
          id: "c9b-17", notion: "Étiologie — facteurs biologiques", type: "qcm",
          question: "Le circuit de récompense mésolimbique dopaminergique comprend…",
          options: [
            "L'aire tegmentale ventrale, le noyau accumbens et le cortex préfrontal",
            "L'hippocampe, l'amygdale et le thalamus",
            "Le cervelet, le bulbe et le pont",
            "L'hypothalamus, l'hypophyse et les surrénales"
          ],
          reponse: 0,
          explication: "Ce circuit renforce les comportements de consommation : plaisir, récompense, association puissante avec la substance."
        },
        {
          id: "c9b-18", notion: "Étiologie — facteurs biologiques", type: "qcm",
          question: "L'exposition répétée à une substance provoque (neuroadaptations)…",
          options: [
            "Tolérance, sevrage, craving et sensibilisation aux indices",
            "Une immunité progressive à la substance",
            "Une diminution durable du craving",
            "La disparition du circuit de récompense"
          ],
          reponse: 0,
          explication: "Ces neuroadaptations entraînent un risque persistant de rechute."
        },
        {
          id: "c9b-19", notion: "Étiologie — facteurs psychologiques", type: "qcm",
          question: "Consommer pour soulager ou éviter des émotions négatives correspond à…",
          options: ["Le renforcement négatif", "Le renforcement positif", "Le conditionnement classique", "La sensibilisation"],
          reponse: 0,
          explication: "Renforcement négatif = soulagement ; renforcement positif = plaisir. S'ajoutent les difficultés de régulation émotionnelle et l'impulsivité."
        },
        {
          id: "c9b-20", notion: "Étiologie — facteurs psychologiques", type: "qcm",
          question: "Dans les « raisons pour boire », l'échelle de compensation correspond à…",
          options: [
            "Des raisons internes négatives (diminuer ou éviter des émotions négatives)",
            "Des raisons internes positives (état d'esprit positif)",
            "Des raisons externes positives (gratifications sociales)",
            "Des raisons externes négatives (conformité)"
          ],
          reponse: 0,
          explication: "4 échelles : renforcement (interne +), compensation (interne −), sociale (externe +), conformité (externe −). Le boire devient surtout problématique en mode compensation."
        },
        {
          id: "c9b-21", notion: "Étiologie — facteurs psychologiques", type: "qcm",
          question: "Pourquoi des lieux, personnes et émotions deviennent-ils des déclencheurs de consommation ?",
          options: [
            "Par conditionnement : un apprentissage puissant et durable",
            "Par hérédité",
            "Par effet placebo",
            "Par simple tolérance"
          ],
          reponse: 0,
          explication: "Le craving peut être induit par les indices environnementaux associés à la substance — un apprentissage puissant et durable."
        },
        {
          id: "c9b-22", notion: "Étiologie — facteurs sociaux & familiaux", type: "qcm",
          question: "Lequel est un facteur FAMILIAL de risque ?",
          options: [
            "Une faible supervision parentale",
            "L'accessibilité des substances",
            "Les normes sociales",
            "L'influence des pairs"
          ],
          reponse: 0,
          explication: "Facteurs familiaux : consommation parentale, conflits, négligence, violence, faible supervision. Les trois autres sont des facteurs sociaux (surtout à l'adolescence)."
        },
        {
          id: "c9b-23", notion: "Étiologie — facteurs sociaux & familiaux", type: "vf",
          question: "La théorie du marchepied (le cannabis mènerait aux drogues dures) est aujourd'hui rejetée.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai — la théorie du marchepied (gateway) est rejetée."
        },
        {
          id: "c9b-24", notion: "Alcool — données épidémiologiques", type: "qcm",
          question: "Selon l'OMS (2014), l'alcool a causé combien de décès dans le monde en 2012 ?",
          options: [
            "3,3 millions (5,9 % de l'ensemble des décès)",
            "1 million",
            "10 millions",
            "500 000"
          ],
          reponse: 0,
          explication: "7,9 % des décès chez les hommes, 4 % chez les femmes, 25 % chez les 20-39 ans. Facteur étiologique dans plus de 200 types de maladies et blessures."
        },
        {
          id: "c9b-25", notion: "Traitement", type: "qcm",
          question: "L'entretien motivationnel cible principalement…",
          options: ["L'ambivalence à changer", "Les pensées automatiques", "La dynamique familiale", "Le soutien social"],
          reponse: 0,
          explication: "Interventions et cibles : TCC → pensées/comportements/coping ; prévention de la rechute → situations à risque ; pleine conscience → craving/impulsivité ; pharmacothérapie → craving/abstinence."
        },
        {
          id: "c9b-26", notion: "Traitement", type: "qcm",
          question: "La pharmacothérapie des troubles de l'usage cible…",
          options: ["Le craving et l'abstinence", "L'ambivalence", "La dynamique familiale", "Les situations à risque"],
          reponse: 0,
          explication: "La pharmacothérapie vise le craving et le maintien de l'abstinence."
        },
        {
          id: "c9b-27", notion: "Traitement", type: "vf",
          question: "Dans le traitement, les rechutes doivent être normalisées et utilisées comme sources d'apprentissage.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai : on normalise les rechutes, on explore les fonctions de la consommation, on identifie les déclencheurs (triggers) et on favorise le soutien social."
        },
        {
          id: "c9b-28", notion: "Traitement", type: "qcm",
          question: "Lequel est un DÉFI du traitement des troubles liés à l'alcool ?",
          options: [
            "Le déni du problème",
            "L'absence de comorbidités",
            "L'excès de motivation",
            "La rareté des rechutes"
          ],
          reponse: 0,
          explication: "Défis : déni, nature toxicomanogène de l'alcool, troubles concomitants, perturbation du fonctionnement social/professionnel, difficulté à différencier causes et effets."
        },
        {
          id: "c9b-29", notion: "Cas clinique — substances", type: "cas",
          question: "Sur 12 mois, un patient présente : tolérance, craving, tentatives infructueuses de réduire, beaucoup de temps consacré à boire, et abandon d'activités — soit 5 critères. Quelle sévérité du trouble de l'usage de l'alcool ?",
          options: [
            "Moyen (4-5 symptômes)",
            "Léger (2-3 symptômes)",
            "Grave (6 symptômes et plus)",
            "Aucun trouble, simple usage"
          ],
          reponse: 0,
          explication: "Sévérité selon le nombre de critères : léger 2-3 · moyen 4-5 · grave ≥ 6. Ici 5 critères = sévérité moyenne."
        },
        {
          id: "c9b-30", notion: "Cas clinique — substances", type: "cas",
          question: "Quelques heures après avoir cessé une consommation massive et prolongée d'alcool, un patient présente sueurs, tachycardie, tremblement des mains, nausées et anxiété. De quoi s'agit-il ?",
          options: [
            "Un sevrage alcoolique",
            "Une intoxication alcoolique",
            "Un trouble psychotique induit par l'alcool",
            "Une tolérance"
          ],
          reponse: 0,
          explication: "Hyperactivité neurovégétative (sueurs, tachycardie), tremblements, nausées et anxiété survenant après l'arrêt d'un usage massif = syndrome de sevrage. (L'intoxication suit une prise récente : nystagmus, démarche ébrieuse, etc.)"
        },
        {
          id: "c9b-31", notion: "Discrimination intoxication / sevrage", type: "qcm",
          question: "Lequel de ces signes oriente vers une INTOXICATION (et non un sevrage) à l'alcool ?",
          options: [
            "Une démarche ébrieuse et un nystagmus",
            "Un tremblement des mains",
            "Des crises convulsives tonicocloniques",
            "Une hyperactivité neurovégétative"
          ],
          reponse: 0,
          explication: "Intoxication = prise récente : discours bredouillant, incoordination, démarche ébrieuse, nystagmus, stupeur. Sevrage = arrêt : tremblements, sueurs/tachycardie, nausées, convulsions."
        }
      ]
    },

    {
      id: "cours10",
      titre: "Cours 10 — Troubles de la personnalité",
      court: "Personnalité",
      emoji: "🎭",
      accent: "#c44d9b",
      questions: [
        {
          id: "c10-01", notion: "Introduction & définitions", type: "qcm",
          question: "Quelle affirmation définit le mieux un TROUBLE de la personnalité (vs un simple trait) ?",
          options: [
            "Des traits prononcés, durables, rigides et inadaptés qui génèrent souffrance et dysfonctionnement",
            "Une humeur dépressive qui dure depuis plus de 2 ans",
            "Un épisode bref de perte de contact avec la réalité",
            "Une réaction émotionnelle normale à un stress identifiable"
          ],
          reponse: 0,
          explication: "Les traits sont des modalités durables d'entrer en relation et de percevoir. Ils deviennent un trouble quand ils sont rigides, inadaptés, ne changent pas malgré des conséquences négatives, et provoquent souffrance et problèmes de fonctionnement."
        },
        {
          id: "c10-02", notion: "Introduction & définitions", type: "qcm",
          question: "Quelle est la prévalence des troubles de la personnalité dans la population ?",
          options: ["Environ 9 %", "Environ 1 %", "Environ 25 %", "Environ 0,7 %"],
          reponse: 0,
          explication: "≈ 9 % des individus. Globalement H = F, mais pas les mêmes types de TP. Apparition à l'adolescence ou au début de l'âge adulte."
        },
        {
          id: "c10-03", notion: "Introduction & définitions", type: "vf",
          question: "Chez la plupart des personnes, un trouble de la personnalité s'atténue avec le temps.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai : chez la plupart, le TP cause des problèmes modérés et s'atténue dans le temps. Chez une minorité, il cause des problèmes sévères et persistants. Comorbidité ++."
        },
        {
          id: "c10-04", notion: "Enjeux de l'évaluation", type: "qcm",
          question: "Que signifie le fait que les troubles de la personnalité sont « conformes au moi » (égosyntoniques) ?",
          options: [
            "La personne ne perçoit pas ses traits comme problématiques, ce qui réduit la fiabilité de l'auto-évaluation",
            "Les symptômes sont vécus comme étrangers et pénibles",
            "Le trouble est toujours reconnu par l'entourage",
            "Le diagnostic est très stable dans le temps"
          ],
          reponse: 0,
          explication: "Troubles conformes au moi → manque de fiabilité des données auto-rapportées, d'où l'importance d'une évaluation par des professionnels spécialisés."
        },
        {
          id: "c10-05", notion: "Enjeux de l'évaluation", type: "qcm",
          question: "Quel est un enjeu majeur de l'évaluation des troubles de la personnalité ?",
          options: [
            "Le chevauchement des critères entre les différents troubles",
            "L'absence totale de comorbidité",
            "La parfaite stabilité du diagnostic au test-retest",
            "L'inutilité des instruments standardisés"
          ],
          reponse: 0,
          explication: "Enjeux : instabilité du diagnostic (test-retest), chevauchement des critères, forte proportion de troubles « non spécifiés », difficulté à préciser le diagnostic."
        },
        {
          id: "c10-06", notion: "Enjeux de l'évaluation", type: "qcm",
          question: "Le PSY-5 est une échelle issue de quel instrument ?",
          options: [
            "Le MMPI-2 (Inventaire multiphasique de personnalité du Minnesota)",
            "Le MCMI-IV (Inventaire de Millon)",
            "Le DSM-5-TR",
            "L'échelle de Linehan"
          ],
          reponse: 0,
          explication: "PSY-5 = Personality Psychopathology-Five, issu du MMPI-2. L'autre instrument cité est le MCMI-IV (Millon). Limites : non-équivalence, variabilité inter-instruments, surestimation."
        },
        {
          id: "c10-07", notion: "Les 3 groupes (clusters)", type: "qcm",
          question: "Le Groupe A des troubles de la personnalité est décrit comme…",
          options: [
            "Bizarre / excentrique",
            "Théâtral, émotif, capricieux",
            "Anxieux / craintif",
            "Impulsif / antisocial"
          ],
          reponse: 0,
          explication: "Groupe A = bizarre/excentrique (3,6 %) ; Groupe B = théâtral, émotif, capricieux (4,5 %) ; Groupe C = anxieux/craintif (2,8 %)."
        },
        {
          id: "c10-08", notion: "Les 3 groupes (clusters)", type: "qcm",
          question: "Quels troubles composent le Groupe B ?",
          options: [
            "Borderline, histrionique, narcissique, antisociale",
            "Paranoïaque, schizoïde, schizotypique",
            "Évitante, dépendante, obsessionnelle-compulsive",
            "Paranoïaque, borderline, dépendante"
          ],
          reponse: 0,
          explication: "Groupe B (théâtral, émotif, capricieux) : borderline, histrionique, narcissique, antisociale."
        },
        {
          id: "c10-09", notion: "Les 3 groupes (clusters)", type: "qcm",
          question: "Dans quel groupe se trouve le trouble de la personnalité obsessionnelle-compulsive ?",
          options: ["Groupe C", "Groupe A", "Groupe B", "Aucun, c'est un trouble à part"],
          reponse: 0,
          explication: "Groupe C (anxieux/craintif) : évitante, dépendante, obsessionnelle-compulsive."
        },
        {
          id: "c10-10", notion: "Groupe A — paranoïaque", type: "qcm",
          question: "Quelle est la caractéristique centrale de la personnalité paranoïaque ?",
          options: [
            "Une méfiance soupçonneuse : les intentions d'autrui sont interprétées comme malveillantes",
            "Un détachement des relations sociales",
            "Des conduites excentriques et de la pensée magique",
            "Une quête excessive d'attention"
          ],
          reponse: 0,
          explication: "Méfiance soupçonneuse envahissante (≥ 4 manifestations) : s'attend à être exploité, doutes sur la loyauté, garde rancune, perçoit des attaques cachées, met en doute la fidélité du partenaire."
        },
        {
          id: "c10-11", notion: "Groupe A — schizoïde", type: "qcm",
          question: "La personnalité schizoïde se caractérise principalement par…",
          options: [
            "Le détachement des relations sociales et une restriction des expressions émotionnelles",
            "Une méfiance et une idéation persécutoire",
            "Des distorsions cognitives et perceptuelles excentriques",
            "Une instabilité des relations et de l'image de soi"
          ],
          reponse: 0,
          explication: "Schizoïde : ne recherche ni n'apprécie les relations proches, choisit des activités solitaires, indifférente aux éloges/critiques, froideur affective. À distinguer de la schizotypique (excentricité + distorsions)."
        },
        {
          id: "c10-12", notion: "Groupe A — schizotypique", type: "qcm",
          question: "Quelle manifestation est typique de la personnalité schizotypique ?",
          options: [
            "Croyances bizarres / pensée magique (superstition, télépathie, sixième sens)",
            "Un besoin excessif d'être pris en charge",
            "Un perfectionnisme rigide aux dépens de la souplesse",
            "Un mépris des droits d'autrui"
          ],
          reponse: 0,
          explication: "Schizotypique : idées de référence, pensée magique, perceptions inhabituelles, pensée et langage bizarres, idéation méfiante, affects pauvres, anxiété sociale persistante d'origine persécutoire (≥ 5 manifestations)."
        },
        {
          id: "c10-13", notion: "Groupe A — schizotypique", type: "qcm",
          question: "Les « idées de référence » de la personnalité schizotypique correspondent à…",
          options: [
            "La croyance erronée que des événements anodins ont une signification personnelle particulière",
            "Des hallucinations auditives impératives",
            "Une amnésie dissociative",
            "Une peur intense de l'abandon"
          ],
          reponse: 0,
          explication: "Idées de référence (à l'exception des idées délirantes de référence) : les événements/objets de l'environnement immédiat auraient une signification particulière et inhabituelle pour la personne."
        },
        {
          id: "c10-14", notion: "Groupe A — étiologie & comorbidité", type: "qcm",
          question: "La personnalité schizotypique présente notamment…",
          options: [
            "Une forte composante génétique liée au spectre schizophrénique",
            "Une héritabilité nulle",
            "Une origine exclusivement psychanalytique",
            "Un lien étroit avec les troubles alimentaires"
          ],
          reponse: 0,
          explication: "Schizotypique : forte composante génétique liée au spectre schizophrénique et anomalies neurodéveloppementales ; mécanismes : pensée magique, perceptions inhabituelles, difficultés à interpréter la réalité sociale."
        },
        {
          id: "c10-15", notion: "Groupe B — borderline (critères)", type: "qcm",
          question: "Quelle est la caractéristique centrale de la personnalité borderline (limite) ?",
          options: [
            "Une instabilité des relations, de l'image de soi et des affects avec une impulsivité marquée",
            "Une méfiance soupçonneuse envahissante",
            "Une grandiosité et un besoin d'être admiré",
            "Un perfectionnisme et un besoin de contrôle"
          ],
          reponse: 0,
          explication: "Borderline (≥ 5 manifestations) : efforts effrénés pour éviter l'abandon, relations instables (idéalisation/dévalorisation), perturbation de l'identité, impulsivité, gestes suicidaires/automutilation, instabilité affective, vide chronique, colères intenses, idéation persécutoire/dissociation transitoire."
        },
        {
          id: "c10-16", notion: "Groupe B — borderline (critères)", type: "qcm",
          question: "L'alternance entre idéalisation excessive et dévalorisation d'une même personne est typique de…",
          options: [
            "La personnalité borderline",
            "La personnalité schizoïde",
            "La personnalité obsessionnelle-compulsive",
            "La personnalité dépendante"
          ],
          reponse: 0,
          explication: "C'est un critère du trouble borderline : mode de relations interpersonnelles instables et intenses, oscillant entre les positions extrêmes d'idéalisation et de dévalorisation (le « clivage »)."
        },
        {
          id: "c10-17", notion: "Groupe B — borderline (critères)", type: "qcm",
          question: "Quelle est la prévalence du trouble borderline, et chez qui est-il plus fréquent ?",
          options: [
            "2-6 %, plus fréquent chez les femmes",
            "0,7 %, plus fréquent chez les hommes",
            "9 %, identique chez H et F",
            "1-4 %, plus fréquent chez les hommes"
          ],
          reponse: 0,
          explication: "Borderline : 2-6 %, plus fréquent chez les femmes. Comorbidités : troubles de l'humeur, usage de substances, TSPT, troubles alimentaires, TDAH, TP du groupe A."
        },
        {
          id: "c10-18", notion: "Groupe B — histrionique", type: "qcm",
          question: "La personnalité histrionique se caractérise par…",
          options: [
            "Des réponses émotionnelles excessives et une quête d'attention",
            "Un mépris et une transgression des droits d'autrui",
            "Une inhibition sociale et un sentiment d'infériorité",
            "Un détachement émotionnel et de la froideur"
          ],
          reponse: 0,
          explication: "Histrionique (≥ 5) : mal à l'aise quand pas au centre de l'attention, séduction inadaptée, expression émotionnelle superficielle et changeante, théâtralisme, suggestibilité, surestime l'intimité des relations."
        },
        {
          id: "c10-19", notion: "Groupe B — narcissique", type: "qcm",
          question: "La triade centrale de la personnalité narcissique est…",
          options: [
            "Grandiosité, besoin d'être admiré, manque d'empathie",
            "Méfiance, rancune, idéation persécutoire",
            "Impulsivité, instabilité affective, peur de l'abandon",
            "Perfectionnisme, rigidité, avarice"
          ],
          reponse: 0,
          explication: "Narcissique (≥ 5) : sens grandiose de sa propre importance, fantaisies de succès illimité, sentiment d'être « spécial », besoin excessif d'admiration, sentiment que tout lui est dû, exploitation d'autrui, manque d'empathie, envie, arrogance."
        },
        {
          id: "c10-20", notion: "Groupe B — narcissique", type: "qcm",
          question: "Selon l'étiologie, la grandiosité narcissique est souvent…",
          options: [
            "Compensatoire d'une fragilité de l'estime de soi et d'une hypersensibilité à la critique",
            "Le signe d'une estime de soi authentiquement solide",
            "Sans aucun lien avec l'estime de soi",
            "Causée par une lésion du lobe frontal"
          ],
          reponse: 0,
          explication: "Mécanismes : grandiosité compensatoire, fragilité de l'estime de soi, hypersensibilité à la critique ; sensibilité aux enjeux de statut, survalorisation ou dévalorisation chronique, attachement insécure."
        },
        {
          id: "c10-21", notion: "Groupe B — antisociale", type: "qcm",
          question: "Pour diagnostiquer une personnalité antisociale, quelles conditions d'âge s'appliquent ?",
          options: [
            "Au moins 18 ans, avec un trouble des conduites débutant avant 15 ans",
            "Au moins 15 ans, sans antécédent requis",
            "Au moins 21 ans, avec début à l'âge adulte",
            "Aucune condition d'âge"
          ],
          reponse: 0,
          explication: "Mépris et transgression des droits d'autrui depuis l'âge de 15 ans (≥ 3 manifestations), âge ≥ 18 ans, et manifestations d'un trouble des conduites avant 15 ans."
        },
        {
          id: "c10-22", notion: "Groupe B — antisociale", type: "qcm",
          question: "Quel pourcentage des personnes avec une personnalité antisociale a un autre diagnostic psychologique à vie ?",
          options: ["90 %", "50 %", "25 %", "10 %"],
          reponse: 0,
          explication: "Antisociale : prévalence 1-4 % (+ chez les hommes, les jeunes adultes, les personnes défavorisées). 90 % ont un autre diagnostic à vie ; comorbidité fréquente avec les troubles liés à l'usage d'une substance."
        },
        {
          id: "c10-23", notion: "Groupe C — évitante", type: "qcm",
          question: "Qu'est-ce qui distingue la personnalité évitante de la personnalité schizoïde ?",
          options: [
            "L'évitante DÉSIRE des relations mais les évite par peur du rejet ; la schizoïde n'en éprouve pas le besoin",
            "L'évitante recherche activement l'attention",
            "La schizoïde craint surtout la critique",
            "Il n'y a aucune différence"
          ],
          reponse: 0,
          explication: "Évitante : inhibition sociale, sentiment de ne pas être à la hauteur, hypersensibilité au jugement négatif — évitement par crainte du rejet. La schizoïde, elle, ne recherche tout simplement pas les relations."
        },
        {
          id: "c10-24", notion: "Groupe C — dépendante", type: "qcm",
          question: "La personnalité dépendante se caractérise par…",
          options: [
            "Un besoin excessif d'être pris en charge, un comportement soumis et « collant »",
            "Une préoccupation par l'ordre et le contrôle",
            "Une méfiance envahissante",
            "Une grandiosité et un besoin d'admiration"
          ],
          reponse: 0,
          explication: "Dépendante (≥ 5) : difficulté à décider sans être rassurée, besoin que d'autres assument les responsabilités, mal à exprimer un désaccord, cherche une nouvelle relation en urgence après une rupture, peur d'être laissée seule."
        },
        {
          id: "c10-25", notion: "Groupe C — obsessionnelle-compulsive", type: "qcm",
          question: "La personnalité obsessionnelle-compulsive (TPOC) se caractérise par…",
          options: [
            "Une préoccupation par l'ordre, le perfectionnisme et le contrôle, aux dépens de la souplesse",
            "Des obsessions et compulsions intrusives reconnues comme pénibles",
            "Une impulsivité marquée",
            "Une quête théâtrale d'attention"
          ],
          reponse: 0,
          explication: "TPOC (≥ 4) : préoccupation par les détails/règles, perfectionnisme qui entrave l'achèvement des tâches, dévotion excessive au travail, rigidité morale, incapacité à jeter, réticence à déléguer, avarice, entêtement. À ne pas confondre avec le TOC (égodystonique)."
        },
        {
          id: "c10-26", notion: "Groupe C — obsessionnelle-compulsive", type: "vf",
          question: "Moins de 20 % des personnes ayant un TOC présentent un trouble de la personnalité obsessionnelle-compulsive.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai — TPOC et TOC sont distincts. Le TPOC est d'ailleurs le plus prévalent du groupe C (4-8 %, + chez les hommes)."
        },
        {
          id: "c10-27", notion: "Groupe C — prévalences", type: "qcm",
          question: "Quel trouble du groupe C est le plus fréquent dans la population ?",
          options: [
            "Obsessionnelle-compulsive (4-8 %)",
            "Évitante (2 %)",
            "Dépendante (1 %)",
            "Ils ont tous la même prévalence"
          ],
          reponse: 0,
          explication: "Groupe C : obsessionnelle-compulsive 4-8 % (+ H) · évitante 2 % (+ F) · dépendante 1 % (+ F)."
        },
        {
          id: "c10-28", notion: "Traitement — enjeux & psychothérapie", type: "qcm",
          question: "Pourquoi le traitement des troubles de la personnalité est-il particulièrement complexe ?",
          options: [
            "Les enjeux relationnels de l'individu se rejouent dans le lien à l'aidant, et la comorbidité complique le suivi",
            "Parce qu'il n'existe aucune psychothérapie efficace",
            "Parce que les patients reconnaissent toujours facilement leur trouble",
            "Parce que la durée du traitement est très courte"
          ],
          reponse: 0,
          explication: "Les enjeux relationnels se répercutent dans le lien thérapeutique ; l'entrée en traitement se fait souvent pour un autre problème ; la comorbidité complique le suivi ; la psychothérapie demande une fréquence et une durée +++++."
        },
        {
          id: "c10-29", notion: "Traitement — approches", type: "qcm",
          question: "La thérapie comportementale dialectique (DBT), développée par Linehan, vise notamment à…",
          options: [
            "Moduler les émotions et l'impulsivité, tolérer la détresse, éviter le « tout noir tout blanc »",
            "Renforcer la grandiosité du patient",
            "Explorer uniquement le transfert inconscient",
            "Prescrire systématiquement des antipsychotiques"
          ],
          reponse: 0,
          explication: "DBT (Linehan) : maîtriser émotions et comportements impulsifs, tolérer la détresse, se fier à ses pensées/émotions, éviter le clivage et favoriser l'intégration (synthèse), résolution de problèmes."
        },
        {
          id: "c10-30", notion: "Traitement — approches", type: "qcm",
          question: "La psychothérapie focalisée sur le transfert (TFP) pour le trouble borderline travaille surtout…",
          options: [
            "Le clivage, en le nommant lorsqu'il se produit dans le lien au thérapeute",
            "Les déficits cognitifs d'attention et de mémoire",
            "L'exposition prolongée aux souvenirs traumatiques",
            "La renutrition et la reprise pondérale"
          ],
          reponse: 0,
          explication: "TFP : emphase sur le transfert, thèmes chargés d'émotion, travail sur le clivage (incapacité à former des idées nuancées), suggestions concrètes de comportements mieux adaptés."
        },
        {
          id: "c10-31", notion: "Traitement — approches", type: "vf",
          question: "Pour le trouble de la personnalité borderline, la pharmacothérapie est considérée comme très efficace en première intention.",
          options: ["Vrai", "Faux"],
          reponse: 1,
          explication: "Faux : la pharmacothérapie (antidépresseurs, antipsychotiques) ne fait qu'atténuer certains symptômes (anxiété, tendance suicidaire, symptômes psychotiques) et est considérée comme peu efficace — avec un risque d'abus. La psychothérapie reste centrale."
        },
        {
          id: "c10-32", notion: "Traitement — approches", type: "qcm",
          question: "Parmi ces approches, laquelle est une psychothérapie PSYCHODYNAMIQUE ?",
          options: [
            "La thérapie basée sur la mentalisation (MBT)",
            "La thérapie des schémas",
            "La thérapie comportementale dialectique (DBT)",
            "La psychothérapie de soutien"
          ],
          reponse: 0,
          explication: "Approches psychodynamiques (comprendre et transformer les relations internes) : MBT et TFP. Les TCC incluent la DBT et la thérapie des schémas. La psychothérapie de soutien vise à stabiliser et contenir."
        },
        {
          id: "c10-33", notion: "Cas clinique — personnalité", type: "cas",
          question: "Une femme de 24 ans alterne entre idéaliser et dévaloriser ses proches, fait des efforts désespérés pour éviter l'abandon, s'automutile, ressent un vide chronique et a une image de soi instable. Quel trouble de la personnalité ?",
          options: [
            "Borderline (limite)",
            "Histrionique",
            "Narcissique",
            "Dépendante"
          ],
          reponse: 0,
          explication: "Instabilité des relations (idéalisation/dévalorisation), peur de l'abandon, automutilation, vide chronique et perturbation de l'identité = trouble de la personnalité borderline (groupe B)."
        },
        {
          id: "c10-34", notion: "Cas clinique — personnalité", type: "cas",
          question: "Un homme surestime ses réalisations, fantasme un succès illimité, exige de l'admiration, manque d'empathie et exploite les autres pour parvenir à ses fins. Quel trouble ?",
          options: [
            "Narcissique",
            "Antisociale",
            "Histrionique",
            "Paranoïaque"
          ],
          reponse: 0,
          explication: "Grandiosité + besoin d'admiration + manque d'empathie + exploitation d'autrui = personnalité narcissique. (L'antisociale implique surtout la transgression des droits et des lois ; l'histrionique, une quête théâtrale d'attention.)"
        },
        {
          id: "c10-35", notion: "Cas clinique — personnalité", type: "cas",
          question: "Une personne désire ardemment des relations mais les évite par peur d'être critiquée ou rejetée ; elle se sent socialement incompétente et inférieure. Quel trouble, et comment le distinguer du schizoïde ?",
          options: [
            "Évitante — contrairement au schizoïde, elle DÉSIRE des liens mais les fuit par peur du rejet",
            "Schizoïde — elle n'éprouve aucun intérêt pour les relations",
            "Dépendante — elle a besoin d'être prise en charge",
            "Schizotypique — elle a des croyances bizarres"
          ],
          reponse: 0,
          explication: "Personnalité évitante (groupe C) : inhibition sociale et hypersensibilité au rejet, AVEC un désir de relations. Le schizoïde, lui, ne recherche pas les relations et y est indifférent."
        }
      ]
    }
  ]
};
