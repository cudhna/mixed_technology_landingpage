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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-4 md:px-8">
        <a href="/" className="flex flex-col z-50">
          <span className="text-[11px] font-medium tracking-[0.1em] text-stone-100">
            MIXED TECHNOLOGY
          </span>
        </a>

        <nav className="hidden items-center gap-12 md:flex">
          <a href="#work" className="text-[11px] uppercase tracking-widest text-stone-400 transition-colors hover:text-stone-50">Dự án</a>
          <a href="#launcher" className="text-[11px] uppercase tracking-widest text-stone-400 transition-colors hover:text-stone-50">9flip</a>
          <a href="#story" className="text-[11px] uppercase tracking-widest text-stone-400 transition-colors hover:text-stone-50">Giới thiệu</a>
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-widest text-stone-400 transition-colors hover:text-stone-50">Liên hệ</a>
        </nav>

        <div className="flex items-center md:hidden z-50">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-end text-stone-100 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0a0a0a] px-8 md:hidden"
          >
            <div className="flex flex-col space-y-10 text-center w-full">
              <a href="#work" onClick={() => setMobileOpen(false)} className="text-[11px] tracking-widest uppercase text-stone-300 hover:text-stone-50">DỰ ÁN</a>
              <a href="#launcher" onClick={() => setMobileOpen(false)} className="text-[11px] tracking-widest uppercase text-stone-300 hover:text-stone-50">9FLIP</a>
              <a href="#story" onClick={() => setMobileOpen(false)} className="text-[11px] tracking-widest uppercase text-stone-300 hover:text-stone-50">GIỚI THIỆU</a>
              <div className="pt-8 w-full flex justify-center">
                <a href={links.facebook} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="text-[11px] tracking-widest uppercase text-stone-300 hover:text-stone-50 pb-1 w-max">LIÊN HỆ</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
