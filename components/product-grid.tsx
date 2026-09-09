"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./language-provider";
import { useState, useEffect } from "react";

const CameraCorner = ({ pos, delay, reducedMotion }: { pos: 'tl'|'tr'|'bl'|'br', delay: number, reducedMotion: boolean | null }) => {
  const baseSize = 12;
  const focusSize = 24;
  
  const hAnim = reducedMotion ? { width: baseSize } : { width: [baseSize, focusSize, focusSize, baseSize, baseSize] };
  const vAnim = reducedMotion ? { height: baseSize } : { height: [baseSize, focusSize, focusSize, baseSize, baseSize] };
  const opAnim = reducedMotion ? { opacity: 0.35 } : { opacity: [0.35, 0.7, 0.7, 0.35, 0.35] };

  const transition = { duration: 3.5, ease: "easeInOut", times: [0, 0.15, 0.3, 0.45, 1], repeat: Infinity, delay };

  const isTop = pos.includes('t');
  const isLeft = pos.includes('l');

  return (
    <motion.div 
      className={`absolute z-30 pointer-events-none p-3 ${isTop ? 'top-0' : 'bottom-0'} ${isLeft ? 'left-0' : 'right-0'} group-hover:!opacity-90 transition-opacity duration-300`}
      animate={opAnim}
      transition={transition}
    >
      <div className="relative w-8 h-8">
        <motion.div 
          className="absolute bg-stone-400" 
          style={{ top: isTop ? 0 : 'auto', bottom: !isTop ? 0 : 'auto', left: isLeft ? 0 : 'auto', right: !isLeft ? 0 : 'auto', height: 1 }} 
          animate={hAnim} 
          transition={transition} 
        />
        <motion.div 
          className="absolute bg-stone-400" 
          style={{ top: isTop ? 0 : 'auto', bottom: !isTop ? 0 : 'auto', left: isLeft ? 0 : 'auto', right: !isLeft ? 0 : 'auto', width: 1 }} 
          animate={vAnim} 
          transition={transition} 
        />
      </div>
    </motion.div>
  );
};

export default function ProductGrid() {
  const { t, images } = useLanguage();
  const data = t.products;
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 uppercase">
            {data.sectionTitle}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {data.items.map((product: any, index: number) => {
            const labels = product.labels || [];
            const imageSrc = images.products[index % images.products.length];
            
            const revealDelay = shouldReduceMotion ? 0 : Math.min(index * 0.1, 0.4);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: revealDelay }}
                className="group flex flex-col"
              >
                <div className="relative w-full overflow-hidden bg-[#111] border border-stone-800/40 rounded-sm mb-4 aspect-[4/3]">
                  {mounted && (
                    <>
                      <CameraCorner pos="tl" delay={0} reducedMotion={shouldReduceMotion} />
                      <CameraCorner pos="tr" delay={0.15} reducedMotion={shouldReduceMotion} />
                      <CameraCorner pos="bl" delay={0.15} reducedMotion={shouldReduceMotion} />
                      <CameraCorner pos="br" delay={0.3} reducedMotion={shouldReduceMotion} />
                    </>
                  )}
                  
                  <Image
                    src={imageSrc}
                    alt={product.name}
                    fill
                    className={`object-contain p-4 transition-all duration-300 ${shouldReduceMotion ? '' : 'group-hover:scale-[1.015]'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-stone-100 tracking-tight leading-snug text-lg md:text-xl">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  {labels.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-2">
                      {labels.map((lbl: string, i: number) => {
                        const parts = lbl.split(':');
                        if (parts.length > 1) {
                          return (
                            <div key={i} className="text-xs text-stone-500 flex gap-1">
                              <span className="font-medium text-stone-400 uppercase">{parts[0]}:</span>
                              <span>{parts.slice(1).join(':')}</span>
                            </div>
                          );
                        }
                        return (
                          <div key={i} className="text-xs text-stone-500 uppercase">
                            • {lbl}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="flex items-center gap-2 group/cta cursor-pointer text-xs font-medium text-stone-300 hover:text-white transition-colors duration-200 w-max mt-1">
                    {data.viewDetails}
                    <span className={`transform transition-transform duration-200 ${shouldReduceMotion ? '' : 'group-hover/cta:translate-x-1'}`}>&#8594;</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}