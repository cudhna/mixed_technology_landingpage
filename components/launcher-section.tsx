"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LauncherSection({ data, links }: { data: any; links: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="9flip" className="relative py-32 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-4 mb-32">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">02 / 9FLIP</span>
          <div className="h-px bg-stone-800 flex-grow" />
        </div>

        {/* Massive Typography & Hero */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="text-[10vw] md:text-[8vw] font-light tracking-tighter leading-none text-stone-50 uppercase">
            {data.title || "9FLIP LAUNCHER"}
          </h2>
        </div>

        {/* Giant Mockup with Annotations */}
        <div className="relative w-full aspect-[4/5] md:aspect-[21/9] bg-[#0a0a0a] flex items-center justify-center">
          {/* Main Device Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full md:w-[60%] h-full z-10"
          >
            <Image 
              src={data.image} 
              alt="9flip Launcher Mockup" 
              fill 
              className="object-contain filter grayscale-[10%] drop-shadow-2xl" 
              sizes="(max-width: 768px) 100vw, 60vw" 
              priority
            />
          </motion.div>

          {/* Annotations layer */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="absolute inset-0 z-20 hidden md:block pointer-events-none"
          >
            {/* Top Left Annotation */}
            <motion.div variants={itemVariants} className="absolute top-[20%] left-[10%] w-[30%] flex flex-col items-end gap-2 text-right">
              <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest border border-stone-800 px-2 py-1">SYS.OP</div>
              <p className="text-xs text-stone-400 font-light max-w-[200px] leading-relaxed">
                {data.features?.[0]?.text || "Optimized core logic designed for uninterrupted workflows."}
              </p>
              {/* Connecting line */}
              <div className="absolute top-1/2 -right-[60%] w-[50%] h-px bg-stone-800" />
            </motion.div>

            {/* Bottom Right Annotation */}
            <motion.div variants={itemVariants} className="absolute bottom-[20%] right-[10%] w-[30%] flex flex-col items-start gap-2">
              <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest border border-stone-800 px-2 py-1">UX.INT</div>
              <p className="text-xs text-stone-400 font-light max-w-[200px] leading-relaxed">
                {data.features?.[1]?.text || "Gestural interface mapping mapped strictly to human intuition."}
              </p>
              {/* Connecting line */}
              <div className="absolute top-1/2 -left-[60%] w-[50%] h-px bg-stone-800" />
            </motion.div>
            
            {/* Top Right Annotation */}
            <motion.div variants={itemVariants} className="absolute top-[10%] right-[15%] w-[25%] flex flex-col items-start gap-2">
               <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest border border-stone-800 px-2 py-1">PERF.MAX</div>
               {/* Connecting line vertical */}
              <div className="absolute top-[120%] left-[20%] w-px h-[100px] bg-stone-800" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Technical Features Fallback */}
        <div className="grid grid-cols-1 md:hidden gap-8 mt-12 border-t border-stone-800 pt-12">
          {data.features.map((feature: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <div className="text-[10px] font-mono text-stone-500 uppercase tracking-widest border border-stone-800 px-2 py-1 w-max">SPEC.{String(i + 1).padStart(2, '0')}</div>
              <p className="text-sm font-light text-stone-400 leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="border-b border-stone-600 pb-1 text-[10px] font-mono uppercase tracking-widest text-stone-300 hover:text-stone-50 transition-colors">
            {data.cta || "INSTALL CORE"} &#8594;
          </a>
        </div>

      </div>
    </section>
  );
}
