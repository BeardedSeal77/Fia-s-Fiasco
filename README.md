# Fia's Fiasco

Pet portrait photography one-pager for Sofia "Fia" Fahle, built with Next.js (static export) and deployed to GitHub Pages. Bilingual: English at `/`, German at `/de/`.

## Editing content

All copy lives in `content/en/` and `content/de/` as YAML frontmatter (parsed by gray-matter) with optional markdown bodies rendered via remark. Both locale directories contain the same filenames — keep them in sync when editing.

- **Contact details** — `site.md` (brand name, email, phone, Instagram, address, contact blurb).
- **UI labels** — `ui.md` (nav links, button text, section titles, language-switch label).
- **About section** — `about.md` (stats, highlights and bio text).
- **Gallery / hero carousel** — `gallery.md` (list of `{ src, alt, category, caption }` items displayed in the hero carousel).
- **Sessions & pricing** — `packages/01-mini.md`, `02-signature.md`, `03-adventure.md`.
- **How it works** — `process.md`.
- **Testimonials** — `testimonials.md`.
- **FAQ** — `faq.md`.

The German page is served at `/de/`.

## Adding photos

1. Drop the JPG into `public/media/`.
2. Add an entry to `gallery.md` in both `content/en/` and `content/de/` with the `/media/filename.jpg` src, alt text, category and caption.
3. Photos appear in the hero carousel automatically — no code changes needed. A dedicated gallery grid section can be re-added once the portfolio has enough images.

## Placeholders to update

- Prices in `packages/` are starting-point estimates.
- Testimonials in `testimonials.md` are sample quotes — replace with real client feedback.
- The Instagram handle (`@fias.fiasco`) is a placeholder — update `site.md` once the real account is created.

## Development

```bash
npm run dev      # local dev server
npm run build    # production static export
```

## Deployment

Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically.
