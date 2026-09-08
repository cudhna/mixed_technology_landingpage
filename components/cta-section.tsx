"use client";

import { motion } from "framer-motion";

export default function CtaSection({ data, links }: { data: any; links: any }) {
  return (
    <section id="cta" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Soft Section Marker */}
        <div className="mb-16 md:mb-24 opacity-60">
          <span className="text-[11px] uppercase tracking-widest text-stone-400">04 / Liên hệ</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl"
          >
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-light text-stone-100 leading-[1.1] tracking-tight mb-8">
              {data.title}
            </h2>
            <p className="text-sm font-light text-stone-400 leading-relaxed max-w-2xl mx-auto mb-16 text-balance">
              {data.description}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="group flex flex-col w-max cursor-pointer">
                <span className="text-[11px] uppercase tracking-widest text-stone-400 group-hover:text-stone-100 transition-colors duration-500 mb-1 flex items-center gap-2">
                  {data.ctaFacebook}
                  <span className="transform transition-transform duration-500 group-hover:translate-x-1">&#8594;</span>
                </span>
              </a>

              <a href={links.zalo} target="_blank" rel="noopener noreferrer" className="group flex flex-col w-max cursor-pointer">
                <span className="text-[11px] uppercase tracking-widest text-stone-400 group-hover:text-stone-100 transition-colors duration-500 mb-1 flex items-center gap-2">
                  {data.ctaZalo}
                  <span className="transform transition-transform duration-500 group-hover:translate-x-1">&#8594;</span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
