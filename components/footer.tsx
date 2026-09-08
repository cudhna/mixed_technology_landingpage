import { LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-brand-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Mixed<span className="text-gold-500">Technology</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 transition-colors hover:text-white"
            >
              Facebook
            </a>
            <a
              href={LINKS.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone-400 transition-colors hover:text-white"
            >
              Zalo
            </a>
          </div>

          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Mixed Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
