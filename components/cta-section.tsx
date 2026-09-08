"use client";

import { motion } from "framer-motion";

export default function CtaSection({ data, links }: { data: any; links: any }) {
  return (
    <section id="cta" className="relative py-32 sm:py-40 lg:py-48">
      <div className="absolute inset-0 bg-stone-100" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-white p-12 sm:p-20 shadow-[0_30px_60px_rgb(0,0,0,0.05)] border border-stone-50"
        >
          <div className="mx-auto max-w-2xl border border-stone-200 p-8 sm:p-12">
            <span className="section-label mx-auto justify-center text-center">
              Tham gia cộng đồng
            </span>
            <h2 className="section-title mt-8">{data.title}</h2>
            <p className="section-desc mx-auto mt-6 text-center">{data.description}</p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {data.ctaFacebook}
              </a>
              <a href={links.zalo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {data.ctaZalo}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
