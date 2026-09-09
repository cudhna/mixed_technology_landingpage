import fs from "fs";
import path from "path";
import stripJsonComments from "strip-json-comments"; // Dùng thư viện này để xóa comment khi đọc

const CONFIG_PATH = path.join(process.cwd(), "data", "site-config.json");
const TMP_PATH = path.join(process.cwd(), "tmp", "site-config.json");

export function getConfig() {
  try {
    if (!fs.existsSync(CONFIG_PATH)) return {};
    
    const fileContent = fs.readFileSync(CONFIG_PATH, "utf-8");
    // Xóa comment trước rồi mới Parse sang Object thuần túy
    return JSON.parse(stripJsonComments(fileContent)); 
  } catch (error) {
    console.error("Lỗi đọc file config:", error);
    return {};
  }
}

export function saveConfig(data: Record<string, unknown>) {
  const tmpDir = path.join(process.cwd(), "tmp");
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir, { recursive: true });
  }
  // Lưu ý: Khi lưu file bằng JSON.stringify, các comment cũ trong file TMP sẽ bị mất
  fs.writeFileSync(TMP_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export function getLinks() {
  return getConfig()?.links || [];
}

export function getTheme() {
  return getConfig()?.theme || {};
}

export function getHero() {
  return getConfig()?.hero || {};
}

export function getLauncher() {
  return getConfig()?.launcher || {};
}

export function getProducts() {
  return getConfig()?.products || [];
}

export function getBrandStory() {
  return getConfig()?.brandStory || {};
}

export function getCta() {
  return getConfig()?.cta || {};
}

export function getFooter() {
  return getConfig()?.footer || {};
}
