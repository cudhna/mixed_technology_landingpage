"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LINKS } from "@/lib/constants";

export default function Hero() {
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
            <h1 className="section-title text-balance">
              Kết tinh giữa kỹ nghệ phần cứng và giải pháp phần mềm tối ưu
            </h1>
            <p className="section-desc mt-6 text-lg leading-relaxed">
              Mixed Technology — nơi những chiếc điện thoại gập được khai phá trọn vẹn
              tiềm năng, từ phần mềm tối ưu đến từng tác phẩm độ máy thủ công.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Nhắn tin Fanpage
              </a>
              <a
                href={LINKS.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Liên hệ Zalo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="Z Flip 5 x BlackBerry Porsche Design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-8 shadow-2xl lg:hidden border border-stone-100">
              <p className="text-sm font-semibold text-brand-950">
                Z Flip 5 x BlackBerry 9981/9983
              </p>
              <p className="text-xs text-brand-600">Tác phẩm độc bản</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
