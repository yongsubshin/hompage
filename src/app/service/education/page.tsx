"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Users, Monitor, Code } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function EducationPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">{t.service.education.title}</h1>
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
            <span className="text-accent-cyan">{t.service.education.title}</span>
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
              <p className="text-text-secondary leading-relaxed text-center max-w-3xl mx-auto">
                {t.service.education.description}
              </p>
            </div>

            {/* Training Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-surface rounded-2xl border border-border p-6 text-center hover:border-accent-cyan/50 transition-colors"
              >
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent-cyan" />
                </div>
                <h4 className="font-bold mb-2 text-white">Theory</h4>
                <p className="text-text-secondary text-sm">AUTOSAR 표준 및 아키텍처 이해</p>
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
                <h4 className="font-bold mb-2 text-white">Practice</h4>
                <p className="text-text-secondary text-sm">{t.service.education.toolsDesc}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-surface rounded-2xl border border-border p-6 text-center hover:border-accent-cyan/50 transition-colors"
              >
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent-cyan" />
                </div>
                <h4 className="font-bold mb-2 text-white">On-site</h4>
                <p className="text-text-secondary text-sm">고객사 방문 맞춤형 교육</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-surface rounded-2xl border border-border p-6 text-center hover:border-accent-cyan/50 transition-colors"
              >
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-accent-cyan" />
                </div>
                <h4 className="font-bold mb-2 text-white">Online</h4>
                <p className="text-text-secondary text-sm">원격 교육 지원</p>
              </motion.div>
            </div>

            {/* Training Scope */}
            <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold mb-6 text-white">{t.service.education.scope}</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan">-</span>
                  AUTOSAR Adaptive Platform 개요 및 아키텍처
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan">-</span>
                  Functional Clusters 이해 및 활용
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan">-</span>
                  Manifest 설계 및 코드 생성
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan">-</span>
                  Adaptive Application 개발 실습
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-cyan">-</span>
                  SOME/IP 통신 구현
                </li>
              </ul>
            </div>

            {/* Training Tools */}
            <div className="bg-surface border border-border rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold mb-6 text-white">{t.service.education.tools}</h3>
              <p className="text-text-secondary">- {t.service.education.toolsDesc}</p>
              <ul className="mt-4 space-y-2 text-text-secondary ml-4">
                <li>AutoSAR.io</li>
                <li>PARA</li>
                <li>PACON IDE</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-surface rounded-2xl border border-border p-8 text-center">
              <p className="text-text-secondary mb-6">
                {t.service.education.contactInfo}
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
