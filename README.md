# nevmara.github.io

[![Language: TR](https://img.shields.io/badge/Language-TR-red)](README.md) [![Language: EN](https://img.shields.io/badge/Language-EN-blue)](README_en.md)

Nevmara geliştirici web adresi (developer website) için statik, tek sayfa, iki dilli (TR/EN) vitrin sitesi.

## Dil

- English README: `README_en.md`

## Amaç

Bu repo; geliştirici kimliğini, üretilen uygulamaları ve iletişim kanallarını sade bir yapıda sunan resmi web adresini içerir.

## Öne Çıkanlar

- Statik yapı: `index.html` üzerinden doğrudan yayın
- Dil desteği: Türkçe / İngilizce içerik geçişi (`?lang=en` URL parametresi veya arayüzden)
- Tema desteği: Light / Dark mode
- PWA ve Çevrimdışı desteği: Service Worker (`sw.js`) ve `manifest.webmanifest`
- Gizlilik metinleri: `PRIVACY_tr.md` ve `PRIVACY_en.md`
- SEO altyapısı: Open Graph, Twitter Cards, JSON-LD schema, `sitemap.xml`, `robots.txt`, `favicon.ico`

## Proje Yapısı

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
│  ├─ og-image.jpg
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

## Yerelde Çalıştırma

Build adımı vardır. Önce bağımlılıkları kurun, sonra üretim dosyalarını oluşturun.

```bash
npm install
npm run build
```

Örnek (Python):

```bash
python -m http.server 8080
```

Tarayıcı:

```text
http://localhost:8080
```

## Yayın

Bu repo GitHub Pages ile statik olarak yayınlanır.

- Branch: `main`
- Kök dizin: `/` (repo root)

## Doğrudan Gizlilik Linki

Sayfayı "Uygulama Gizlilik Politikaları" modalı açık başlayacak şekilde açmak için şu URL'lerden birini kullanabilirsiniz:

- `https://nevmara.github.io/#privacy`
- `https://nevmara.github.io/?open=privacy`
- `https://nevmara.github.io/?lang=en#privacy` (İngilizce doğrudan açılış)

## İçerik Güncelleme Rehberi

- Metinler ve UI: `index.html`
- Gizlilik içerikleri: `PRIVACY_tr.md`, `PRIVACY_en.md`
- Sosyal/SEO görseli: `images/og-image.webp`
- Uygulama kart görselleri: `images/` altındaki ilgili WebP dosyaları
- PWA ikonları: `images/icon-192.png`, `images/icon-512.png`

## Geliştirici Notları

- Tailwind CSS üretim sırasında derlenir; `marked.min.js` çevrimdışı PWA desteği için yerel olarak barındırılır.
- Gizlilik modalı dil seçimine göre ilgili markdown dosyasını istemci tarafında çeker.
- Tüm dosya adları küçük harf standardında tutulmalıdır.

## Lisans

Bu depo lisans detayları için `LICENSE` dosyasını kullanır.