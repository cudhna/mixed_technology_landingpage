"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory({ data }: { data: any }) {
  return (
    <section id="about" className="relative bg-[#0a0a0a] py-32">
      
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-4 mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">03 / MANIFESTO</span>
          <div className="h-px bg-stone-800 flex-grow" />
        </div>
      </div>

      {/* Giant Typography Poster */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
        {/* Background visual subtly behind typography */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="w-full h-full relative"
          >
            <Image 
              src={data.image} 
              alt="Brand Visual" 
              fill 
              className="object-cover opacity-20 filter grayscale-[50%]" 
              sizes="100vw" 
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/80" />
          </motion.div>
        </div>

        {/* Statement Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[100rem] mx-auto text-center pointer-events-none"
        >
          <h2 className="text-[8vw] md:text-[9vw] font-light tracking-tighter leading-[0.85] text-stone-50 uppercase text-balance mix-blend-difference">
            WE DON'T JUST <span className="opacity-40 italic">MODIFY</span> TECHNOLOGY.
            <br />
            WE <span className="opacity-40 italic">REDEFINE</span> HOW IT FEELS.
          </h2>
        </motion.div>
      </div>
        
      {/* Stats - Refined */}
      <div className="mx-auto max-w-[90rem] px-4 md:px-8 mt-24">
        <div className="pt-12 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-12">
          {data.stats.map((stat: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex flex-col gap-2"
            >
              <p className="font-light text-3xl md:text-5xl text-stone-200 tracking-tight">{stat.value}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
