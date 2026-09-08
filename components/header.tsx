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

        <div className="flex items-center gap-3">
          <a
            href={links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-stone-950 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-stone-900 md:inline-flex"
          >
            Liên hệ Fanpage
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-100 md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-b border-stone-200/60 md:hidden"
          >
            <div className="space-y-1 px-4 py-4 bg-stone-50">
              <a href="#launcher" onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100">
                9flip Launcher
              </a>
              <a href="#products" onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100">
                Bộ sưu tập
              </a>
              <a href="#story" onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-stone-600 hover:bg-stone-100">
                Câu chuyện
              </a>
              <a
                href={links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block rounded-full bg-stone-950 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white"
              >
                Liên hệ Fanpage
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
