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
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={ref} id="hero" className="relative h-[100svh] min-h-[600px] bg-[#0a0a0a] overflow-hidden pt-[72px] flex items-center">
      
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[url('/noise.png')] opacity-[0.02]" />

      <div className="relative z-20 mx-auto w-full max-w-[90rem] px-4 md:px-8 flex flex-col h-full py-8 md:py-12">
        
        {/* Top Micro Details */}
        <div className="flex justify-between items-start mb-auto">
          <div className="flex gap-4 md:gap-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">01 / THE OBJECT</span>
            <span className="hidden md:block text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">MIXED TECHNOLOGY / 001</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">2026</span>
        </div>

        {/* 12-Column Desktop Grid for Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center flex-grow py-8">
          
          {/* Typography (Spans 5 cols) */}
          <motion.div 
            style={{ y: textY }}
            className="col-span-1 md:col-span-5 flex flex-col order-2 md:order-1"
          >
            <h1 className="font-display font-light text-stone-50 leading-[0.85] tracking-tight text-[clamp(3rem,6vw,7rem)] uppercase mb-2">
              INDUSTRIAL
            </h1>
            <h1 className="font-display font-light text-stone-400 italic leading-[0.85] tracking-tight text-[clamp(3rem,6vw,7rem)] uppercase md:ml-12 mb-8">
              PRECISION
            </h1>
            
            <div className="flex flex-col gap-8 md:gap-16 mt-4 md:mt-8">
              <p className="text-xs md:text-sm font-light text-stone-400 leading-relaxed max-w-sm">
                {data.subheadline}
              </p>

              <a 
                href={links.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col w-max cursor-pointer pointer-events-auto"
              >
                <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-50 transition-colors duration-300 mb-2 flex items-center gap-2">
                  VIEW PROJECT 
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
                </span>
                <span className="h-[1px] w-full bg-stone-700 group-hover:bg-stone-50 transition-colors duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Product Image (Spans 7 cols) */}
          <div className="col-span-1 md:col-span-7 h-full w-full min-h-[300px] md:min-h-[500px] relative order-1 md:order-2 overflow-hidden">
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={data.image} 
                alt="Hero Visual" 
                fill 
                className="object-cover object-center filter grayscale-[15%] contrast-105"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,10,10,0.8)] pointer-events-none" />
            </motion.div>
          </div>

        </div>

        {/* Bottom Details */}
        <div className="flex justify-between items-end mt-auto hidden md:flex">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-600">PRODUCT / SOFTWARE</span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-600">ENGINEERED IN VIETNAM</span>
        </div>

      </div>
    </section>
  );
}
