"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ConsultingPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contents/sub_visual03.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{t.service.consulting.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/service" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.service}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.service.consulting.title}</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">{t.service.consulting.pageTitle}</h2>
                <p className="text-text-secondary leading-relaxed mb-8">
                  {t.service.consulting.description}
                </p>

                {/* For OEM */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-accent-cyan mb-4">{t.service.consulting.forOem}</h3>
                  <ul className="space-y-2 text-text-secondary">
                    {t.service.consulting.forOemList.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent-cyan">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For ECU Supplier */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-accent-cyan mb-4">{t.service.consulting.forTier1}</h3>
                  <ul className="space-y-2 text-text-secondary">
                    {t.service.consulting.forTier1List.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent-cyan">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/support/qna"
                  className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors"
                >
                  {t.service.consulting.contact}
                </Link>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-8">
                <Image
                  src="/images/contents/consulting.png"
                  alt="Consulting Service"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
