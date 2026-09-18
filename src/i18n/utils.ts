import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

export { languages, defaultLang };
export type { Lang };

/** Read the locale out of a URL such as /en/modules/profiling. */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

/** Translator bound to one locale. Falls back to French, then to the key. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/** Build a locale-prefixed path: localePath('en', 'modules') -> '/en/modules'. */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}

/** Same page, other locale. Used by the language switcher. */
export function switchLocalePath(url: URL, target: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments.length && segments[0] in ui) segments[0] = target;
  else segments.unshift(target);
  return `/${segments.join('/')}`;
}

export const otherLangs = (lang: Lang) => (Object.keys(languages) as Lang[]).filter((l) => l !== lang);
