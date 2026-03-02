# nevmara.github.io

[![Language: TR](https://img.shields.io/badge/Language-TR-red)](README.md) [![Language: EN](https://img.shields.io/badge/Language-EN-blue)](README_en.md)

Static single-page developer website for Nevmara, with bilingual content (TR/EN).

## Language

- Turkish README: `README.md`

## Purpose

This repository hosts the official web address that presents developer identity, published apps, and contact channels in a minimal structure.

## Highlights

- Static architecture with direct publishing from `index.html`
- Turkish / English language switch
- Light / Dark theme support
- Privacy content from `PRIVACY_tr.md` and `PRIVACY_en.md`
- SEO setup: Open Graph, Twitter, JSON-LD schema, `sitemap.xml`, `robots.txt`

## Project Structure

```text
.
├─ index.html
├─ sitemap.xml
├─ robots.txt
├─ app-ads.txt
├─ google45810971e78d020d.html
├─ PRIVACY_tr.md
├─ PRIVACY_en.md
├─ images/
│  ├─ apple-touch-icon.png
│  ├─ og-image.jpg
│  ├─ vakitler.png
│  ├─ falling.png
│  ├─ great.png
│  └─ logo.png
└─ logo.svg
```

## Run Locally

No build step is required. Serve the directory with a static file server.

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

## Content Update Guide

- Main content/UI: `index.html`
- Privacy texts: `PRIVACY_tr.md`, `PRIVACY_en.md`
- Social preview image: `images/og-image.jpg`
- App card assets: corresponding PNG files under `images/`

## Developer Notes

- External dependencies are loaded from CDN (`tailwindcss`, `marked`).
- Privacy modal fetches markdown file based on selected language.
- Keep asset names in lowercase for consistency.

## License

See `LICENSE` for licensing details.
