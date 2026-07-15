# VATEngine Landing Page

Landing page cho **VATEngine** — phần mềm trích xuất hóa đơn điện tử miễn phí của Công ty TNHH Tour Đảo.

🌐 **Live:** [app.tourdao.vn](https://app.tourdao.vn)  
🚀 **App:** [vatengine.tourdao.vn](https://vatengine.tourdao.vn)

## Tech Stack

- **Framework:** [Astro](https://astro.build) (Static Site Generator)
- **Styling:** Vanilla CSS với design tokens
- **Hosting:** Cloudflare Pages (Git Integration)
- **Domain:** `app.tourdao.vn` (Cloudflare DNS)

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # Build to dist/
npm run preview   # Preview production build
```

## Deploy

Auto-deploy via **Cloudflare Pages Git Integration**:
- Branch: `main`
- Build command: `npm run build`
- Build output: `dist/`
- Custom domain: `app.tourdao.vn`

## Cấu trúc

```
src/
├── pages/index.astro          # Trang chính
├── layouts/Layout.astro       # Base HTML layout
├── components/
│   ├── Header.astro           # Nav + Logo
│   ├── Hero.astro             # Hero section
│   ├── Features.astro         # 6 tính năng
│   ├── HowItWorks.astro       # 4 bước sử dụng
│   ├── Security.astro         # Cam kết bảo mật
│   ├── About.astro            # Về Tour Đảo
│   ├── CTA.astro              # Call to action
│   └── Footer.astro           # Footer
└── styles/global.css          # Design tokens
```

## License

Dự án cộng đồng — © 2026 Công ty TNHH Tour Đảo
