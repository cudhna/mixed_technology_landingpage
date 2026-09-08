"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory({ data }: { data: any }) {
  return (
    <section id="story" className="relative py-24 md:py-40 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Editorial Section Marker */}
        <div className="flex items-center gap-6 mb-16 md:mb-32">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap">03 / ABOUT</span>
          <div className="h-[1px] bg-stone-800 flex-grow" />
        </div>

        {/* Manifesto Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-9"
          >
            <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-display font-light text-stone-50 leading-[0.9] tracking-tight uppercase">
              WE DON&apos;T MODIFY<br/>
              <span className="text-stone-500 italic">TECHNOLOGY.</span><br/>
              WE REDEFINE<br/>
              <span className="text-stone-400 italic">HOW IT FEELS.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 md:col-span-3 flex items-end pb-4"
          >
            <p className="text-sm md:text-base font-light text-stone-400 leading-relaxed text-balance">
              {data.description}
            </p>
          </motion.div>
        </div>

        {/* Cinematic Visual & Stats */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden mb-16 md:mb-32">
          <motion.div
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Image 
              src={data.image} 
              alt="Mixed Technology Workshop" 
              fill 
              className="object-cover filter grayscale-[40%] contrast-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-[#0a0a0a]/20 mix-blend-overlay" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-stone-800 pt-12 md:pt-16">
          {data.stats?.map((stat: any, index: number) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl md:text-5xl font-light text-stone-50 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-2"
          >
            <span className="text-4xl md:text-5xl font-light text-stone-50 tracking-tighter">
              100%
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">
              CRAFTED IN VN
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
