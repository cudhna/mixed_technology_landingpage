"use server";

import { revalidatePath } from "next/cache";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

export async function saveConfigAction(formData: FormData) {
  const config = buildConfigFromForm(formData);

  const tmpDir = join(process.cwd(), "tmp");
  if (!existsSync(tmpDir)) {
    mkdirSync(tmpDir, { recursive: true });
  }
  writeFileSync(join(tmpDir, "site-config.json"), JSON.stringify(config, null, 2), "utf-8");

  revalidatePath("/");
  revalidatePath("/admin");
}

export async function resetConfigAction() {
  const dataPath = join(process.cwd(), "data", "site-config.json");
  const defaultConfig = JSON.parse(readFileSync(dataPath, "utf-8"));

  const tmpDir = join(process.cwd(), "tmp");
  if (!existsSync(tmpDir)) {
    mkdirSync(tmpDir, { recursive: true });
  }
  writeFileSync(join(tmpDir, "site-config.json"), JSON.stringify(defaultConfig, null, 2), "utf-8");

  revalidatePath("/");
  revalidatePath("/admin");
}

function buildConfigFromForm(formData: FormData) {
  const get = (key: string): string => (formData.get(key) as string) || "";

  return {
    links: {
      facebook: get("links.facebook"),
      zalo: get("links.zalo"),
    },
    theme: {
      brand: {
        "950": get("theme.brand.950"),
        "900": get("theme.brand.900"),
        "800": get("theme.brand.800"),
        "700": get("theme.brand.700"),
        "600": get("theme.brand.600"),
        "500": get("theme.brand.500"),
      },
      gold: {
        "500": get("theme.gold.500"),
        "600": get("theme.gold.600"),
        "700": get("theme.gold.700"),
      },
      background: get("theme.background"),
      surface: get("theme.surface"),
      text: get("theme.text"),
      textMuted: get("theme.textMuted"),
      border: get("theme.border"),
    },
    hero: {
      headline: get("hero.headline"),
      subheadline: get("hero.subheadline"),
      image: get("hero.image"),
      ctaFacebook: get("hero.ctaFacebook"),
      ctaZalo: get("hero.ctaZalo"),
    },
    launcher: {
      title: get("launcher.title"),
      description: get("launcher.description"),
      image: get("launcher.image"),
      features: [
        { icon: "🔒", text: get("launcher.feature0") || "100% No-Root" },
        { icon: "📱", text: get("launcher.feature1") || "Có sẵn trên Google Play" },
        { icon: "⭐", text: get("launcher.feature2") || "Premium theo tài khoản Google" },
        { icon: "👥", text: get("launcher.feature3") || "Cộng đồng đông đảo" },
      ],
      cta: get("launcher.cta"),
    },
    products: [
      { id: 1, name: get("product1.name") || "Z Flip 5 x BlackBerry", desc: get("product1.desc") || "", image: get("product1.image") || "/images/product-1.jpg", alt: get("product1.alt") || "" },
      { id: 2, name: get("product2.name") || "Z Flip 5 mod mỏng", desc: get("product2.desc") || "", image: get("product2.image") || "/images/product-2.jpg", alt: get("product2.alt") || "" },
      { id: 3, name: get("product3.name") || "Z Fold 2 CNC", desc: get("product3.desc") || "", image: get("product3.image") || "/images/product-3.jpg", alt: get("product3.alt") || "" },
      { id: 4, name: get("product4.name") || "Z Fold 1 mod gaming", desc: get("product4.desc") || "", image: get("product4.image") || "/images/product-4.jpg", alt: get("product4.alt") || "" },
      { id: 5, name: get("product5.name") || "iPhone SE 3 độ", desc: get("product5.desc") || "", image: get("product5.image") || "/images/product-5.jpg", alt: get("product5.alt") || "" },
      { id: 6, name: get("product6.name") || "Oppo Find N2", desc: get("product6.desc") || "", image: get("product6.image") || "/images/product-6.jpg", alt: get("product6.alt") || "" },
    ],
    brandStory: {
      title: get("brandStory.title"),
      description: get("brandStory.description"),
      image: get("brandStory.image"),
      stats: [
        { value: get("brandStory.stat1.value") || "6+", label: get("brandStory.stat1.label") || "Năm kinh nghiệm" },
        { value: get("brandStory.stat2.value") || "50+", label: get("brandStory.stat2.label") || "Dự án hoàn thành" },
        { value: get("brandStory.stat3.value") || "2k+", label: get("brandStory.stat3.label") || "Khách hàng tin tưởng" },
      ],
    },
    cta: {
      title: get("cta.title"),
      description: get("cta.description"),
      ctaFacebook: get("cta.ctaFacebook"),
      ctaZalo: get("cta.ctaZalo"),
    },
    footer: {
      copyright: get("footer.copyright"),
    },
  };
}