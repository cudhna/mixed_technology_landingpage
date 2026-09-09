"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        <div className="mb-12 md:mb-16 opacity-80">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500">DỰ ÁN PHẦN CỨNG</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-4 md:gap-x-12 gap-y-20 md:gap-y-32">
          {products.map((product: any, index: number) => {
            const isFeatured = index === 0;
            const labels = product.labels || [];

            let gridClass = "";
            let aspectClass = "";
            
            if (index === 0) {
              gridClass = "col-span-1 sm:col-span-2 md:col-span-7 md:col-start-1";
              aspectClass = "aspect-[16/10]";
            } else if (index === 1) {
              gridClass = "col-span-1 md:col-span-4 md:col-start-9 md:mt-16";
              aspectClass = "aspect-[3/4]";
            } else if (index === 2) {
              gridClass = "col-span-1 md:col-span-4 md:col-start-2";
              aspectClass = "aspect-[4/3]";
            } else if (index === 3) {
              gridClass = "col-span-1 md:col-span-5 md:col-start-7 md:-mt-24";
              aspectClass = "aspect-square";
            } else if (index === 4) {
              gridClass = "col-span-1 md:col-span-6 md:col-start-1";
              aspectClass = "aspect-[16/9]";
            } else {
              gridClass = "col-span-1 md:col-span-4 md:col-start-8 md:-mt-8";
              aspectClass = "aspect-[4/5]";
            }

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={"group flex flex-col "}
              >
                <div className="relative mb-6 md:mb-8 flex items-center justify-center p-2 md:p-4">
                  
                  {/* Decorative Frame */}
                  <div className="absolute inset-0 border border-stone-800/20 bg-[#0f0f0f] pointer-events-none z-10">
                     <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-600/40" style={{ marginLeft: '-1px', marginTop: '-1px' }} />
                     <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-stone-600/40" style={{ marginRight: '-1px', marginTop: '-1px' }} />
                     <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stone-600/40" style={{ marginLeft: '-1px', marginBottom: '-1px' }} />
                     <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-600/40" style={{ marginRight: '-1px', marginBottom: '-1px' }} />
                  </div>

                  <div className={"relative w-full overflow-hidden bg-black  z-20"}>
                    <Image
                      src={product.image}
                      alt={product.alt || product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.01] filter grayscale-[10%] group-hover:grayscale-0"
                      sizes={isFeatured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 33vw"}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 px-1">
                  <h3 className={" font-medium text-stone-100 tracking-tight leading-snug"}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
                    {product.desc}
                  </p>
                  
                  {labels.length > 0 && (
                    <div className="flex flex-col gap-1 mt-2 mb-2">
                      {labels.map((lbl: string, i: number) => {
                        const parts = lbl.split(':');
                        if (parts.length > 1) {
                          return (
                            <div key={i} className="text-xs text-stone-500 flex gap-2">
                              <span className="font-semibold text-stone-400">{parts[0]}:</span>
                              <span>{parts.slice(1).join(':')}</span>
                            </div>
                          );
                        }
                        return (
                          <div key={i} className="text-xs text-stone-400">
                            • {lbl}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="flex items-center gap-2 group/cta cursor-pointer text-xs font-semibold uppercase tracking-wide text-stone-300 hover:text-white transition-colors duration-300 w-max mt-2">
                    XEM CHI TIẾT
                    <span className="transform transition-transform duration-300 md:group-hover:translate-x-1">&#8594;</span>
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