import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// YAML turns an unquoted 2025-11-30 into a Date; normalise everything to "YYYY-MM-DD" or "YYYY-MM".
const day = z.preprocess(
  (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),
  z.string().regex(/^\d{4}-\d{2}(-\d{2})?$/, 'Use YYYY-MM-DD, or YYYY-MM if the day is unknown'),
);

const eventText = z.object({
  title: z.string(),
  place: z.string().optional(),
  summary: z.string(),
  body: z.string(),
  highlights: z.array(z.string()).default([]),
  audience: z.string().optional(),
});

const events = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/events' }),
  schema: z.object({
    date: day,
    time: z.string().regex(/^\d{2}:\d{2}$/).optional(),
    place: z.string(),
    address: z.string().optional(),
    room: z.string().optional(),
    capacity: z.number().int().optional(),
    registration: z.url().optional(),
    en: eventText,
    sq: eventText.partial().optional(),
    de: eventText.partial().optional(),
  }),
});

const item = z.object({ title: z.string(), text: z.string() });
const projectText = z.object({
  title: z.string(),
  summary: z.string(),
  body: z.string(),
  goals: z.array(item),
  steps: z.array(item),
  cta: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    kind: z.enum(['mentorship', 'social']),
    contact: z.enum(['email', 'instagram']),
    emailSubject: z.string().optional(),
    en: projectText,
    sq: projectText.partial().optional(),
    de: projectText.partial().optional(),
  }),
});

const team = defineCollection({
  loader: file('./src/content/team.yaml'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      order: z.number(),
      photo: image().optional(),
      role: z.object({ en: z.string(), sq: z.string().optional(), de: z.string().optional() }),
    }),
});

export const collections = { events, projects, team };
