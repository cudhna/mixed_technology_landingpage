"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <section id="work" className="relative py-32 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-4 mb-24">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">01 / THE WORK</span>
          <div className="h-px bg-stone-800 flex-grow" />
        </div>

        <div className="flex flex-col gap-32">
          {products.map((product: any, index: number) => {
            const isFeatured = index === 0;
            const numberString = (index + 1).toString().padStart(3, "0");

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`group flex flex-col ${isFeatured ? "md:items-center" : index % 2 === 0 ? "md:items-start" : "md:items-end"}`}
              >
                <div className={`relative overflow-hidden bg-stone-900 mb-8 ${isFeatured ? "w-full md:w-[70%] aspect-[16/10]" : "w-full md:w-[45%] aspect-[3/4]"}`}>
                  <Image 
                    src={product.image} 
                    alt={product.alt || product.name} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.03] filter grayscale-[30%] group-hover:grayscale-0" 
                    sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 50vw"} 
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-[#0a0a0a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
                
                <div className={`flex flex-col ${isFeatured ? "w-full md:w-[70%] flex-row justify-between items-start" : "w-full md:w-[45%] flex-row justify-between items-start"} transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-2`}>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl md:text-4xl font-light text-stone-100 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm font-light text-stone-500 max-w-sm">
                      {product.desc}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className="text-[10px] font-mono text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">PROJECT {numberString}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 whitespace-nowrap">
                      VIEW PROJECT &#8594;
                    </span>
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
