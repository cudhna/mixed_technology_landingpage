"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ImageBreak({ image }: { image: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(scrollYProgress, [0, 0.5, 1], ["inset(20% 10% 20% 10%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);

  return (
    <section ref={ref} className="relative w-full h-[70vh] md:h-[90vh] bg-[#0a0a0a] overflow-hidden flex items-center justify-center">
      <motion.div style={{ clipPath }} className="relative w-full h-full">
        <Image 
          src={image} 
          alt="Image Break" 
          fill 
          className="object-cover filter grayscale-[30%] contrast-125" 
          sizes="100vw" 
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/30" />
      </motion.div>
      <div className="absolute bottom-8 left-4 md:left-8 z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">MIXED TECHNOLOGY / OBJECT 002</span>
      </div>
    </section>
  );
}
