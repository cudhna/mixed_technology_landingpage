"use client";

import { motion } from "framer-motion";

export default function CtaSection({ data, links }: { data: any, links: { facebook: string, zalo: string } }) {
  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] border-t border-stone-800/30 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 md:px-8 text-center flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-medium text-stone-100 leading-[1.1] tracking-tight mb-6"
        >
          {data.title}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-base text-stone-400 max-w-2xl leading-relaxed mb-12"
        >
          {data.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a 
            href={links.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center px-8 py-4 bg-stone-100 text-[#0a0a0a] font-medium text-sm tracking-wide hover:bg-stone-300 transition-colors duration-300"
          >
            {data.ctaFacebook}
          </a>
          <a 
            href={links.zalo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center px-8 py-4 border border-stone-700 text-stone-200 font-medium text-sm tracking-wide hover:bg-stone-800 transition-colors duration-300"
          >
            {data.ctaZalo}
          </a>
        </motion.div>

      </div>
    </section>
  );
}