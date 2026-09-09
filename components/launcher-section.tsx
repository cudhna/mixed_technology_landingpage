"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LauncherSection({ data, links }: { data: any; links: any }) {
  return (
    <section id="launcher" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Soft Section Marker */}
        <div className="mb-12 md:mb-16 opacity-80">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 uppercase">PHẦN MỀM NỔI BẬT</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-5 flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-medium text-stone-100 leading-[1.1] tracking-tight mb-6">
              {data.title}
            </h2>
            <p className="text-base md:text-lg text-stone-400 leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Trust Row */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10">
              {data.trust && data.trust.map((item: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                  <span className="text-xs font-semibold tracking-wide text-stone-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-6 mb-12">
              {data.features.map((feature: any, i: number) => (
                <div key={i} className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-stone-200">{feature.title}</h3>
                  <p className="text-sm text-stone-400">{feature.desc}</p>
                </div>
              ))}
            </div>

            <a 
              href={data.playStoreLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-full md:w-max px-8 py-4 bg-stone-100 text-[#0a0a0a] font-medium text-sm tracking-wide hover:bg-stone-300 transition-colors duration-300"
            >
              {data.cta}
            </a>
          </motion.div>

          {/* Visual Presentation */}
          <div className="col-span-1 md:col-span-7 relative flex items-center justify-center mt-8 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative w-full max-w-lg aspect-[3/4] md:aspect-square flex items-center justify-center p-4 md:p-8"
            >
              {/* Background Frame / Pedestal */}
              <div className="absolute inset-0 border border-stone-800/40 bg-stone-900/20 backdrop-blur-sm z-10 flex items-center justify-center">
                 <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-stone-500/50" />
                 <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-stone-500/50" />
                 <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-stone-500/50" />
                 <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-stone-500/50" />
              </div>

              {/* Device Mockup */}
              <div className="absolute inset-8 md:inset-12 z-20">
                 <Image 
                  src={data.image} 
                  alt="9Flip Launcher Interface" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}