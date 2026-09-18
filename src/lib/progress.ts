/**
 * Client-side completion tracking. Deliberately local-only: the pathway is
 * open, needs no account, and progress is a private nudge rather than a grade.
 */
const KEY = 'interop:completed';

export function completedModules(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(raw) ? raw.filter((s): s is string => typeof s === 'string') : [];
  } catch {
    return [];
  }
}

export function setCompleted(slug: string, done: boolean): string[] {
  const next = new Set(completedModules());
  if (done) next.add(slug);
  else next.delete(slug);
  const list = [...next];
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* storage unavailable — the page still works, nothing is remembered */
  }
  document.dispatchEvent(new CustomEvent('interop:progress', { detail: list }));
  return list;
}

export function resetProgress(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* nothing to clear */
  }
  document.dispatchEvent(new CustomEvent('interop:progress', { detail: [] }));
}
