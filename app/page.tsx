import { getConfig } from "@/lib/config";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LauncherSection from "@/components/launcher-section";
import ProductGrid from "@/components/product-grid";
import BrandStory from "@/components/brand-story";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default async function Home() {
  const config = getConfig();

  return (
    <main>
      <Header links={config.links} />
      <Hero data={config.hero} links={config.links} />
      <LauncherSection data={config.launcher} links={config.links} />
      <ProductGrid products={config.products} />
      <BrandStory data={config.brandStory} />
      <CtaSection data={config.cta} links={config.links} />
      <Footer />
    </main>
  );
}
