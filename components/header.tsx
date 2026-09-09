"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "./language-provider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { lang, setLang, t, links } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.projects, href: "#work" },
    { name: t.nav.launcher, href: "#launcher" },
    { name: t.nav.about, href: "#story" },
    { name: t.nav.contact, href: links.facebook }
  ];

  const LangSwitch = () => (
    <div className="flex items-center gap-2 text-xs font-semibold tracking-widest">
      <button 
        onClick={() => setLang("vi")} 
        className={"transition-colors duration-200 "}
      >
        VI
      </button>
      <span className="text-stone-700">/</span>
      <button 
        onClick={() => setLang("en")} 
        className={"transition-colors duration-200 "}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      <header 
        className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 "}
      >
        <div className="mx-auto max-w-[90rem] px-4 md:px-8 flex items-center justify-between">
          
          <a href="#" className="text-sm font-semibold tracking-widest text-stone-100 uppercase">
            Mixed Tech.
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-xs font-semibold tracking-widest text-stone-400 hover:text-stone-100 transition-colors uppercase"
              >
                {item.name}
              </a>
            ))}
            <div className="w-px h-4 bg-stone-800" />
            <LangSwitch />
          </nav>

          <button 
            className="md:hidden text-stone-300"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-16">
              <span className="text-sm font-semibold tracking-widest text-stone-100 uppercase">
                Mixed Tech.
              </span>
              <button 
                className="text-stone-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium tracking-wide text-stone-300 hover:text-white uppercase"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            <div className="mt-12 pt-12 border-t border-stone-800">
              <LangSwitch />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}