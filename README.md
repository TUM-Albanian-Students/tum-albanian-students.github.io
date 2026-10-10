# TUM Albanian Student Society

The website of the Albanian student community at the Technical University of Munich:
<https://tum-albanian-students.github.io>

Built with [Astro](https://astro.build) as a static site, in English (`/`), Albanian (`/sq/`)
and German (`/de/`). Every push to `main` deploys to GitHub Pages, and the site also rebuilds
every night so that events move from "upcoming" to "past" on their own.

## Editing content

You don't need to touch any code for day-to-day updates. Everything lives in `src/content/`.

### Add an event

Create a file in `src/content/events/`, e.g. `flag-day-2026.yaml`. The file name becomes the URL
(`/events/flag-day-2026/`).

```yaml
date: 2026-11-28          # YYYY-MM-DD, or YYYY-MM if the day isn't known yet
time: "19:00"             # optional, Munich time
place: TUM main campus
address: Arcisstraße 21, 80333 München   # optional, used for the map link
room: 0505.Z1.534         # optional
capacity: 40              # optional
registration: https://…   # optional, shows a "Register" button while the event is upcoming

en:
  title: Flag Day Evening
  summary: One line, shown in the event list.
  body: >-
    A paragraph or two about the event.
  highlights:             # optional
    - Music
    - Food
  audience: Who it's for  # optional

sq:                       # optional; anything missing falls back to English
  title: Mbrëmja e Ditës së Flamurit
  place: Kampusi kryesor i TUM
  summary: …
  body: …

de:
  title: …
```

Events with a date today or later appear under "Next up", with an "Add to calendar" file.
Older ones move to "Past events" automatically.

### Projects

One file per project in `src/content/projects/`. Same idea: shared fields at the top, text per
language in `en`, `sq` and `de`. `contact: email` makes the button open an email to the society
(with `emailSubject`), `contact: instagram` links to Instagram.

### Board

`src/content/team.yaml`. Put photos in `src/assets/team/` (square-ish, any size; they're resized
and shown in black and white). Leave out `photo` to show initials.

### Texts on the pages

Headings, buttons and the other interface texts are in `src/i18n/ui.ts`, one block per language.

## Details worth knowing

- **The eagle** is the club's wireframe logo, traced into ~1,200 straight lines
  (`src/data/eagle-lines.ts`). On the home page it draws itself on load, and wires near the
  cursor turn red. The small solid version (`eagle-mark.ts`) is used in the header, footer and favicon.
- **Red means Albanian**: the dots on every `ë` in headings, the Albanian half of each section
  label, the eagle. Keep it that sparing.
- **Holiday greetings** appear only on 17 February, 14 March, 22 November and 28 November.
  Preview one with `?day=11-28` on any page.
- No cookies, no analytics, and no external requests: fonts are self-hosted, which keeps the
  privacy notice in `src/pages/[...lang]/impressum.astro` accurate. Update it if that changes.

## Running locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node 22 or newer.
