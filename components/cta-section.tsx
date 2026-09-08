"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";

export default function CtaSection() {
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
          <h2 className="section-title mt-4">Sẵn sàng trải nghiệm cùng Mixed Technology?</h2>
          <p className="section-desc mx-auto mt-4">
            Dù bạn đang tìm kiếm giải pháp phần mềm tối ưu cho thiết bị gập,
            hay một tác phẩm độ máy độc bản — Mixed Technology luôn sẵn sàng đồng hành cùng bạn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
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
            Kết bạn Zalo
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
