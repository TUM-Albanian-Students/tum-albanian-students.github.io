import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { isUpcoming, localize } from './site';

export async function getEvents(lang: Lang) {
  const all = (await getCollection('events')).map((e) => {
    const text = localize(e.data, lang);
    return { id: e.id, ...e.data, text, place: text.place ?? e.data.place, upcoming: isUpcoming(e.data.date) };
  });
  return {
    upcoming: all.filter((e) => e.upcoming).sort((a, b) => a.date.localeCompare(b.date)),
    past: all.filter((e) => !e.upcoming).sort((a, b) => b.date.localeCompare(a.date)),
  };
}

export async function getProjects(lang: Lang) {
  return (await getCollection('projects'))
    .sort((a, b) => a.data.order - b.data.order)
    .map((p) => ({ id: p.id, ...p.data, text: localize(p.data, lang) }));
}

export async function getTeam(lang: Lang) {
  return (await getCollection('team'))
    .sort((a, b) => a.data.order - b.data.order)
    .map((m) => ({ id: m.id, ...m.data, roleText: m.data.role[lang] ?? m.data.role.en }));
}
