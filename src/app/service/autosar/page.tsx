"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AutosarServicePage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">{t.service.autosar.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/service" className="text-text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.service}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.service.autosar.title}</span>
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
            <h2 className="text-3xl font-bold text-center mb-8 text-white">{t.service.autosar.pageTitle}</h2>
            <p className="text-center text-text-secondary max-w-3xl mx-auto mb-12">
              {t.service.autosar.description}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-surface rounded-2xl border border-border p-8 hover:border-accent-cyan/50 transition-colors">
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-cyan">1</span>
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">ARXML Design</h4>
                <p className="text-text-secondary text-sm">
                  AUTOSAR 표준에 맞는 ARXML 설계 및 구현 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-8 hover:border-accent-cyan/50 transition-colors">
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-cyan">2</span>
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">SW Component Development</h4>
                <p className="text-text-secondary text-sm">
                  Adaptive AUTOSAR SW Component 개발 서비스를 제공합니다.
                </p>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-8 hover:border-accent-cyan/50 transition-colors">
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-cyan">3</span>
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">System Integration</h4>
                <p className="text-text-secondary text-sm">
                  전체 시스템 통합 및 검증 서비스를 제공합니다.
                </p>
              </div>
            </div>

            <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold mb-6 text-white">Service Scope</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <p className="text-text-secondary">Adaptive Platform 기반 ECU SW 개발</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <p className="text-text-secondary">SOME/IP 통신 구현</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <p className="text-text-secondary">Diagnostic 기능 구현</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <p className="text-text-secondary">OTA Update 기능 구현</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/support/qna"
                className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors"
              >
                {t.service.consulting.contact}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
