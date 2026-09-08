"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ data, links }: { data: any, links: { facebook: string, zalo: string } }) {

  return (
    <section id="hero" className="relative min-h-screen bg-[#0a0a0a] pt-14 flex flex-col justify-between">
      
      {/* Top Metadata */}
      <div className="absolute top-20 left-4 md:left-8 z-10 flex gap-12">
        <div className="flex flex-col gap-1">
          <span className="tech-label">SYS.01</span>
          <span className="text-[10px] text-stone-500 uppercase tracking-widest">MIXED TECHNOLOGY</span>
        </div>
        <div className="hidden md:flex flex-col gap-1">
          <span className="tech-label">STAT</span>
          <span className="text-[10px] text-stone-500 uppercase tracking-widest">ENGINEERED / MODDED / REFINED</span>
        </div>
      </div>

      <div className="absolute top-20 right-4 md:right-8 z-10">
        <span className="tech-label">2026</span>
      </div>

      {/* Main Image (Cinematic Crop) */}
      <div className="relative w-full h-[60vh] md:h-[70vh] mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={data.image} 
            alt="Hero Visual" 
            fill 
            className="object-cover object-center filter grayscale-[20%] contrast-125"
            priority
          />
          {/* Subtle noise/texture over image */}
          <div className="absolute inset-0 bg-[#0a0a0a]/20 mix-blend-overlay"></div>
        </motion.div>
      </div>

      {/* Bottom Typography & CTA */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8 py-12 flex flex-col md:flex-row justify-between items-end md:items-start gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full md:w-2/3"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light tracking-tighter leading-[0.85] text-stone-50">
            {data.headline || "INDUSTRIAL"}
            <br />
            <span className="text-stone-500">{data.subheadline?.split(" ")[0] || "PRECISION"}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-6"
        >
          <p className="text-sm md:text-base text-stone-400 font-light max-w-xs md:text-right leading-relaxed">
            {data.subheadline}
          </p>
          <div className="flex gap-4">
            <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="border border-stone-700 px-6 py-3 text-[10px] font-mono tracking-widest text-stone-300 hover:bg-stone-50 hover:text-[#0a0a0a] transition-colors">
              {data.ctaFacebook}
            </a>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
