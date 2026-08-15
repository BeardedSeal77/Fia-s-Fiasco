# Fia's Fiasco

Animal & portrait photography one-pager for Sofia "Fia" Fahle ([@soligrafie](https://www.instagram.com/soligrafie/)), built with Next.js (static export) and deployed to GitHub Pages. Bilingual: English at `/`, German at `/de/`.

## Editing content

All copy lives in `content/en/` and `content/de/` as YAML frontmatter (parsed by gray-matter) with optional markdown bodies rendered via remark. Both locale directories contain the same filenames — keep them in sync when editing.

- **Contact details** — `site.md` (brand name, email, phone, Instagram, address, contact blurb).
- **UI labels** — `ui.md` (nav links, button text, section titles, language-switch label).
- **About section** — `about.md` (stats, highlights and bio text).
- **Sessions & pricing** — `packages/01-mini.md`, `02-signature.md`, `03-adventure.md`.
- **How it works** — `process.md`.
- **Testimonials** — `testimonials.md`.
- **FAQ** — `faq.md`.

The German page is served at `/de/`.

## Adding photos

- **Carousel**: drop images (jpg/png/webp/avif) into `public/media/carousel/` — they appear automatically, sorted by filename. No content edits needed.
- **Hero portrait**: replace the file referenced by `portrait:` in `content/en/site.md` and `content/de/site.md` (currently in `public/media/title/`).

## Placeholders to update

- Prices in `packages/` are starting-point estimates.
- Testimonials in `testimonials.md` are sample quotes (except ED Cullen's) — replace with real client feedback.

## Development

```bash
npm run dev      # local dev server
npm run build    # production static export
```

## Deployment

Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically.
