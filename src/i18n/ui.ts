export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const ui = {
  fr: {
    'site.title': 'LHDE — Apprendre l’échange de données de santé',
    'site.tagline': 'Apprendre l’interopérabilité en santé, couche par couche.',
    'site.description':
      'Un parcours d’apprentissage guidé en interopérabilité de santé : ReEIF, standardisation, syntaxe, sémantique, écosystème, profilage, architecture et intégration. Quiz, activités et projet final.',

    'nav.home': 'Accueil',
    'nav.pathway': 'Parcours',
    'nav.modules': 'Modules',
    'nav.case': 'Fil rouge',
    'nav.capstone': 'Projet final',
    'nav.glossary': 'Glossaire',
    'nav.resources': 'Ressources',
    'nav.menu': 'Menu',
    'nav.skip': 'Aller au contenu',
    'nav.home_aria': 'Accueil LHDE',

    'hero.eyebrow': 'Parcours ouvert · FR / EN',
    'hero.title': 'L’interopérabilité en santé ne s’improvise pas. Elle s’apprend.',
    'hero.lede':
      'Échanger un message valide ne suffit pas. Il faut que l’information soit comprise, utilisée, gouvernée et défendable. Ce parcours vous emmène du problème métier jusqu’à un prototype FHIR fonctionnel, en neuf étapes.',
    'hero.sub': 'Conçu pour les étudiants, les équipes SI de santé et les intégrateurs.',
    'hero.cta.start': 'Commencer le parcours',
    'hero.cta.map': 'Voir la carte du parcours',

    'home.why.title': 'Pourquoi un parcours, et pas une pile de slides ?',
    'home.why.body':
      'Parce que l’interopérabilité échoue rarement sur un seul point. Elle échoue à la jonction entre le droit, l’organisation, le soin, le sens, le logiciel et le réseau. Chaque étape de ce parcours ajoute une couche à votre modèle mental, puis vous la fait utiliser immédiatement.',
    'home.principles.title': 'Les quatre principes pédagogiques du parcours',
    'home.stats.modules': 'modules progressifs',
    'home.stats.activities': 'activités interactives',
    'home.stats.hours': 'heures de projet final',
    'home.stats.languages': 'langues',

    'home.thread.title': 'Un fil rouge : Argus, la tour de contrôle hospitalière',
    'home.thread.body':
      'Chaque notion est rejouée sur le même cas concret : construire une vision opérationnelle fiable d’un hôpital à partir de silos de données. Vous revenez sur Argus à chaque étape, avec un outillage à chaque fois plus précis.',
    'home.thread.cta': 'Découvrir le fil rouge',

    'home.path.title': 'Le parcours en un coup d’œil',
    'home.path.body':
      'Quatre phases, neuf modules, un projet évalué. Chaque module suit la même structure : une intention, un modèle, un exemple guidé, une activité, un contrôle.',

    'path.phase': 'Phase',
    'path.phase1.title': 'Comprendre le problème',
    'path.phase1.goal': 'Savoir nommer ce qui bloque avant de proposer une solution.',
    'path.phase2.title': 'Faire circuler et faire comprendre',
    'path.phase2.goal': 'Choisir une forme d’échange et garantir que le sens survit au transport.',
    'path.phase3.title': 'Se repérer et préciser',
    'path.phase3.goal': 'Situer les standards, puis les contraindre jusqu’à pouvoir les tester.',
    'path.phase4.title': 'Concevoir et livrer',
    'path.phase4.goal': 'Transformer des décisions dispersées en architecture et en dossier d’intégration.',

    'module.number': 'Module',
    'module.duration': 'Durée',
    'module.level': 'Niveau',
    'module.outcome': 'Objectif d’apprentissage',
    'module.prereq': 'Prérequis',
    'module.agenda': 'Au programme',
    'module.start': 'Ouvrir le module',
    'module.prev': 'Module précédent',
    'module.next': 'Module suivant',
    'module.source': 'Sources du module',
    'module.back': 'Retour au parcours',
    'module.complete': 'Marquer comme terminé',
    'module.completed': 'Terminé',
    'module.progress': 'Progression',
    'module.of': 'sur',
    'module.readtime': 'min de lecture',
    'module.toc': 'Sur cette page',

    'level.intro': 'Découverte',
    'level.core': 'Fondamental',
    'level.advanced': 'Avancé',
    'level.project': 'Projet',

    'quiz.title': 'Contrôle de compréhension',
    'quiz.intro': 'Répondez avant de regarder. Se tromper ici est utile : c’est là que l’apprentissage se fixe.',
    'quiz.check': 'Vérifier',
    'quiz.retry': 'Recommencer',
    'quiz.correct': 'Correct',
    'quiz.incorrect': 'Pas tout à fait',
    'quiz.score': 'Score',
    'quiz.explanation': 'Pourquoi',
    'quiz.question': 'Question',

    'sorter.title': 'Activité — classez la couche ReEIF',
    'sorter.instruction': 'Pour chaque situation, choisissez la couche ReEIF principale.',
    'sorter.reveal': 'Afficher la correction',
    'sorter.reset': 'Réinitialiser',
    'sorter.right': 'Bonne couche',
    'sorter.wrong': 'Couche attendue',

    'picker.reveal': 'Afficher la correction',
    'picker.reset': 'Réinitialiser',

    'checklist.progress': 'éléments cochés',
    'checklist.done': 'Complet — la donnée est exploitable.',

    'activity.label': 'Activité',
    'keyidea.label': 'Idée clé',
    'warning.label': 'Attention',
    'example.label': 'Exemple guidé',
    'reflect.label': 'Prenez trente secondes',

    'glossary.title': 'Glossaire',
    'glossary.lede':
      'Un vocabulaire partagé est le premier livrable d’un projet d’interopérabilité. Voici les termes utilisés dans tout le parcours.',
    'glossary.search': 'Filtrer les termes…',
    'glossary.empty': 'Aucun terme ne correspond.',
    'glossary.seealso': 'Voir aussi',

    'resources.title': 'Ressources',
    'resources.lede': 'Les documents sources du parcours et les références externes utiles.',
    'resources.source_docs': 'Documents sources',
    'resources.external': 'Références externes',

    'capstone.title': 'Projet final évalué',
    'capstone.lede':
      'Trois heures pour concevoir, spécifier et réaliser un prototype interopérable connecté à un serveur FHIR — avec l’IA comme outil obligatoire, et vous comme responsable de la spécification.',

    'case.title': 'Fil rouge — Argus',
    'case.lede':
      'Une tour de contrôle hospitalière construite sur la destruction des silos. Le même cas, revisité à chaque étape du parcours.',

    'progress.title': 'Votre progression',
    'progress.reset': 'Réinitialiser la progression',
    'progress.stored': 'Enregistrée dans ce navigateur uniquement.',
    'progress.none': 'Aucun module terminé pour l’instant.',

    'footer.built': 'Contenu pédagogique dérivé des supports XiA Educathon et du cadre ReEIF de l’eHealth Network.',
    'footer.nav': 'Navigation',
    'footer.about': 'À propos',
    'footer.lang': 'Langue',

    'lang.switch': 'Changer de langue',
  },

  en: {
    'site.title': 'LHDE — Learn Health Data Exchange',
    'site.tagline': 'Learn health interoperability, one layer at a time.',
    'site.description':
      'A guided learning pathway in health interoperability: ReEIF, standardisation, syntax, semantics, ecosystem, profiling, architecture and integration. Quizzes, activities and a final project.',

    'nav.home': 'Home',
    'nav.pathway': 'Pathway',
    'nav.modules': 'Modules',
    'nav.case': 'Running case',
    'nav.capstone': 'Final project',
    'nav.glossary': 'Glossary',
    'nav.resources': 'Resources',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'nav.home_aria': 'LHDE home',

    'hero.eyebrow': 'Open pathway · FR / EN',
    'hero.title': 'Health interoperability is not improvised. It is learned.',
    'hero.lede':
      'Sending a valid message is not enough. The information must be understood, used, governed and defensible. This pathway takes you from the care problem to a working FHIR prototype, in nine steps.',
    'hero.sub': 'Built for students, health IT teams and integrators.',
    'hero.cta.start': 'Start the pathway',
    'hero.cta.map': 'See the pathway map',

    'home.why.title': 'Why a pathway, and not a pile of slides?',
    'home.why.body':
      'Because interoperability rarely fails at one single point. It fails where law, organisation, care, meaning, software and network meet. Each step here adds a layer to your mental model — then makes you use it straight away.',
    'home.principles.title': 'The four teaching principles behind this pathway',
    'home.stats.modules': 'progressive modules',
    'home.stats.activities': 'interactive activities',
    'home.stats.hours': 'hours of final project',
    'home.stats.languages': 'languages',

    'home.thread.title': 'One running case: Argus, the hospital control tower',
    'home.thread.body':
      'Every concept is replayed on the same concrete case: building a reliable operational picture of a hospital out of data silos. You return to Argus at each step with sharper tools.',
    'home.thread.cta': 'Explore the running case',

    'home.path.title': 'The pathway at a glance',
    'home.path.body':
      'Four phases, nine modules, one assessed project. Every module follows the same shape: an intention, a model, a worked example, an activity, a check.',

    'path.phase': 'Phase',
    'path.phase1.title': 'Understand the problem',
    'path.phase1.goal': 'Be able to name what blocks you before proposing a solution.',
    'path.phase2.title': 'Move it and make it mean something',
    'path.phase2.goal': 'Pick an exchange shape and make sure meaning survives the trip.',
    'path.phase3.title': 'Locate and constrain',
    'path.phase3.goal': 'Place the standards, then tighten them until they can be tested.',
    'path.phase4.title': 'Design and deliver',
    'path.phase4.goal': 'Turn scattered decisions into an architecture and an integration file.',

    'module.number': 'Module',
    'module.duration': 'Duration',
    'module.level': 'Level',
    'module.outcome': 'Learning outcome',
    'module.prereq': 'Prerequisite',
    'module.agenda': 'On the agenda',
    'module.start': 'Open module',
    'module.prev': 'Previous module',
    'module.next': 'Next module',
    'module.source': 'Module sources',
    'module.back': 'Back to the pathway',
    'module.complete': 'Mark as complete',
    'module.completed': 'Completed',
    'module.progress': 'Progress',
    'module.of': 'of',
    'module.readtime': 'min read',
    'module.toc': 'On this page',

    'level.intro': 'Discovery',
    'level.core': 'Core',
    'level.advanced': 'Advanced',
    'level.project': 'Project',

    'quiz.title': 'Comprehension check',
    'quiz.intro': 'Answer before you look. Being wrong here is useful — that is where learning sticks.',
    'quiz.check': 'Check',
    'quiz.retry': 'Try again',
    'quiz.correct': 'Correct',
    'quiz.incorrect': 'Not quite',
    'quiz.score': 'Score',
    'quiz.explanation': 'Why',
    'quiz.question': 'Question',

    'sorter.title': 'Activity — classify the ReEIF layer',
    'sorter.instruction': 'For each situation, choose the primary ReEIF layer.',
    'sorter.reveal': 'Reveal answers',
    'sorter.reset': 'Reset',
    'sorter.right': 'Right layer',
    'sorter.wrong': 'Expected layer',

    'picker.reveal': 'Reveal answers',
    'picker.reset': 'Reset',

    'checklist.progress': 'items ticked',
    'checklist.done': 'Complete — the data is now usable.',

    'activity.label': 'Activity',
    'keyidea.label': 'Key idea',
    'warning.label': 'Watch out',
    'example.label': 'Worked example',
    'reflect.label': 'Take thirty seconds',

    'glossary.title': 'Glossary',
    'glossary.lede':
      'A shared vocabulary is the first deliverable of any interoperability project. These are the terms used across the pathway.',
    'glossary.search': 'Filter terms…',
    'glossary.empty': 'No term matches.',
    'glossary.seealso': 'See also',

    'resources.title': 'Resources',
    'resources.lede': 'The source documents behind this pathway, and useful external references.',
    'resources.source_docs': 'Source documents',
    'resources.external': 'External references',

    'capstone.title': 'Assessed final project',
    'capstone.lede':
      'Three hours to design, specify and build an interoperable prototype connected to a FHIR server — with AI as a mandatory tool, and you as the owner of the specification.',

    'case.title': 'Running case — Argus',
    'case.lede':
      'A hospital control tower built on the destruction of data silos. The same case, revisited at every step of the pathway.',

    'progress.title': 'Your progress',
    'progress.reset': 'Reset progress',
    'progress.stored': 'Stored in this browser only.',
    'progress.none': 'No module completed yet.',

    'footer.built': 'Teaching content derived from the XiA Educathon decks and the eHealth Network ReEIF framework.',
    'footer.nav': 'Navigation',
    'footer.about': 'About',
    'footer.lang': 'Language',

    'lang.switch': 'Switch language',
  },
} as const;

export type UIKey = keyof (typeof ui)['fr'];
