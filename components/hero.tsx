"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "./language-provider";

export default function Hero() {
  const { t, images } = useLanguage();
  const data = t.hero;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.015]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[100svh] bg-[#0a0a0a] pt-[72px] pb-16 md:pb-32 flex flex-col justify-center">
      <div className="relative z-20 mx-auto w-full max-w-[90rem] px-4 md:px-8 flex flex-col flex-grow py-8 md:py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center flex-grow">
          
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-5 flex flex-col order-2 md:order-1 pt-4 md:pt-0"
          >
            <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 mb-4 md:mb-6">
              MIXED TECHNOLOGY
            </span>
            <h1 className="font-medium text-stone-100 leading-[1.2] tracking-tight text-3xl md:text-5xl mb-6 md:mb-8 text-balance">
              {data.headline}
            </h1>
            
            <div className="flex flex-col gap-8 md:gap-12">
              <p className="text-base md:text-lg text-stone-400 leading-relaxed max-w-md">
                {data.subheadline}
              </p>

              <a 
                href="#launcher"
                className="group flex items-center justify-center w-full md:w-max px-8 py-4 bg-stone-100 text-[#0a0a0a] font-medium text-sm tracking-wide hover:bg-stone-300 transition-colors duration-300"
              >
                {data.cta}
              </a>
            </div>
          </motion.div>

          <div className="col-span-1 md:col-span-7 relative order-1 md:order-2 flex items-center justify-center">
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="relative w-full max-w-xl mx-auto p-4 md:p-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 border border-stone-800/40 bg-stone-900/10 pointer-events-none z-10">
                 <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-stone-500/50" style={{ marginLeft: '-1px', marginTop: '-1px' }} />
                 <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-stone-500/50" style={{ marginRight: '-1px', marginTop: '-1px' }} />
                 <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-stone-500/50" style={{ marginLeft: '-1px', marginBottom: '-1px' }} />
                 <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-stone-500/50" style={{ marginRight: '-1px', marginBottom: '-1px' }} />
                 
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   <div className="w-px h-full bg-stone-600" />
                   <div className="h-px w-full bg-stone-600 absolute" />
                 </div>
              </div>

              <div className="relative w-full aspect-[3/4] z-20">
                <Image 
                  src={images.hero} 
                  alt="Mixed Technology Product" 
                  fill 
                  className="object-contain filter grayscale-[15%] contrast-105 drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}