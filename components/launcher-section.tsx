"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LauncherSection({ data, links }: { data: any; links: any }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="launcher" className="relative py-24 md:py-40 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Editorial Section Marker */}
        <div className="flex items-center gap-6 mb-16 md:mb-32">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap">02 / 9FLIP</span>
          <div className="h-[1px] bg-stone-800 flex-grow" />
        </div>

        {/* Cinematic Presentation */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[8vw] font-display font-light text-stone-50 leading-[0.8] tracking-tight mb-8"
          >
            {data.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base font-light text-stone-400 max-w-2xl leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Engineering Annotations Presentation */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] flex items-center justify-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: 0.15 }}
            className="relative w-full h-full max-w-5xl mx-auto"
          >
            {/* Device Mockup */}
            <motion.div variants={itemVariants} className="absolute inset-0 md:inset-y-0 md:left-1/4 md:right-1/4 z-20">
               <Image 
                src={data.image} 
                alt="9Flip Launcher Interface" 
                fill 
                className="object-contain filter grayscale-[10%] contrast-110" 
              />
            </motion.div>

            {/* Desktop Engineering Annotations */}
            <div className="hidden md:block">
              {data.features.map((feature: any, i: number) => {
                const positions = [
                  "top-[15%] left-[5%]",
                  "top-[45%] left-[5%]",
                  "top-[25%] right-[5%]",
                  "top-[65%] right-[5%]"
                ];
                
                const lineClasses = [
                  "top-1/2 -right-[50%] w-[50%] h-px",
                  "top-1/2 -right-[50%] w-[50%] h-px",
                  "top-1/2 -left-[50%] w-[50%] h-px",
                  "top-1/2 -left-[50%] w-[50%] h-px"
                ];

                return (
                  <motion.div key={i} variants={itemVariants} className={`absolute ${positions[i]} w-[20%] flex flex-col items-${i < 2 ? "start" : "end"} gap-2 z-30`}>
                    <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest px-2 py-1 border border-stone-800 bg-[#0a0a0a]">
                      0{i + 1} / {feature.icon}
                    </div>
                    <p className={`text-xs text-stone-400 font-light leading-relaxed ${i < 2 ? "text-left" : "text-right"}`}>
                      {feature.text}
                    </p>
                    <div className={`absolute ${lineClasses[i]} bg-stone-800 -z-10`} />
                  </motion.div>
                );
              })}
            </div>
            
          </motion.div>
        </div>

        {/* Mobile Technical Features Fallback */}
        <div className="grid grid-cols-1 md:hidden gap-8 mt-16 border-t border-stone-800 pt-12">
          {data.features.map((feature: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest border border-stone-800 px-2 py-1 w-max">
                0{i + 1} / {feature.icon}
              </div>
              <p className="text-sm font-light text-stone-400 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="group flex flex-col w-max cursor-pointer pointer-events-auto">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-50 transition-colors duration-300 mb-2 flex items-center gap-2">
              {data.cta || "INSTALL CORE"}
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">&#8594;</span>
            </span>
            <span className="h-[1px] w-full bg-stone-700 group-hover:bg-stone-50 transition-colors duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
