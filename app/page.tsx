import { getConfig } from "@/lib/config";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LauncherSection from "@/components/launcher-section";
import ProductGrid from "@/components/product-grid";
import BrandStory from "@/components/brand-story";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import fs from "fs";
import path from "path";

export default async function Home() {
  const viConfig = await getConfig();
  let enConfig = null;
  try {
    const enPath = path.join(process.cwd(), "data", "en.json");
    enConfig = JSON.parse(fs.readFileSync(enPath, "utf-8"));
  } catch (e) {
    enConfig = viConfig; // Fallback if missing
  }

  return (
    <main>
      <LanguageProvider vi={viConfig} en={enConfig}>
        <Header />
        <Hero />
        <LauncherSection />
        <ProductGrid />
        <BrandStory />
        <CtaSection />
        <Footer />
      </LanguageProvider>
    </main>
  );
}