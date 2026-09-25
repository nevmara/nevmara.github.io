# nevmara.github.io

[![Language: TR](https://img.shields.io/badge/Language-TR-red)](README.md) [![Language: EN](https://img.shields.io/badge/Language-EN-blue)](README_en.md)

Static single-page developer website for Nevmara, with bilingual content (TR/EN).

## Language

- Turkish README: `README.md`

## Purpose

This repository hosts the official web address that presents developer identity, published apps, and contact channels in a minimal structure.

## Highlights

- Static architecture with direct publishing from `index.html`
- Turkish / English language switch (via UI or `?lang=en` URL parameter)
- Light / Dark theme support
- PWA & Offline support: Service Worker (`sw.js`) and `manifest.webmanifest`
- Privacy content from `PRIVACY_tr.md` and `PRIVACY_en.md`
- SEO setup: Open Graph, Twitter Cards, JSON-LD schema, `sitemap.xml`, `robots.txt`, `favicon.ico`

## Project Structure

```text
.
├─ .gitignore
├─ 404.html
├─ index.html
├─ favicon.ico
├─ logo.svg
├─ manifest.webmanifest
├─ sw.js
├─ sitemap.xml
├─ robots.txt
├─ app-ads.txt
├─ google45810971e78d020d.html
├─ package.json
├─ package-lock.json
├─ tailwind.config.cjs
├─ PRIVACY_tr.md
├─ PRIVACY_en.md
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  └─ js/
│     └─ marked.min.js
├─ images/
│  ├─ apple-touch-icon.png
│  ├─ icon-192.png
│  ├─ icon-512.png
│  ├─ og-image.webp
│  ├─ vakitler.webp
│  ├─ falling.webp
│  ├─ great.webp
│  └─ sudoku.webp
├─ scripts/
│  └─ convert-images.mjs
└─ src/
   └─ input.css
```

## Run Locally

There is a build step. Install dependencies and generate production assets first.

```bash
npm install
npm run build
```

Example (Python):

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## Deployment

Published via GitHub Pages as a static site.

- Branch: `main`
- Root directory: `/` (repo root)

## Direct Privacy Link

To open the page with the "App Privacy Policies" modal already visible, use one of these URLs:

- `https://nevmara.github.io/#privacy`
- `https://nevmara.github.io/?open=privacy`
- `https://nevmara.github.io/?lang=en#privacy` (Opens directly in English)

## Content Update Guide

- Main content/UI: `index.html`
- Privacy texts: `PRIVACY_tr.md`, `PRIVACY_en.md`
- Social preview image: `images/og-image.webp`
- App card assets: corresponding WebP files under `images/`
- PWA icons: `images/icon-192.png`, `images/icon-512.png`

## Developer Notes

- Tailwind CSS is built locally during production; `marked.min.js` is bundled locally for offline PWA support.
- Privacy modal fetches markdown file based on selected language.
- Keep asset names in lowercase for consistency.

## License

See `LICENSE` for licensing details.
