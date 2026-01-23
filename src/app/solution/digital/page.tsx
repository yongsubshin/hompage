"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DigitalTwinPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">{t.solution.digitalTwin.title}</h1>
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
            <span className="text-accent-cyan">{t.solution.digitalTwin.title}</span>
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
              {t.solution.digitalTwin.pageTitle}
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.solution.digitalTwin.text1}
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                {t.solution.digitalTwin.text2}
              </p>

              <p className="text-text-secondary leading-relaxed mb-6">
                {t.solution.digitalTwin.text3}
              </p>

              <p className="text-text-secondary leading-relaxed">
                {t.solution.digitalTwin.text4}
              </p>
            </div>

            {/* Architecture Image */}
            <div className="bg-surface rounded-2xl border border-border p-8">
              <Image
                src="/images/contents/solution_03.png"
                alt="Digital Twin Architecture"
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
