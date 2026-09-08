"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header({ links }: { links: { facebook: string; zalo: string } }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-stone-50/90 backdrop-blur-xl border-b border-stone-200/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight font-display">
            Mixed<span style={{ color: "var(--gold-500, #d99f18)" }}>Technology</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#launcher" className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900">
            9flip Launcher
          </a>
          <a href="#products" className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900">
            Bộ sưu tập
          </a>
          <a href="#story" className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900">
            Câu chuyện
          </a>
        </nav>

        <div className="relative z-50 flex items-center gap-3">
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-stone-950 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-gold-600 hover:-translate-y-0.5 md:inline-flex"
          >
            Liên hệ Fanpage
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center text-stone-900 transition-colors hover:text-gold-600 md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-white/90 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center space-y-8 p-8 text-center">
              <a href="#launcher" onClick={() => setMobileOpen(false)} className="text-xl font-display font-medium text-stone-900 transition-colors hover:text-gold-600">
                9flip Launcher
              </a>
              <a href="#products" onClick={() => setMobileOpen(false)} className="text-xl font-display font-medium text-stone-900 transition-colors hover:text-gold-600">
                Bộ sưu tập
              </a>
              <a href="#story" onClick={() => setMobileOpen(false)} className="text-xl font-display font-medium text-stone-900 transition-colors hover:text-gold-600">
                Câu chuyện
              </a>
              <div className="pt-8">
                <a
                  href={links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary"
                >
                  Liên hệ Fanpage
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
