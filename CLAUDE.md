# CLAUDE.md: v3 portfolio site

Geoff Jamieson's portfolio, built with Astro and Tailwind. It replaces v2 (`~/Code/v2-gj-website`) at geoffjamieson.com and deploys on Vercel from its own repo. See `AGENTS.md` for Astro's own notes (dev server in background mode, docs links).

## How we work

- **Ask before adding tooling.** Astro and Tailwind are approved. Any other package, integration, CLI tool or service gets named, explained and approved by Geoff first.
- **Design is reviewed in the browser**, not in Figma. Geoff picks references; Claude builds; Geoff reacts. No wireframes, style guides or final screens in Figma.

## Where things live

- `src/content/case-studies/*.md`: the four case studies (frontmatter holds the header; `order` sets the Work list order). They follow `docs/case-study-outline.md`.
- `src/pages/index.astro` and `src/pages/about.astro`: home and About copy, written directly in the page.
- `src/data/site.ts`: email and profile links.
- Fonts: Lucida Grande throughout (body 15px, headings bold), a system font on Mac (Lucida Sans Unicode on Windows), so nothing is self-hosted. Phones don't have it and show their own system font. Set by `--font-body` and `--font-head` in `src/styles/global.css`.
- `src/components/logo/`: the gj logo (Kilo's g and j, softly inflated, springs into a stacked layout on hover) and the button that lets visitors change its colour. `src/components/ThemeToggle.astro` is the light/dark toggle; colours are tokens at the top of `src/styles/global.css`. Both choices are saved in localStorage and applied before paint by the inline script in `Base.astro`.
- `src/assets/`: images (optimised by Astro). `public/videos/<slug>/`: videos, served as is.
- No resume on the site (Geoff's call, 2026-11-05). The case studies and About cover it, and LinkedIn has the timeline.
- This repo is the home of the portfolio copy and assets. They came from `~/Documents/career/portfolio/` and `case-study-assets/`, and the career project should read portfolio info from here.
- Facts in the copy come from `~/Documents/career/master_context.md`. Don't add claims that aren't backed by it; ask instead.

## Writing style for site copy

- No em dashes (—) and no arrow characters (→).
- Avoid colons and semicolons that just introduce a list or explanation. Rewrite with a conjunction, a period, or a restructured sentence. Bolded labels like `**Structure first.**` are fine.
- First person, plain and specific. No made-up or estimated metrics.
