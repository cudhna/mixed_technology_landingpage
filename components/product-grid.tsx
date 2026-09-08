"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <section id="work" className="relative py-24 md:py-40 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Editorial Section Marker */}
        <div className="flex items-center gap-6 mb-16 md:mb-32">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap">01 / THE WORK</span>
          <div className="h-[1px] bg-stone-800 flex-grow" />
        </div>

        {/* CSS Grid Pattern */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-16 md:gap-y-32">
          {products.map((product: any, index: number) => {
            const isFeatured = index === 0;
            const numberString = (index + 1).toString().padStart(3, "0");

            // Editorial Grid Pattern
            let gridClass = "";
            let aspectClass = "";
            if (index === 0) {
              gridClass = "col-span-2 md:col-span-8 md:col-start-1";
              aspectClass = "aspect-[16/10]";
            } else if (index === 1) {
              gridClass = "col-span-1 md:col-span-4 md:col-start-9 md:mt-24";
              aspectClass = "aspect-[3/4]";
            } else if (index === 2) {
              gridClass = "col-span-1 md:col-span-5 md:col-start-2";
              aspectClass = "aspect-[4/3]";
            } else if (index === 3) {
              gridClass = "col-span-1 md:col-span-5 md:col-start-8 md:-mt-32";
              aspectClass = "aspect-square";
            } else if (index === 4) {
              gridClass = "col-span-1 md:col-span-6 md:col-start-1";
              aspectClass = "aspect-[16/9]";
            } else {
              gridClass = "col-span-1 md:col-span-4 md:col-start-8";
              aspectClass = "aspect-[3/4]";
            }

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col ${gridClass}`}
              >
                <div className={`relative overflow-hidden bg-[#0f0f0f] mb-6 md:mb-8 ${aspectClass}`}>
                  <Image 
                    src={product.image} 
                    alt={product.alt || product.name} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.02] filter grayscale-[20%] group-hover:grayscale-0" 
                    sizes={isFeatured ? "100vw" : "(max-width: 768px) 50vw, 40vw"} 
                  />
                  <div className="absolute inset-0 bg-[#0a0a0a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">PRJ.{numberString}</span>
                    <h3 className={`${isFeatured ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"} font-light text-stone-100 tracking-tight leading-snug`}>
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
                    <p className="text-xs md:text-sm font-light text-stone-400 max-w-sm leading-relaxed">
                      {product.desc}
                    </p>
                    
                    {/* Editorial CTA - Visible on Mobile, enhanced on Hover for Desktop */}
                    <div className="flex items-center gap-2 group/cta cursor-pointer text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-stone-400 hover:text-stone-50 transition-colors duration-300 w-max mt-2 md:mt-0">
                      VIEW PROJECT
                      <span className="transform transition-transform duration-300 md:group-hover:translate-x-1">&#8594;</span>
                    </div>
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
