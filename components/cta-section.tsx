"use client";

import { motion } from "framer-motion";

export default function CtaSection({ data, links }: { data: any; links: any }) {
  return (
    <section id="cta" className="relative py-24 md:py-40 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Editorial Section Marker */}
        <div className="flex items-center gap-6 mb-16 md:mb-32">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap">04 / CONTACT</span>
          <div className="h-[1px] bg-stone-800 flex-grow" />
        </div>

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
          >
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-light text-stone-50 leading-[0.9] tracking-tight uppercase mb-8">
              {data.title}
            </h2>
            <p className="text-sm md:text-base font-light text-stone-400 leading-relaxed max-w-2xl mx-auto mb-16 text-balance">
              {data.description}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="group flex flex-col w-max cursor-pointer">
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-50 transition-colors duration-300 mb-2 flex items-center gap-2">
                  {data.ctaFacebook}
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
                </span>
                <span className="h-[1px] w-full bg-stone-700 group-hover:bg-stone-50 transition-colors duration-300" />
              </a>

              <a href={links.zalo} target="_blank" rel="noopener noreferrer" className="group flex flex-col w-max cursor-pointer">
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-50 transition-colors duration-300 mb-2 flex items-center gap-2">
                  {data.ctaZalo}
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
                </span>
                <span className="h-[1px] w-full bg-stone-700 group-hover:bg-stone-50 transition-colors duration-300" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
