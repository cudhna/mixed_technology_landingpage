"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero({ data, links }: { data: any, links: { facebook: string, zalo: string } }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden">
      
      {/* Background Vignette */}
      <div className="absolute inset-0 pointer-events-none z-20" style={{ background: "radial-gradient(circle at center, transparent 30%, #0a0a0a 100%)" }} />

      {/* Top Metadata */}
      <div className="absolute top-20 left-4 md:left-8 z-30 flex gap-8 md:gap-16">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">MIXED TECHNOLOGY / 001</span>
        </div>
        <div className="hidden md:flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">OBJECT 01</span>
        </div>
        <div className="hidden lg:flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">ENGINEERED IN VIETNAM</span>
        </div>
      </div>

      <div className="absolute top-20 right-4 md:right-8 z-30">
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">2026</span>
      </div>

      {/* Main Image (Cinematic with Depth) */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0 w-full h-full z-10"
      >
        <Image 
          src={data.image} 
          alt="Hero Visual" 
          fill 
          className="object-cover object-center filter grayscale-[30%] contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/30 mix-blend-overlay"></div>
      </motion.div>

      {/* Overlapping Typography Composition */}
      <motion.div
        style={{ y: textY }}
        className="relative z-30 mx-auto w-full max-w-[90rem] px-4 md:px-8 mt-32 flex flex-col items-center justify-center pointer-events-none"
      >
        <h1 className="text-[12vw] md:text-[14vw] font-light tracking-tighter leading-[0.75] text-stone-50 text-center mix-blend-difference">
          {data.headline || "INDUSTRIAL"}
        </h1>
        <h1 className="text-[12vw] md:text-[14vw] font-light tracking-tighter leading-[0.75] text-stone-400 text-center mix-blend-difference italic ml-[10vw]">
          {data.subheadline?.split(" ")[0] || "PRECISION"}
        </h1>
      </motion.div>

      {/* Bottom Metadata & CTA */}
      <div className="absolute bottom-8 md:bottom-12 left-4 md:left-8 right-4 md:right-8 z-30 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-xs md:max-w-sm">
          <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-stone-400 leading-relaxed text-balance">
            {data.subheadline}
          </p>
        </div>
        
        <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="border-b border-stone-600 pb-1 text-[10px] font-mono uppercase tracking-widest text-stone-300 hover:text-stone-50 transition-colors pointer-events-auto">
          {data.ctaFacebook} &#8594;
        </a>
      </div>
      
    </section>
  );
}
