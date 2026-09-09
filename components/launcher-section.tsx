"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LauncherSection({ data, links }: { data: any; links: any }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="launcher" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Soft Section Marker */}
        <div className="mb-16 md:mb-24 opacity-60">
          <span className="text-[11px] uppercase tracking-widest text-stone-400">02 / 9FLIP</span>
        </div>

        {/* Cinematic Presentation */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8vw,7rem)] font-light text-stone-50 leading-[1] tracking-tight mb-8 text-balance"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-sm font-light text-stone-400 max-w-2xl leading-relaxed text-balance"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Technical Object Presentation */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[3/4] md:aspect-square flex items-center justify-center mt-8 md:mt-16">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: 0.15, duration: 1.2 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Background Frame / Pedestal */}
            <motion.div variants={itemVariants} className="absolute inset-4 md:inset-16 border border-stone-800/40 bg-stone-900/20 backdrop-blur-sm z-10 flex items-center justify-center">
               {/* Technical Crosshairs */}
               <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-stone-500/50" />
               <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-stone-500/50" />
               <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-stone-500/50" />
               <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-stone-500/50" />
               
               {/* Center Grid Line */}
               <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                 <div className="w-[1px] h-full bg-stone-600" />
               </div>
            </motion.div>

            {/* Device Mockup */}
            <motion.div variants={itemVariants} className="absolute inset-12 md:inset-24 z-20">
               <Image 
                src={data.image} 
                alt="9Flip Launcher Interface" 
                fill 
                className="object-contain filter grayscale-[5%] contrast-110 drop-shadow-2xl" 
              />
            </motion.div>

            {/* Desktop Engineering Annotations */}
            <div className="hidden md:block">
              {data.features.map((feature: any, i: number) => {
                const positions = [
                  "top-[10%] -left-[5%]",
                  "bottom-[20%] -left-[5%]",
                  "top-[20%] -right-[5%]",
                  "bottom-[10%] -right-[5%]"
                ];

                return (
                  <motion.div key={i} variants={itemVariants} className={`absolute ${positions[i]} w-[25%] flex flex-col items-${i < 2 ? "start" : "end"} gap-2 z-30`}>
                    <div className="text-[10px] tracking-widest px-2 py-1 bg-[#0a0a0a] text-stone-300 border border-stone-800/50 shadow-xl">
                      0{i + 1} / {feature.icon}
                    </div>
                    <p className={`text-xs text-stone-400 font-light leading-relaxed ${i < 2 ? "text-left" : "text-right"}`}>
                      {feature.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            
          </motion.div>
        </div>

        {/* Mobile Technical Features Fallback */}
        <div className="grid grid-cols-1 md:hidden gap-8 mt-16 pt-12">
          {data.features.map((feature: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col gap-2"
            >
              <div className="text-[10px] tracking-widest border border-stone-800/50 px-2 py-1 w-max text-stone-300 opacity-80">
                0{i + 1} / {feature.icon}
              </div>
              <p className="text-sm font-light text-stone-400 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <a href={data.playStoreLink} target="_blank" rel="noopener noreferrer" className="group flex flex-col w-max cursor-pointer pointer-events-auto">
            <span className="text-[11px] uppercase tracking-widest text-stone-400 group-hover:text-stone-100 transition-colors duration-500 mb-1 flex items-center gap-2">
              {data.cta}
              <span className="transform transition-transform duration-500 group-hover:translate-x-1">&#8594;</span>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
