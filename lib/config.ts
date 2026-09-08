import fs from "fs";
import path from "path";

const CONFIG_PATH = path.join(process.cwd(), "data", "site-config.json");
const TMP_PATH = path.join(process.cwd(), "tmp", "site-config.json");

export function getConfig() {
  try {
    if (fs.existsSync(TMP_PATH)) {
      return JSON.parse(fs.readFileSync(TMP_PATH, "utf-8"));
    }
  } catch {}
  return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
}

export function saveConfig(data: Record<string, unknown>) {
  const tmpDir = path.join(process.cwd(), "tmp");
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }
  fs.writeFileSync(TMP_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export function getLinks() {
  return getConfig().links;
}

export function getTheme() {
  return getConfig().theme;
}

export function getHero() {
  return getConfig().hero;
}

export function getLauncher() {
  return getConfig().launcher;
}

export function getProducts() {
  return getConfig().products;
}

export function getBrandStory() {
  return getConfig().brandStory;
}

export function getCta() {
  return getConfig().cta;
}

export function getFooter() {
  return getConfig().footer;
}
