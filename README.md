# Mixed Technology — Landing Page

Landing page tĩnh cho **Mixed Technology** — giới thiệu sản phẩm 9flip Launcher & dòng máy độ/mod thủ công.

## Công nghệ

- Next.js 15 (App Router) + TypeScript + Tailwind CSS v3
- Static export (`output: "export"`) — deploy được trên GitHub Pages, Vercel, Netlify
- Framer Motion cho hiệu ứng scroll-reveal nhẹ nhàng
- Lucide React cho icon

## Cấu trúc project

```
mixed_technology_landingpage/
├── app/
│   ├── layout.tsx          # Root layout (SEO, metadata, font)
│   ├── page.tsx            # Trang chủ — ghép tất cả sections
│   └── globals.css         # Tailwind base + custom styles
├── components/
│   ├── header.tsx          # Header cố định (sticky + mobile menu)
│   ├── hero.tsx            # Hero section với ảnh banner
│   ├── launcher-section.tsx # Section 9flip Launcher
│   ├── product-grid.tsx    # Grid 6 sản phẩm độ máy
│   ├── brand-story.tsx     # Section câu chuyện thương hiệu
│   ├── cta-section.tsx     # CTA cuối trang
│   └── footer.tsx          # Footer
├── components/             # (sẽ dùng lại nếu cần)
├── lib/
│   ├── constants.ts        # LINKS (facebook, zalo)
│   └── utils.ts            # cn() helper cho classNames
├── public/
│   ├── images/             # Ảnh sản phẩm, hero, story
│   │   ├── hero.svg
│   │   ├── launcher-mockup.svg
│   │   ├── product-1.svg → product-6.svg
│   │   └── story.svg
│   └── favicon/
│       └── favicon.svg
├── next.config.js          # Static export config
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

### 3. Build static
```bash
npm run build
```
Output sẽ ở thư mục `out/` — có thể deploy lên GitHub Pages, Vercel, Netlify.

## Thay đổi nội dung

### Link Fanpage / Zalo
Chỉnh trong `lib/constants.ts`:
```ts
export const LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61590708082215",
  zalo: "https://zalo.me/...",
} as const;
```

### Ảnh sản phẩm
Thay thế các file SVG placeholder trong `public/images/` bằng ảnh thật:
- `hero.jpg` — ảnh hero chính (Z Flip x BlackBerry)
- `launcher-mockup.jpg` — mockup app 9flip Launcher
- `product-1.jpg` → `product-6.jpg` — ảnh 6 sản phẩm
- `story.jpg` — ảnh xưởng/quá trình làm việc

> **Lưu ý:** Đổi tên file trong code tương ứng, dùng định dạng `.jpg`, `.png`, `.webp` để tối ưu hơn.

### Text content
Chỉnh trực tiếp trong từng component tại `components/`.

## Triển khai (Deploy)

1. Push code lên GitHub
2. Vercel: Kết nối repo → tự động deploy
3. Netlify: Kết nối repo → tự động deploy
4. GitHub Pages: Dùng `output: "export"` → push folder `out/` hoặc dùng GitHub Actions

## Ghi chú

- Đây là khung cơ bản (skeleton) — phong cách luxury minimal sẽ được Antigravity tinh chỉnh sau
- Ảnh placeholder là SVG đơn giản — thay bằng ảnh thật khi có
- Link Facebook/Zalo là placeholder — thay bằng link thật
```