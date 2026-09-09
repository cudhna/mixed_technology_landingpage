"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./language-provider";

export default function BrandStory() {
  const { t, images } = useLanguage();
  const data = t.brandStory;

  return (
    <section id="story" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        <div className="mb-12 md:mb-16 opacity-80">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 uppercase">
            {data.sectionTitle}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-8"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-stone-100 leading-[1.3] tracking-tight text-balance">
              {data.title}
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="col-span-1 md:col-span-4 flex items-end pb-2"
          >
            <p className="text-base text-stone-400 leading-relaxed text-balance">
              {data.description}
            </p>
          </motion.div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 border border-stone-800/40 bg-stone-900/10 pointer-events-none z-10">
             <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-stone-500/50" />
             <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-stone-500/50" />
             <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-stone-500/50" />
             <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-stone-500/50" />
             
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
               <div className="w-px h-full bg-stone-600" />
               <div className="h-px w-full bg-stone-600 absolute" />
             </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative w-full aspect-[4/3] md:aspect-[21/9] z-20"
          >
            <Image 
              src={images.story} 
              alt="Mixed Technology Workshop" 
              fill 
              className="object-cover filter grayscale-[40%] contrast-110 drop-shadow-2xl" 
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}