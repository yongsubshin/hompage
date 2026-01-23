"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, CheckCircle, Layers, FileSearch } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ParvisAgentPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">{t.solution.parvisAgent.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-text-tertiary">/</span>
            <Link href="/solution" className="text-text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.solution}</Link>
            <span className="text-text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.solution.parvisAgent.title}</span>
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
              {t.solution.parvisAgent.pageTitle}
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-secondary leading-relaxed mb-6">
                PARVIS(PopcornSAR Adaptive & Classic Runtime Vehicle Intelligence System)는 요구사항 분석부터 코드 리팩토링, 문서화, 품질 검증까지
                마이그레이션 전 과정을 자동화하는 지능형 개발 지원 플랫폼입니다.
                PopcornSAR의 독자적 AI 기술을 바탕으로, 수작업 중심의 개발 프로세스를 AI 주도형 V-Model로 전환하여 효율성과 정확성을 극대화합니다.
              </p>
              <p className="text-text-secondary leading-relaxed">
                각 AI Agent는 개발 단계별로 특화된 기능을 수행하며, 전체적으로는 &quot;요구사항 → 코드 → 리팩토링 → 문서화 → 검증&quot;으로 이어지는 순환형 자동화 체계를 구성합니다.
                이를 통해 사용자는 반복적이고 비효율적인 수작업 없이 분석·개선·검증이 가능한 고도화된 자동화 워크플로우를 구현할 수 있습니다.
              </p>
            </div>

            {/* AI Agent Components */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">PopcornSAR AI Agent</h3>

              <div className="grid md:grid-cols-3 gap-8">
                {/* PARVIS-Spec */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-surface rounded-2xl border border-border p-6 hover:border-accent-cyan/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-4">
                    <FileSearch className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h4 className="text-lg font-bold text-accent-cyan mb-3">1. PARVIS-Spec</h4>
                  <p className="text-sm text-text-tertiary mb-4">(Excel / PDF / Code)</p>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      문서 및 코드에서 요구사항 자동 추출
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Traceability 확보
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      다양한 파일 형식 간 통합 분석
                    </li>
                  </ul>
                </motion.div>

                {/* PARVIS-Coder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-surface rounded-2xl border border-border p-6 hover:border-accent-cyan/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h4 className="text-lg font-bold text-accent-cyan mb-3">2. PARVIS-Coder</h4>
                  <p className="text-sm text-text-tertiary mb-4">(MISRA / Doxygen)</p>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      MISRA 규칙 기반 코드 정제 및 자동 수정
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Magic Number, const 처리, 초기화 누락 등 리팩토링
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      주석 자동 추가 및 Doxygen 문서 자동 생성
                    </li>
                  </ul>
                </motion.div>

                {/* PARVIS-Verify */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-surface rounded-2xl border border-border p-6 hover:border-accent-cyan/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h4 className="text-lg font-bold text-accent-cyan mb-3">3. PARVIS-Verify</h4>
                  <ul className="space-y-2 text-sm text-text-secondary mt-8">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      산출된 코드 및 문서의 품질 검증
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      V-Model 단계별 결과 자동 평가
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      HTML 리포트 기반 시각적 검증 결과 제공
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">도입 효과</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <p className="text-text-secondary">요구사항, 코드, 문서 간 완전한 End-to-End 추적성 확보</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <p className="text-text-secondary">MISRA 표준 자동 준수로 소프트웨어 품질과 안정성 향상</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <p className="text-text-secondary">수작업 대비 검증·문서화 시간 70% 이상 단축</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" />
                  <p className="text-text-secondary">AI 기반 순환형 품질 관리(Closed-loop Quality) 구현</p>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-white">주요 산출물</h3>
              <div className="bg-surface rounded-2xl border border-border overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-surface">
                      <th className="py-4 px-6 text-left font-semibold text-white">구분</th>
                      <th className="py-4 px-6 text-left font-semibold text-white">산출물 예시</th>
                      <th className="py-4 px-6 text-left font-semibold text-white">설명</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-t border-border">
                      <td className="py-4 px-6 font-medium text-white">요구사항</td>
                      <td className="py-4 px-6">요구사항 추적 문서</td>
                      <td className="py-4 px-6">문서 기반 요구사항 자동 추출</td>
                    </tr>
                    <tr className="border-t border-border bg-surface/50">
                      <td className="py-4 px-6 font-medium text-white">코드 품질</td>
                      <td className="py-4 px-6">MISRA 리팩토링 코드</td>
                      <td className="py-4 px-6">MISRA-C 리팩토링 결과</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="py-4 px-6 font-medium text-white">문서화</td>
                      <td className="py-4 px-6">API 문서 (HTML)</td>
                      <td className="py-4 px-6">Doxygen 문서 자동 생성 결과</td>
                    </tr>
                    <tr className="border-t border-border bg-surface/50">
                      <td className="py-4 px-6 font-medium text-white">검증</td>
                      <td className="py-4 px-6">품질 검증 리포트</td>
                      <td className="py-4 px-6">품질 점검 및 자동 리포트</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
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
