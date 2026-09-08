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
    <section ref={ref} id="hero" className="relative h-[100svh] min-h-[600px] bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Vignette */}
      <div className="absolute inset-0 pointer-events-none z-20" style={{ background: "radial-gradient(circle at center, transparent 30%, #0a0a0a 100%)" }} />

      {/* Grid Container */}
      <div className="relative z-30 mx-auto w-full max-w-[90rem] h-full px-4 md:px-8 pt-20 pb-8 flex flex-col justify-between">
        
        {/* Top Metadata */}
        <div className="grid grid-cols-12 gap-4 items-start">
          <div className="col-span-8 md:col-span-4 flex gap-4 md:gap-8">
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-stone-500">MT / 001</span>
            <span className="hidden md:inline-block text-[10px] font-mono uppercase tracking-widest text-stone-500">OBJECT 01</span>
            <span className="hidden lg:inline-block text-[10px] font-mono uppercase tracking-widest text-stone-500">ENGINEERED IN VN</span>
          </div>
          <div className="col-span-4 md:col-span-8 text-right">
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-stone-500">2026</span>
          </div>
        </div>

        {/* Product Image & Headline Container */}
        <div className="relative flex-grow flex flex-col justify-center w-full mt-6 mb-6 gap-4 md:gap-8">
          <motion.div
            style={{ scale: imageScale, opacity: imageOpacity }}
            className="relative w-full flex-grow min-h-[300px] md:min-h-[400px] z-10"
          >
            <Image 
              src={data.image} 
              alt="Hero Visual" 
              fill 
              className="object-cover object-center filter grayscale-[20%] contrast-110"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>

          <motion.div
            style={{ y: textY }}
            className="relative z-20 w-full"
          >
            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1] text-stone-50">
              INDUSTRIAL<br/>
              <span className="text-stone-400 italic">PRECISION</span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Details & CTA */}
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <p className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-stone-400 leading-relaxed text-balance">
              {data.headline}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-6 md:text-right mt-4 md:mt-0">
            <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="inline-block border-b border-stone-600 pb-1 text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-stone-300 hover:text-stone-50 transition-colors pointer-events-auto">
              VIEW PROJECT &#8594;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
