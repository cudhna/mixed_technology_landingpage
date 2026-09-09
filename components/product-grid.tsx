"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function FloatingLabels({ labels }: { labels: string[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!labels || labels.length === 0 || !mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
      {labels.map((text, i) => {
        const isLeft = i === 0;
        const isTop = i % 2 === 0;
        
        // Gentle random oscillation
        const floatAnimation = {
          y: [0, -4, 0],
          transition: {
            duration: 4 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }
        };

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={"absolute   flex flex-col items- gap-1"}
          >
            <motion.div 
              animate={floatAnimation}
              className="text-[9px] uppercase tracking-widest px-2 py-1 bg-[#0a0a0a]/90 backdrop-blur-sm text-stone-300 border border-stone-800/50 shadow-xl whitespace-nowrap"
            >
              0{i + 1} / {text}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        <div className="mb-16 md:mb-24 opacity-60">
          <span className="text-[11px] uppercase tracking-widest text-stone-400">01 / DỰ ÁN</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-4 md:gap-x-12 gap-y-16 md:gap-y-32">
          {products.map((product: any, index: number) => {
            const isFeatured = index === 0;
            const numberString = (index + 1).toString().padStart(2, "0");
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
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={"group flex flex-col "}
              >
                <div className="relative mb-6 md:mb-8 flex items-center justify-center">
                  
                  {/* Floating Tech Labels */}
                  <FloatingLabels labels={labels} />

                  <div className={"relative w-full overflow-hidden bg-[#0a0a0a] "}>
                    <Image
                      src={product.image}
                      alt={product.alt || product.name}
                      fill
                      className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.015] filter grayscale-[15%] group-hover:grayscale-0"
                      sizes={isFeatured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 33vw"}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] tracking-widest text-stone-500 opacity-70">DA.{numberString}</span>
                    <h3 className={" font-light text-stone-100 tracking-tight leading-snug"}>
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4 mt-2">
                    <p className="text-sm font-light text-stone-400 max-w-sm leading-relaxed text-balance">
                      {product.desc}
                    </p>
                    <div className="flex items-center gap-2 group/cta cursor-pointer text-[11px] uppercase tracking-widest text-stone-400 hover:text-stone-100 transition-colors duration-500 w-max mt-2">
                      XEM CHI TIẾT
                      <span className="transform transition-transform duration-500 md:group-hover:translate-x-1">&#8594;</span>
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