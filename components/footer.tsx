import { getLinks, getFooter } from "@/lib/config";

export default function Footer() {
  const footer = getFooter();
  const links = getLinks();

  return (
    <footer className="border-t border-stone-200 py-12" style={{ backgroundColor: "var(--brand-950, #211a16)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Mixed<span style={{ color: "var(--gold-500, #d99f18)" }}>Technology</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 transition-colors hover:text-white">
              Facebook
            </a>
            <a href={links.zalo} target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 transition-colors hover:text-white">
              Zalo
            </a>
          </div>

          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
