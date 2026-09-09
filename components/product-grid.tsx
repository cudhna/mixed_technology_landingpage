"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        <div className="mb-8 md:mb-12">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 uppercase">DỰ ÁN PHẦN CỨNG</span>
        </div>

        {/* Simplified, Scannable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {products.map((product: any, index: number) => {
            const isFeatured = index === 0;
            const labels = product.labels || [];

            // Featured takes 8 columns (2/3 width), others take 4 columns (1/3 width, so 3 per row)
            const gridClass = isFeatured 
              ? "col-span-1 md:col-span-8" 
              : "col-span-1 md:col-span-4";
            
            // Fixed aspect ratio for consistency. Featured is wider, regular is squarish.
            const aspectClass = isFeatured 
              ? "aspect-[16/10] md:aspect-[21/9]" 
              : "aspect-[4/3]";

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={"group flex flex-col " + gridClass}
              >
                {/* Image Wrapper */}
                <div className={"relative w-full overflow-hidden bg-[#111] border border-stone-800/40 rounded-sm mb-4 " + aspectClass}>
                  <Image
                    src={product.image}
                    alt={product.alt || product.name}
                    fill
                    className="object-contain p-4 md:p-8 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                </div>

                {/* Content Wrapper */}
                <div className="flex flex-col gap-2">
                  <h3 className={"font-medium text-stone-100 tracking-tight leading-snug " + (isFeatured ? '"text-2xl md:text-3xl"' : '"text-lg md:text-xl"')}>
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {product.desc}
                  </p>
                  
                  {labels.length > 0 && (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 mb-2">
                      {labels.map((lbl: string, i: number) => {
                        const parts = lbl.split(':');
                        if (parts.length > 1) {
                          return (
                            <div key={i} className="text-xs text-stone-500 flex gap-1">
                              <span className="font-medium text-stone-400">{parts[0]}:</span>
                              <span>{parts.slice(1).join(':')}</span>
                            </div>
                          );
                        }
                        return (
                          <div key={i} className="text-xs text-stone-500">
                            • {lbl}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="flex items-center gap-2 group/cta cursor-pointer text-xs font-medium text-stone-300 hover:text-white transition-colors duration-200 w-max mt-1">
                    Xem chi tiết
                    <span className="transform transition-transform duration-200 group-hover/cta:translate-x-1">&#8594;</span>
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