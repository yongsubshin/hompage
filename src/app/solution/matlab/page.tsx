"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MatlabPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">{t.solution.matlab.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/solution" className="text-text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.solution}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.solution.matlab.title}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              {t.solution.matlab.pageTitle}
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.solution.matlab.text1}
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                {t.solution.matlab.text2}
              </p>
            </div>

            {/* Limitations */}
            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-6 rounded-r-lg mb-12">
              <h4 className="font-bold text-amber-400 mb-4">MATLAB & Simulink AUTOSAR Blockset</h4>
              <p className="text-text-secondary mb-4">{t.solution.matlab.limitations}</p>
              <ul className="space-y-2 text-text-secondary">
                {t.solution.matlab.limitationItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-amber-400">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.solution.matlab.text3}
              </p>
            </div>

            {/* Architecture Image */}
            <div className="bg-surface rounded-2xl border border-border p-8 mb-8">
              <Image
                src="/images/contents/solution_05.png"
                alt="MATLAB & Simulink Integration"
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />
            </div>

            <div className="bg-accent-cyan/10 rounded-2xl p-6 text-center">
              <p className="text-accent-cyan font-medium">
                {t.solution.matlab.recommendation}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
