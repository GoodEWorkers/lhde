import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/utils';

export type ModuleEntry = CollectionEntry<'modules'>;

/** All modules for one locale, in pathway order. */
export async function getModules(lang: Lang): Promise<ModuleEntry[]> {
  const all = await getCollection('modules', ({ data }) => data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** Modules grouped by phase, phases in ascending order. */
export async function getPhases(lang: Lang) {
  const modules = await getModules(lang);
  const phases = [...new Set(modules.map((m) => m.data.phase))].sort((a, b) => a - b);
  return phases.map((phase) => ({
    phase,
    modules: modules.filter((m) => m.data.phase === phase),
  }));
}

/** Previous / next neighbours for in-module navigation. */
export function neighbours(modules: ModuleEntry[], slug: string) {
  const i = modules.findIndex((m) => m.data.route === slug);
  return {
    prev: i > 0 ? modules[i - 1] : undefined,
    next: i >= 0 && i < modules.length - 1 ? modules[i + 1] : undefined,
    index: i,
  };
}

export const phaseKey = (n: number) =>
  ({ 1: 'path.phase1', 2: 'path.phase2', 3: 'path.phase3', 4: 'path.phase4' })[n] ?? 'path.phase1';
