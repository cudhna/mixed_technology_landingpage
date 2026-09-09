"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const orbitLabels = ["PREMIUM", "LIMITED", "ARTISAN", "EXCLUSIVE", "MADE"];

function OrbitingLabels({ count, radius, speed, color }: { count: number; radius: number; speed: number; color: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const labels = containerRef.current?.children;
    if (!labels || labels.length === 0) return;
    let animId = 0;
    let t = 0;

    const animate = () => {
      t += speed;
      for (let i = 0; i < labels.length; i++) {
        const el = labels[i] as HTMLElement;
        if (el) {
          const angle = t + (i * Math.PI * 2) / labels.length;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * 0.6 + Math.sin(t * 0.7 + i) * radius * 0.3;
          el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
          el.style.opacity = String(0.4 + Math.sin(t + i * 1.5) * 0.3);
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [count, radius, speed]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      {orbitLabels.slice(0, count).map((text, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            fontSize: "9px",
            fontFamily: "monospace",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: color,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
}

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <section id="work" className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-4 md:px-8">
          <div className="mb-16 md:mb-24 opacity-60">
            <span className="text-[11px] uppercase tracking-widest text-stone-400">01 / Dự án</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-4 md:gap-x-12 gap-y-16 md:gap-y-32">
            {products.map((product: any, index: number) => {
              const isFeatured = index === 0;
              const numberString = (index + 1).toString().padStart(2, "0");

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

              const orbitR = 80 + (index % 3) * 20;
              const speed = 0.015 + index * 0.003;

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex flex-col ${gridClass}`}
                >
                  <div className="relative mb-6 md:mb-8">
                    <div className={`overflow-hidden bg-[#0f0f0f] ${aspectClass}`}>
                      <Image
                        src={product.image}
                        alt={product.alt || product.name}
                        fill
                        className="object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-[1.015] filter grayscale-[15%] group-hover:grayscale-0"
                        sizes={isFeatured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 50vw, 33vw"}
                      />
                    </div>
                    {/* Orbiting labels — around the image, not inside */}
                    <OrbitingLabels count={5} radius={orbitR} speed={speed} color="rgba(255,255,255,0.12)" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] tracking-widest text-stone-500 opacity-70">DA.{numberString}</span>
                      <h3 className={`${isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} font-light text-stone-100 tracking-tight leading-snug`}>
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
    </>
  );
}
