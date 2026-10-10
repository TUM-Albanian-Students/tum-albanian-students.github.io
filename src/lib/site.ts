import { DEFAULT_LANG, LANGS, LOCALE, type Lang } from '../i18n/ui';

export const SITE = {
  name: 'TUM Albanian Student Society',
  email: 'tumalbaniansociety@gmail.com',
  instagram: 'https://www.instagram.com/albanian_students_tum/',
  instagramHandle: '@albanian_students_tum',
  linkedin: 'https://www.linkedin.com/company/tum-albanian-student-society/',
  founded: 2024,
};

/** Straight-line distances from Munich (Marienplatz), in km. */
export const DISTANCES = [964, 998, 1003];

/** getStaticPaths entries for every language; English lives at the root. */
export function langPaths() {
  return LANGS.map((lang) => ({ params: { lang: lang === DEFAULT_LANG ? undefined : lang }, props: { lang } }));
}

export function langFromParam(param: string | undefined): Lang {
  return (LANGS as readonly string[]).includes(param ?? '') ? (param as Lang) : DEFAULT_LANG;
}

/** Path for `path` (always starting with "/") in the given language. */
export function localPath(lang: Lang, path = '/'): string {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

/** Strip the language prefix from a pathname, so it can be re-prefixed for another language. */
export function basePath(pathname: string): string {
  const m = pathname.match(/^\/(sq|de)(\/.*|$)/);
  const rest = m ? m[2] || '/' : pathname;
  return rest.endsWith('/') || rest.includes('.') ? rest : `${rest}/`;
}

/** Pick the language block from a content entry, falling back to English field by field. */
export function localize<T extends object>(data: { en: T; sq?: Partial<T>; de?: Partial<T> }, lang: Lang): T {
  if (lang === 'en') return data.en;
  const own = data[lang] ?? {};
  return { ...data.en, ...Object.fromEntries(Object.entries(own).filter(([, v]) => v !== undefined)) } as T;
}

// ---- Dates ---------------------------------------------------------------
// Event dates are plain "YYYY-MM-DD" (or "YYYY-MM") strings in Munich time.

export function todayInMunich(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' }).format(now);
}

export function isUpcoming(date: string, now = new Date()): boolean {
  const today = todayInMunich(now);
  return date.length === 7 ? date >= today.slice(0, 7) : date >= today;
}

const asUtc = (date: string) => new Date(`${date.length === 7 ? `${date}-01` : date}T12:00:00Z`);

function fmt(date: string, lang: Lang, opts: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(LOCALE[lang], { timeZone: 'UTC', ...opts }).format(asUtc(date));
}

const capitalize = (s: string) => s.charAt(0).toLocaleUpperCase() + s.slice(1);

export const dates = {
  day: (d: string) => (d.length === 7 ? '' : String(Number(d.slice(8, 10)))),
  monthYear: (d: string, lang: Lang) => capitalize(fmt(d, lang, { month: 'long', year: 'numeric' })),
  short: (d: string, lang: Lang) =>
    d.length === 7 ? fmt(d, lang, { month: 'short', year: 'numeric' }) : fmt(d, lang, { day: 'numeric', month: 'short', year: 'numeric' }),
  long: (d: string, lang: Lang) =>
    capitalize(
      d.length === 7 ? fmt(d, lang, { month: 'long', year: 'numeric' }) : fmt(d, lang, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
    ),
};

export function number(n: number, lang: Lang) {
  return new Intl.NumberFormat(LOCALE[lang]).format(n);
}

// ---- Text ----------------------------------------------------------------

const escape = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** Mark every "ë" so CSS can colour its two dots. Returns HTML. */
export function dotted(text: string): string {
  return escape(text).replace(/ë/g, '<span class="e-dots">ë</span>');
}

export const paragraphs = (text: string) => text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
