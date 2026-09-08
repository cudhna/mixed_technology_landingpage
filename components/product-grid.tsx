"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <section id="work" className="relative py-32 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="flex justify-between items-end mb-24 border-b border-stone-800 pb-8">
          <h2 className="text-3xl md:text-5xl font-light text-stone-50">SELECTED WORK</h2>
          <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">02 — ARCHIVE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {products.map((product: any, index: number) => {
            const isEven = index % 2 === 0;
            const numberString = (index + 1).toString().padStart(2, "0");
            const totalString = products.length.toString().padStart(2, "0");

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col group ${isEven ? "md:mt-0" : "md:mt-32"}`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-900 mb-6">
                  <Image 
                    src={product.image} 
                    alt={product.alt || product.name} 
                    fill 
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 filter grayscale-[20%]" 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                  />
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-light text-stone-50 tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-sm font-light text-stone-400">
                      {product.desc}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono text-stone-500">
                    {numberString} <span className="opacity-50">/ {totalString}</span>
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
