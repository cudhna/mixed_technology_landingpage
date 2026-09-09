"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "vi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: any;
  images: any;
  links: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, vi, en }: { children: React.ReactNode, vi: any, en: any }) {
  const [lang, setLangState] = useState<Language>("vi");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("mixed_lang") as Language;
    if (stored === "en" || stored === "vi") {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("mixed_lang", newLang);
  };

  const t = lang === "en" ? en : vi;
  const images = vi.images;
  const links = vi.links;
  const layout = vi.layout || {};

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, images, links }}>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        :root {
          --nav-height: ${layout.navHeight || '72px'};
          --hero-height: ${layout.heroHeight || '100svh'};
          --base-font-size: ${layout.baseFontSize || '16px'};
          --custom-font-family: ${layout.fontFamily || 'var(--font-geist-sans)'};
          --product-aspect-ratio: ${layout.productAspectRatio || '4/3'};
        }
        body {
          font-family: var(--custom-font-family), sans-serif;
          font-size: var(--base-font-size);
        }
      `}} />
      <div style={{ opacity: mounted ? 1 : 0.99 }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}