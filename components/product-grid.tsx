"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./language-provider";

export default function ProductGrid() {
  const { t, images } = useLanguage();
  const data = t.products;

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        <div className="mb-8 md:mb-12">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 uppercase">
            {data.sectionTitle}
          </span>
        </div>

        {/* Simplified, Scannable Grid: 1 col mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {data.items.map((product: any, index: number) => {
            const labels = product.labels || [];
            // Assign image from images array based on index to decouple text from assets
            const imageSrc = images.products[index % images.products.length];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="group flex flex-col"
              >
                {/* Image Wrapper */}
                <div className="relative w-full overflow-hidden bg-[#111] border border-stone-800/40 rounded-sm mb-4 aspect-[4/3]">
                  <Image
                    src={imageSrc}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content Wrapper */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-stone-100 tracking-tight leading-snug text-lg md:text-xl">
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
                              <span className="font-medium text-stone-400 uppercase">{parts[0]}:</span>
                              <span>{parts.slice(1).join(':')}</span>
                            </div>
                          );
                        }
                        return (
                          <div key={i} className="text-xs text-stone-500 uppercase">
                            • {lbl}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="flex items-center gap-2 group/cta cursor-pointer text-xs font-medium text-stone-300 hover:text-white transition-colors duration-200 w-max mt-1">
                    {data.viewDetails}
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