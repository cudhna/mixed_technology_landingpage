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

  // Prevent hydration mismatch by keeping it hidden until mounted?
  // Actually, to avoid full page flash, we can just render i on server, 
  // and hydrate with i, then swap to en if needed.
  
  return (
    <LanguageContext.Provider value={{ lang, setLang, t, images, links }}>
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