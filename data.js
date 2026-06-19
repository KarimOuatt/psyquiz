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
        },
        {
          id: "c7-h1", niveau: "difficile", notion: "Anorexie — critères DSM", type: "qcm",
          question: "Lequel de ces éléments n'est PLUS un critère diagnostique de l'anorexie mentale dans le DSM-5 ?",
          options: ["L'aménorrhée", "La restriction des apports conduisant à un poids significativement bas", "La peur intense de prendre du poids ou un comportement interférant avec la prise de poids", "L'altération de la perception du poids ou de la forme corporelle"],
          reponse: 0,
          explication: "Le DSM-5 a retiré deux critères du DSM-IV : l'aménorrhée et le seuil chiffré de poids (< 85 % du poids attendu). Les trois autres correspondent aux critères A, B et C actuels."
        },
        {
          id: "c7-h2", niveau: "difficile", notion: "Anorexie — sévérité (IMC)", type: "qcm",
          question: "Une patiente anorexique a un IMC de 17,4 (zone « léger ») mais une bradycardie sévère imposant une hospitalisation. Comment coter la sévérité ?",
          options: ["On peut MAJORER le degré au-delà de ce qu'indique l'IMC, pour refléter les symptômes cliniques et la nécessité de prise en charge", "Sévérité obligatoirement « léger » : l'IMC prime toujours", "Le diagnostic est impossible au-dessus d'un IMC de 17", "Sévérité « extrême » du seul fait de l'hospitalisation"],
          reponse: 0,
          explication: "Le seuil de sévérité s'établit sur l'IMC, mais le degré peut être majoré pour refléter les symptômes cliniques, l'incapacité fonctionnelle et la nécessité de prise en charge."
        },
        {
          id: "c7-h3", niveau: "difficile", notion: "Boulimie — critères DSM", type: "qcm",
          question: "Une personne boulimique présente en moyenne 6 épisodes de comportements compensatoires par semaine. Quel niveau de sévérité ?",
          options: ["Moyen", "Léger", "Grave", "Extrême"],
          reponse: 0,
          explication: "Sévérité de la boulimie selon la fréquence des comportements compensatoires : léger 1-3 · moyen 4-7 · grave 8-13 · extrême ≥ 14. Donc 6 = moyen."
        },
        {
          id: "c7-h4", niveau: "difficile", notion: "Discrimination AN / boulimie / AH", type: "cas",
          question: "Un homme à poids normal a des crises hebdomadaires avec perte de contrôle et une détresse marquée depuis 4 mois. Il ne se fait pas vomir, ne jeûne pas et ne fait pas d'exercice compensatoire. Diagnostic le plus précis ?",
          options: ["Trouble accès hyperphagiques", "Boulimie", "Anorexie mentale type accès hyperphagiques/purgatif", "Trouble purgatif"],
          reponse: 0,
          explication: "Crises + perte de contrôle + détresse, SANS comportements compensatoires réguliers et SANS poids bas = trouble accès hyperphagiques. (La boulimie exige des comportements compensatoires ; le trouble purgatif, des purges sans crises.)"
        },
        {
          id: "c7-h5", niveau: "difficile", notion: "Pica, mérycisme & ARFID", type: "cas",
          question: "Une adolescente en insuffisance pondérale mange très peu car certaines textures la dégoûtent et elle a peur de s'étouffer. Elle n'a AUCUNE peur de grossir ni distorsion de son image corporelle. Diagnostic ?",
          options: ["Trouble de restriction/évitement de l'ingestion d'aliments (ARFID)", "Anorexie mentale type restrictif", "Boulimie", "Mérycisme"],
          reponse: 0,
          explication: "Restriction par évitement sensoriel / peur de s'étouffer, sans peur de grossir ni distorsion corporelle = ARFID. C'est précisément l'absence de préoccupation pour le poids/la silhouette qui l'écarte de l'anorexie."
        },
        {
          id: "c7-h6", niveau: "difficile", notion: "Étiologie des TCA", type: "qcm",
          question: "Parmi ces affirmations sur l'étiologie des TCA, laquelle est FAUSSE ?",
          options: ["La boulimie se caractérise surtout par le perfectionnisme rigide et le surcontrôle, et l'anorexie par l'impulsivité", "L'anorexie est associée au perfectionnisme, à la rigidité et au besoin de contrôle", "La boulimie est associée à l'impulsivité et à la pensée « tout ou rien »", "Les effets neurobiologiques de la famine peuvent maintenir l'anorexie"],
          reponse: 0,
          explication: "C'est l'inverse : l'anorexie est marquée par le perfectionnisme et le contrôle, la boulimie par l'impulsivité. Les trois autres énoncés sont exacts."
        },
        {
          id: "c7-h7", niveau: "difficile", notion: "Boulimie — caractéristiques", type: "qcm",
          question: "L'hypokaliémie (perte de potassium) pouvant entraîner des arythmies est surtout liée à…",
          options: ["Aux purgations (vomissements, laxatifs)", "Au lanugo", "À la restriction calorique pure", "À la diminution de la masse osseuse"],
          reponse: 0,
          explication: "Les purgations entraînent une perte de potassium et des perturbations électrolytiques → irrégularités du rythme cardiaque, typiques de la boulimie et de l'anorexie de type AH/purgatif."
        },
        {
          id: "c7-h8", niveau: "difficile", notion: "Discrimination AN / boulimie / AH", type: "qcm",
          question: "Quelle fréquence minimale de crises est commune à la boulimie ET au trouble accès hyperphagiques ?",
          options: ["Au moins 1 fois/semaine pendant 3 mois", "Au moins 2 fois/semaine pendant 6 mois", "Au moins 1 fois/mois pendant 6 mois", "Au moins 3 fois/semaine pendant 1 mois"],
          reponse: 0,
          explication: "Les deux troubles exigent en moyenne au moins 1 épisode par semaine pendant 3 mois."
        },
        {
          id: "c7-h9", niveau: "difficile", notion: "Anorexie — caractéristiques", type: "qcm",
          question: "Lequel de ces chiffres de prévalence est exact selon le cours ?",
          options: ["Anorexie à vie : F ≈ 1 %, H ≈ 0,3 %", "Anorexie à vie : F ≈ 3,5 %", "Boulimie sur 12 mois : F ≈ 5 %", "Accès hyperphagiques à vie chez F ≈ 0,3 %"],
          reponse: 0,
          explication: "Anorexie à vie : F 1 %, H 0,3 % (ratio 1:10). Boulimie 12 mois : F 1,5 %, H 0,5 %. Accès hyperphagiques à vie : F 3,5 %, H 2 %."
        },
        {
          id: "c7-h10", niveau: "difficile", notion: "Accès hyperphagiques", type: "qcm",
          question: "Quelle est la prévalence sur 12 mois du trouble accès hyperphagiques chez les femmes ?",
          options: ["0,6 à 1,6 %", "3,5 %", "5 à 10 %", "0,1 %"],
          reponse: 0,
          explication: "Accès hyperphagiques sur 12 mois : F 0,6-1,6 %, H 0,26-0,8 % (à vie : F 3,5 %, H 2 %)."
        },
        {
          id: "c7-h11", niveau: "difficile", notion: "Anorexie — critères DSM", type: "qcm",
          question: "Qu'est-ce qui caractérise le type RESTRICTIF de l'anorexie par rapport au type avec accès/purge ?",
          options: ["Contrôle très rigide, impulsivité plus faible, perte de poids par restriction seule", "Alternance contrôle/perte de contrôle et impulsivité plus élevée", "Présence de vomissements et de crises", "Poids normal maintenu"],
          reponse: 0,
          explication: "Type restrictif : restriction seule, contrôle très rigide, impulsivité plus faible, pas de crises ni purges. Type AH/purgatif : crises et/ou purges, alternance contrôle/perte de contrôle, impulsivité plus élevée."
        },
        {
          id: "c7-h12", niveau: "difficile", notion: "Pica, mérycisme & ARFID", type: "qcm",
          question: "Le mérycisme (régurgitation répétée) a typiquement une fonction…",
          options: ["D'apaisement et d'auto-stimulation", "De contrôle du poids", "Compensatoire après une crise", "De purge"],
          reponse: 0,
          explication: "Le mérycisme semble avoir une fonction d'apaisement et d'auto-stimulation, surtout chez les personnes avec un trouble du développement intellectuel ; prévalence 1-2 % des enfants d'âge scolaire."
        },
        {
          id: "c7-h13", niveau: "difficile", notion: "Anorexie — caractéristiques", type: "qcm",
          question: "Toutes ces conséquences sont associées à l'anorexie SAUF une. Laquelle ?",
          options: ["La perte de potassium par les vomissements", "Le lanugo", "La diminution de la taille du cerveau", "La diminution de la masse osseuse"],
          reponse: 0,
          explication: "La perte de potassium est surtout liée aux purgations (boulimie / AN-AH-P). Lanugo, ↓ taille du cerveau et ↓ masse osseuse sont des conséquences classiques de l'anorexie."
        },
        {
          id: "c7-h14", niveau: "difficile", notion: "Traitement des TCA", type: "qcm",
          question: "Pour l'anorexie chez l'ADULTE, quelle psychothérapie est recommandée (vs le FBT chez l'adolescent) ?",
          options: ["CBT-E, thérapie interpersonnelle, approches psychodynamiques, thérapies centrées sur les émotions", "Le FBT (méthode Maudsley)", "La fluoxétine seule", "La DBT de Linehan"],
          reponse: 0,
          explication: "Adolescents : FBT (méthode Maudsley). Adultes : CBT-E, thérapie interpersonnelle, approches psychodynamiques/intersubjectives, thérapies centrées sur les émotions."
        },
        {
          id: "c7-h15", niveau: "difficile", notion: "Anorexie — pronostic", type: "qcm",
          question: "Avec traitement, quelle répartition du pronostic de l'anorexie est exacte ?",
          options: ["½ rémission complète, ¼ rémission partielle, ¼ absence de rémission", "⅓ – ⅓ – ⅓", "¾ rémission complète", "10 % de rémission complète"],
          reponse: 0,
          explication: "Avec traitement : ½ rémission complète, ¼ partielle, ¼ absence. Sans traitement et avec symptômes sévères, environ 10 % meurent."
        },
        {
          id: "c7-m1", notion: "Boulimie — critères DSM", type: "multi",
          question: "Parmi ces comportements, lesquels sont des comportements compensatoires dans la boulimie ?",
          options: ["Vomissements provoqués", "Emploi abusif de laxatifs", "Jeûne ou exercice physique excessif", "Idéation suicidaire"],
          reponses: [0, 1, 2],
          explication: "Comportements compensatoires : vomissements, laxatifs/diurétiques, jeûne, exercice excessif. L'idéation suicidaire n'en fait pas partie."
        },
        {
          id: "c7-s1", notion: "Anorexie — caractéristiques", type: "saisie",
          question: "Comment nomme-t-on le fin duvet corporel qui apparaît dans l'anorexie sévère ?",
          reponse: "lanugo", accepts: ["lanugo"],
          explication: "Le lanugo est un fin duvet qui apparaît avec la dénutrition de l'anorexie."
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
        },
        {
          id: "c8-h1", niveau: "difficile", notion: "Critères diagnostiques (DSM)", type: "vf",
          question: "Dans le DSM-5, un seul symptôme suffit au critère A de la schizophrénie si les idées délirantes sont bizarres.",
          options: ["Vrai", "Faux"],
          reponse: 1,
          explication: "Faux : cette règle existait dans le DSM-IV. Le DSM-5 exige ≥ 2 symptômes, dont au moins un parmi idées délirantes, hallucinations ou discours désorganisé — quelle que soit la nature (bizarre ou non)."
        },
        {
          id: "c8-h2", niveau: "difficile", notion: "Étiologie (génétique & dopamine)", type: "qcm",
          question: "Quelle correspondance est correcte selon l'hypothèse dopaminergique ?",
          options: ["Hyperactivité mésolimbique → symptômes positifs ; hypoactivité mésocorticale → symptômes négatifs/cognitifs", "Hyperactivité mésocorticale → symptômes positifs", "Hypoactivité mésolimbique → symptômes positifs", "Hyperactivité mésolimbique → symptômes négatifs"],
          reponse: 0,
          explication: "Voie mésolimbique hyperactive = symptômes positifs ; voie mésocorticale hypoactive = symptômes négatifs et cognitifs. Les antipsychotiques sont des antagonistes dopaminergiques."
        },
        {
          id: "c8-h3", niveau: "difficile", notion: "Symptômes négatifs", type: "qcm",
          question: "Lequel n'est PAS un symptôme négatif de la schizophrénie ?",
          options: ["Le discours désorganisé", "L'émoussement affectif", "L'avolition", "L'anhédonie"],
          reponse: 0,
          explication: "Le discours désorganisé est un symptôme POSITIF. Négatifs : affect plat (émoussement), alogie, avolition, anhédonie, asocialité."
        },
        {
          id: "c8-h4", niveau: "difficile", notion: "Critères diagnostiques (DSM)", type: "qcm",
          question: "Selon le critère D, comment exclut-on un trouble de l'humeur avec caractéristiques psychotiques au profit de la schizophrénie ?",
          options: ["Pas d'épisode thymique majeur concurrent à la phase active, ou présent seulement brièvement sur la durée totale de la maladie", "Il n'y a jamais d'hallucinations", "Les symptômes durent moins d'un mois", "Le patient n'a aucun symptôme négatif"],
          reponse: 0,
          explication: "Critère D : pas d'épisode dépressif/maniaque concomitant à la phase active, ou seulement pendant une courte période. À retenir : les symptômes ne sont pas mieux expliqués par un trouble de l'humeur."
        },
        {
          id: "c8-h5", niveau: "difficile", notion: "Introduction & épidémiologie", type: "qcm",
          question: "Quel énoncé épidémiologique sur la schizophrénie est exact ?",
          options: ["Chez les femmes, le taux ré-augmente vers 40 et 60 ans ; chez les hommes il chute après 35 ans", "Elle est globalement plus fréquente chez les femmes", "La prévalence à vie est d'environ 7 %", "Elle apparaît surtout après 50 ans"],
          reponse: 0,
          explication: "Prévalence ≈ 0,7 %, plus fréquente chez les hommes, apparition 18-30 ans (un peu plus tôt chez l'homme). Le taux chute après 35 ans chez l'homme et ré-augmente vers 40 et 60 ans chez la femme."
        },
        {
          id: "c8-h6", niveau: "difficile", notion: "Spectre psychotique (durées)", type: "cas",
          question: "Un patient présente des symptômes psychotiques depuis 5 semaines, sans qu'on sache encore s'il récupérera. Quel diagnostic est le plus approprié ?",
          options: ["Trouble schizophréniforme (provisoire)", "Trouble psychotique bref", "Schizophrénie", "Trouble délirant"],
          reponse: 0,
          explication: "5 semaines > 1 mois : ce n'est plus un trouble psychotique bref (1 jour-1 mois). < 6 mois → schizophréniforme ; on précise « provisoire » tant que la guérison n'est pas observée."
        },
        {
          id: "c8-h7", niveau: "difficile", notion: "Étiologie (génétique & dopamine)", type: "qcm",
          question: "Lequel ne partage PAS les variations génétiques communes aux 5 grands troubles psychiatriques ?",
          options: ["Le trouble obsessionnel-compulsif (TOC)", "La schizophrénie", "Le trouble bipolaire", "Le TDAH"],
          reponse: 0,
          explication: "Les 5 : schizophrénie, trouble dépressif caractérisé, trouble du spectre de l'autisme, trouble bipolaire, TDAH. Le TOC n'en fait pas partie."
        },
        {
          id: "c8-h8", niveau: "difficile", notion: "Catatonie & comportement désorganisé", type: "qcm",
          question: "L'échopraxie correspond à…",
          options: ["La répétition des gestes d'autrui", "La répétition des paroles d'autrui", "Le maintien prolongé de postures", "Le mutisme"],
          reponse: 0,
          explication: "Échopraxie = répéter les gestes ; écholalie = répéter les paroles. La catatonie inclut aussi immobilité, mutisme et postures inhabituelles, et n'est pas exclusive à la schizophrénie."
        },
        {
          id: "c8-h9", niveau: "difficile", notion: "Introduction & épidémiologie", type: "qcm",
          question: "Selon le cours, quelle comorbidité de la schizophrénie a la prévalence indiquée correcte ?",
          options: ["Troubles liés à l'usage d'une substance ≈ 37 %", "Trouble dépressif caractérisé ≈ 15 %", "Phobie sociale ≈ 40 %", "TUS ≈ 5 %"],
          reponse: 0,
          explication: "Comorbidités : TUS 37 %, trouble dépressif caractérisé 40 %, phobie sociale 14,9 %."
        },
        {
          id: "c8-h10", niveau: "difficile", notion: "Introduction & épidémiologie", type: "qcm",
          question: "Quelle proportion de patients la schizophrénie représente-t-elle dans les hôpitaux psychiatriques (vs généraux) ?",
          options: ["≈ 30,9 % en hôpital psychiatrique (vs 19,9 % en hôpital général)", "≈ 5 %", "≈ 50 %", "≈ 19,9 % en psychiatrique (vs 30,9 % en général)"],
          reponse: 0,
          explication: "19,9 % des patients des hôpitaux généraux et 30,9 % des hôpitaux psychiatriques. Les hommes sont davantage hospitalisés que les femmes."
        },
        {
          id: "c8-h11", niveau: "difficile", notion: "Idées délirantes", type: "qcm",
          question: "Laquelle de ces idées délirantes est BIZARRE (impossible) plutôt que non bizarre ?",
          options: ["« Quelqu'un vole mes pensées avant que je parle »", "« Mon conjoint me trompe »", "« La police me surveille »", "« Mes collègues veulent me faire renvoyer »"],
          reponse: 0,
          explication: "Le vol de la pensée est un délire bizarre (impossible, désorganisé, typique de la schizophrénie). Les trois autres sont des délires non bizarres (plausibles mais faux)."
        },
        {
          id: "c8-h12", niveau: "difficile", notion: "Introduction & épidémiologie", type: "qcm",
          question: "La rémission de la schizophrénie est plus fréquente dans tous ces cas SAUF…",
          options: ["Une durée plus longue de la psychose non traitée", "Des symptômes plus légers", "Un meilleur fonctionnement", "Une réponse plus rapide au traitement"],
          reponse: 0,
          explication: "La rémission (≈ 35 %, ~1 sur 3) est plus fréquente quand la durée de psychose non traitée est COURTE, avec des symptômes légers, un meilleur fonctionnement et une réponse rapide."
        },
        {
          id: "c8-h13", niveau: "difficile", notion: "Spectre psychotique (durées)", type: "qcm",
          question: "Qu'est-ce qui différencie le trouble schizophréniforme du trouble psychotique bref ?",
          options: ["Le schizophréniforme peut comporter des symptômes négatifs et dure jusqu'à 6 mois ; le bref n'a pas de symptômes négatifs et dure < 1 mois", "Le bref dure plus longtemps", "Le schizophréniforme exige un épisode thymique", "Aucune différence de durée"],
          reponse: 0,
          explication: "Bref : 1 jour-1 mois, pas de symptômes négatifs, retour au fonctionnement. Schizophréniforme : < 6 mois, symptômes négatifs possibles, impact fonctionnel non requis."
        },
        {
          id: "c8-h14", niveau: "difficile", notion: "Étiologie (génétique & dopamine)", type: "qcm",
          question: "Quel argument soutient l'implication du GLUTAMATE dans la schizophrénie ?",
          options: ["La PCP, qui agit sur le glutamate, mime les symptômes de la schizophrénie ; faibles taux de glutamate dans le LCR", "Les antipsychotiques augmentent la dopamine", "La sérotonine n'a aucun rôle", "Le glutamate cause uniquement les symptômes positifs"],
          reponse: 0,
          explication: "Faibles taux de glutamate dans le liquide cérébrospinal ; la PCP agit sur le glutamate et mime la schizophrénie. De nouveaux médicaments agissent aussi sur la sérotonine (5-HT)."
        },
        {
          id: "c8-h15", niveau: "difficile", notion: "Traitement", type: "qcm",
          question: "Quelle association antipsychotique/génération est correcte ?",
          options: ["Rispéridone et olanzapine = 2e génération (atypiques) ; halopéridol et chlorpromazine = 1re génération (typiques)", "Halopéridol = 2e génération", "Clozapine = 1re génération sans surveillance", "Quétiapine = 1re génération"],
          reponse: 0,
          explication: "2e génération (atypiques, effets secondaires plus favorables) : rispéridone, olanzapine, aripiprazole, quétiapine. 1re génération (typiques) : halopéridol, chlorpromazine. La clozapine, la plus efficace pour les cas complexes, exige une surveillance sanguine stricte."
        },
        {
          id: "c8-m1", notion: "Symptômes positifs", type: "multi",
          question: "Lesquels sont des symptômes POSITIFS de la schizophrénie ?",
          options: ["Idées délirantes", "Hallucinations", "Discours désorganisé", "Émoussement affectif"],
          reponses: [0, 1, 2],
          explication: "Positifs : idées délirantes, hallucinations, discours désorganisé, comportement désorganisé/catatonique. L'émoussement affectif est un symptôme négatif."
        },
        {
          id: "c8-s1", notion: "Catatonie & comportement désorganisé", type: "saisie",
          question: "Comment appelle-t-on la répétition automatique des paroles d'autrui (catatonie) ?",
          reponse: "écholalie", accepts: ["echolalie"],
          explication: "Écholalie = répéter les paroles ; échopraxie = répéter les gestes."
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
        },
        {
          id: "c9a-h1", niveau: "difficile", notion: "Évitement & altérations cognitives (C, D)", type: "qcm",
          question: "Le « sentiment de détachement d'autrui » et l'« incapacité à éprouver des émotions positives » relèvent de quel critère du TSPT ?",
          options: ["Critère D — altérations négatives des cognitions et de l'humeur", "Critère B — symptômes envahissants", "Critère C — évitement", "Critère E — altérations de l'éveil/réactivité"],
          reponse: 0,
          explication: "Critère D : amnésie dissociative, croyances négatives, distorsions, état émotionnel négatif, perte d'intérêt, détachement d'autrui, incapacité d'éprouver des émotions positives."
        },
        {
          id: "c9a-h2", niveau: "difficile", notion: "Éveil & réactivité (critère E)", type: "qcm",
          question: "Lequel relève du critère E (éveil/réactivité) et NON du critère B (envahissant) ?",
          options: ["L'hypervigilance et la réaction de sursaut exagérée", "Les flashbacks", "Les cauchemars liés au trauma", "Les souvenirs intrusifs"],
          reponse: 0,
          explication: "Critère E : irritabilité, comportement autodestructeur, hypervigilance, sursaut exagéré, problèmes de concentration, troubles du sommeil. Flashbacks, cauchemars et souvenirs intrusifs relèvent du critère B."
        },
        {
          id: "c9a-h3", niveau: "difficile", notion: "Catégorie & critère A (exposition)", type: "qcm",
          question: "Lequel n'est PAS un mode d'exposition valide au sens du critère A du TSPT ?",
          options: ["Voir des images d'un événement traumatique dans les médias ou un film (hors cadre professionnel)", "Être directement exposé à l'événement", "Être témoin direct de l'événement survenu à autrui", "Apprendre qu'un événement violent ou accidentel est arrivé à un proche"],
          reponse: 0,
          explication: "L'exposition via les médias/écrans (hors contexte professionnel) ne compte pas. En revanche, l'exposition répétée/extrême dans un cadre professionnel (intervenants de première ligne, policiers) est valide."
        },
        {
          id: "c9a-h4", niveau: "difficile", notion: "Durée & spécifications", type: "qcm",
          question: "La spécification « à expression retardée » du TSPT signifie que…",
          options: ["L'ensemble des critères diagnostiques n'est rempli qu'au moins 6 mois après l'événement", "Les symptômes durent plus de 6 mois", "Le trauma remonte à l'enfance", "Le traitement a été retardé"],
          reponse: 0,
          explication: "« À expression retardée » : tous les critères ne sont satisfaits qu'au moins 6 mois après l'événement (même si certains symptômes ont pu débuter plus tôt)."
        },
        {
          id: "c9a-h5", niveau: "difficile", notion: "Troubles de l'adaptation", type: "qcm",
          question: "Pour un trouble de l'adaptation, quel couple de délais est correct ?",
          options: ["Début dans les 3 mois suivant le stresseur ; les symptômes ne persistent pas plus de 6 mois après la fin du stresseur", "Début dans le mois ; persiste jusqu'à 12 mois", "Début dans les 6 mois ; persiste jusqu'à 3 mois", "Aucune contrainte de délai"],
          reponse: 0,
          explication: "Symptômes dans les 3 mois suivant le facteur de stress ; une fois celui-ci (ou ses conséquences) terminé, ils ne persistent pas au-delà de 6 mois."
        },
        {
          id: "c9a-h6", niveau: "difficile", notion: "Troubles de l'adaptation", type: "qcm",
          question: "Un patient présente des symptômes de deuil typiques après un décès récent. Quel énoncé est correct ?",
          options: ["Un deuil normal n'est pas un trouble de l'adaptation ; le deuil prolongé se diagnostique après 12 mois", "Tout deuil de plus d'un mois est un trouble de l'adaptation", "Le deuil est toujours un TSPT", "Le deuil prolongé se diagnostique après 3 mois"],
          reponse: 0,
          explication: "Les symptômes d'un deuil normal sont explicitement exclus du trouble de l'adaptation. Le trouble du deuil prolongé se diagnostique, lui, après 12 mois."
        },
        {
          id: "c9a-h7", niveau: "difficile", notion: "Durée & spécifications", type: "qcm",
          question: "Dans la spécification dissociative du TSPT, la DÉPERSONNALISATION correspond à…",
          options: ["Se sentir détaché de soi-même, comme un observateur de son propre corps/esprit", "Le sentiment que le monde extérieur est irréel ou déformé", "Une amnésie de l'événement", "Des flashbacks répétés"],
          reponse: 0,
          explication: "Dépersonnalisation = détachement de soi (observateur de soi-même). Déréalisation = le monde paraît irréel, onirique ou déformé."
        },
        {
          id: "c9a-h8", niveau: "difficile", notion: "Prévalence & évolution du TSPT", type: "qcm",
          question: "Quel énoncé chiffré sur le TSPT est exact ?",
          options: ["Comorbidité élevée : plus de 80 % ont au moins un autre trouble ; rétablissement complet vers 3 mois chez ≈ la moitié des adultes", "Prévalence à vie d'environ 25 %", "Plus fréquent chez les hommes", "Aucune comorbidité associée"],
          reponse: 0,
          explication: "Prévalence à vie 6,1-8,3 % (+ chez les femmes) ; comorbidité > 80 % ; environ la moitié des adultes se rétablissent vers 3 mois."
        },
        {
          id: "c9a-h9", niveau: "difficile", notion: "Prévalence & évolution du TSPT", type: "qcm",
          question: "Quelles prévalences du TSPT sont exactes selon le cours ?",
          options: ["À vie 6,1-8,3 % ; 12 mois 4,7 % ; plus fréquent chez les femmes", "À vie 1-2 % ; 12 mois 0,5 %", "À vie 25 % ; 12 mois 10 %", "À vie 6,1-8,3 % ; plus fréquent chez les hommes"],
          reponse: 0,
          explication: "À vie 6,1-8,3 % ; sur 12 mois 4,7 % ; F ++."
        },
        {
          id: "c9a-h10", niveau: "difficile", notion: "Prévalence & évolution du TSPT", type: "qcm",
          question: "Chez les survivants de viol, de combat, de captivité ou de génocide, la proportion développant un TSPT est d'environ…",
          options: ["1/3 à 1/2", "1/10", "2/3 à 3/4", "Moins de 5 %"],
          reponse: 0,
          explication: "1/3 à 1/2. Le risque est aussi accru chez les vétérans, policiers, ambulanciers et le personnel médical."
        },
        {
          id: "c9a-h11", niveau: "difficile", notion: "Éveil & réactivité (critère E)", type: "qcm",
          question: "Combien d'éléments (au moins) exigent respectivement le critère D et le critère E du TSPT ?",
          options: ["2 pour le critère D et 2 pour le critère E", "1 et 1", "3 et 3", "2 et 3"],
          reponse: 0,
          explication: "Critère D (cognitions/humeur) : ≥ 2 éléments. Critère E (éveil/réactivité) : ≥ 2 éléments. Critère C (évitement) : ≥ 1 des 2."
        },
        {
          id: "c9a-h12", niveau: "difficile", notion: "Évitement & altérations cognitives (C, D)", type: "qcm",
          question: "Le critère C (évitement) du TSPT exige…",
          options: ["Au moins 1 des 2 manifestations (souvenirs internes et/ou rappels externes)", "Au moins 2 manifestations", "Au moins 3 manifestations", "Les 2 obligatoirement"],
          reponse: 0,
          explication: "Critère C : 1 des 2 suffit — éviter les souvenirs/pensées/sentiments OU éviter les rappels externes."
        },
        {
          id: "c9a-h13", niveau: "difficile", notion: "Durée & spécifications", type: "qcm",
          question: "Toutes ces affirmations temporelles sur le TSPT sont vraies SAUF une. Laquelle est FAUSSE ?",
          options: ["« À expression retardée » signifie que les symptômes durent plus de 6 mois", "Le stress aigu couvre 3 jours à 1 mois", "Le TSPT exige une perturbation de plus d'un mois", "Le rétablissement complet survient vers 3 mois chez ~½ des adultes"],
          reponse: 0,
          explication: "Faux : « à expression retardée » = l'ensemble des critères n'est rempli qu'au moins 6 mois APRÈS l'événement (ce n'est pas la durée des symptômes)."
        },
        {
          id: "c9a-h14", niveau: "difficile", notion: "Troubles de l'adaptation", type: "qcm",
          question: "Concernant les troubles de l'adaptation, lequel est exact ?",
          options: ["Prévalence 5-20 % en ambulatoire ; associés à un risque accru de suicide", "Prévalence < 1 %", "Jamais associés au suicide", "Diagnostiqués pour un deuil normal"],
          reponse: 0,
          explication: "Fréquents (5-20 % en ambulatoire), risque ↑ de tentatives et de suicide, souvent comorbides d'affections médicales. Le deuil normal est explicitement exclu."
        },
        {
          id: "c9a-h15", niveau: "difficile", notion: "Facteurs de risque", type: "qcm",
          question: "Lequel est un facteur AUGMENTANT le risque de TSPT selon le cours ?",
          options: ["La dissociation pendant l'événement et sa persistance ensuite", "Un bon soutien social", "Un niveau d'éducation élevé", "Un événement non interpersonnel"],
          reponse: 0,
          explication: "Facteurs de risque : sévérité du trauma, perception de menace mortelle, blessures, violence interpersonnelle, dissociation péri- et post-traumatique ; chez les militaires : avoir commis des violences, tué ou été témoin d'atrocités."
        },
        {
          id: "c9a-m1", notion: "Éveil & réactivité (critère E)", type: "multi",
          question: "Lesquels relèvent du critère E (altérations de l'éveil et de la réactivité) du TSPT ?",
          options: ["Hypervigilance", "Réaction de sursaut exagérée", "Perturbation du sommeil", "Flashbacks"],
          reponses: [0, 1, 2],
          explication: "Critère E : irritabilité, comportement autodestructeur, hypervigilance, sursaut, problèmes de concentration, troubles du sommeil. Les flashbacks relèvent du critère B."
        },
        {
          id: "c9a-s1", notion: "Symptômes envahissants (critère B)", type: "saisie",
          question: "Quel type de réaction dissociative fait revivre l'événement comme s'il se reproduisait ?",
          reponse: "flashback", accepts: ["flashback", "flashbacks", "flash back"],
          explication: "Les flashbacks sont des réactions dissociatives appartenant au critère B."
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
        },
        {
          id: "c9b-h1", niveau: "difficile", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "Dans le trouble de l'usage d'une substance, la tolérance et le sevrage appartiennent à quel groupe de critères ?",
          options: ["Les critères pharmacologiques", "La réduction du contrôle", "L'altération du fonctionnement social", "La consommation risquée"],
          reponse: 0,
          explication: "4 groupes : réduction du contrôle (dont le craving), altération sociale, consommation risquée, et critères pharmacologiques (tolérance, sevrage)."
        },
        {
          id: "c9b-h2", niveau: "difficile", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "Un patient remplit 5 des critères du trouble de l'usage de l'alcool sur 12 mois. Sévérité ?",
          options: ["Moyen (4-5)", "Léger (2-3)", "Grave (≥ 6)", "Sous le seuil diagnostique"],
          reponse: 0,
          explication: "Léger 2-3 · moyen 4-5 · grave ≥ 6. Donc 5 critères = sévérité moyenne."
        },
        {
          id: "c9b-h3", niveau: "difficile", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "La rémission précoce d'un trouble de l'usage = absence de critères pendant 3 à 12 mois — avec quelle exception possible ?",
          options: ["Le craving (A4) peut persister", "La tolérance peut persister", "Le sevrage peut persister", "Aucune exception"],
          reponse: 0,
          explication: "Rémission précoce (3-12 mois) et prolongée (≥ 12 mois) : aucun critère rempli, SAUF éventuellement le craving (A4), qui peut subsister."
        },
        {
          id: "c9b-h4", niveau: "difficile", notion: "Intoxication & sevrage (alcool)", type: "qcm",
          question: "Lequel de ces signes appartient au SEVRAGE alcoolique et NON à l'intoxication ?",
          options: ["Les crises convulsives tonicocloniques", "Le nystagmus", "La démarche ébrieuse", "Le discours bredouillant"],
          reponse: 0,
          explication: "Sevrage : hyperactivité neurovégétative, tremblements, insomnie, nausées, hallucinations transitoires, agitation, anxiété, convulsions. Les trois autres signes relèvent de l'intoxication."
        },
        {
          id: "c9b-h5", niveau: "difficile", notion: "Intoxication & sevrage (alcool)", type: "qcm",
          question: "Pour quelle substance le DSM-5 ne prévoit-il PAS de diagnostic d'intoxication ?",
          options: ["Le tabac", "L'alcool", "Le cannabis", "Les opiacés"],
          reponse: 0,
          explication: "L'intoxication ne s'applique pas au tabac (en revanche, le sevrage du tabac existe)."
        },
        {
          id: "c9b-h6", niveau: "difficile", notion: "Étiologie — facteurs psychologiques", type: "qcm",
          question: "Dans les « raisons de boire », viser à éviter la gêne causée par autrui correspond à quelle échelle ?",
          options: ["Externe négative (conformité)", "Externe positive (sociale)", "Interne négative (compensation)", "Interne positive (renforcement)"],
          reponse: 0,
          explication: "Conformité = externe négative (échapper aux épreuves / éviter la gêne due à autrui). Sociale = externe positive ; compensation = interne négative ; renforcement = interne positive."
        },
        {
          id: "c9b-h7", niveau: "difficile", notion: "Classes & organisation du DSM", type: "qcm",
          question: "Lequel est inclus dans le DSM-5-TR comme trouble addictif NON lié à une substance ?",
          options: ["Le jeu d'argent pathologique", "L'addiction au sexe", "L'addiction aux achats", "L'addiction à l'exercice"],
          reponse: 0,
          explication: "Seul le jeu d'argent pathologique est inclus ; les addictions comportementales (sexe, achats, exercice) sont exclues, faute de données suffisantes."
        },
        {
          id: "c9b-h8", niveau: "difficile", notion: "Alcool — données épidémiologiques", type: "qcm",
          question: "Selon l'OMS (2014), l'alcool représentait en 2012 environ quelle part de l'ensemble des décès mondiaux ?",
          options: ["5,9 % (≈ 3,3 millions de décès)", "1 % (≈ 0,5 million)", "12 % (≈ 7 millions)", "0,5 %"],
          reponse: 0,
          explication: "≈ 3,3 millions de décès, soit 5,9 % de l'ensemble (7,9 % chez les hommes, 4 % chez les femmes ; 25 % chez les 20-39 ans)."
        },
        {
          id: "c9b-h9", niveau: "difficile", notion: "Alcool — données épidémiologiques", type: "qcm",
          question: "Selon l'OMS (2014), quelle répartition des décès liés à l'alcool (2012) est exacte ?",
          options: ["7,9 % des décès chez les hommes, 4 % chez les femmes, 25 % chez les 20-39 ans", "4 % chez les hommes, 7,9 % chez les femmes", "25 % chez les plus de 60 ans", "1 % toutes catégories"],
          reponse: 0,
          explication: "≈ 3,3 millions de décès (5,9 % du total) ; 7,9 % chez les hommes, 4 % chez les femmes, 25 % chez les 20-39 ans ; facteur dans plus de 200 maladies/blessures."
        },
        {
          id: "c9b-h10", niveau: "difficile", notion: "Classes & organisation du DSM", type: "qcm",
          question: "Lequel ne fait PAS partie des 10 classes de substances du DSM-5-TR ?",
          options: ["Les antidépresseurs", "Les opiacés", "Les sédatifs/hypnotiques/anxiolytiques", "Les substances inhalées"],
          reponse: 0,
          explication: "Les 10 classes : alcool, caféine, cannabis, hallucinogènes (PCP inclus), substances inhalées, opiacés, sédatifs/hypnotiques/anxiolytiques, stimulants, tabac, substance autre/inconnue."
        },
        {
          id: "c9b-h11", niveau: "difficile", notion: "Intoxication & sevrage (alcool)", type: "qcm",
          question: "Parmi les critères de l'intoxication, lequel est exact ?",
          options: ["Syndrome réversible spécifique dû à une prise récente, avec changements comportementaux/psychologiques problématiques", "Syndrome irréversible", "Survient seulement après un usage prolongé", "S'applique au tabac"],
          reponse: 0,
          explication: "Intoxication : syndrome réversible spécifique d'une substance, dû à une prise récente, avec changements significatifs (effets sur le SNC). Ne s'applique pas au tabac."
        },
        {
          id: "c9b-h12", niveau: "difficile", notion: "Étiologie — facteurs biologiques", type: "qcm",
          question: "Lequel ne fait PAS partie du circuit de récompense mésolimbique dopaminergique décrit ?",
          options: ["L'hippocampe", "L'aire tegmentale ventrale", "Le noyau accumbens", "Le cortex préfrontal"],
          reponse: 0,
          explication: "Circuit mésolimbique : aire tegmentale ventrale, noyau accumbens, cortex préfrontal. L'hippocampe n'est pas mentionné dans le cours."
        },
        {
          id: "c9b-h13", niveau: "difficile", notion: "Étiologie — facteurs psychologiques", type: "qcm",
          question: "« Rechercher un état d'esprit positif » correspond à quelle échelle des raisons de boire ?",
          options: ["Interne positive (renforcement)", "Interne négative (compensation)", "Externe positive (sociale)", "Externe négative (conformité)"],
          reponse: 0,
          explication: "Renforcement = interne positive (état d'esprit positif) ; compensation = interne négative ; sociale = externe positive ; conformité = externe négative."
        },
        {
          id: "c9b-h14", niveau: "difficile", notion: "Étiologie — facteurs biologiques", type: "qcm",
          question: "Lequel n'est PAS une neuroadaptation décrite après exposition répétée à une substance ?",
          options: ["La diminution durable du risque de rechute", "La tolérance", "Le sevrage", "La sensibilisation aux indices"],
          reponse: 0,
          explication: "Neuroadaptations : tolérance, sevrage, craving, sensibilisation aux indices, et risque PERSISTANT (non diminué) de rechute."
        },
        {
          id: "c9b-h15", niveau: "difficile", notion: "Trouble de l'usage — critères", type: "qcm",
          question: "Quelle correspondance sévérité/critères est correcte pour le trouble de l'usage ?",
          options: ["Léger 2-3 · Moyen 4-5 · Grave ≥ 6", "Léger 1 · Moyen 2-3 · Grave 4+", "Léger 2-4 · Moyen 5-7 · Grave 8+", "Léger 3-4 · Moyen 5-6 · Grave 7+"],
          reponse: 0,
          explication: "Léger 2-3 · moyen 4-5 · grave ≥ 6 symptômes (sur une période de 12 mois)."
        },
        {
          id: "c9b-m1", notion: "Classes & organisation du DSM", type: "multi",
          question: "Lesquelles font partie des 10 classes de substances du DSM-5-TR ?",
          options: ["Cannabis", "Caféine", "Tabac", "Sucre"],
          reponses: [0, 1, 2],
          explication: "Les 10 classes incluent le cannabis, la caféine et le tabac. Le sucre n'en fait pas partie."
        },
        {
          id: "c9b-s1", notion: "Trouble de l'usage — critères", type: "saisie",
          question: "Quel terme anglais désigne l'envie impérieuse de consommer une substance ?",
          reponse: "craving", accepts: ["craving"],
          explication: "Le craving (envie impérieuse) appartient au groupe « réduction du contrôle »."
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
        },
        {
          id: "c10-h1", niveau: "difficile", notion: "Groupe B — antisociale", type: "qcm",
          question: "Combien de manifestations (au moins) exige la personnalité ANTISOCIALE, et depuis quel âge les conduites doivent-elles apparaître ?",
          options: ["3 manifestations depuis l'âge de 15 ans (diagnostic ≥ 18 ans, trouble des conduites avant 15 ans)", "5 manifestations depuis 18 ans", "4 manifestations depuis l'enfance", "2 manifestations depuis 12 ans"],
          reponse: 0,
          explication: "Antisociale : ≥ 3 manifestations depuis l'âge de 15 ans ; diagnostic à ≥ 18 ans, avec antécédent de trouble des conduites avant 15 ans. (La plupart des autres TP exigent ≥ 4 ou ≥ 5 manifestations.)"
        },
        {
          id: "c10-h2", niveau: "difficile", notion: "Les 3 groupes (clusters)", type: "qcm",
          question: "Lequel de ces troubles de la personnalité ne requiert PAS au moins 5 manifestations ?",
          options: ["Personnalité paranoïaque (≥ 4)", "Personnalité borderline", "Personnalité narcissique", "Personnalité histrionique"],
          reponse: 0,
          explication: "Paranoïaque, schizoïde, évitante et obsessionnelle-compulsive exigent ≥ 4 manifestations ; schizotypique, borderline, histrionique, narcissique et dépendante en exigent ≥ 5 ; antisociale ≥ 3."
        },
        {
          id: "c10-h3", niveau: "difficile", notion: "Groupe C — prévalences", type: "qcm",
          question: "Quel trouble de la personnalité a la prévalence la plus élevée selon le cours ?",
          options: ["Obsessionnelle-compulsive (4-8 %)", "Borderline (2-6 %)", "Évitante (2 %)", "Dépendante (1 %)"],
          reponse: 0,
          explication: "La personnalité obsessionnelle-compulsive (4-8 %, + chez les hommes) est la plus prévalente parmi celles chiffrées dans le cours."
        },
        {
          id: "c10-h4", niveau: "difficile", notion: "Groupe C — obsessionnelle-compulsive", type: "qcm",
          question: "Quel énoncé distingue correctement la personnalité obsessionnelle-compulsive (TPOC) du TOC ?",
          options: ["Le TPOC est égosyntonique (traits perçus comme normaux) ; moins de 20 % des personnes avec un TOC ont un TPOC", "Le TPOC comporte des obsessions et compulsions intrusives", "Le TOC est un trouble de la personnalité", "Les deux sont identiques"],
          reponse: 0,
          explication: "Le TPOC (perfectionnisme/contrôle, égosyntonique) est distinct du TOC (obsessions/compulsions égodystoniques). Moins de 20 % des personnes avec un TOC présentent un TPOC."
        },
        {
          id: "c10-h5", niveau: "difficile", notion: "Groupe A — schizoïde", type: "cas",
          question: "Un homme vit seul, n'a aucun ami et n'en ressent pas le besoin ; il est indifférent aux éloges comme aux critiques et n'a pas de croyances bizarres. Trouble le plus probable ?",
          options: ["Personnalité schizoïde", "Personnalité évitante", "Personnalité schizotypique", "Personnalité paranoïaque"],
          reponse: 0,
          explication: "Détachement + absence de désir de relations + indifférence aux éloges/critiques, SANS distorsions cognitives ni excentricité = schizoïde. (L'évitante DÉSIRE des liens mais les fuit ; la schizotypique a une pensée magique/des conduites excentriques.)"
        },
        {
          id: "c10-h6", niveau: "difficile", notion: "Groupe B — borderline (critères)", type: "cas",
          question: "Une personne a des relations intenses et instables, une peur de l'abandon, une instabilité de l'identité, des automutilations et une dysphorie qui dure quelques heures. Diagnostic le plus précis ?",
          options: ["Personnalité borderline", "Personnalité histrionique", "Personnalité narcissique", "Personnalité dépendante"],
          reponse: 0,
          explication: "Instabilité des relations/de l'identité/des affects + impulsivité + automutilation + peur de l'abandon = borderline. L'histrionique cherche l'attention ; la narcissique est grandiose ; la dépendante est soumise et « collante »."
        },
        {
          id: "c10-h7", niveau: "difficile", notion: "Traitement — approches", type: "qcm",
          question: "Parmi ces psychothérapies, laquelle est PSYCHODYNAMIQUE (et non cognitivo-comportementale) ?",
          options: ["La thérapie focalisée sur le transfert (TFP)", "La thérapie comportementale dialectique (DBT)", "La thérapie des schémas", "Aucune des trois"],
          reponse: 0,
          explication: "Psychodynamiques : TFP et thérapie basée sur la mentalisation (MBT). TCC : DBT et thérapie des schémas. La psychothérapie de soutien vise à stabiliser et contenir."
        },
        {
          id: "c10-h8", niveau: "difficile", notion: "Traitement — approches", type: "vf",
          question: "Pour le trouble borderline, la pharmacothérapie est considérée comme peu efficace et sert surtout à atténuer certains symptômes.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai : antidépresseurs et antipsychotiques atténuent l'anxiété, la tendance suicidaire ou les symptômes psychotiques, mais la pharmacothérapie est jugée peu efficace (avec un risque d'abus). La psychothérapie reste centrale."
        },
        {
          id: "c10-h9", niveau: "difficile", notion: "Les 3 groupes (clusters)", type: "qcm",
          question: "Quelle prévalence de groupe (cluster) est exacte selon le cours ?",
          options: ["Groupe B (théâtral/émotif) ≈ 4,5 %", "Groupe A ≈ 9 %", "Groupe C ≈ 4,5 %", "Groupe B ≈ 1 %"],
          reponse: 0,
          explication: "Groupe A 3,6 % · Groupe B 4,5 % · Groupe C 2,8 %. Prévalence globale des troubles de la personnalité ≈ 9 %."
        },
        {
          id: "c10-h10", niveau: "difficile", notion: "Groupe B — narcissique", type: "qcm",
          question: "Quelle prévalence de trouble de la personnalité est exacte ?",
          options: ["Narcissique ≈ 2 %, plus fréquent chez les hommes", "Borderline ≈ 9 %", "Antisociale ≈ 10 %", "Obsessionnelle-compulsive ≈ 1 %"],
          reponse: 0,
          explication: "Narcissique ≈ 2 % (+ H) ; borderline 2-6 % (+ F) ; antisociale 1-4 % (+ H) ; obsessionnelle-compulsive 4-8 % (+ H)."
        },
        {
          id: "c10-h11", niveau: "difficile", notion: "Les 3 groupes (clusters)", type: "qcm",
          question: "Quelle exigence de nombre de manifestations est correcte ?",
          options: ["Schizotypique ≥ 5 ; paranoïaque ≥ 4 ; antisociale ≥ 3", "Toutes exigent ≥ 5", "Schizotypique ≥ 4 ; antisociale ≥ 5", "Borderline ≥ 3"],
          reponse: 0,
          explication: "≥ 5 : schizotypique, borderline, histrionique, narcissique, dépendante. ≥ 4 : paranoïaque, schizoïde, évitante, obsessionnelle-compulsive. ≥ 3 : antisociale."
        },
        {
          id: "c10-h12", niveau: "difficile", notion: "Groupe B — antisociale", type: "qcm",
          question: "Selon le cours, quelle proportion des personnes avec une personnalité antisociale a un autre diagnostic psychologique à vie ?",
          options: ["≈ 90 %", "≈ 50 %", "≈ 25 %", "≈ 10 %"],
          reponse: 0,
          explication: "≈ 90 % ont un autre diagnostic à vie ; comorbidité fréquente avec les troubles liés à l'usage d'une substance ; + chez les jeunes adultes et les personnes défavorisées."
        },
        {
          id: "c10-h13", niveau: "difficile", notion: "Groupe A — étiologie & comorbidité", type: "qcm",
          question: "La personnalité paranoïaque présente une comorbidité notable avec…",
          options: ["Le TSPT et le trouble lié à l'usage d'une substance", "Les troubles alimentaires", "Le TDAH", "Le trouble bipolaire de type I exclusivement"],
          reponse: 0,
          explication: "Paranoïaque : comorbidité avec TP schizotypique/schizoïde/narcissique/évitante, trouble du spectre de la schizophrénie, troubles anxieux, TSPT et trouble lié à l'usage d'une substance."
        },
        {
          id: "c10-h14", niveau: "difficile", notion: "Groupe C — obsessionnelle-compulsive", type: "qcm",
          question: "Quelle proportion des personnes avec un TOC présente un trouble de la personnalité obsessionnelle-compulsive (TPOC) ?",
          options: ["Moins de 20 %", "Plus de 80 %", "Environ 50 %", "100 %"],
          reponse: 0,
          explication: "Moins de 20 % des personnes avec un TOC présentent un TPOC — les deux sont distincts. Le TPOC est le plus prévalent du groupe C (4-8 %)."
        },
        {
          id: "c10-h15", niveau: "difficile", notion: "Traitement — approches", type: "qcm",
          question: "Lequel n'est PAS un objectif de la thérapie dialectique comportementale (DBT) de Linehan ?",
          options: ["Renforcer la pensée « tout noir, tout blanc »", "Moduler les émotions et l'impulsivité", "Tolérer la détresse", "Favoriser l'intégration (synthèse)"],
          reponse: 0,
          explication: "La DBT vise au contraire à ÉVITER le « tout noir tout blanc » et à favoriser l'intégration ; elle travaille la maîtrise émotionnelle, la tolérance à la détresse et la confiance en ses propres pensées/émotions."
        },
        {
          id: "c10-m1", notion: "Les 3 groupes (clusters)", type: "multi",
          question: "Lesquels appartiennent au GROUPE B des troubles de la personnalité ?",
          options: ["Borderline", "Narcissique", "Histrionique", "Évitante"],
          reponses: [0, 1, 2],
          explication: "Groupe B : borderline, histrionique, narcissique, antisociale. L'évitante appartient au groupe C."
        },
        {
          id: "c10-s1", notion: "Traitement — approches", type: "saisie",
          question: "Quel mécanisme désigne l'incapacité à former des idées nuancées (alternance idéalisation/dévalorisation) ?",
          reponse: "clivage", accepts: ["clivage"],
          explication: "Le clivage est notamment travaillé par la psychothérapie focalisée sur le transfert (TFP)."
        }
      ]
    },

    {
      id: "cours11",
      titre: "Cours 11 — Dysphorie de genre, paraphilies et dysfonctions sexuelles",
      court: "Sexualité & genre",
      emoji: "🫂",
      accent: "#3f8ecb",
      questions: [
        {
          id: "c11-01", notion: "Introduction — sexe & genre", type: "qcm",
          question: "Dans ce cours, comment distingue-t-on « sexe » et « genre » ?",
          options: [
            "Sexe = indicateurs biologiques (capacité reproductive) ; genre = rôle socioculturel",
            "Sexe = rôle socioculturel ; genre = indicateurs biologiques",
            "Les deux termes sont synonymes",
            "Sexe = identité ressentie ; genre = sexe assigné"
          ],
          reponse: 0,
          explication: "Sexe : indicateurs biologiques mâles/femelles (capacité reproductive). Genre : rôle socioculturel associé au fait d'être un garçon/une fille, un homme/une femme ou un autre genre. Domaine hautement controversé, vocabulaire évolutif."
        },
        {
          id: "c11-02", notion: "Dysphorie de genre — critères", type: "qcm",
          question: "Le critère A de la dysphorie de genre exige une non-congruence marquée entre genre vécu/exprimé et genre assigné, d'une durée minimale de…",
          options: ["6 mois, avec au moins 2 manifestations", "1 mois, avec au moins 4 manifestations", "12 mois, avec au moins 3 manifestations", "3 mois, avec une seule manifestation"],
          reponse: 0,
          explication: "Critère A : non-congruence marquée d'au moins 6 mois, avec ≥ 2 des 6 items (p. ex. désir d'être débarrassé de ses caractéristiques sexuelles, désir d'appartenir à l'autre genre, etc.)."
        },
        {
          id: "c11-03", notion: "Dysphorie de genre — critères", type: "vf",
          question: "Le diagnostic de dysphorie de genre exige une détresse cliniquement significative ou une altération du fonctionnement (critère B).",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai : c'est la détresse/l'altération qui est cliniquement pertinente (critère B). La non-congruence de genre en elle-même n'est pas un trouble — c'est la souffrance associée qui est visée."
        },
        {
          id: "c11-04", notion: "Dysphorie de genre — critères", type: "qcm",
          question: "Parmi les caractéristiques sexuelles SECONDAIRES, on trouve…",
          options: [
            "La poitrine, les poils pubiens, la voix, les menstruations",
            "Les ovaires, l'utérus, le vagin",
            "Le pénis, les testicules, la prostate",
            "Les trompes de Fallope et le clitoris"
          ],
          reponse: 0,
          explication: "Secondaires : poitrine, poils pubiens, voix, menstruations, éjaculation. Primaires : organes reproducteurs (vulve, ovaires, utérus, vagin / pénis, testicules, prostate)."
        },
        {
          id: "c11-05", notion: "Dysphorie de genre — prévalence", type: "qcm",
          question: "La prévalence chez les personnes qui se considèrent transgenres est estimée à…",
          options: ["0,5 à 0,6 %", "5 à 6 %", "0,05 %", "10 à 15 %"],
          reponse: 0,
          explication: "Transgenres : 0,5-0,6 % ; incongruence de genre / divers genres : 0,6-1,1 %. Probable sous-estimation (tous ne consultent pas). Comorbidités : troubles anxieux, dépressifs, TSA, TSPT (p. ex. après intimidation sévère)."
        },
        {
          id: "c11-06", notion: "Dysphorie de genre — cas", type: "cas",
          question: "Depuis plus d'un an, une personne assignée garçon à la naissance ressent une non-congruence marquée avec son genre vécu, désire les caractéristiques de l'autre genre et veut être traitée comme telle ; cela cause une détresse importante. Diagnostic ?",
          options: [
            "Dysphorie de genre",
            "Trouble transvestisme",
            "Autre dysphorie de genre spécifiée",
            "Aucun diagnostic : il n'y a pas de trouble"
          ],
          reponse: 0,
          explication: "Non-congruence ≥ 6 mois + ≥ 2 items + détresse cliniquement significative (critère B) = dysphorie de genre. Le transvestisme, lui, concerne l'excitation sexuelle liée au travestissement (paraphilie) — tout autre chose."
        },
        {
          id: "c11-07", notion: "Dysphorie de genre — étiologie", type: "qcm",
          question: "Quel énoncé reflète l'étiologie de la dysphorie de genre vue en cours ?",
          options: [
            "Identité neurodéveloppementale multifactorielle (influences hormonales prénatales) ; pas de cause parentale démontrée",
            "Cause unique et purement génétique avec biomarqueur diagnostique",
            "Cause essentiellement éducative et parentale",
            "Conséquence d'un trouble psychotique"
          ],
          reponse: 0,
          explication: "Identité : neurodéveloppementale multifactorielle (hormones prénatales, hypothèse de différenciation cérébrale, composante génétique probable), sans biomarqueur. La dysphorie, elle, est fortement modulée par le contexte social (stigmatisation, rejet, discrimination). Pas de cause parentale démontrée."
        },
        {
          id: "c11-08", notion: "Dysphorie de genre — traitement", type: "qcm",
          question: "Selon la WPATH, l'objectif du traitement est…",
          options: [
            "Un confort personnel durable avec son identité de genre, pour optimiser santé et bien-être",
            "Faire correspondre l'identité au sexe assigné à la naissance",
            "Supprimer toute expression de genre",
            "Uniquement la chirurgie d'affirmation"
          ],
          reponse: 0,
          explication: "Objectif : « confort personnel durable avec leur identité de genre […] » (WPATH). Moyens possibles : hormonothérapie, chirurgies d'affirmation du genre, psychothérapie (traiter les comorbidités, faire face à la stigmatisation, faciliter la transition)."
        },
        {
          id: "c11-09", notion: "Paraphilies — définitions", type: "qcm",
          question: "Qu'est-ce qui distingue une paraphilie d'un TROUBLE paraphilique (DSM-5) ?",
          options: [
            "Le trouble cause une détresse/altération chez l'individu OU un préjudice (ou risque) à autrui, depuis > 6 mois",
            "Le trouble est plus rare",
            "La paraphilie implique toujours un crime",
            "Il n'y a aucune différence"
          ],
          reponse: 0,
          explication: "Paraphilie = intérêt sexuel intense pour des objets/activités inusités. Devient un TROUBLE paraphilique quand elle entraîne détresse/altération du fonctionnement, ou un préjudice (ou risque) à autrui, depuis plus de 6 mois."
        },
        {
          id: "c11-10", notion: "Paraphilies — définitions", type: "vf",
          question: "Les troubles paraphiliques sont très nettement plus fréquents chez les hommes.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai (H +++). Comorbidités fréquentes : schizophrénie, troubles dépressifs, troubles de la personnalité ; plusieurs paraphilies peuvent coexister chez un même individu. Statistiques imprécises."
        },
        {
          id: "c11-11", notion: "Paraphilies — types", type: "qcm",
          question: "Le trouble VOYEURISME se caractérise par l'excitation liée au fait de…",
          options: [
            "Observer une personne qui ne s'en doute pas, nue, se déshabillant ou ayant des rapports",
            "Exhiber ses organes génitaux devant une personne prise au dépourvu",
            "Toucher ou se frotter contre une personne non consentante",
            "Se travestir"
          ],
          reponse: 0,
          explication: "Voyeurisme : observer à l'insu de la personne (élément de risque, secret) ; implique rarement un contact. Apparaît à l'adolescence."
        },
        {
          id: "c11-12", notion: "Paraphilies — types", type: "qcm",
          question: "Quels deux troubles paraphiliques représentent la majorité des crimes sexuels signalés à la police ?",
          options: [
            "L'exhibitionnisme et le voyeurisme",
            "Le fétichisme et le transvestisme",
            "Le sadisme et le masochisme",
            "La pédophilie et l'inceste"
          ],
          reponse: 0,
          explication: "Exhibitionnisme (exhiber ses organes génitaux devant une personne prise au dépourvu) + voyeurisme : majorité des crimes sexuels signalés. L'exhibitionniste cherche rarement un contact avec la victime."
        },
        {
          id: "c11-13", notion: "Paraphilies — types", type: "qcm",
          question: "Le trouble FROTTEURISME consiste en l'excitation liée au fait de…",
          options: [
            "Toucher ou se frotter contre une personne non consentante",
            "Observer une personne à son insu",
            "Souffrir ou être humilié",
            "Se frotter à des objets en latex"
          ],
          reponse: 0,
          explication: "Frotteurisme : se frotter/toucher une personne non consentante, souvent dans des lieux permettant de s'échapper (autobus, foule). Apparaît à l'adolescence ; peu étudié."
        },
        {
          id: "c11-14", notion: "Paraphilies — types", type: "qcm",
          question: "Quelle est la différence entre sadisme et masochisme sexuels ?",
          options: [
            "Sadisme : excitation par la souffrance d'autrui ; masochisme : par le fait de souffrir/être humilié soi-même",
            "Sadisme : souffrir soi-même ; masochisme : faire souffrir l'autre",
            "Les deux concernent l'observation à l'insu d'autrui",
            "Les deux concernent des objets fétiches"
          ],
          reponse: 0,
          explication: "Sadisme : excitation provoquée par la souffrance psychologique ou physique d'une autre personne. Masochisme : excitation provoquée par le fait de souffrir ou d'être humilié soi-même (algolagnie)."
        },
        {
          id: "c11-15", notion: "Paraphilies — pédophilie & inceste", type: "qcm",
          question: "Selon les critères, le diagnostic de trouble pédophilie suppose notamment que l'individu…",
          options: [
            "Ait au moins 16 ans et au moins 5 ans de plus que l'enfant prépubère (≈ 13 ans ou moins)",
            "Ait au moins 21 ans et 10 ans de plus que l'enfant",
            "Soit toujours majeur de plus de 18 ans",
            "Ait moins de 16 ans"
          ],
          reponse: 0,
          explication: "Excitation/pulsions/comportements impliquant un enfant prépubère (≈ ≤ 13 ans) ; individu ≥ 16 ans ET ≥ 5 ans de plus que l'enfant. Le jugement clinique exclut les relations entre un grand adolescent et un enfant de 12-13 ans. Spécifications : exclusif/non, sexe ciblé, limité à l'inceste."
        },
        {
          id: "c11-16", notion: "Paraphilies — pédophilie & inceste", type: "qcm",
          question: "Quelle forme d'inceste est la plus fréquente ?",
          options: [
            "Frère-sœur, suivi de père-fille",
            "Père-fils",
            "Mère-fille",
            "Oncle-neveu"
          ],
          reponse: 0,
          explication: "Inceste frère-sœur le plus fréquent, suivi de père-fille. L'inceste est une spécification du trouble pédophilie dans le DSM-5-TR ; les victimes d'inceste sont souvent plus âgées que les victimes de pédophilie."
        },
        {
          id: "c11-17", notion: "Paraphilies — types", type: "qcm",
          question: "Le trouble FÉTICHISME se caractérise par…",
          options: [
            "Une excitation liée à des parties du corps ou des objets (p. ex. pieds, chaussures, latex), souvent préférés ou essentiels",
            "L'excitation liée au travestissement",
            "L'excitation liée à l'observation à l'insu d'autrui",
            "L'excitation liée aux appels téléphoniques obscènes"
          ],
          reponse: 0,
          explication: "Fétichisme : la présence du fétiche (partie du corps, objet) est préférée ou essentielle à l'excitation ; attrait ressenti comme involontaire, irrésistible, compulsif. Apparaît généralement à l'adolescence."
        },
        {
          id: "c11-18", notion: "Paraphilies — types", type: "qcm",
          question: "La scatologie téléphonique, la nécrophilie et la zoophilie sont classées comme…",
          options: [
            "Autres troubles paraphiliques spécifiés",
            "Des dysfonctions sexuelles",
            "Des sous-types de fétichisme",
            "Des troubles de la communication"
          ],
          reponse: 0,
          explication: "Autres troubles paraphiliques spécifiés : nécrophilie (cadavres), zoophilie (animaux), scatologie téléphonique (appels obscènes), coprophilie (excréments), urophilie (urine), etc."
        },
        {
          id: "c11-19", notion: "Paraphilies — traitement", type: "qcm",
          question: "Quel est l'axe principal de la TCC dans le traitement des troubles paraphiliques ?",
          options: [
            "Distorsions cognitives, contrôle des impulsions, empathie, prévention de la rechute",
            "Hormonothérapie d'affirmation du genre",
            "Inhibiteurs de la PDE-5",
            "Renutrition progressive"
          ],
          reponse: 0,
          explication: "TCC : identifier les distorsions cognitives, développer le contrôle des impulsions et l'empathie, comportements sécuritaires, prévention de la rechute (situations à risque, signes précurseurs). Pharmaco : ISRS (réduire pensées intrusives et compulsivité)."
        },
        {
          id: "c11-20", notion: "Dysfonctions sexuelles — généralités", type: "qcm",
          question: "Pour la plupart des dysfonctions sexuelles, la durée minimale exigée est de…",
          options: ["6 mois, avec détresse cliniquement significative", "1 mois", "12 mois", "Aucune durée minimale"],
          reponse: 0,
          explication: "Symptômes persistants et récurrents depuis au moins 6 mois, avec détresse ou difficultés relationnelles. Comorbidité fréquente."
        },
        {
          id: "c11-21", notion: "Dysfonctions sexuelles — réponse sexuelle", type: "qcm",
          question: "Le modèle de la réponse sexuelle de Masters & Johnson (1966) comporte 4 phases :",
          options: [
            "Excitation, plateau, orgasme, résolution",
            "Désir, attirance, orgasme, refus",
            "Tension, relâchement, plaisir, sommeil",
            "Excitation, désir, culpabilité, résolution"
          ],
          reponse: 0,
          explication: "Modèle linéaire : excitation → plateau → orgasme → résolution. Le cycle de la réponse sexuelle ajoute le désir en amont (désir, excitation, orgasme, résolution)."
        },
        {
          id: "c11-22", notion: "Dysfonctions sexuelles — spécifications", type: "qcm",
          question: "Parmi les spécifications communes aux dysfonctions sexuelles, on trouve…",
          options: [
            "De tout temps / acquis, et généralisé / situationnel",
            "Bizarre / non bizarre",
            "Exclusif / non exclusif",
            "Avec ou sans catatonie"
          ],
          reponse: 0,
          explication: "Spécifications : (1) de tout temps vs acquis ; (2) généralisé vs situationnel ; (3) sévérité."
        },
        {
          id: "c11-23", notion: "Dysfonctions sexuelles — cas", type: "cas",
          question: "Depuis plus de 6 mois, dans presque tous les rapports, un homme éjacule environ une minute après la pénétration, avant de le souhaiter, ce qui le détresse. Diagnostic ?",
          options: [
            "Éjaculation prématurée (précoce)",
            "Éjaculation retardée",
            "Trouble de l'érection",
            "Diminution du désir sexuel chez l'homme"
          ],
          reponse: 0,
          explication: "Éjaculation environ 1 minute après la pénétration, avant de le vouloir, ≥ 6 mois (75-100 % des cas) = éjaculation prématurée — le problème sexuel le plus fréquent chez l'homme (prévalence 1-3 %, jusqu'à 20-30 % en mesurant l'insatisfaction)."
        },
        {
          id: "c11-24", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "L'éjaculation retardée se caractérise par un retard/absence d'éjaculation dans 75-100 % des occasions, avec une prévalence d'environ…",
          options: ["1 à 5 %", "15 à 20 %", "30 à 40 %", "0,1 %"],
          reponse: 0,
          explication: "Éjaculation retardée : prévalence 1-5 %. Facteurs étiologiques évoqués : peur de la fécondation, hostilité, peur de s'abandonner, ou cause biologique (certains tranquillisants)."
        },
        {
          id: "c11-25", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "À propos du trouble de l'orgasme chez la femme, lequel est exact ?",
          options: [
            "C'est le 2e problème sexuel le plus courant chez les femmes ; l'orgasme féminin a un caractère largement appris",
            "Il est toujours d'origine purement biologique",
            "Il est associé à la reproduction comme l'éjaculation",
            "Il ne cause jamais de détresse"
          ],
          reponse: 0,
          explication: "2e problème sexuel le plus courant chez les femmes (10 % à vie). Facteurs : caractère appris de l'orgasme, méconnaissance de l'anatomie, difficulté à exprimer ses besoins, peur de perdre le contrôle, seuil orgasmique variable."
        },
        {
          id: "c11-26", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "Le trouble de l'érection…",
          options: [
            "Voit sa prévalence augmenter avec l'âge (≈ 13-21 % des 40-80 ans, ≈ 2 % avant 40 ans)",
            "Touche surtout les hommes de moins de 30 ans",
            "Disparaît toujours sans traitement",
            "N'a aucune cause biologique"
          ],
          reponse: 0,
          explication: "Incapacité persistante à obtenir/maintenir une érection (≥ 6 mois). Causes : effets de médicaments, maladies (diabète, alcoolisme chronique), dépression/anxiété, cercle vicieux de la peur de l'échec. Prévalence ↑ avec l'âge."
        },
        {
          id: "c11-27", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "Le trouble lié à des douleurs génito-pelviennes ou à la pénétration a une prévalence d'environ…",
          options: ["15 %", "1 %", "40 %", "0,5 %"],
          reponse: 0,
          explication: "Prévalence ≈ 15 %. Difficultés de pénétration, douleur vulvovaginale/pelvienne, peur anticipatoire, crispation du plancher pelvien (≥ 6 mois). Facteurs : partenaire, relationnels, vulnérabilité individuelle (image du corps, abus), culturels/religieux."
        },
        {
          id: "c11-28", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "Le diagnostic de « trouble de l'intérêt/excitation sexuelle chez la femme » exige la présence d'au moins…",
          options: ["3 des critères (absence/diminution d'intérêt, de fantasmes, d'excitation…)", "1 seul critère", "Tous les 6 critères", "5 des 6 critères"],
          reponse: 0,
          explication: "Au moins 3 critères parmi : intérêt sexuel, fantasmes, initiation/réactivité, excitation/plaisir (≥ 75 % de l'activité), réponse aux stimuli érotiques, sensations génitales/non génitales — pendant au moins 6 mois."
        },
        {
          id: "c11-29", notion: "Dysfonctions sexuelles — étiologie", type: "qcm",
          question: "Parmi les facteurs BIOLOGIQUES des dysfonctions sexuelles, on retrouve…",
          options: [
            "Causes vasculaires, neurologiques, endocriniennes et effets secondaires médicamenteux",
            "Uniquement des conflits de couple",
            "Uniquement des distorsions cognitives",
            "Le conditionnement sexuel"
          ],
          reponse: 0,
          explication: "Facteurs biologiques : vasculaires (maladies cardiovasculaires), neurologiques, endocriniens, effets secondaires de médicaments. S'ajoutent des facteurs psychologiques et relationnels."
        },
        {
          id: "c11-30", notion: "Dysfonctions sexuelles — traitement", type: "qcm",
          question: "Sur le plan pharmacologique, quel traitement correspond à quelle dysfonction ?",
          options: [
            "Inhibiteurs de la PDE-5 → dysfonction érectile ; ISRS → éjaculation précoce",
            "PDE-5 → éjaculation précoce ; ISRS → dysfonction érectile",
            "Antipsychotiques → dysfonction érectile",
            "ISRS → dysfonction érectile uniquement"
          ],
          reponse: 0,
          explication: "Inhibiteurs de la PDE-5 (Viagra, Cialis, Levitra) pour la dysfonction érectile ; ISRS pour l'éjaculation précoce ; et traitement des causes médicales sous-jacentes. La thérapie sexuelle et la TCC restent centrales."
        },
        {
          id: "c11-h1", niveau: "difficile", notion: "Dysphorie de genre — critères", type: "qcm",
          question: "Lequel n'est PAS requis pour le diagnostic de dysphorie de genre chez l'adolescent/adulte ?",
          options: ["Avoir entamé une transition médicale", "Une non-congruence marquée d'au moins 6 mois", "Au moins 2 des 6 manifestations", "Une détresse cliniquement significative ou une altération du fonctionnement"],
          reponse: 0,
          explication: "La transition médicale n'est pas un critère diagnostique. Le diagnostic repose sur la non-congruence ≥ 6 mois (≥ 2 items) ET la détresse/altération (critère B)."
        },
        {
          id: "c11-h2", niveau: "difficile", notion: "Dysphorie de genre — critères", type: "qcm",
          question: "Lequel est une caractéristique sexuelle SECONDAIRE (et non primaire) ?",
          options: ["La voix / la pilosité pubienne", "L'utérus", "Les testicules", "Les ovaires"],
          reponse: 0,
          explication: "Secondaires : voix, pilosité, poitrine, menstruations, éjaculation. Primaires : organes reproducteurs (utérus, ovaires, testicules, pénis, prostate…)."
        },
        {
          id: "c11-h3", niveau: "difficile", notion: "Paraphilies — définitions", type: "qcm",
          question: "Une personne a un intérêt paraphilique mais sans détresse, sans altération du fonctionnement et sans préjudice à autrui. Que peut-on dire ?",
          options: ["C'est une paraphilie, mais pas un TROUBLE paraphilique", "C'est automatiquement un trouble paraphilique", "C'est une dysfonction sexuelle", "C'est un trouble de l'usage"],
          reponse: 0,
          explication: "Le TROUBLE paraphilique suppose une détresse/altération OU un préjudice (ou risque) à autrui, depuis plus de 6 mois. Sans cela, il s'agit d'une paraphilie sans trouble."
        },
        {
          id: "c11-h4", niveau: "difficile", notion: "Paraphilies — types", type: "qcm",
          question: "Quels deux troubles paraphiliques constituent la majorité des crimes sexuels signalés ?",
          options: ["Exhibitionnisme et voyeurisme", "Fétichisme et transvestisme", "Sadisme et masochisme", "Pédophilie et frotteurisme"],
          reponse: 0,
          explication: "L'exhibitionnisme et le voyeurisme représentent la majorité des crimes sexuels signalés à la police."
        },
        {
          id: "c11-h5", niveau: "difficile", notion: "Paraphilies — pédophilie & inceste", type: "qcm",
          question: "Quelle condition d'âge fait partie des critères du trouble pédophilie ?",
          options: ["Avoir ≥ 16 ans ET au moins 5 ans de plus que l'enfant prépubère", "Avoir ≥ 18 ans et 10 ans de plus", "Avoir ≥ 21 ans", "Aucune condition d'âge"],
          reponse: 0,
          explication: "Enfant prépubère (≈ ≤ 13 ans) ; l'individu doit avoir ≥ 16 ans ET ≥ 5 ans de plus que l'enfant (avec jugement clinique pour un grand adolescent face à un enfant de 12-13 ans)."
        },
        {
          id: "c11-h6", niveau: "difficile", notion: "Dysfonctions sexuelles — réponse sexuelle", type: "qcm",
          question: "Lequel inclut la phase de DÉSIR, absente du modèle original en 4 phases de Masters & Johnson ?",
          options: ["Le cycle de la réponse sexuelle (désir → excitation → orgasme → résolution)", "Le modèle de Masters & Johnson (1966)", "Aucun des deux", "Les deux, de façon identique"],
          reponse: 0,
          explication: "Masters & Johnson (1966) : excitation, plateau, orgasme, résolution (pas de phase « désir »). Le cycle de la réponse sexuelle ajoute le désir en amont."
        },
        {
          id: "c11-h7", niveau: "difficile", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "Le trouble de l'intérêt/excitation sexuelle chez la femme exige au moins combien de critères ?",
          options: ["3 sur 6", "1 sur 6", "Les 6", "5 sur 6"],
          reponse: 0,
          explication: "≥ 3 des 6 critères (intérêt, fantasmes, initiation/réactivité, excitation/plaisir ≥ 75 %, réponse aux stimuli, sensations génitales/non) pendant au moins 6 mois."
        },
        {
          id: "c11-h8", niveau: "difficile", notion: "Dysfonctions sexuelles — traitement", type: "qcm",
          question: "Quelle association traitement-trouble est correcte ?",
          options: ["ISRS → éjaculation précoce ET troubles paraphiliques ; PDE-5 → dysfonction érectile", "PDE-5 → éjaculation précoce ; ISRS → dysfonction érectile", "Antipsychotiques → dysfonction érectile", "PDE-5 → troubles paraphiliques"],
          reponse: 0,
          explication: "Les ISRS servent à l'éjaculation précoce et, dans les troubles paraphiliques, à réduire les pensées sexuelles intrusives et la compulsivité. Les inhibiteurs de la PDE-5 traitent la dysfonction érectile."
        },
        {
          id: "c11-h9", niveau: "difficile", notion: "Dysphorie de genre — prévalence", type: "qcm",
          question: "Quelles prévalences le cours indique-t-il pour la dysphorie/incongruence de genre ?",
          options: ["Transgenres 0,5-0,6 % ; incongruence/divers genres 0,6-1,1 %", "Transgenres 5-6 %", "Transgenres 0,05 %", "Incongruence 10-15 %"],
          reponse: 0,
          explication: "Transgenres 0,5-0,6 % ; incongruence de genre/divers genres 0,6-1,1 %. Probable sous-estimation (tous ne consultent pas)."
        },
        {
          id: "c11-h10", niveau: "difficile", notion: "Paraphilies — types", type: "qcm",
          question: "Selon une étude citée, quelle proportion d'étudiantes a subi au moins un acte de frotteurisme ou d'exhibitionnisme ?",
          options: ["≈ 44 %", "≈ 10 %", "≈ 75 %", "≈ 5 %"],
          reponse: 0,
          explication: "Une étude rapporte que 44 % des étudiantes ont subi au moins un acte de frotteurisme ou d'exhibitionnisme. Le frotteurisme reste peu étudié."
        },
        {
          id: "c11-h11", niveau: "difficile", notion: "Paraphilies — pédophilie & inceste", type: "qcm",
          question: "Quel est l'ordre de fréquence des formes d'inceste selon le cours ?",
          options: ["Frère-sœur en premier, puis père-fille", "Père-fille en premier, puis mère-fils", "Père-fils en premier", "Oncle-nièce en premier"],
          reponse: 0,
          explication: "Inceste frère-sœur le plus fréquent, suivi de père-fille. C'est une spécification du trouble pédophilie ; les victimes d'inceste sont souvent plus âgées que celles de pédophilie."
        },
        {
          id: "c11-h12", niveau: "difficile", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "Quelle prévalence de dysfonction sexuelle est exacte selon le cours ?",
          options: ["Trouble lié à des douleurs génito-pelviennes ≈ 15 %", "Diminution du désir chez l'homme ≈ 15 %", "Éjaculation retardée ≈ 20 %", "Dysfonction érectile ≈ 50 % avant 40 ans"],
          reponse: 0,
          explication: "Douleurs génito-pelviennes ≈ 15 % ; diminution du désir chez l'homme ≈ 1,8 % ; éjaculation retardée 1-5 % ; dysfonction érectile 13-21 % chez les 40-80 ans (2 % avant 40 ans)."
        },
        {
          id: "c11-h13", niveau: "difficile", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "Concernant l'éjaculation prématurée, lequel est exact ?",
          options: ["Problème sexuel le plus fréquent chez l'homme ; ≈ 1-3 % (jusqu'à 20-30 % selon l'insatisfaction)", "Survient ~10 min après la pénétration", "Prévalence ≈ 50 %", "Plus fréquent chez les femmes"],
          reponse: 0,
          explication: "Éjaculation ~1 minute après la pénétration, avant de le souhaiter, ≥ 6 mois ; problème le plus fréquent chez l'homme ; 1-3 % (20-30 % en mesurant l'insatisfaction de la durée)."
        },
        {
          id: "c11-h14", niveau: "difficile", notion: "Dysfonctions sexuelles — types", type: "qcm",
          question: "Le trouble de l'orgasme chez la femme est, selon le cours…",
          options: ["Le 2e problème sexuel le plus courant chez les femmes (≈ 10 % à vie)", "Le plus rare des troubles sexuels", "Toujours d'origine biologique", "Associé à la reproduction comme l'éjaculation"],
          reponse: 0,
          explication: "2e problème le plus courant chez les femmes (10 % à vie) ; l'orgasme féminin a un caractère largement appris et n'est pas associé à la reproduction (contrairement à l'éjaculation)."
        },
        {
          id: "c11-h15", niveau: "difficile", notion: "Paraphilies — types", type: "qcm",
          question: "La coprophilie correspond à une excitation sexuelle suscitée par…",
          options: ["Les excréments", "L'urine", "Les cadavres", "Les animaux"],
          reponse: 0,
          explication: "Coprophilie = excréments ; urophilie = urine ; nécrophilie = cadavres ; zoophilie = animaux ; scatologie téléphonique = appels obscènes ; cystérophilie = lavements (autres troubles paraphiliques spécifiés)."
        },
        {
          id: "c11-m1", notion: "Dysfonctions sexuelles — généralités", type: "multi",
          question: "Lesquelles sont des DYSFONCTIONS sexuelles (et non des paraphilies) ?",
          options: ["Éjaculation prématurée", "Trouble de l'érection", "Trouble de l'orgasme chez la femme", "Voyeurisme"],
          reponses: [0, 1, 2],
          explication: "Dysfonctions : éjaculation prématurée/retardée, trouble de l'érection, de l'orgasme, du désir, douleurs génito-pelviennes. Le voyeurisme est un trouble paraphilique."
        },
        {
          id: "c11-s1", notion: "Paraphilies — définitions", type: "saisie",
          question: "Comment nomme-t-on un intérêt sexuel intense et persistant pour des objets ou activités inusités ?",
          reponse: "paraphilie", accepts: ["paraphilie", "paraphilies"],
          explication: "Une paraphilie devient un trouble paraphilique en cas de détresse/altération ou de préjudice à autrui."
        }
      ]
    },

    {
      id: "cours12",
      titre: "Cours 12 — Troubles de l'enfance",
      court: "Enfance",
      emoji: "🧸",
      accent: "#5aa46a",
      questions: [
        {
          id: "c12-01", notion: "Troubles neurodéveloppementaux — vue d'ensemble", type: "qcm",
          question: "Lequel fait partie des troubles NEURODÉVELOPPEMENTAUX ?",
          options: [
            "Le trouble du spectre de l'autisme (TSA)",
            "Le trouble oppositionnel avec provocation",
            "Le trouble des conduites",
            "L'anxiété de séparation"
          ],
          reponse: 0,
          explication: "Neurodéveloppementaux : handicaps intellectuels, troubles de la communication, TSA, TDA/H, trouble spécifique des apprentissages, troubles moteurs. Les autres réponses appartiennent aux troubles disruptifs ou anxieux."
        },
        {
          id: "c12-02", notion: "Handicap intellectuel", type: "qcm",
          question: "Quels sont les critères clés du handicap intellectuel ?",
          options: [
            "Déficit intellectuel (QI < 70-75) + déficit du fonctionnement adaptatif, avant 18 ans",
            "QI < 100 après 18 ans",
            "Uniquement un QI bas, sans autre critère",
            "Un déficit présent seulement à l'âge adulte"
          ],
          reponse: 0,
          explication: "Avant 18 ans : déficit des fonctions intellectuelles (QI < 70-75, ≈ 3 % de la pop.) confirmé par tests standardisés, ET déficit du fonctionnement adaptatif."
        },
        {
          id: "c12-03", notion: "Handicap intellectuel", type: "qcm",
          question: "Le fonctionnement adaptatif s'évalue sur 3 domaines :",
          options: [
            "Conceptuel (scolaire), social et pratique",
            "Moteur, verbal et sensoriel",
            "Affectif, cognitif et biologique",
            "Familial, scolaire et professionnel"
          ],
          reponse: 0,
          explication: "3 domaines : conceptuel (scolaire), social, pratique — p. ex. concept du temps et de l'argent, autonomie."
        },
        {
          id: "c12-04", notion: "Handicap intellectuel", type: "qcm",
          question: "Quel niveau de sévérité du handicap intellectuel concerne environ 85 % des personnes avec un QI < 70 ?",
          options: ["Léger (QI ≈ 50-70)", "Moyen", "Grave", "Profond"],
          reponse: 0,
          explication: "Léger (QI ≈ 50-70) : 85 %. Moyen : 10 % · grave : 3-4 % · profond (QI < 20-25, supervision intégrale, soins à vie) : 1-2 %."
        },
        {
          id: "c12-05", notion: "Handicap intellectuel", type: "qcm",
          question: "Parmi les causes GÉNÉTIQUES du handicap intellectuel, on cite typiquement…",
          options: [
            "La trisomie 21, le syndrome de l'X fragile, le syndrome de Williams",
            "Le syndrome d'alcoolisation fœtale",
            "La méningite et l'encéphalite",
            "L'hypoxie périnatale"
          ],
          reponse: 0,
          explication: "Génétiques : trisomie 21, X fragile, syndromes de Williams/Angelman, erreurs innées du métabolisme. (Le SAF est prénatal ; méningite/encéphalite sont postnataux ; l'hypoxie est périnatale.)"
        },
        {
          id: "c12-06", notion: "Troubles de la communication", type: "qcm",
          question: "Le bégaiement correspond à quel trouble de la communication ?",
          options: [
            "Le trouble de la fluidité verbale",
            "Le trouble du langage",
            "Le trouble de la phonation",
            "Le trouble de la communication sociale"
          ],
          reponse: 0,
          explication: "Trouble de la fluidité verbale (bégaiement) : répétitions/prolongements de sons, pauses, substitutions. Apparaît vers 5 ans, surtout chez les garçons ; 65-85 % le surmontent (la sévérité à 8 ans est pronostique)."
        },
        {
          id: "c12-07", notion: "Troubles de la communication", type: "qcm",
          question: "Quel trouble de la communication a été AJOUTÉ au DSM-5 ?",
          options: [
            "Le trouble de la communication sociale (pragmatique)",
            "Le trouble du langage",
            "Le trouble de la phonation",
            "Le bégaiement"
          ],
          reponse: 0,
          explication: "Le trouble de la communication sociale (pragmatique) : difficultés persistantes à utiliser la communication verbale et non verbale en contexte social (adapter son langage à l'interlocuteur, à la situation)."
        },
        {
          id: "c12-08", notion: "Troubles de la communication", type: "qcm",
          question: "Quelle est la différence entre trouble du langage et trouble de la phonation ?",
          options: [
            "Langage : difficulté à s'exprimer/structurer (mots, grammaire) ; phonation : vocabulaire large mais prononciation déficiente",
            "Langage : prononciation déficiente ; phonation : grammaire pauvre",
            "Les deux désignent le bégaiement",
            "Les deux sont des troubles moteurs"
          ],
          reponse: 0,
          explication: "Trouble du langage : difficulté d'acquisition/utilisation (phrases brèves, grammaire inférieure, oubli de mots). Trouble de la phonation : comprend et a un vocabulaire large, mais prononce mal (« bruit » → « buit »)."
        },
        {
          id: "c12-09", notion: "TSA — critères", type: "qcm",
          question: "Le critère A du TSA (déficits de la communication sociale) exige…",
          options: [
            "Les 3 manifestations : réciprocité socio-émotionnelle, communication non verbale, et relations",
            "Au moins 1 des 3 manifestations",
            "Au moins 2 des 4 manifestations",
            "Aucune manifestation précise"
          ],
          reponse: 0,
          explication: "Critère A : déficits persistants dans la communication sociale, illustrés par les 3 domaines (réciprocité socio-émotionnelle ; comportements non verbaux ; développement/maintien des relations) — tous présents."
        },
        {
          id: "c12-10", notion: "TSA — critères", type: "qcm",
          question: "Le critère B du TSA (modes restreints/répétitifs) exige au moins…",
          options: [
            "2 des 4 éléments (stéréotypies, insistance sur la similarité, intérêts restreints, particularités sensorielles)",
            "1 des 4 éléments",
            "3 des 4 éléments",
            "Les 4 éléments"
          ],
          reponse: 0,
          explication: "Critère B : ≥ 2 parmi — mouvements/paroles stéréotypés (écholalie), insistance sur la similarité/rituels, intérêts très restreints et intenses, hyper/hyporéactivité sensorielle."
        },
        {
          id: "c12-11", notion: "TSA — cas", type: "cas",
          question: "Un enfant a peu de contact visuel et de réciprocité sociale, exige des routines fixes (détresse au moindre changement), a un intérêt très intense pour les horaires de trains et réagit fortement à certaines textures. Symptômes présents depuis la petite enfance. Diagnostic le plus probable ?",
          options: [
            "Trouble du spectre de l'autisme",
            "Trouble du langage",
            "TDAH, présentation inattention prédominante",
            "Trouble de la communication sociale isolé"
          ],
          reponse: 0,
          explication: "Déficits de communication sociale (critère A) + modes restreints/répétitifs (routines rigides, intérêt circonscrit, particularités sensorielles = critère B), début précoce → TSA."
        },
        {
          id: "c12-12", notion: "TSA — critères", type: "vf",
          question: "Les symptômes du TSA doivent être présents dès la période de développement précoce, même s'ils peuvent ne devenir pleinement manifestes que plus tard.",
          options: ["Vrai", "Faux"],
          reponse: 0,
          explication: "Vrai : début précoce, mais les symptômes peuvent n'apparaître clairement que lorsque les exigences sociales dépassent les capacités (école, adolescence), ou être masqués par des stratégies apprises."
        },
        {
          id: "c12-13", notion: "TSA — sévérité & étiologie", type: "qcm",
          question: "Comment se spécifie la sévérité du TSA ?",
          options: [
            "Selon le niveau de soutien requis (demande de soutien, substantiel, très substantiel)",
            "Selon le QI uniquement",
            "Selon l'âge d'apparition",
            "Selon la durée des symptômes"
          ],
          reponse: 0,
          explication: "Sévérité fondée sur les déficits des critères A et B, exprimée en niveau de soutien : « demande de soutien », « substantiel », « très substantiel ». On spécifie aussi : avec/sans déficit intellectuel ou langagier, catatonie, etc."
        },
        {
          id: "c12-14", notion: "TSA — sévérité & étiologie", type: "qcm",
          question: "Que dit le cours sur l'héritabilité du TSA ?",
          options: [
            "Très élevée (≈ 60-90 %), la plus forte même comparée à la schizophrénie et au trouble bipolaire",
            "Faible, surtout d'origine environnementale",
            "Nulle",
            "Identique à celle des troubles anxieux"
          ],
          reponse: 0,
          explication: "Héritabilité très élevée (≈ 60-90 %), des centaines de gènes impliqués — la plus forte, devant la schizophrénie et la bipolarité. Étiologie principalement génétique et neurobiologique."
        },
        {
          id: "c12-15", notion: "TSA — traitement", type: "qcm",
          question: "Concernant le traitement du TSA, lequel est exact ?",
          options: [
            "Aucun médicament ne traite les symptômes principaux ; interventions psychosociales intensives ; antipsychotiques parfois pour l'agressivité/l'automutilation",
            "Un médicament guérit le TSA",
            "Seule la pharmacothérapie est efficace",
            "Aucune intervention n'est utile"
          ],
          reponse: 0,
          explication: "Interventions psychosociales intensives (≈ 20 h/sem) : fonctionnement social, communication, réduction des comportements perturbateurs. Pas de médicament pour les symptômes principaux ; antipsychotiques pour certains symptômes (automutilation, agressivité)."
        },
        {
          id: "c12-16", notion: "TDAH — critères", type: "qcm",
          question: "Pour un enfant, combien de symptômes d'inattention (ou d'hyperactivité-impulsivité) faut-il, et depuis combien de temps ?",
          options: [
            "6 symptômes ou plus, depuis au moins 6 mois (5 si 17 ans et +)",
            "3 symptômes depuis 1 mois",
            "2 symptômes depuis 12 mois",
            "Un seul symptôme suffit"
          ],
          reponse: 0,
          explication: "≥ 6 symptômes (≥ 5 chez les 17 ans et plus) persistant ≥ 6 mois, à un degré inadapté au développement, avec retentissement social/scolaire."
        },
        {
          id: "c12-17", notion: "TDAH — critères", type: "qcm",
          question: "Deux conditions « contextuelles » du TDAH sont…",
          options: [
            "Plusieurs symptômes avant 12 ans, et présents dans au moins 2 contextes",
            "Symptômes après 18 ans, dans 1 seul contexte",
            "Symptômes uniquement à l'école",
            "Apparition soudaine à l'adolescence"
          ],
          reponse: 0,
          explication: "Plusieurs symptômes présents avant 12 ans ET dans ≥ 2 situations (maison, école, travail, amis…), avec une interférence claire sur le fonctionnement."
        },
        {
          id: "c12-18", notion: "TDAH — critères", type: "qcm",
          question: "Quelles sont les 3 présentations du TDAH ?",
          options: [
            "Combinée · inattention prédominante · hyperactivité/impulsivité prédominante",
            "Légère · moyenne · grave (uniquement)",
            "Précoce · tardive · résiduelle",
            "Verbale · motrice · mixte"
          ],
          reponse: 0,
          explication: "Présentations : combinée (A1 + A2), inattention prédominante (A1 sans A2), hyperactivité/impulsivité prédominante (A2 sans A1). On spécifie aussi la sévérité (léger/moyen/grave)."
        },
        {
          id: "c12-19", notion: "TDAH — étiologie", type: "qcm",
          question: "Que retient-on de l'étiologie du TDAH ?",
          options: [
            "Caractère héréditaire élevé (≈ 75 %), déficit du contrôle inhibiteur (circuit frontostriatal), déficit dopaminergique",
            "Cause unique : la mauvaise éducation parentale",
            "Cause uniquement environnementale (alimentation)",
            "Aucune composante génétique"
          ],
          reponse: 0,
          explication: "Héréditabilité ≈ 75 %, déficit du contrôle inhibiteur (circuit frontostriatal), réduction de volume cérébral, retards de maturation corticale, déficit de dopamine. La relation parents-enfant influence la trajectoire mais n'est pas une cause."
        },
        {
          id: "c12-20", notion: "TDAH — traitement", type: "qcm",
          question: "Le traitement du TDAH repose surtout sur…",
          options: [
            "Une combinaison pharmacothérapie + interventions psychosociales (la médication aide environ 1 personne sur 2)",
            "La médication seule, toujours suffisante",
            "Aucune intervention, ça passe avec l'âge",
            "La chirurgie"
          ],
          reponse: 0,
          explication: "Combinaison médication + interventions psychosociales (formation aux parents et enseignants, conditionnement opérant en classe). La médication fonctionne chez ≈ ½. Les traitements comportementaux visent le scolaire, les tâches et les habiletés sociales — pas directement l'hyperactivité."
        },
        {
          id: "c12-21", notion: "Trouble spécifique des apprentissages", type: "qcm",
          question: "La dyslexie, la dyscalculie et la dysorthographie correspondent respectivement à des déficits de…",
          options: [
            "Lecture · calcul · expression écrite",
            "Calcul · lecture · motricité",
            "Langage · phonation · fluidité",
            "Attention · mémoire · motricité"
          ],
          reponse: 0,
          explication: "Trouble spécifique des apprentissages : déficit de lecture (dyslexie), de calcul (dyscalculie), de l'expression écrite (dysorthographie). ≥ 6 mois malgré interventions, non attribuable à une déficience intellectuelle ou sensorielle. Traitement : orthopédagogie."
        },
        {
          id: "c12-22", notion: "Troubles moteurs", type: "qcm",
          question: "Le syndrome de Gilles de la Tourette appartient à quelle catégorie ?",
          options: [
            "Les troubles moteurs (tics)",
            "Les troubles de la communication",
            "Les troubles disruptifs",
            "Les troubles anxieux"
          ],
          reponse: 0,
          explication: "Troubles moteurs : trouble développemental de la coordination, mouvements stéréotypés, et tics (mouvements/vocalisations soudains, rapides, récurrents, non rythmiques) — dont le syndrome de Gilles de la Tourette."
        },
        {
          id: "c12-23", notion: "Trouble des conduites", type: "qcm",
          question: "Le trouble des conduites se diagnostique par la présence de…",
          options: [
            "≥ 3 critères sur 12 mois (et ≥ 1 sur 6 mois) bafouant les droits d'autrui ou les normes sociales",
            "1 seul critère sur 1 mois",
            "≥ 5 critères sur 1 mois",
            "Uniquement des symptômes d'inattention"
          ],
          reponse: 0,
          explication: "Conduites répétitives bafouant les droits d'autrui/les normes : ≥ 3 critères sur 12 mois, ≥ 1 sur 6 mois, répartis en 4 catégories — agressions (personnes/animaux), destruction de biens, fraude/vol, violations graves de règles."
        },
        {
          id: "c12-24", notion: "Trouble des conduites", type: "qcm",
          question: "Concernant l'évolution du trouble des conduites, lequel est exact ?",
          options: [
            "Un début avant 10 ans est plus problématique et persistant ; il peut évoluer vers une personnalité antisociale",
            "Il disparaît toujours à l'âge adulte",
            "Il n'a aucun lien avec la personnalité antisociale",
            "Il apparaît surtout après 18 ans"
          ],
          reponse: 0,
          explication: "Deux trajectoires : enfant avec trouble des conduites → adulte avec personnalité antisociale (+ chez les garçons) ; adolescent avec trouble des conduites → souvent mode de vie adulte non problématique. Début < 10 ans = plus grave/persistant."
        },
        {
          id: "c12-25", notion: "Trouble des conduites", type: "qcm",
          question: "Quelle spécification du trouble des conduites annonce un pronostic plus sévère ?",
          options: [
            "Le sous-type avec traits de dureté (insensibilité) — manque d'empathie",
            "Le sous-type situationnel",
            "Le sous-type acquis",
            "Le sous-type généralisé"
          ],
          reponse: 0,
          explication: "Le sous-type « dureté/insensibilité » (manque d'empathie, comportements agressifs/antisociaux graves) est associé à un pronostic plus sévère et un risque antisocial élevé."
        },
        {
          id: "c12-26", notion: "Trouble oppositionnel avec provocation (TOP)", type: "qcm",
          question: "Le TOP associe sur ≥ 6 mois (au moins 4 symptômes)…",
          options: [
            "Humeur colérique/irritable, comportement querelleur/provocateur et esprit vindicatif",
            "Inattention, hyperactivité et impulsivité",
            "Agressions, destruction de biens et vols",
            "Déficits sociaux et intérêts restreints"
          ],
          reponse: 0,
          explication: "TOP : ≥ 4 symptômes sur ≥ 6 mois répartis en humeur colérique/irritable, comportement querelleur/provocateur, et esprit vindicatif, en interaction avec au moins une personne hors fratrie."
        },
        {
          id: "c12-27", notion: "Trouble oppositionnel avec provocation (TOP)", type: "qcm",
          question: "Quel mécanisme cognitif est typiquement impliqué dans le TOP ?",
          options: [
            "Le biais d'attribution hostile (interpréter les intentions d'autrui comme négatives)",
            "La pensée magique",
            "Les flashbacks",
            "La distorsion de l'image corporelle"
          ],
          reponse: 0,
          explication: "Biais d'attribution hostile + cercle coercitif (opposition → réaction parentale → escalade → renforcement). La plupart des jeunes avec trouble des conduites ont reçu un diagnostic de TOP (pas l'inverse) ; forte comorbidité avec le TDAH."
        },
        {
          id: "c12-28", notion: "Troubles disruptifs — traitement", type: "qcm",
          question: "Quelle approche est recommandée pour le trouble des conduites ?",
          options: [
            "Interventions familiales (coaching parental), collaboration avec l'école, traitement multisystémique",
            "Uniquement la médication",
            "Aucune intervention",
            "La chirurgie"
          ],
          reponse: 0,
          explication: "Coaching des parents (renforcer le prosocial, retirer des privilèges), collaboration avec les enseignants, traitement multisystémique (famille, école, pairs), et approches cognitives (maîtrise de la colère, raisonnement moral). Pour les traits de dureté : susciter l'empathie."
        },
        {
          id: "c12-29", notion: "Anxiété de séparation", type: "cas",
          question: "Un enfant de 8 ans refuse d'aller à l'école et de dormir hors de chez lui, fait des cauchemars de séparation et a des maux de ventre dès qu'il doit quitter ses parents, depuis 6 semaines. Diagnostic ?",
          options: [
            "Anxiété de séparation",
            "Mutisme sélectif",
            "Phobie spécifique",
            "Trouble oppositionnel avec provocation"
          ],
          reponse: 0,
          explication: "Détresse excessive à la séparation, refus de l'école/de dormir ailleurs, cauchemars de séparation, plaintes somatiques — durée ≥ 4 semaines chez l'enfant/ado (6 mois chez l'adulte) = anxiété de séparation."
        },
        {
          id: "c12-30", notion: "Mutisme sélectif", type: "cas",
          question: "Une fillette parle normalement à la maison mais reste totalement silencieuse à l'école depuis plus de 2 mois, ce qui nuit à sa scolarité. Sa connaissance de la langue est intacte. Diagnostic ?",
          options: [
            "Mutisme sélectif",
            "Trouble du langage",
            "Trouble du spectre de l'autisme",
            "Anxiété de séparation"
          ],
          reponse: 0,
          explication: "Incapacité régulière à parler dans des situations sociales spécifiques (école) alors qu'elle parle ailleurs, ≥ 1 mois (pas seulement le 1er mois d'école), non imputable à un défaut de langue = mutisme sélectif."
        },
        {
          id: "c12-31", notion: "Troubles anxieux — traitement", type: "qcm",
          question: "Quel est le traitement de référence des troubles anxieux de l'enfant ?",
          options: [
            "La TCC (exposition, relaxation, jeux de rôles, méthodes cognitives), proche de celle de l'adulte",
            "Uniquement la médication",
            "L'hospitalisation systématique",
            "Aucun, les peurs disparaissent toujours seules"
          ],
          reponse: 0,
          explication: "TCC : exposition, relaxation, jeux de rôles, dialogue interne ; objectif : reconnaître les signes d'anxiété pour déclencher les stratégies de gestion. La médication a une efficacité démontrée dans certaines études, mais la psychothérapie reste primordiale."
        },
        {
          id: "c12-h1", niveau: "difficile", notion: "TSA — critères", type: "qcm",
          question: "Pour le TSA, quelle combinaison de critères est correcte ?",
          options: ["Critère A : les 3 déficits de communication sociale ; Critère B : ≥ 2 des 4 comportements restreints/répétitifs", "Critère A : 1 des 3 ; Critère B : 1 des 4", "Critère A : 2 des 3 ; Critère B : 3 des 4", "Critère A : ≥ 2 ; Critère B : ≥ 3"],
          reponse: 0,
          explication: "TSA : critère A = les trois déficits de communication sociale ; critère B = au moins 2 des 4 modes restreints/répétitifs (stéréotypies, insistance sur la similarité, intérêts restreints, particularités sensorielles)."
        },
        {
          id: "c12-h2", niveau: "difficile", notion: "TDAH — critères", type: "qcm",
          question: "Quel énoncé sur le TDAH est FAUX ?",
          options: ["Il faut que les symptômes soient tous apparus APRÈS l'âge de 12 ans", "Il faut ≥ 6 symptômes (≥ 5 chez les 17 ans et plus)", "Les symptômes doivent être présents dans ≥ 2 contextes", "Il existe 3 présentations (combinée, inattention, hyperactivité/impulsivité)"],
          reponse: 0,
          explication: "Faux : plusieurs symptômes doivent être présents AVANT 12 ans (et non après). Les trois autres énoncés sont exacts."
        },
        {
          id: "c12-h3", niveau: "difficile", notion: "Handicap intellectuel", type: "qcm",
          question: "Concernant le handicap intellectuel, quel énoncé est exact ?",
          options: ["Léger ≈ QI 50-70, soit ≈ 85 % des cas ; début avant 18 ans avec déficit du fonctionnement adaptatif", "Le QI seul suffit au diagnostic", "Le niveau profond représente la majorité des cas", "Il débute toujours à l'âge adulte"],
          reponse: 0,
          explication: "Léger (QI ≈ 50-70) = 85 % des cas ; le diagnostic exige aussi un déficit du fonctionnement adaptatif (3 domaines), avec un début avant 18 ans. Le QI seul ne suffit pas."
        },
        {
          id: "c12-h4", niveau: "difficile", notion: "Trouble des conduites", type: "qcm",
          question: "Quel énoncé sur le trouble des conduites est exact ?",
          options: ["≥ 3 critères sur 12 mois (et ≥ 1 sur 6 mois) ; le sous-type « dureté/insensibilité » est de plus mauvais pronostic", "≥ 5 critères sur 1 mois", "Il ne peut jamais évoluer vers la personnalité antisociale", "Un début après 15 ans est de plus mauvais pronostic"],
          reponse: 0,
          explication: "≥ 3 critères/12 mois et ≥ 1/6 mois, en 4 catégories. Un début précoce (< 10 ans) et le sous-type avec traits de dureté/insensibilité (manque d'empathie) annoncent un pronostic plus sévère."
        },
        {
          id: "c12-h5", niveau: "difficile", notion: "Trouble oppositionnel avec provocation (TOP)", type: "qcm",
          question: "Quelle affirmation sur le lien TOP / trouble des conduites est correcte ?",
          options: ["La plupart des jeunes avec un trouble des conduites ont reçu un diagnostic de TOP (et non l'inverse)", "Tous les TOP évoluent en trouble des conduites", "Le TOP exige des agressions physiques graves", "Le TOP n'a aucune comorbidité avec le TDAH"],
          reponse: 0,
          explication: "La plupart des individus avec un trouble des conduites ont eu un TOP, mais l'inverse n'est pas vrai. Forte comorbidité TOP-TDAH-trouble des conduites ; mécanisme clé du TOP : biais d'attribution hostile et cercle coercitif."
        },
        {
          id: "c12-h6", niveau: "difficile", notion: "Anxiété de séparation", type: "qcm",
          question: "Quelle paire de durées minimales est correcte ?",
          options: ["Anxiété de séparation : ≥ 4 semaines chez l'enfant/ado ; mutisme sélectif : ≥ 1 mois", "Anxiété de séparation : 6 mois chez l'enfant ; mutisme : 6 mois", "Les deux : ≥ 1 an", "Anxiété de séparation : 48 h ; mutisme : 2 semaines"],
          reponse: 0,
          explication: "Anxiété de séparation : ≥ 4 semaines chez l'enfant/ado (6 mois chez l'adulte). Mutisme sélectif : ≥ 1 mois (pas seulement le premier mois d'école)."
        },
        {
          id: "c12-h7", niveau: "difficile", notion: "TSA — sévérité & étiologie", type: "qcm",
          question: "Parmi ces troubles, lequel a l'héritabilité la PLUS forte selon le cours ?",
          options: ["Le trouble du spectre de l'autisme (≈ 60-90 %)", "Le TDAH (≈ 75 %)", "Le trouble des conduites", "Le trouble de la communication sociale"],
          reponse: 0,
          explication: "Le TSA a l'héritabilité la plus forte (≈ 60-90 %), supérieure même à celle de la schizophrénie et du trouble bipolaire ; le TDAH ≈ 75 %."
        },
        {
          id: "c12-h8", niveau: "difficile", notion: "Troubles de la communication", type: "qcm",
          question: "Quel énoncé sur les troubles de la communication est exact ?",
          options: ["Le trouble de la communication sociale (pragmatique) a été ajouté au DSM-5 ; le bégaiement apparaît vers 5 ans et 65-85 % le surmontent", "Le bégaiement apparaît à l'âge adulte", "Le trouble du langage = une prononciation déficiente avec un vocabulaire intact", "La communication sociale pragmatique existait déjà dans le DSM-IV"],
          reponse: 0,
          explication: "Le trouble de la communication sociale (pragmatique) est un ajout du DSM-5. Le bégaiement (trouble de la fluidité) apparaît vers 5 ans, surtout chez les garçons ; 65-85 % le surmontent. (Le trouble du langage concerne l'expression/la grammaire ; la prononciation relève du trouble de la phonation.)"
        },
        {
          id: "c12-h9", niveau: "difficile", notion: "Handicap intellectuel", type: "qcm",
          question: "Quelle répartition des niveaux de handicap intellectuel (parmi les QI < 70) est exacte ?",
          options: ["Léger 85 % · moyen 10 % · grave 3-4 % · profond 1-2 %", "Léger 50 % · moyen 30 %", "Profond 85 %", "Moyen 85 %"],
          reponse: 0,
          explication: "Léger (QI 50-70) 85 % · moyen 10 % · grave 3-4 % · profond (QI < 20-25) 1-2 % (supervision intégrale, soins infirmiers à vie)."
        },
        {
          id: "c12-h10", niveau: "difficile", notion: "Troubles de la communication", type: "qcm",
          question: "Concernant le bégaiement (trouble de la fluidité), lequel est exact ?",
          options: ["Apparition vers 5 ans, surtout chez les garçons ; 65-85 % le surmontent ; la sévérité à 8 ans est pronostique", "Apparition vers 12 ans ; rarement surmonté", "Surtout chez les filles", "Toujours permanent"],
          reponse: 0,
          explication: "Bégaiement : vers 5 ans, plus chez les garçons ; 65-85 % le surmontent ; le degré de sévérité à 8 ans détermine la persistance."
        },
        {
          id: "c12-h11", niveau: "difficile", notion: "TSA — sévérité & étiologie", type: "qcm",
          question: "Toutes ces affirmations sur le TSA sont vraies SAUF une. Laquelle est FAUSSE ?",
          options: ["Des médicaments traitent les symptômes principaux du TSA", "Héritabilité ≈ 60-90 %, la plus forte", "Aucun médicament ne traite les symptômes principaux", "Interventions psychosociales intensives (~20 h/sem)"],
          reponse: 0,
          explication: "Faux : aucun médicament ne traite les symptômes PRINCIPAUX du TSA (les antipsychotiques visent l'agressivité/l'automutilation). Héritabilité 60-90 % (la plus forte) ; interventions intensives ~20 h/sem."
        },
        {
          id: "c12-h12", niveau: "difficile", notion: "TDAH — étiologie", type: "qcm",
          question: "Quelles données du TDAH sont exactes ?",
          options: ["Troubles d'apprentissage 15-30 % ; troubles anxieux ≈ 25 % ; héritabilité ≈ 75 %", "Apprentissage 50 % ; anxieux 50 %", "Héritabilité ≈ 10 %", "Aucune comorbidité"],
          reponse: 0,
          explication: "TDAH : comorbidité apprentissage 15-30 %, anxieux ≈ 25 % ; héritabilité ≈ 75 % ; circuit frontostriatal, déficit de dopamine."
        },
        {
          id: "c12-h13", niveau: "difficile", notion: "Trouble des conduites", type: "qcm",
          question: "Concernant le trouble des conduites, lequel est exact ?",
          options: ["Un début avant 10 ans est plus problématique/persistant ; persistance accrue si faible intelligence verbale ou parent antisocial", "Un début après 15 ans est de plus mauvais pronostic", "Il n'évolue jamais vers la personnalité antisociale", "Un QI verbal élevé aggrave le pronostic"],
          reponse: 0,
          explication: "Début < 10 ans = plus grave/persistant. Persistance si garçons à faible intelligence verbale ou parent avec personnalité antisociale ; forme transitoire si QI verbal élevé et parents sans personnalité antisociale."
        },
        {
          id: "c12-h14", niveau: "difficile", notion: "Trouble oppositionnel avec provocation (TOP)", type: "qcm",
          question: "Le TOP exige au moins 4 symptômes, sur ≥ 6 mois, répartis en combien de catégories ?",
          options: ["3 (humeur colérique/irritable, querelleur/provocateur, vindicatif)", "2", "4", "1"],
          reponse: 0,
          explication: "3 catégories : humeur colérique/irritable, comportement querelleur/provocateur, esprit vindicatif ; ≥ 4 symptômes sur ≥ 6 mois, en interaction avec au moins une personne hors fratrie."
        },
        {
          id: "c12-h15", niveau: "difficile", notion: "Trouble spécifique des apprentissages", type: "qcm",
          question: "Quelle association est correcte ?",
          options: ["Dyslexie = lecture, dyscalculie = calcul, dysorthographie = expression écrite ; tics = troubles moteurs", "Dyscalculie = lecture", "Dyslexie = calcul", "Les tics sont des troubles de la communication"],
          reponse: 0,
          explication: "Trouble spécifique des apprentissages : dyslexie (lecture), dyscalculie (calcul), dysorthographie (expression écrite). Les tics (dont le syndrome de Gilles de la Tourette) relèvent des troubles moteurs."
        },
        {
          id: "c12-m1", notion: "Troubles neurodéveloppementaux — vue d'ensemble", type: "multi",
          question: "Lesquels sont des troubles NEURODÉVELOPPEMENTAUX ?",
          options: ["Trouble du spectre de l'autisme", "TDAH", "Trouble spécifique des apprentissages", "Trouble des conduites"],
          reponses: [0, 1, 2],
          explication: "Neurodéveloppementaux : handicap intellectuel, troubles de la communication, TSA, TDAH, apprentissages, troubles moteurs. Le trouble des conduites est un trouble disruptif."
        },
        {
          id: "c12-s1", notion: "Trouble spécifique des apprentissages", type: "saisie",
          question: "Quel est le terme pour le trouble spécifique de l'apprentissage de la LECTURE ?",
          reponse: "dyslexie", accepts: ["dyslexie"],
          explication: "Dyslexie (lecture), dyscalculie (calcul), dysorthographie (expression écrite)."
        }
      ]
    }
  ]
};
