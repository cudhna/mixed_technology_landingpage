"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory({ data }: { data: any }) {
  return (
    <section id="story" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-stone-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative p-3 bg-white shadow-[0_30px_60px_rgb(0,0,0,0.08)] transform rotate-1 hover:rotate-0 transition-transform duration-700"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-stone-100">
              <Image src={data.image} alt="Quá trình làm việc tại Mixed Technology" fill className="object-cover transition-transform duration-1000 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>

          <div className="space-y-8 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="section-label">
                Câu chuyện thương hiệu
              </span>
              <h2 className="section-title mt-6">
                {data.title}
              </h2>
              <p className="section-desc">{data.description}</p>
            </motion.div>
            
            <div className="pt-8 border-t border-stone-200">
              <div className="flex flex-wrap items-center gap-12">
                {data.stats.map((stat: any, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  >
                    <p className="font-display text-4xl lg:text-5xl text-brand-950">{stat.value}</p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
