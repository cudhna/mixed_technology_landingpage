"use client";

import { motion } from "framer-motion";

export default function CtaSection({ data, links }: { data: any; links: any }) {
  return (
    <section id="cta" className="relative py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-stone-50" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="section-label">Tham gia cộng đồng</span>
          <h2 className="section-title mt-4">{data.title}</h2>
          <p className="section-desc mx-auto mt-4">{data.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {data.ctaFacebook}
          </a>
          <a href={links.zalo} target="_blank" rel="noopener noreferrer" className="btn-outline">
            {data.ctaZalo}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
