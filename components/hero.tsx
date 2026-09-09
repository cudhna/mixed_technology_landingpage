"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useLanguage } from "./language-provider";

const TerminalText = ({ text, reducedMotion }: { text: string, reducedMotion: boolean | null }) => {
  if (reducedMotion) {
    return <span>{text}</span>;
  }
  
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.03 } }
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, display: "none" },
            visible: { opacity: 1, display: "inline" }
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transition: { delay: text.length * 0.03 + 0.5, duration: 0.2 } }}
        className="inline-block w-2 h-6 md:h-10 bg-stone-500 ml-1 align-middle"
      />
    </motion.span>
  );
};

export default function Hero() {
  const { t, images } = useLanguage();
  const data = t.hero;
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.015]);
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // Ambient scanning line
  const ScanLine = () => {
    if (shouldReduceMotion) return null;
    return (
      <motion.div 
        className="absolute left-0 right-0 h-px bg-stone-500/20 z-30"
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, ease: "linear", times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 6 }}
      />
    );
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-[100svh] bg-[#0a0a0a] pt-[72px] pb-16 md:pb-32 flex flex-col justify-center overflow-hidden">
      <div className="relative z-20 mx-auto w-full max-w-[90rem] px-4 md:px-8 flex flex-col flex-grow py-8 md:py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center flex-grow">
          
          <div className="col-span-1 md:col-span-5 flex flex-col order-2 md:order-1 pt-4 md:pt-0">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-sm font-semibold tracking-widest text-stone-500 mb-4 md:mb-6"
            >
              MIXED TECHNOLOGY
            </motion.span>
            
            <h1 className={`font-medium text-stone-100 leading-[1.2] tracking-tight ${data.headlineFontSize || "text-3xl md:text-5xl"} mb-6 md:mb-8 text-balance min-h-[3em]`}>
              {mounted ? <TerminalText text={data.headline} reducedMotion={shouldReduceMotion} /> : data.headline}
            </h1>
            
            <div className="flex flex-col gap-8 md:gap-12">
              <motion.p 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 1.5, ease: "easeOut" }}
                className="text-base md:text-lg text-stone-400 leading-relaxed max-w-md"
              >
                {data.subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 1.7, ease: "easeOut" }}
              >
                <a 
                  href="#launcher"
                  className="group flex items-center justify-center w-full md:w-max px-8 py-4 bg-stone-100 text-[#0a0a0a] font-medium text-sm tracking-wide hover:bg-stone-300 transition-colors duration-300"
                >
                  {data.cta}
                </a>
              </motion.div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-7 relative order-1 md:order-2 flex items-center justify-center">
            <motion.div
              style={{ scale: shouldReduceMotion ? 1 : imageScale, opacity: shouldReduceMotion ? 1 : imageOpacity }}
              className="relative w-full max-w-xl mx-auto p-4 md:p-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 border border-stone-800/40 bg-stone-900/10 pointer-events-none z-10 overflow-hidden">
                 {mounted && <ScanLine />}
                 <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-stone-500/50" style={{ marginLeft: '-1px', marginTop: '-1px' }} />
                 <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-stone-500/50" style={{ marginRight: '-1px', marginTop: '-1px' }} />
                 <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-stone-500/50" style={{ marginLeft: '-1px', marginBottom: '-1px' }} />
                 <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-stone-500/50" style={{ marginRight: '-1px', marginBottom: '-1px' }} />
                 
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   <div className="w-px h-full bg-stone-600" />
                   <div className="h-px w-full bg-stone-600 absolute" />
                 </div>
              </div>

              <div className="relative w-full z-20" style={{ aspectRatio: data.heroImageAspectRatio || "var(--hero-image-aspect-ratio, 3/4)" }}>
                <Image 
                  src={images.hero} 
                  alt="Mixed Technology Product" 
                  fill 
                  className="object-contain filter grayscale-[15%] contrast-105 drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out'
                  }}
                  onLoadingComplete={(img) => img.style.opacity = '1'}
                />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}