"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="story" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 bg-brand-950" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] overflow-hidden bg-stone-800 shadow-2xl"
          >
            <Image
              src="/images/story.jpg"
              alt="Quá trình làm việc tại Mixed Technology"
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
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Câu chuyện thương hiệu
            </span>
            <h2 className="font-display text-3xl font-normal leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Mỗi dự án đều bắt đầu từ rất nhiều bản phác thảo trước khi có
              một sản phẩm hoàn chỉnh. Chúng tôi tin rằng công nghệ hoàn mỹ nhất
              là công nghệ mang lại sự tự do và tiện lợi tối đa cho người dùng —
              dù đó là một dòng code tối ưu hay một đường phay CNC tinh xảo.
            </h2>
            <p className="text-lg font-light leading-relaxed text-stone-300">
              Tại Mixed Technology, chúng tôi không chỉ tạo ra sản phẩm — chúng tôi kiến tạo
              trải nghiệm. Từ phần mềm tối ưu cho thiết bị di động đến từng tác phẩm độ máy
              thủ công tỉ mỉ, mỗi chi tiết đều được chăm chút đến hoàn thiện.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-8">
                <div>
                  <p className="font-display text-4xl font-normal text-white">6+</p>
                  <p className="text-sm font-light text-stone-400 mt-1">Năm kinh nghiệm</p>
                </div>
                <div className="w-px h-12 bg-stone-800" />
                <div>
                  <p className="font-display text-4xl font-normal text-white">50+</p>
                  <p className="text-sm font-light text-stone-400 mt-1">Dự án hoàn thành</p>
                </div>
                <div className="w-px h-12 bg-stone-800" />
                <div>
                  <p className="font-display text-4xl font-normal text-white">2k+</p>
                  <p className="text-sm font-light text-stone-400 mt-1">Khách hàng tin tưởng</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
