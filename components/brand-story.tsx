"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory({ data }: { data: any }) {
  return (
    <section id="story" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        <div className="mb-16 md:mb-24 opacity-60">
          <span className="text-[11px] uppercase tracking-widest text-stone-400">03 / Giới thiệu</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-8"
          >
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light text-stone-100 leading-[1.2] tracking-tight text-balance">
              CHÚNG TÔI KHÔNG CHỈ TẠO RA CÔNG NGHỆ. <br />
              CHÚNG TÔI QUAN TÂM ĐẾN CẢM GIÁC <br />
              <span className="text-stone-400 italic">KHI BẠN SỬ DỤNG NÓ.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="col-span-1 md:col-span-4 flex items-end pb-2"
          >
            <p className="text-sm font-light text-stone-400 leading-relaxed text-balance">
              {data.description}
            </p>
          </motion.div>
        </div>
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden mb-16 md:mb-24">
          <motion.div
            initial={{ scale: 1.015 }}
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
          </motion.div>
        </div>
        {data.stats && data.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8">
            {data.stats.map((stat: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="text-3xl md:text-4xl font-light text-stone-100 tracking-tight">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 opacity-80">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
