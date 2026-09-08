"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LINKS } from "@/lib/constants";

export default function ProductGrid({ products }: { products: any[] }) {
  return (
    <section id="products" className="relative py-24 sm:py-32 lg:py-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="section-label">Bộ sưu tập</span>
          <h2 className="section-title">Tác phẩm độc bản</h2>
          <p className="section-desc mx-auto">
            Mỗi sản phẩm là một hành trình sáng tạo — từ phác thảo đến thành phẩm hoàn chỉnh.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="group h-full overflow-hidden border border-stone-200 bg-white transition-all duration-500 hover:border-gold-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <Image src={product.image} alt={product.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-stone-950 group-hover:text-gold-600">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {product.desc}
                  </p>
                  <a
                    href={LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-[0.15em] text-gold-600 transition-colors hover:text-gold-700"
                  >
                    Xem chi tiết <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
