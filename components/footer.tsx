import { getLinks, getFooter } from "@/lib/config";

export default function Footer() {
  const footer = getFooter();
  const links = getLinks();

  return (
    <footer className="border-t border-stone-800 bg-[#0a0a0a] py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center">
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500">
              MT. STUDIO // {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-300 transition-colors">
              FACEBOOK
            </a>
            <a href={links.zalo} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono uppercase tracking-widest text-stone-500 hover:text-stone-300 transition-colors">
              ZALO
            </a>
          </div>

          <div>
            <p className="text-[10px] font-mono text-stone-600 uppercase tracking-widest">
              {footer.copyright || "ALL RIGHTS RESERVED."}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
