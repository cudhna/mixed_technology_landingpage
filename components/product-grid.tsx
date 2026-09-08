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
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group cursor-pointer hover:-translate-y-2 transition-all duration-700"
            >
              <div className="greeting-card shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                <div className="greeting-card-inner">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                    <Image src={product.image} alt={product.alt} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                    <div className="absolute inset-0 bg-brand-950/0 transition-colors duration-700 group-hover:bg-brand-950/10" />
                  </div>
                  <div className="bg-white p-8 text-center transition-all duration-700 group-hover:bg-stone-50">
                    <h3 className="font-display text-xl text-stone-900">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-stone-500">
                      {product.desc}
                    </p>
                    <a
                      href={LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] text-gold-600 transition-colors hover:text-gold-700 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-500"
                    >
                      Chi tiết <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
