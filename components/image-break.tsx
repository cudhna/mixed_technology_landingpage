"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ImageBreak({ image, label }: { image: string, label?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

  return (
    <section ref={ref} className="relative w-full h-[70vh] md:h-[90vh] bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ scale }}
        className="relative w-full h-full"
      >
        <Image 
          src={image} 
          alt="Mixed Technology Detail" 
          fill 
          className="object-cover object-center filter grayscale-[30%] contrast-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/10 mix-blend-overlay" />
      </motion.div>

      {label && (
        <div className="absolute bottom-8 right-8 z-10 opacity-70">
          <span className="text-[10px] uppercase tracking-widest text-stone-500 bg-[#0a0a0a]/50 px-2 py-1 backdrop-blur-sm">
            {label}
          </span>
        </div>
      )}
    </section>
  );
}
