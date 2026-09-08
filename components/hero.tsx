"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ data, links }: { data: any, links: { facebook: string, zalo: string } }) {

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-stone-50/80 to-white" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(62 49 43 / 1) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="section-label">Kỹ nghệ &amp; Giải pháp</span>
            <h1 className="section-title text-balance">{data.headline}</h1>
            <p className="section-desc mt-6 text-lg leading-relaxed">{data.subheadline}</p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {data.ctaFacebook}
              </a>
              <a href={links.zalo} target="_blank" rel="noopener noreferrer" className="btn-outline">
                {data.ctaZalo}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200 shadow-2xl">
              <Image src={data.image} alt="Z Flip 5 x BlackBerry Porsche Design" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
