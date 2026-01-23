"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
export default function ParvisPage() {

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contents/sub_visual02.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">PARVIS</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-text-secondary hover:text-accent-cyan">Home</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/products" className="text-text-text-secondary hover:text-accent-cyan">PRODUCTS</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">PARVIS</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                PARVIS <span className="text-lg font-normal text-text-text-secondary">(PopcornSAR Adaptive & Classic Runtime Vehicle Intelligence System)</span>
              </h2>
              <p className="text-xl text-accent-cyan">AI 기반 차량 소프트웨어 개발 산출물 자동화</p>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-text-text-secondary leading-relaxed mb-6">
                ASPICE는 자동차 소프트웨어 개발 과정의 품질과 안전성을 체계적으로 관리하기 위한 평가 모델로, 최근 차량 제조사와 주요 협력사에서 프로젝트 품질 확보의 핵심 기준으로 활용되고 있습니다. 하지만 방대한 문서 작성과 검증 단계로 인해 개발 기간이 길고 인력 의존도가 높다는 한계가 있습니다.
              </p>
              <p className="text-text-text-secondary leading-relaxed">
                PopcornSAR는 이러한 비효율을 개선하기 위해 AI 기반 차량 소프트웨어 개발 산출물 자동화 제품을 개발했습니다. 설계, 개발, 검증의 전 과정을 하나의 데이터 흐름으로 연결하여 반복 작업을 최소화하고, ASPICE 프로세스에 부합하는 문서·코드·테스트 산출물을 자동으로 생성함으로써 품질과 생산성을 동시에 향상시킬 수 있습니다.
              </p>
            </div>

            {/* PARVIS Modules */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">
                AI를 활용한 차량 소프트웨어 개발의 설계, 개발, 검증까지 전 과정에서 활용 가능한 ASPICE 산출물 자동 생성
              </h3>
              <p className="text-text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                본 제품은 설계(PARVIS-Spec), 개발(PARVIS-Coder), 검증(PARVIS-Verify)의 3단계를 하나로 연결하여, 사람의 의사결정은 유지하면서 반복적이고 정형화된 작업을 AI가 자동 처리하도록 설계되었습니다.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* PARVIS-Spec */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-surface rounded-2xl border border-border p-8 hover:border-accent-cyan/50 transition-colors"
                >
                  <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-accent-cyan">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent-cyan mb-4">PARVIS-Spec</h4>
                  <p className="text-text-text-secondary text-sm">
                    사양서를 자동 분석하여 요구사항을 구조화하고, 요구사항-코드-테스트 간 추적성 매트릭스를 자동 생성합니다. AI 기반의 자연어 해석 엔진이 문서의 의미를 분석해 기술적 요구사항을 자동 추출하며, 반복적인 문서 분석 작업을 최소화합니다.
                  </p>
                </motion.div>

                {/* PARVIS-Coder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-surface rounded-2xl border border-border p-8 hover:border-accent-cyan/50 transition-colors"
                >
                  <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-accent-cyan">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent-cyan mb-4">PARVIS-Coder</h4>
                  <p className="text-text-text-secondary text-sm">
                    Code Safety 자동화와 API 문서 자동 생성을 통해 개발 산출물의 품질과 일관성을 보장합니다. AI 리팩토링 알고리즘이 MISRA-C 및 내부 코딩 규칙을 자동 적용하고, 주석 기반의 API 문서를 동시 생성합니다.
                  </p>
                </motion.div>

                {/* PARVIS-Verify */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-surface rounded-2xl border border-border p-8 hover:border-accent-cyan/50 transition-colors"
                >
                  <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-accent-cyan">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-accent-cyan mb-4">PARVIS-Verify</h4>
                  <p className="text-text-text-secondary text-sm">
                    테스트 커버리지 분석과 테스트 코드 자동 생성을 수행하여 검증 단계를 체계적으로 가속화합니다. 테스트 요구사항을 기반으로 시나리오를 자동 생성하고, 코드 변경 이력을 반영하여 커버리지를 지속적으로 업데이트합니다.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-surface rounded-2xl border border-border p-8 mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-white">성과 지표 (PERFORMANCE)</h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">40% → 94%</p>
                  <p className="text-text-text-secondary">MISRA-C 준수율</p>
                  <p className="text-sm text-green-400">+54%</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">5% → 100%</p>
                  <p className="text-text-text-secondary">문서화 커버리지</p>
                  <p className="text-sm text-green-400">+95%</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">0% → 86.4%</p>
                  <p className="text-text-text-secondary">테스트 커버리지</p>
                  <p className="text-sm text-green-400">+86%</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">3~4배</p>
                  <p className="text-text-text-secondary">업무 효율성 상승</p>
                  <p className="text-sm text-green-400">기존 대비</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-white">핵심 가치</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 bg-surface rounded-xl p-6 border border-border">
                  <CheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-white">오류 감소</h4>
                    <p className="text-text-text-secondary text-sm">AI 기반 자동화로 휴먼 에러를 최소화하고 코드 품질을 향상시킵니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface rounded-xl p-6 border border-border">
                  <CheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-white">호출 효율화</h4>
                    <p className="text-text-text-secondary text-sm">최적화된 API 호출 구조로 처리 속도를 향상시킵니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface rounded-xl p-6 border border-border">
                  <CheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-white">토큰 절감</h4>
                    <p className="text-text-text-secondary text-sm">효율적인 데이터 처리로 운영 비용을 절감합니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-surface rounded-xl p-6 border border-border">
                  <CheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2 text-white">더 나은 사용성</h4>
                    <p className="text-text-text-secondary text-sm">직관적인 인터페이스와 워크플로우로 개발 생산성을 극대화합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration */}
            <div className="bg-surface rounded-2xl border border-border p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">AutoSAR.io 및 PARA와의 연계</h3>
              <p className="text-text-text-secondary leading-relaxed">
                AutoSAR.io 및 PARA와의 연계를 통해 Adaptive AUTOSAR 환경에 최적화된 설계-코드-검증 자동화를 제공합니다. PARVIS 명령형 도구를 통해 세부 모듈별 자동 생성 기능을 실행할 수 있으며, 기존 DevOps 및 CI/CD 환경과도 손쉽게 통합됩니다. 이를 통해 기존 수작업 중심의 개발 방식에서 완전한 AI-Driven 개발 Pipeline으로 전환이 가능합니다.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/support/qna"
                className="inline-block px-8 py-4 bg-accent-cyan text-background font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors"
              >
                문의하기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
