import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { Lang } from '../../../i18n/ui';
import { SITE, langPaths, localPath, localize } from '../../../lib/site';

// One calendar file per event with an exact date, in each language.
export async function getStaticPaths() {
  const events = (await getCollection('events')).filter((e) => e.data.date.length === 10);
  return langPaths().flatMap(({ params, props }) =>
    events.map((entry) => ({ params: { ...params, slug: entry.id }, props: { ...props, entry } })),
  );
}

/** Munich wall-clock time → UTC, accounting for daylight saving. */
function munichToUtc(date: string, time: string): Date {
  const guess = new Date(`${date}T${time}:00Z`);
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Berlin',
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
      .formatToParts(guess)
      .map((p) => [p.type, p.value]),
  );
  const asMunich = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
  return new Date(guess.getTime() - (asMunich - guess.getTime()));
}

const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const escape = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
// RFC 5545: lines longer than 75 octets are folded.
const fold = (line: string) => {
  const out: string[] = [];
  let rest = line;
  while (new TextEncoder().encode(rest).length > 75) {
    let cut = 75;
    while (new TextEncoder().encode(rest.slice(0, cut)).length > 75) cut--;
    out.push(rest.slice(0, cut));
    rest = ' ' + rest.slice(cut);
  }
  out.push(rest);
  return out.join('\r\n');
};

export const GET: APIRoute = ({ props, site }) => {
  const { lang, entry } = props as { lang: Lang; entry: Awaited<ReturnType<typeof getCollection<'events'>>>[number] };
  const e = entry.data;
  const text = localize(e, lang);
  const url = new URL(localPath(lang, `/events/${entry.id}/`), site).href;
  const date = e.date.replace(/-/g, '');
  const when = e.time
    ? (() => {
        const start = munichToUtc(e.date, e.time);
        const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
        return [`DTSTART:${stamp(start)}`, `DTEND:${stamp(end)}`];
      })()
    : [`DTSTART;VALUE=DATE:${date}`];

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:-//${SITE.name}//Events//${lang.toUpperCase()}`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${entry.id}@tum-albanian-students.github.io`,
    `DTSTAMP:${stamp(new Date())}`,
    ...when,
    `SUMMARY:${escape(text.title)}`,
    `DESCRIPTION:${escape(`${text.summary}\n\n${url}`)}`,
    `LOCATION:${escape([text.place ?? e.place, e.room, e.address].filter(Boolean).join(', '))}`,
    `URL:${url}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return new Response(lines.map(fold).join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
  });
};
