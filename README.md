# nevmara.github.io

[![Language: TR](https://img.shields.io/badge/Language-TR-red)](README.md) [![Language: EN](https://img.shields.io/badge/Language-EN-blue)](README_en.md)

Nevmara geliştirici web adresi (developer website) için statik, tek sayfa, iki dilli (TR/EN) vitrin sitesi.

## Dil

- English README: `README_en.md`

## Amaç

Bu repo; geliştirici kimliğini, üretilen uygulamaları ve iletişim kanallarını sade bir yapıda sunan resmi web adresini içerir.

## Öne Çıkanlar

- Statik yapı: `index.html` üzerinden doğrudan yayın
- Dil desteği: Türkçe / İngilizce içerik geçişi
- Tema desteği: Light / Dark mode
- Gizlilik metinleri: `PRIVACY_tr.md` ve `PRIVACY_en.md`
- SEO altyapısı: Open Graph, Twitter, JSON-LD schema, `sitemap.xml`, `robots.txt`

## Proje Yapısı

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

## Yerelde Çalıştırma

Build adımı yoktur. Dosyaları doğrudan servis etmeniz yeterlidir.

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

## İçerik Güncelleme Rehberi

- Metinler ve UI: `index.html`
- Gizlilik içerikleri: `PRIVACY_tr.md`, `PRIVACY_en.md`
- Sosyal/SEO görseli: `images/og-image.jpg`
- Uygulama kart görselleri: `images/` altındaki ilgili PNG dosyaları

## Geliştirici Notları

- Dış bağımlılıklar CDN üzerinden yüklenir (`tailwindcss`, `marked`).
- Gizlilik modalı dil seçimine göre ilgili markdown dosyasını istemci tarafında çeker.
- Tüm dosya adları küçük harf standardında tutulmalıdır.

## Lisans

Bu depo lisans detayları için `LICENSE` dosyasını kullanır.