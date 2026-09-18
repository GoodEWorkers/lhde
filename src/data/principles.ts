import type { Lang } from '../i18n/utils';

/**
 * The instructional-design contract of the pathway, stated openly so that
 * teachers can reuse the structure and learners know why they are being
 * interrupted by an activity every few screens.
 */
export interface Principle {
  tag: string;
  title: string;
  body: string;
}

export const principles: Record<Lang, Principle[]> = {
  fr: [
    {
      tag: 'Alignement',
      title: 'Un objectif, une activité, un contrôle',
      body: 'Chaque module annonce ce que vous saurez faire, vous le fait faire, puis vérifie que vous le faites. Pas d’objectif sans activité correspondante, pas d’activité sans vérification.',
    },
    {
      tag: 'Rappel actif',
      title: 'On répond avant de lire la réponse',
      body: 'Les quiz et les blocs « ouvrez après avoir répondu » ne sont pas décoratifs. Récupérer une information de mémoire la fixe bien mieux que la relire.',
    },
    {
      tag: 'Progression en spirale',
      title: 'Le même cas, de plus en plus fin',
      body: 'Argus, la tour de contrôle hospitalière, revient à chaque module. Vous ne changez pas de problème : vous changez d’outillage pour le regarder.',
    },
    {
      tag: 'Charge maîtrisée',
      title: 'Une couche à la fois, jamais six d’un coup',
      body: 'Le ReEIF sert de plan de cours : on ouvre une couche, on la travaille, on la referme. Le schéma complet n’arrive qu’une fois chaque pièce comprise.',
    },
  ],
  en: [
    {
      tag: 'Alignment',
      title: 'One outcome, one activity, one check',
      body: 'Every module states what you will be able to do, makes you do it, then checks that you do. No outcome without a matching activity, no activity without verification.',
    },
    {
      tag: 'Retrieval',
      title: 'Answer before reading the answer',
      body: 'The quizzes and the "open after you answer" blocks are not decoration. Pulling an answer out of memory fixes it far better than re-reading it.',
    },
    {
      tag: 'Spiral progression',
      title: 'The same case, at ever finer grain',
      body: 'Argus, the hospital control tower, returns in every module. The problem never changes — only the tooling you bring to it.',
    },
    {
      tag: 'Managed load',
      title: 'One layer at a time, never six at once',
      body: 'ReEIF doubles as the syllabus: open a layer, work it, close it. The full picture only arrives once each piece is understood.',
    },
  ],
};
