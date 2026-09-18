# LHDE — Learn Health Data Exchange

A bilingual (FR / EN) Astro site that turns the XiA Educathon decks, the eHealth Network ReEIF
framework and the "Standardise to transform" seminar into a guided, assessed learning pathway.

Nine modules, four phases, one running case, one three-hour capstone project.

## Why a pathway rather than a slide dump

The site is built around four instructional-design decisions, stated openly on the home page so that
teachers can reuse the structure:

- **Constructive alignment** — every module declares one learning outcome, makes the learner practise
  it, then checks it. No outcome without a matching activity; no activity without a check.
- **Retrieval practice** — quizzes and "answer before you open" blocks force recall before exposure.
- **Spiral progression** — the same running case (*Argus*, a hospital control tower) returns in every
  module; only the tooling gets sharper.
- **Managed cognitive load** — the six ReEIF layers double as the syllabus: one layer is opened,
  worked and closed before the full picture is shown.

## Pathway structure

| Phase | Modules |
| --- | --- |
| 1 — Understand the problem | `foundations`, `standardisation` |
| 2 — Move it and make it mean something | `syntax`, `semantics` |
| 3 — Locate and constrain | `ecosystem`, `fhir`, `profiling` |
| 4 — Design and deliver | `architecture`, `integration` |
| Capstone | `capstone` — 3 h assessed project against a live FHIR server |

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
npm run check    # astro check (TypeScript + template diagnostics)
```

## Project layout

```
src/
  content/modules/{fr,en}/*.mdx   one file per module per locale
  content.config.ts               frontmatter schema for the modules collection
  components/                     interactive teaching components (see below)
  layouts/                        Base.astro, ModuleLayout.astro
  pages/[lang]/                   home, modules, argus, capstone, glossary, resources
  i18n/                           ui.ts (all UI strings), utils.ts (locale helpers)
  data/                           glossary, pedagogical principles
  lib/                            module queries, progress tracking
public/fonts/                     self-hosted Clash Display (Fontshare)
```

## Adding or editing a module

1. Create `src/content/modules/fr/<route>.mdx` **and** `src/content/modules/en/<route>.mdx`.
2. Use the same `route` value in both files — that is the shared URL segment, so the language
   switcher lands on the same page in the other locale.

   > The frontmatter field is `route`, not `slug`, on purpose: Astro's glob loader hijacks a `slug`
   > field as the entry id, which would make the FR and EN files collide.

3. Fill the schema in `src/content.config.ts`: `route`, `lang`, `order`, `phase`, `level`, `title`,
   `subtitle`, `outcome`, `agenda`, `duration`, `question`, `argus`, `sources`.
4. Import the components you need and write the body. The module page renders the header, the Argus
   reminder, the completion button, the sources and the prev/next navigation for you.

## Interactive components

All of them are plain Astro plus vanilla TypeScript — no client framework, no hydration cost.

| Component | Purpose |
| --- | --- |
| `Quiz` | Multiple choice with per-question explanation and a score. Feedback is shown only after checking. |
| `MatchActivity` | Classification exercise: items on the left, a shared option set as chips, reveal-and-explain. |
| `Checklist` | Persistent checklist (localStorage) with a completion counter. |
| `Reveal` | "Commit to an answer, then open" prompt — the generation effect. |
| `LayerStack` | Expandable ReEIF stack: per layer, the question, the detail, who decides, what breaks. |
| `CompareGrid` | Two- or three-column contrast with a caption. |
| `CardGrid` | Concept cards, 2–4 columns. |
| `StepFlow` | Numbered process flow. |
| `Callout` | `key`, `warning`, `activity`, `example`, `reflect` variants. |
| `CompleteButton` / `ProgressTracker` | Module completion, stored locally, surfaced on the pathway page. |

Every one of them carries `not-prose`; the module typography in `src/styles/global.css` is scoped
away from those subtrees so components keep their own styling, and they break out of the prose
measure on large screens.

## Internationalisation

- Astro's built-in i18n routing, `defaultLocale: 'fr'`, both locales prefixed (`/fr/…`, `/en/…`).
- `/` redirects to `/fr/`; every page emits `hreflang` alternates and a canonical URL.
- UI strings live in `src/i18n/ui.ts`. Adding a locale means adding a key block there, a value in
  `languages`, and a content folder under `src/content/modules/`.

## Theme

The visual system mirrors [goodeworkers.org](https://goodeworkers.org): flat, high contrast, black
canvas with an orange accent, Clash Display for headings and Inter for body copy, pill-shaped calls
to action, generous whitespace, rounded cards.

Tokens live in the `@theme` block of `src/styles/global.css`:

| Token | Value |
| --- | --- |
| `--color-black` / `--color-black-light` | `#111111` / `#1D1D1D` |
| `--color-white` / `--color-grey` | `#F8F8F8` / `#ECECEC` |
| `--color-orange` | `#FD5E09` |
| `--color-yellow` | `#FDC959` |
| `--color-purple` | `#B3A0CF` |

Tailwind CSS v4 via `@tailwindcss/vite`, no config file.

> `package.json` pins `@tailwindcss/vite`'s Vite to `^6.4.3` through `overrides`. Without it npm
> installs a second Vite major alongside Astro's and `astro check` reports a plugin type mismatch.

## Source material

The pathway is derived from the documents below. **They are not committed** — `.gitignore` excludes
`*.pdf`, `*.docx` and `*.pptx`, because they are third-party teaching material distributed to
learners separately. Drop them in the repository root to work with them locally.

- `MCLB1` … `MCLB9` — XiA Educathon blocks (Fyrstain), Grant Agreement 101187650
- `Seminaire SSA V0.2.pdf` — "Standardise to transform", 12 December 2025
- `ev_20151123_co03_en.pdf` — eHealth Network, Refined eHealth EIF, 23 November 2015
- `Evaluation_Interoperabilite_Sante_IA_Obligatoire_Groupes_v2.docx` — the assessed capstone

The **Resources** page lists each document by name and links it to the module it feeds, so learners
know what to ask for even though the files are not in the repository.

## Deployment (Netlify)

`netlify.toml` is committed and needs no dashboard configuration:

- build `npm run build`, publish `dist/`, Node 22
- long-lived immutable caching for `/_astro/*` and `/fonts/*`
- baseline security headers (`nosniff`, `DENY` framing, referrer and permissions policy)

Astro reads the canonical origin from `process.env.URL`, which Netlify sets to the production site
address; deploy previews and branch deploys get `DEPLOY_PRIME_URL` instead. That means canonical
URLs, `hreflang` alternates and the sitemap are correct on every context without editing the config.
The fallback for local builds is `https://lhde.netlify.app` — change it in `astro.config.mjs` once
the real domain is known.

Connecting the repository in the Netlify UI (Add new site → Import an existing project) is the only
manual step.
