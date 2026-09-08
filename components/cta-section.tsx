"use client";

import { motion } from "framer-motion";

export default function CtaSection({ data, links }: { data: any; links: any }) {
  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0a] border-t border-stone-800">
      <div className="mx-auto max-w-4xl px-4 text-center">
        
        <div className="mb-12">
          <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">04 — INITIALIZE</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border border-stone-800 p-12 md:p-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-50">
            {data.title || "BEGIN PROJECT"}
          </h2>
          <p className="mt-8 text-lg font-light text-stone-400 max-w-xl mx-auto leading-relaxed">
            {data.description}
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="border border-stone-700 px-8 py-4 text-[10px] font-mono tracking-widest text-stone-300 hover:bg-stone-50 hover:text-[#0a0a0a] transition-colors w-full sm:w-auto">
              {data.ctaFacebook || "SYSTEM CONNECT"}
            </a>
            <a href={links.zalo} target="_blank" rel="noopener noreferrer" className="border border-stone-800 px-8 py-4 text-[10px] font-mono tracking-widest text-stone-500 hover:text-stone-300 transition-colors w-full sm:w-auto">
              {data.ctaZalo || "SECURE LINE"}
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
