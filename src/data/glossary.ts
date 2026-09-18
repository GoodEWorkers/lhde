import type { Lang } from '../i18n/utils';

export interface Term {
  /** Stable key, used to link related terms across languages. */
  id: string;
  term: string;
  category: 'reeif' | 'exchange' | 'semantics' | 'profiling' | 'architecture' | 'ecosystem';
  definition: string;
  /** `id`s of related terms. */
  seeAlso?: string[];
}

export const categoryLabels: Record<Lang, Record<Term['category'], string>> = {
  fr: {
    reeif: 'Cadre ReEIF',
    exchange: 'Échange',
    semantics: 'Sémantique',
    profiling: 'Profilage',
    architecture: 'Architecture',
    ecosystem: 'Écosystème',
  },
  en: {
    reeif: 'ReEIF framework',
    exchange: 'Exchange',
    semantics: 'Semantics',
    profiling: 'Profiling',
    architecture: 'Architecture',
    ecosystem: 'Ecosystem',
  },
};

export const glossary: Record<Lang, Term[]> = {
  fr: [
    {
      id: 'interoperability',
      term: 'Interopérabilité',
      category: 'reeif',
      definition:
        'Capacité d’organisations disparates à interagir vers des objectifs communs et convenus, en partageant information et connaissances à travers leurs processus métier, au moyen d’échanges entre leurs systèmes. L’échange de données est le dernier maillon, pas l’objectif.',
      seeAlso: ['operability', 'reeif'],
    },
    {
      id: 'operability',
      term: 'Opérabilité',
      category: 'reeif',
      definition:
        'Façon dont une organisation fonctionne en interne — processus, structures de données, règles — pour délivrer ses services dans son propre périmètre. Être opérable ne dit rien de la capacité à travailler avec autrui.',
      seeAlso: ['interoperability'],
    },
    {
      id: 'reeif',
      term: 'ReEIF',
      category: 'reeif',
      definition:
        'Refined eHealth European Interoperability Framework, adopté par l’eHealth Network le 23 novembre 2015. Modèle non technique à six couches : juridique, politique/gouvernance, processus de soin, information, applications, infrastructure SI.',
      seeAlso: ['interoperability', 'care-process'],
    },
    {
      id: 'care-process',
      term: 'Couche Processus de soin',
      category: 'reeif',
      definition:
        'Couche du ReEIF où les parcours sont analysés et alignés en workflows partagés. C’est le workflow partagé qui prescrit quelle information est nécessaire, quand, et pour quelle action.',
      seeAlso: ['reeif'],
    },
    {
      id: 'broad-interop',
      term: 'Interopérabilité large',
      category: 'reeif',
      definition:
        'Perspective où l’interopérabilité technique n’est qu’un moyen : l’objectif est que des organisations interagissent efficacement. Elle traite aussi de l’interopérabilité des organisations elles-mêmes, pas seulement de leurs systèmes.',
      seeAlso: ['interoperability'],
    },
    {
      id: 'hl7v2',
      term: 'HL7 v2',
      category: 'exchange',
      definition:
        'Standard de messagerie hospitalière historique, en texte délimité par pipes, utilisé depuis des décennies — notamment pour les messages ADT (admission, venue, mouvement) et ORU (résultats).',
      seeAlso: ['message-push', 'fhir'],
    },
    {
      id: 'cda',
      term: 'CDA',
      category: 'exchange',
      definition:
        'Clinical Document Architecture : standard HL7 de document clinique structuré en XML. Adapté quand la trace médico-légale et un contenu stable lisible par un humain comptent.',
      seeAlso: ['document-exchange'],
    },
    {
      id: 'fhir',
      term: 'FHIR',
      category: 'exchange',
      definition:
        'Fast Healthcare Interoperability Resources : standard HL7 fondé sur les technologies web (HTTP, JSON, XML, REST). Supporte plusieurs paradigmes — REST, documents, messaging, bulk data, subscriptions.',
      seeAlso: ['resource', 'profile', 'bulk-data'],
    },
    {
      id: 'resource',
      term: 'Ressource FHIR',
      category: 'exchange',
      definition:
        'Brique de base du modèle FHIR : Patient, Observation, Encounter, Appointment, Location, Device… Chaque ressource est adressable comme un service via l’API.',
      seeAlso: ['fhir', 'profile'],
    },
    {
      id: 'message-push',
      term: 'Message push',
      category: 'exchange',
      definition:
        'Pattern d’échange où un système émet un message dès qu’un événement métier survient. Rapide, mais couplant : rejeux, ordre des messages, doublons et contexte partiel sont à gérer.',
      seeAlso: ['hl7v2', 'event'],
    },
    {
      id: 'document-exchange',
      term: 'Échange documentaire',
      category: 'exchange',
      definition:
        'Pattern où un artefact clinique stable est publié ou partagé : il peut être signé, stocké, audité. Attention : un document peut être lisible sans être calculable.',
      seeAlso: ['cda', 'ips'],
    },
    {
      id: 'event',
      term: 'Événement / abonnement',
      category: 'exchange',
      definition:
        'Pattern où les systèmes réagissent aux changements plutôt que d’interroger en boucle. Un broker ou une Subscription FHIR diffuse la notification aux abonnés.',
      seeAlso: ['message-push'],
    },
    {
      id: 'bulk-data',
      term: 'Bulk Data',
      category: 'exchange',
      definition:
        'Export FHIR de gros volumes, typiquement en NDJSON, pour l’analytique, la recherche ou la migration. Utile hors temps réel ; dangereux comme unique stratégie d’intégration.',
      seeAlso: ['fhir', 'omop'],
    },
    {
      id: 'ips',
      term: 'IPS',
      category: 'exchange',
      definition:
        'International Patient Summary : résumé médical patient normalisé, conçu pour être partageable au-delà des frontières linguistiques et organisationnelles.',
      seeAlso: ['document-exchange'],
    },
    {
      id: 'codesystem',
      term: 'CodeSystem',
      category: 'semantics',
      definition:
        'Ressource FHIR définissant les concepts, codes, libellés et propriétés d’un système de codes. C’est le dictionnaire complet, à ne pas confondre avec le sous-ensemble autorisé.',
      seeAlso: ['valueset', 'snomed', 'loinc'],
    },
    {
      id: 'valueset',
      term: 'ValueSet',
      category: 'semantics',
      definition:
        'Ressource FHIR définissant le sous-ensemble de codes autorisés dans un contexte donné. C’est la liste que votre champ accepte réellement.',
      seeAlso: ['codesystem', 'binding', 'expand'],
    },
    {
      id: 'conceptmap',
      term: 'ConceptMap',
      category: 'semantics',
      definition:
        'Ressource FHIR déclarant comment des concepts se relient entre systèmes : equivalent, source plus étroite, source plus large, lié, ou explicitement non lié.',
      seeAlso: ['translate', 'valueset'],
    },
    {
      id: 'binding',
      term: 'Binding',
      category: 'semantics',
      definition:
        'Lien entre un élément et un ValueSet, assorti d’une force : required (obligatoire), extensible (sinon justifier), preferred (recommandé), example (informatif).',
      seeAlso: ['valueset', 'profile'],
    },
    {
      id: 'snomed',
      term: 'SNOMED CT',
      category: 'semantics',
      definition:
        'Terminologie clinique couvrant constats, actes, structures corporelles et de nombreux concepts cliniques. Maintenue par SNOMED International.',
      seeAlso: ['loinc', 'codesystem'],
    },
    {
      id: 'loinc',
      term: 'LOINC',
      category: 'semantics',
      definition:
        'Identifiants pour les observations, examens de laboratoire, mesures et documents. Administré par le Regenstrief Institute.',
      seeAlso: ['snomed', 'ucum'],
    },
    {
      id: 'ucum',
      term: 'UCUM',
      category: 'semantics',
      definition:
        'Unified Code for Units of Measure : codage normalisé des unités (mmol/L, kg, cm). Souvent utilisé conjointement à LOINC et FHIR.',
      seeAlso: ['loinc'],
    },
    {
      id: 'expand',
      term: '$expand',
      category: 'semantics',
      definition:
        'Opération de serveur de terminologie qui liste les codes autorisés par un ValueSet. Typiquement utilisée pour alimenter une liste déroulante.',
      seeAlso: ['valueset', 'validate-code'],
    },
    {
      id: 'validate-code',
      term: '$validate-code',
      category: 'semantics',
      definition:
        'Opération qui vérifie qu’un code est autorisé dans un contexte donné. C’est le point de passage avant stockage ou ingestion.',
      seeAlso: ['expand', 'terminology-server'],
    },
    {
      id: 'translate',
      term: '$translate',
      category: 'semantics',
      definition:
        'Opération qui convertit un code vers un autre système ou un ValueSet cible, en s’appuyant sur un ConceptMap.',
      seeAlso: ['conceptmap'],
    },
    {
      id: 'terminology-server',
      term: 'Serveur de terminologie',
      category: 'semantics',
      definition:
        'Service central faisant autorité sur les systèmes de codes, ValueSets, mappings et leurs versions. Il évite que chaque application code en dur sa propre logique sémantique.',
      seeAlso: ['validate-code', 'core-service'],
    },
    {
      id: 'logical-model',
      term: 'Modèle logique',
      category: 'semantics',
      definition:
        'Expression des exigences fonctionnelles indépendamment de FHIR ou HL7 v2. Sert de modèle pivot pour mapper vers plusieurs standards et protège le sens métier.',
      seeAlso: ['conceptmap'],
    },
    {
      id: 'profile',
      term: 'Profil',
      category: 'profiling',
      definition:
        'Standard contraint pour un contexte donné. En FHIR, c’est une StructureDefinition : une règle lisible par une machine, donc validable automatiquement.',
      seeAlso: ['structuredefinition', 'ig', 'binding'],
    },
    {
      id: 'structuredefinition',
      term: 'StructureDefinition',
      category: 'profiling',
      definition:
        'Ressource FHIR exprimant les contraintes appliquées à une ressource, un type ou une extension : cardinalités, types, bindings, slicing, extensions, invariants.',
      seeAlso: ['profile', 'slicing', 'invariant'],
    },
    {
      id: 'ig',
      term: 'Guide d’implémentation (IG)',
      category: 'profiling',
      definition:
        'Ensemble cohérent de profils, terminologies, exemples, règles de conformance et tests. Le profil dit ce qui est attendu ; l’IG dit aussi comment l’utiliser et le vérifier.',
      seeAlso: ['profile', 'conformance'],
    },
    {
      id: 'slicing',
      term: 'Slicing',
      category: 'profiling',
      definition:
        'Découpage d’une liste répétable en tranches nommées, discriminées par un critère — par exemple séparer un identifiant national d’un identifiant local.',
      seeAlso: ['structuredefinition'],
    },
    {
      id: 'invariant',
      term: 'Invariant',
      category: 'profiling',
      definition:
        'Règle logique supplémentaire d’un profil, exprimée en FHIRPath et donc vérifiable automatiquement par un validateur.',
      seeAlso: ['structuredefinition', 'conformance'],
    },
    {
      id: 'conformance',
      term: 'Conformance',
      category: 'profiling',
      definition:
        'Preuve qu’une implémentation respecte les règles attendues : validation d’instances, scénarios rejouables, jeux de données de test.',
      seeAlso: ['ig', 'invariant'],
    },
    {
      id: 'ihe',
      term: 'IHE',
      category: 'ecosystem',
      definition:
        'Integrating the Healthcare Enterprise : organisation qui profile des standards existants en spécifications testables, décrivant cas d’usage, acteurs, transactions et standards sous-jacents.',
      seeAlso: ['profile', 'xds'],
    },
    {
      id: 'xds',
      term: 'XDS',
      category: 'ecosystem',
      definition:
        'Profil IHE de partage documentaire, structuré autour des acteurs Registry, Repository et Consumer. Toujours au cœur de nombreux systèmes de partage.',
      seeAlso: ['ihe', 'document-exchange'],
    },
    {
      id: 'dicom',
      term: 'DICOM',
      category: 'ecosystem',
      definition:
        'Standard de référence pour l’imagerie médicale : objets (images, séries, études, comptes rendus) et services (stockage, query/retrieve, worklists, accès web).',
      seeAlso: ['ihe'],
    },
    {
      id: 'openehr',
      term: 'openEHR',
      category: 'ecosystem',
      definition:
        'Approche séparant un modèle de référence technique stable des modèles de contenu clinique (archétypes, templates), avec entrepôt (CDR) et langage de requête (AQL).',
      seeAlso: ['logical-model', 'fhir'],
    },
    {
      id: 'omop',
      term: 'OMOP CDM',
      category: 'ecosystem',
      definition:
        'Common Data Model porté par la communauté OHDSI pour harmoniser des données observationnelles issues de bases multiples et permettre des analyses fédérées.',
      seeAlso: ['cdisc', 'bulk-data'],
    },
    {
      id: 'cdisc',
      term: 'CDISC',
      category: 'ecosystem',
      definition:
        'Ensemble de standards pour la recherche clinique régulée : CDASH, SDTM, ADaM, Define-XML, ODM et terminologie contrôlée, destinés aux soumissions réglementaires.',
      seeAlso: ['omop'],
    },
    {
      id: 'ehds',
      term: 'EHDS',
      category: 'ecosystem',
      definition:
        'Espace Européen des Données de Santé : règlement organisant l’usage, l’accès et la circulation des données de santé en Europe autour de trois obligations — interopérer, accéder, utiliser.',
      seeAlso: ['fhir', 'ips'],
    },
    {
      id: 'core-service',
      term: 'Service socle',
      category: 'architecture',
      definition:
        'Service partagé qui porte une règle commune plutôt que de la laisser à chaque application : identité, terminologie, autorisation, audit, validation, transformation.',
      seeAlso: ['terminology-server', 'mpi', 'provenance'],
    },
    {
      id: 'mpi',
      term: 'MPI',
      category: 'architecture',
      definition:
        'Master Patient Index : service d’identité qui rapproche les identifiants d’une même personne entre domaines d’identification et porte la qualité d’identité.',
      seeAlso: ['core-service'],
    },
    {
      id: 'provenance',
      term: 'Provenance',
      category: 'architecture',
      definition:
        'Information décrivant l’origine, la transformation et la responsabilité d’une donnée. Sans elle, une valeur contestée ne peut être ni expliquée ni corrigée.',
      seeAlso: ['core-service', 'audit'],
    },
    {
      id: 'audit',
      term: 'Audit',
      category: 'architecture',
      definition:
        'Enregistrement de qui a consulté ou modifié quoi, quand et dans quel contexte. Indispensable à la conformité et à la confiance dans un système ouvert.',
      seeAlso: ['provenance', 'purpose-of-use'],
    },
    {
      id: 'purpose-of-use',
      term: 'Purpose of use',
      category: 'architecture',
      definition:
        'Finalité déclarée d’un accès — soin, administration, recherche, pilotage. Elle conditionne les droits : la même personne n’a pas les mêmes accès selon la finalité.',
      seeAlso: ['audit', 'core-service'],
    },
    {
      id: 'spaghetti',
      term: 'SI spaghetti',
      category: 'architecture',
      definition:
        'Anti-pattern où chaque besoin produit une interface spécifique. Conséquences : dette technique, données incohérentes, traçabilité difficile, sécurité fragmentée, réutilisation nulle.',
      seeAlso: ['core-service'],
    },
    {
      id: 'argus',
      term: 'Argus',
      category: 'architecture',
      definition:
        'Cas fil rouge du parcours : une tour de contrôle hospitalière née de la destruction des silos, qui rend l’hôpital observable, traçable, pilotable et automatisable.',
      seeAlso: ['spaghetti', 'core-service'],
    },
  ],

  en: [
    {
      id: 'interoperability',
      term: 'Interoperability',
      category: 'reeif',
      definition:
        'The ability of disparate organisations to interact towards mutually agreed goals, sharing information and knowledge through the business processes they support, by means of data exchange between their systems. Data exchange is the last link, not the goal.',
      seeAlso: ['operability', 'reeif'],
    },
    {
      id: 'operability',
      term: 'Operability',
      category: 'reeif',
      definition:
        'The way an organisation runs internally — processes, data structures, rules — to deliver its services within its own scope. Being operable says nothing about the ability to work with others.',
      seeAlso: ['interoperability'],
    },
    {
      id: 'reeif',
      term: 'ReEIF',
      category: 'reeif',
      definition:
        'Refined eHealth European Interoperability Framework, adopted by the eHealth Network on 23 November 2015. A non-technical six-layer model: legal, policy/governance, care process, information, applications, IT infrastructure.',
      seeAlso: ['interoperability', 'care-process'],
    },
    {
      id: 'care-process',
      term: 'Care process layer',
      category: 'reeif',
      definition:
        'The ReEIF layer where pathways are analysed and aligned into shared workflows. The shared workflow prescribes which information is needed, when, and for which action.',
      seeAlso: ['reeif'],
    },
    {
      id: 'broad-interop',
      term: 'Broad interoperability',
      category: 'reeif',
      definition:
        'The perspective in which technical interoperability is only a means: the goal is for organisations to interact effectively. It addresses the interoperability of organisations themselves, not only of their systems.',
      seeAlso: ['interoperability'],
    },
    {
      id: 'hl7v2',
      term: 'HL7 v2',
      category: 'exchange',
      definition:
        'The historical hospital messaging standard, pipe-delimited text, in use for decades — notably for ADT (admission, discharge, transfer) and ORU (results) messages.',
      seeAlso: ['message-push', 'fhir'],
    },
    {
      id: 'cda',
      term: 'CDA',
      category: 'exchange',
      definition:
        'Clinical Document Architecture: the HL7 standard for structured clinical documents in XML. Suited to cases where medico-legal trace and stable human-readable content matter.',
      seeAlso: ['document-exchange'],
    },
    {
      id: 'fhir',
      term: 'FHIR',
      category: 'exchange',
      definition:
        'Fast Healthcare Interoperability Resources: an HL7 standard built on web technology (HTTP, JSON, XML, REST). It supports several paradigms — REST, documents, messaging, bulk data, subscriptions.',
      seeAlso: ['resource', 'profile', 'bulk-data'],
    },
    {
      id: 'resource',
      term: 'FHIR resource',
      category: 'exchange',
      definition:
        'The base building block of the FHIR model: Patient, Observation, Encounter, Appointment, Location, Device… Each resource is addressable as a service through the API.',
      seeAlso: ['fhir', 'profile'],
    },
    {
      id: 'message-push',
      term: 'Message push',
      category: 'exchange',
      definition:
        'An exchange pattern where a system emits a message as soon as a business event occurs. Fast, but coupling: replays, message ordering, duplicates and partial context must be handled.',
      seeAlso: ['hl7v2', 'event'],
    },
    {
      id: 'document-exchange',
      term: 'Document exchange',
      category: 'exchange',
      definition:
        'A pattern where a stable clinical artefact is published or shared: it can be signed, stored, audited. Careful: a document can be readable without being computable.',
      seeAlso: ['cda', 'ips'],
    },
    {
      id: 'event',
      term: 'Event / subscription',
      category: 'exchange',
      definition:
        'A pattern where systems react to changes rather than polling. A broker or a FHIR Subscription distributes the notification to subscribers.',
      seeAlso: ['message-push'],
    },
    {
      id: 'bulk-data',
      term: 'Bulk Data',
      category: 'exchange',
      definition:
        'Large-volume FHIR export, typically as NDJSON, for analytics, research or migration. Useful outside real time; dangerous as the only integration strategy.',
      seeAlso: ['fhir', 'omop'],
    },
    {
      id: 'ips',
      term: 'IPS',
      category: 'exchange',
      definition:
        'International Patient Summary: a normalised patient summary designed to be shareable across linguistic and organisational borders.',
      seeAlso: ['document-exchange'],
    },
    {
      id: 'codesystem',
      term: 'CodeSystem',
      category: 'semantics',
      definition:
        'The FHIR resource defining the concepts, codes, displays and properties of a code system. It is the complete dictionary — not to be confused with the allowed subset.',
      seeAlso: ['valueset', 'snomed', 'loinc'],
    },
    {
      id: 'valueset',
      term: 'ValueSet',
      category: 'semantics',
      definition:
        'The FHIR resource defining the subset of codes allowed in a given context. It is the list your field actually accepts.',
      seeAlso: ['codesystem', 'binding', 'expand'],
    },
    {
      id: 'conceptmap',
      term: 'ConceptMap',
      category: 'semantics',
      definition:
        'The FHIR resource declaring how concepts relate across systems: equivalent, source narrower, source broader, related, or explicitly not related.',
      seeAlso: ['translate', 'valueset'],
    },
    {
      id: 'binding',
      term: 'Binding',
      category: 'semantics',
      definition:
        'The link between an element and a ValueSet, with a strength: required (mandatory), extensible (otherwise justify), preferred (recommended), example (informative).',
      seeAlso: ['valueset', 'profile'],
    },
    {
      id: 'snomed',
      term: 'SNOMED CT',
      category: 'semantics',
      definition:
        'A clinical terminology covering findings, procedures, body structures and many clinical concepts. Maintained by SNOMED International.',
      seeAlso: ['loinc', 'codesystem'],
    },
    {
      id: 'loinc',
      term: 'LOINC',
      category: 'semantics',
      definition:
        'Identifiers for observations, laboratory tests, measurements and documents. Stewarded by the Regenstrief Institute.',
      seeAlso: ['snomed', 'ucum'],
    },
    {
      id: 'ucum',
      term: 'UCUM',
      category: 'semantics',
      definition:
        'Unified Code for Units of Measure: normalised coding of units (mmol/L, kg, cm). Often used together with LOINC and FHIR.',
      seeAlso: ['loinc'],
    },
    {
      id: 'expand',
      term: '$expand',
      category: 'semantics',
      definition:
        'The terminology-server operation that lists the codes allowed by a ValueSet. Typically used to populate a dropdown.',
      seeAlso: ['valueset', 'validate-code'],
    },
    {
      id: 'validate-code',
      term: '$validate-code',
      category: 'semantics',
      definition:
        'The operation that checks whether a code is allowed in a given context. It is the gate before storage or ingestion.',
      seeAlso: ['expand', 'terminology-server'],
    },
    {
      id: 'translate',
      term: '$translate',
      category: 'semantics',
      definition:
        'The operation that converts a code to another system or a target ValueSet, backed by a ConceptMap.',
      seeAlso: ['conceptmap'],
    },
    {
      id: 'terminology-server',
      term: 'Terminology server',
      category: 'semantics',
      definition:
        'The central authoritative service for code systems, value sets, mappings and their versions. It stops each application hard-coding its own semantic logic.',
      seeAlso: ['validate-code', 'core-service'],
    },
    {
      id: 'logical-model',
      term: 'Logical model',
      category: 'semantics',
      definition:
        'An expression of functional requirements independent of FHIR or HL7 v2. It acts as a pivot model for mapping to several standards and protects business meaning.',
      seeAlso: ['conceptmap'],
    },
    {
      id: 'profile',
      term: 'Profile',
      category: 'profiling',
      definition:
        'A standard constrained for a given context. In FHIR it is a StructureDefinition: a machine-readable rule, therefore automatically validatable.',
      seeAlso: ['structuredefinition', 'ig', 'binding'],
    },
    {
      id: 'structuredefinition',
      term: 'StructureDefinition',
      category: 'profiling',
      definition:
        'The FHIR resource expressing constraints applied to a resource, a type or an extension: cardinalities, types, bindings, slicing, extensions, invariants.',
      seeAlso: ['profile', 'slicing', 'invariant'],
    },
    {
      id: 'ig',
      term: 'Implementation guide (IG)',
      category: 'profiling',
      definition:
        'A coherent set of profiles, terminologies, examples, conformance rules and tests. The profile says what is expected; the IG also says how to use and verify it.',
      seeAlso: ['profile', 'conformance'],
    },
    {
      id: 'slicing',
      term: 'Slicing',
      category: 'profiling',
      definition:
        'Splitting a repeatable list into named slices, discriminated by a criterion — for instance separating a national identifier from a local one.',
      seeAlso: ['structuredefinition'],
    },
    {
      id: 'invariant',
      term: 'Invariant',
      category: 'profiling',
      definition:
        'An additional logical rule in a profile, expressed in FHIRPath and therefore automatically checkable by a validator.',
      seeAlso: ['structuredefinition', 'conformance'],
    },
    {
      id: 'conformance',
      term: 'Conformance',
      category: 'profiling',
      definition:
        'Evidence that an implementation follows the expected rules: instance validation, replayable scenarios, test datasets.',
      seeAlso: ['ig', 'invariant'],
    },
    {
      id: 'ihe',
      term: 'IHE',
      category: 'ecosystem',
      definition:
        'Integrating the Healthcare Enterprise: the organisation that profiles existing standards into testable specifications, describing use cases, actors, transactions and underlying standards.',
      seeAlso: ['profile', 'xds'],
    },
    {
      id: 'xds',
      term: 'XDS',
      category: 'ecosystem',
      definition:
        'The IHE document-sharing profile, built around Registry, Repository and Consumer actors. Still central to many sharing systems.',
      seeAlso: ['ihe', 'document-exchange'],
    },
    {
      id: 'dicom',
      term: 'DICOM',
      category: 'ecosystem',
      definition:
        'The reference standard for medical imaging: objects (images, series, studies, reports) and services (storage, query/retrieve, worklists, web access).',
      seeAlso: ['ihe'],
    },
    {
      id: 'openehr',
      term: 'openEHR',
      category: 'ecosystem',
      definition:
        'An approach separating a stable technical reference model from clinical content models (archetypes, templates), with a repository (CDR) and a query language (AQL).',
      seeAlso: ['logical-model', 'fhir'],
    },
    {
      id: 'omop',
      term: 'OMOP CDM',
      category: 'ecosystem',
      definition:
        'The Common Data Model carried by the OHDSI community to harmonise observational data from multiple databases and enable federated analyses.',
      seeAlso: ['cdisc', 'bulk-data'],
    },
    {
      id: 'cdisc',
      term: 'CDISC',
      category: 'ecosystem',
      definition:
        'A set of standards for regulated clinical research: CDASH, SDTM, ADaM, Define-XML, ODM and controlled terminology, aimed at regulatory submissions.',
      seeAlso: ['omop'],
    },
    {
      id: 'ehds',
      term: 'EHDS',
      category: 'ecosystem',
      definition:
        'European Health Data Space: the regulation organising the use, access and circulation of health data in Europe around three obligations — interoperate, access, use.',
      seeAlso: ['fhir', 'ips'],
    },
    {
      id: 'core-service',
      term: 'Core service',
      category: 'architecture',
      definition:
        'A shared service that carries a common rule instead of leaving it to each application: identity, terminology, authorisation, audit, validation, transformation.',
      seeAlso: ['terminology-server', 'mpi', 'provenance'],
    },
    {
      id: 'mpi',
      term: 'MPI',
      category: 'architecture',
      definition:
        'Master Patient Index: the identity service that matches a person\'s identifiers across identification domains and carries identity quality.',
      seeAlso: ['core-service'],
    },
    {
      id: 'provenance',
      term: 'Provenance',
      category: 'architecture',
      definition:
        'Information describing the origin, transformation and ownership of data. Without it, a disputed value can be neither explained nor corrected.',
      seeAlso: ['core-service', 'audit'],
    },
    {
      id: 'audit',
      term: 'Audit',
      category: 'architecture',
      definition:
        'The record of who consulted or modified what, when and in which context. Essential to compliance and to trust in an open system.',
      seeAlso: ['provenance', 'purpose-of-use'],
    },
    {
      id: 'purpose-of-use',
      term: 'Purpose of use',
      category: 'architecture',
      definition:
        'The declared purpose of an access — care, administration, research, management. It conditions rights: the same person does not get the same access for every purpose.',
      seeAlso: ['audit', 'core-service'],
    },
    {
      id: 'spaghetti',
      term: 'Spaghetti information system',
      category: 'architecture',
      definition:
        'The anti-pattern where every need produces a bespoke interface. Consequences: technical debt, inconsistent data, difficult traceability, fragmented security, no reuse.',
      seeAlso: ['core-service'],
    },
    {
      id: 'argus',
      term: 'Argus',
      category: 'architecture',
      definition:
        'The running case of this pathway: a hospital control tower born from the destruction of silos, making the hospital observable, traceable, steerable and automatable.',
      seeAlso: ['spaghetti', 'core-service'],
    },
  ],
};
