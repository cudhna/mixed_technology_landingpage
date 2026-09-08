import { LINKS } from "@/lib/constants";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LauncherSection from "@/components/launcher-section";
import ProductGrid from "@/components/product-grid";
import BrandStory from "@/components/brand-story";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <LauncherSection />
      <ProductGrid />
      <BrandStory />
      <CtaSection />
      <Footer />
    </main>
  );
}
