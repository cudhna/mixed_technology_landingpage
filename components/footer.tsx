"use client";

import { useLanguage } from "./language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-stone-800/30">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8 text-center">
        <p className="text-xs text-stone-600">
          &copy; {new Date().getFullYear()} {t.footer.copyright}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}