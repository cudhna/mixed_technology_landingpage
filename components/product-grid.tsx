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

        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-16 md:gap-y-32">
          {products.map((product: any, index: number) => {
            const isFeatured = index === 0;
            const numberString = (index + 1).toString().padStart(3, "0");

            // 1st item (Featured): Full width on mobile, span 8 cols on desktop
            // 2nd item: 1 col on mobile, span 5 cols on desktop (starts at col 7)
            // 3rd item: 1 col on mobile, span 4 cols on desktop (starts at col 2)
            // 4th item: 1 col on mobile, span 5 cols on desktop (starts at col 7)
            // 5th item: 1 col on mobile, span 6 cols on desktop (starts at col 1)
            // 6th item: 1 col on mobile, span 4 cols on desktop (starts at col 8)

            let gridClass = "";
            if (index === 0) gridClass = "col-span-2 md:col-span-8 md:col-start-1";
            else if (index === 1) gridClass = "col-span-1 md:col-span-5 md:col-start-7 mt-0 md:-mt-32";
            else if (index === 2) gridClass = "col-span-1 md:col-span-4 md:col-start-2";
            else if (index === 3) gridClass = "col-span-1 md:col-span-5 md:col-start-8";
            else if (index === 4) gridClass = "col-span-1 md:col-span-6 md:col-start-1";
            else gridClass = "col-span-1 md:col-span-4 md:col-start-8 md:-mt-16";

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`group flex flex-col ${gridClass}`}
              >
                <div className={`relative overflow-hidden bg-stone-900 mb-6 ${isFeatured ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-square md:aspect-[3/4]"}`}>
                  <Image 
                    src={product.image} 
                    alt={product.alt || product.name} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.03] filter grayscale-[30%] group-hover:grayscale-0" 
                    sizes={isFeatured ? "100vw" : "(max-width: 768px) 50vw, 33vw"} 
                  />
                  <div className="absolute inset-0 bg-[#0a0a0a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
                
                <div className="flex flex-col gap-1 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-x-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`${isFeatured ? "text-xl md:text-3xl" : "text-base md:text-xl"} font-light text-stone-100 tracking-tight`}>
                      {product.name}
                    </h3>
                    <span className="text-[9px] md:text-[10px] font-mono text-stone-600 mt-1">PRJ.{numberString}</span>
                  </div>
                  <p className="text-xs font-light text-stone-500 max-w-sm mt-2 line-clamp-2 md:line-clamp-none">
                    {product.desc}
                  </p>
                  <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4 md:mt-6 hidden md:block">
                    VIEW PROJECT &#8594;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
