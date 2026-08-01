# Fia's Fiasco

Pet portrait photography one-pager for Sofia "Fia" Fahle, built with Next.js (static export) and deployed to GitHub Pages.

## Editing content

All copy lives in `content/*.md` as YAML frontmatter (parsed by gray-matter) with optional markdown bodies rendered via remark.

- **Contact details** — `content/site.md` (brand name, email, phone, Instagram, contact blurb).
- **About section** — `content/about.md` (qualities, stats, highlights and bio text).
- **Gallery / hero carousel** — `content/gallery.md` (list of `{ src, alt, category, caption }` items displayed in the hero carousel).
- **Sessions & pricing** — `content/packages/01-mini.md`, `02-signature.md`, `03-adventure.md`.
- **How it works** — `content/process.md`.
- **Testimonials** — `content/testimonials.md`.
- **FAQ** — `content/faq.md`.

## Adding photos

1. Drop the JPG into `public/media/`.
2. Add an entry to `content/gallery.md` with the `/media/filename.jpg` src, alt text, category and caption.
3. Photos appear in the hero carousel automatically — no code changes needed. A dedicated gallery grid section can be re-added once the portfolio has enough images.

## Placeholders to update

- Prices in `content/packages/` are starting-point estimates.
- Testimonials in `content/testimonials.md` are sample quotes — replace with real client feedback.
- The Instagram handle (`@fias.fiasco`) is a placeholder — update `content/site.md` once the real account is created.

## Development

```bash
npm run dev      # local dev server
npm run build    # production static export
```

## Deployment

Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically.
