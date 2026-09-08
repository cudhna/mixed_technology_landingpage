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
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 border-b border-transparent",
        scrolled
          ? "bg-[#0a0a0a]/50 backdrop-blur-md border-stone-800/50"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex flex-col">
          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-300">
            MIXED TECHNOLOGY
          </span>
          <span className="text-[9px] uppercase font-mono tracking-widest text-stone-500">
            / 2026
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {["WORK", "9FLIP", "ABOUT", "CONTACT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-mono tracking-widest text-stone-400 hover:text-stone-50 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-stone-400 transition-colors hover:text-stone-50"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center space-y-10 p-8 text-center">
              {["WORK", "9FLIP", "ABOUT", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-mono tracking-[0.3em] text-stone-300 hover:text-stone-50 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
