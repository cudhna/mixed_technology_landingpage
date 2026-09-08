"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LauncherSection({ data, links }: { data: any; links: any }) {
  return (
    <section id="launcher" className="relative py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="section-label">Phần mềm cốt lõi</span>
          <h2 className="section-title">{data.title}</h2>
          <p className="section-desc mx-auto">{data.description}</p>
        </motion.div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative p-2 bg-white shadow-[0_20px_40px_rgb(0,0,0,0.06)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-stone-100">
              <Image src={data.image} alt="9flip Launcher trên màn hình ngoài" fill className="object-cover transition-transform duration-1000 hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <ul className="space-y-6">
              {data.features.map((feature: any, i: number) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="group flex items-start gap-6 cursor-default"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-stone-50 border border-stone-100 text-xl transition-all duration-500 group-hover:bg-gold-50 group-hover:border-gold-200">
                    {feature.icon}
                  </span>
                  <span className="pt-2 text-base font-light leading-relaxed text-stone-600 transition-colors duration-500 group-hover:text-stone-900">
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-4">
                {data.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
