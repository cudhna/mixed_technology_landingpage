# Mixed Technology — Landing Page

Landing page cho **Mixed Technology** — giới thiệu sản phẩm 9flip Launcher & dòng máy độ/mod thủ công.

## Công nghệ

- Next.js 15 (App Router) + TypeScript + Tailwind CSS v3
- Server Actions cho admin panel (không cần backend riêng)
- JSON config-driven — mọi nội dung đều chỉnh trong `data/site-config.json`
- Framer Motion cho hiệu ứng scroll-reveal nhẹ nhàng
- Deploy trên Vercel (miễn phí)

## Cấu trúc project

```
mixed_technology_landingpage/
├── app/
│   ├── layout.tsx          # Root layout (theme CSS variables từ config)
│   ├── page.tsx            # Trang chủ — đọc config và ghép các section
│   ├── globals.css         # Tailwind + CSS custom properties cho theme
│   ├── admin/
│   │   ├── page.tsx        # Admin Panel (form editor)
│   │   └── actions.ts      # Server Actions lưu config
│   └── icon.jpg            # Favicon
├── components/
│   ├── header.tsx          # Header sticky (client component)
│   ├── hero.tsx            # Hero section (server component)
│   ├── launcher-section.tsx # 9flip Launcher (server component)
│   ├── product-grid.tsx    # Grid 6 sản phẩm (server component)
│   ├── brand-story.tsx     # Câu chuyện thương hiệu (server component)
│   ├── cta-section.tsx     # CTA cuối trang (server component)
│   └── footer.tsx          # Footer (server component)
├── data/
│   └── site-config.json    # Single source of truth cho toàn bộ nội dung
├── lib/
│   ├── config.ts           # Hàm đọc/ghi config
│   ├── constants.ts        # LINKS (facebook, zalo)
│   └── utils.ts            # cn() helper
├── public/
│   ├── images/             # Ảnh sản phẩm, hero, story (thêm .jpg)
│   └── favicon/
├── tmp/                    # Config runtime (không commit, lưu trên server)
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Brand colors + fonts
├── tsconfig.json           # TypeScript + Next.js paths
├── postcss.config.js       # PostCSS + Tailwind
└── package.json
```

## Cách dùng

### 1. Cài dependencies
```bash
npm install
```

### 2. Chạy dev server
```bash
npm run dev
```
Truy cập `http://localhost:3000` — landing page
Truy cập `http://localhost:3000/admin` — admin panel

### 3. Build
```bash
npm run build
```

## Tuỳ chỉnh nội dung

### Cách 1 — Admin Panel (không cần code)
Vào `http://localhost:3000/admin` — chỉnh sửa form, nhấn "Lưu thay đổi".

### Cách 2 — Chỉnh file JSON
Chỉnh trực tiếp `data/site-config.json`. Các field:

- `links.facebook` / `links.zalo` — link Fanpage & Zalo
- `theme.*` — màu chủ đề (brand, gold, background, text...)
- `hero.*` — nội dung hero section
- `launcher.*` — nội dung 9flip Launcher
- `products[6]` — danh sách sản phẩm (name, desc, image, alt)
- `brandStory.*` — câu chuyện thương hiệu
- `cta.*` — CTA section
- `footer.copyright` — footer text

### Cách 3 — Server Actions tự lưu
Khi nhấn "Lưu" trên admin panel, config được ghi vào `/tmp/site-config.json` trên server và trang tự reload.

## Deploy trên Vercel

1. Đã link GitHub repo: `cudhna/mixed_technology_landingpage`
2. Vercel auto-deploy mỗi lần push
3. URL production: `https://mixedtechnologylandingpage.vercel.app`

Vercel dashboard: `https://vercel.com/ducanhta205-1567s-projects/mixed_technology_landingpage`

## Ghi chú

- **Admin Panel** hoạt động trên server — cần Vercel/Netlify hosting (có server runtime)
- Khi local dev, config đọc từ `data/site-config.json`, sau khi lưu sẽ ghi vào `tmp/site-config.json`
- Trên Vercel, `/tmp` là writable — config lưu runtime cho đến khi cold restart
- Để theme color thay đổi trên trang chính, layout.tsx đọc theme từ config và inject CSS variables
- Không cần `output: "export"` vì dùng Server Actions
```