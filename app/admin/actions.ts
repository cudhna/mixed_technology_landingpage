"use server";

import { revalidatePath } from "next/cache";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { getConfig } from "../../lib/config";

export async function saveConfigAction(formData: FormData) {
  const get = (key: string): string => (formData.get(key) as string) || "";
  
  // Load current config to preserve structure and missing fields
  const currentConfig = await getConfig();

  // Update layout and theme
  if (!currentConfig.layout) currentConfig.layout = {};
  currentConfig.layout.navHeight = get("layout.navHeight") || "72px";
  currentConfig.layout.heroHeight = get("layout.heroHeight") || "100vh";
  currentConfig.layout.baseFontSize = get("layout.baseFontSize") || "16px";
  currentConfig.layout.fontFamily = get("layout.fontFamily") || "var(--font-geist-sans)";
  currentConfig.layout.productAspectRatio = get("layout.productAspectRatio") || "4/3";

  currentConfig.links = currentConfig.links || {};
  currentConfig.links.facebook = get("links.facebook") || currentConfig.links.facebook;
  currentConfig.links.zalo = get("links.zalo") || currentConfig.links.zalo;

  if (currentConfig.theme && currentConfig.theme.brand) {
    currentConfig.theme.brand["950"] = get("theme.brand.950") || currentConfig.theme.brand["950"];
    currentConfig.theme.background = get("theme.background") || currentConfig.theme.background;
  }

  currentConfig.hero = currentConfig.hero || {};
  currentConfig.hero.headline = get("hero.headline") || currentConfig.hero.headline;
  currentConfig.hero.subheadline = get("hero.subheadline") || currentConfig.hero.subheadline;
  currentConfig.hero.cta = get("hero.cta") || currentConfig.hero.cta;

  currentConfig.launcher = currentConfig.launcher || {};
  currentConfig.launcher.title = get("launcher.title") || currentConfig.launcher.title;
  currentConfig.launcher.description = get("launcher.description") || currentConfig.launcher.description;
  currentConfig.launcher.cta = get("launcher.cta") || currentConfig.launcher.cta;

  // Products
  if (currentConfig.products && currentConfig.products.items) {
    [1, 2, 3, 4, 5, 6].forEach((id, index) => {
      const p = currentConfig.products.items.find((x: any) => x.id === id);
      if (p) {
        p.name = get(`product${id}.name`) || p.name;
        p.desc = get(`product${id}.desc`) || p.desc;
      }
    });
  } else if (Array.isArray(currentConfig.products)) {
    [1, 2, 3, 4, 5, 6].forEach((id, index) => {
      const p = currentConfig.products.find((x: any) => x.id === id);
      if (p) {
        p.name = get(`product${id}.name`) || p.name;
        p.desc = get(`product${id}.desc`) || p.desc;
      }
    });
  }

  currentConfig.brandStory = currentConfig.brandStory || {};
  currentConfig.brandStory.title = get("brandStory.title") || currentConfig.brandStory.title;
  currentConfig.brandStory.description = get("brandStory.description") || currentConfig.brandStory.description;

  currentConfig.cta = currentConfig.cta || {};
  currentConfig.cta.title = get("cta.title") || currentConfig.cta.title;
  currentConfig.cta.description = get("cta.description") || currentConfig.cta.description;

  currentConfig.footer = currentConfig.footer || {};
  currentConfig.footer.copyright = get("footer.copyright") || currentConfig.footer.copyright;

  const tmpDir = join(process.cwd(), "tmp");
  if (!existsSync(tmpDir)) {
    mkdirSync(tmpDir, { recursive: true });
  }
  writeFileSync(join(tmpDir, "site-config.json"), JSON.stringify(currentConfig, null, 2), "utf-8");

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