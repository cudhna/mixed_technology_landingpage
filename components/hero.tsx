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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.015]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[100svh] bg-[#0a0a0a] pt-[72px] pb-16 md:pb-32 flex flex-col justify-center">
      <div className="relative z-20 mx-auto w-full max-w-[90rem] px-4 md:px-8 flex flex-col flex-grow py-8 md:py-12">
        
        {/* Micro Details (Reduced) */}
        <div className="flex justify-between items-start opacity-70 mb-8 md:mb-16">
          <span className="text-[10px] uppercase tracking-widest text-stone-500">SẢN PHẨM 01</span>
          <span className="text-[10px] uppercase tracking-widest text-stone-500">2026</span>
        </div>

        {/* 12-Column Desktop Grid for Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center flex-grow">
          
          {/* Product Image (Primary Subject) */}
          <div className="col-span-1 md:col-span-7 relative order-1 md:order-2 flex items-center justify-center">
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/3] max-w-3xl mx-auto"
            >
              <Image 
                src={data.image} 
                alt="Mixed Technology Product" 
                fill 
                className="object-contain filter grayscale-[15%] contrast-105"
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
          </div>

          {/* Typography (Secondary Subject) */}
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-5 flex flex-col order-2 md:order-1 pt-4 md:pt-0"
          >
            <h1 className="font-light text-stone-100 leading-[1.1] tracking-tight text-[clamp(2rem,4vw,3.5rem)] mb-6 md:mb-8 text-balance">
              {data.headline}
            </h1>
            
            <div className="flex flex-col gap-8 md:gap-16">
              <p className="text-sm font-light text-stone-400 leading-relaxed max-w-sm">
                {data.subheadline}
              </p>

              <a 
                href={links.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col w-max cursor-pointer pointer-events-auto"
              >
                <span className="text-[11px] uppercase tracking-widest text-stone-400 group-hover:text-stone-100 transition-colors duration-500 mb-1 flex items-center gap-2">
                  XEM CHI TIẾT 
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