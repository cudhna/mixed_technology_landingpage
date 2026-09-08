"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LINKS } from "@/lib/constants";

const features = [
  {
    icon: "🔒",
    text: "100% No-Root — giữ nguyên bảo hành, Knox nguyên vẹn",
  },
  {
    icon: "📱",
    text: "Có sẵn trên Google Play — cài đặt an toàn, vài phút là dùng được",
  },
  {
    icon: "⭐",
    text: "Premium theo tài khoản Google — lên đời máy vẫn dùng tiếp",
  },
  {
    icon: "👥",
    text: "Cộng đồng người dùng đông đảo, liên tục cập nhật",
  },
];

export default function LauncherSection() {
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
          <h2 className="section-title">Mở khóa trọn vẹn màn hình ngoài Galaxy Z Flip</h2>
          <p className="section-desc mx-auto">
            Tự động hiển thị và mở hầu hết ứng dụng ngay trên màn ngoài, phản chiếu màn trong
            linh hoạt — không cần Root, không quảng cáo, không thu thập dữ liệu.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden bg-stone-100 shadow-2xl border border-stone-200"
          >
            <Image
              src="/images/launcher-mockup.jpg"
              alt="9flip Launcher trên màn hình ngoài"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <ul className="space-y-5">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-stone-50 border border-stone-200 text-lg">
                    {feature.icon}
                  </span>
                  <span className="text-base leading-relaxed text-brand-700">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block mt-8"
            >
              Tìm hiểu thêm trên Fanpage
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
