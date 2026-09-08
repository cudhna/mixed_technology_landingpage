"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory({ data }: { data: any }) {
  return (
    <section id="about" className="relative bg-[#0a0a0a]">
      
      {/* Full-width visual */}
      <div className="relative w-full h-[60vh] md:h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image 
            src={data.image} 
            alt="Quá trình làm việc tại Mixed Technology" 
            fill 
            className="object-cover filter grayscale-[20%] contrast-125" 
            sizes="100vw" 
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/40" />
        </motion.div>
      </div>

      {/* Manifesto Quote */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-24 md:py-40">
        <div className="mb-12">
          <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">03 — MANIFESTO</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight text-stone-50">
            "Mỗi dự án bắt đầu từ rất nhiều bản phác thảo..."
          </h2>
          <p className="mt-12 text-lg md:text-xl font-light text-stone-400 max-w-2xl leading-relaxed">
            {data.description}
          </p>
        </motion.div>
        
        {/* Stats */}
        <div className="mt-24 pt-12 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.stats.map((stat: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <p className="font-light text-4xl lg:text-5xl text-stone-50">{stat.value}</p>
              <p className="mt-4 text-[10px] font-mono uppercase tracking-widest text-stone-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
