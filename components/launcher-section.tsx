"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LauncherSection({ data, links }: { data: any; links: any }) {
  return (
    <section id="9flip" className="relative py-32 bg-[#0a0a0a] border-t border-stone-800">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Massive Typography */}
        <div className="mb-20">
          <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase mb-8 block">01 — SOFTWARE CORE</span>
          <h2 className="text-6xl md:text-[6rem] lg:text-[8rem] font-light tracking-tighter leading-[0.85] text-stone-50 uppercase">
            {data.title || "9FLIP LAUNCHER"}
          </h2>
          <p className="mt-8 md:mt-12 text-lg md:text-xl font-light text-stone-400 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Large Mockup with Annotations */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-stone-900 overflow-hidden mb-16">
          <Image 
            src={data.image} 
            alt="9flip Launcher Mockup" 
            fill 
            className="object-cover filter grayscale-[20%]" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        </div>

        {/* Technical Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-800 pt-16">
          {data.features.map((feature: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4 border-b border-stone-800 pb-4">
                <span className="tech-label">SPEC.{String(i + 1).padStart(2, '0')}</span>
                <span className="text-stone-300 font-mono text-sm uppercase">{feature.icon} FEATURE</span>
              </div>
              <p className="text-sm font-light text-stone-400 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center md:text-left">
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="border border-stone-700 px-8 py-4 text-[10px] font-mono tracking-widest text-stone-300 hover:bg-stone-50 hover:text-[#0a0a0a] transition-colors inline-block">
            {data.cta || "INSTALL CORE"}
          </a>
        </div>

      </div>
    </section>
  );
}
