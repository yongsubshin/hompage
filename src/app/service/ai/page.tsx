"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Code, Layers, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AiTrainingPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">{t.service.aiTraining.title}</h1>
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
            <span className="text-accent-cyan">{t.service.aiTraining.title}</span>
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
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-secondary leading-relaxed text-center max-w-4xl mx-auto">
                {t.service.aiTraining.description}
              </p>
            </div>

            {/* Training Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-surface rounded-2xl border border-border p-6 text-center hover:border-accent-cyan/50 transition-colors"
              >
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent-cyan" />
                </div>
                <h4 className="font-bold mb-2 text-white">AI Agent Design</h4>
                <p className="text-text-secondary text-sm">SDV 환경에 최적화된 AI Agent 아키텍처 설계</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-surface rounded-2xl border border-border p-6 text-center hover:border-accent-cyan/50 transition-colors"
              >
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-accent-cyan" />
                </div>
                <h4 className="font-bold mb-2 text-white">Hands-on Practice</h4>
                <p className="text-text-secondary text-sm">실제 개발 환경에서의 구현 실습</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-surface rounded-2xl border border-border p-6 text-center hover:border-accent-cyan/50 transition-colors"
              >
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-accent-cyan" />
                </div>
                <h4 className="font-bold mb-2 text-white">Standards Compliance</h4>
                <p className="text-text-secondary text-sm">AUTOSAR, MISRA 등 차량용 표준 기반</p>
              </motion.div>
            </div>

            {/* Training Scope */}
            <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold mb-6 text-white">{t.service.aiTraining.scope}</h3>
              <div className="grid md:grid-cols-1 gap-4">
                {t.service.aiTraining.scopeList.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                    <p className="text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-surface rounded-2xl border border-border p-8 text-center">
              <p className="text-text-secondary mb-6">
                {t.service.aiTraining.contactInfo}
              </p>
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
