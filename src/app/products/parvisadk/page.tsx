"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Zap,
  TrendingUp,
  Code,
  Rocket,
  AlertTriangle,
  Target,
  RefreshCcw,
  Clock,
  CheckCircle2,
  ArrowRight,
  Layers
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ParvisAdkPage() {
  const { t } = useLanguage();
  const content = t.parvisAdk;

  const features = [
    { icon: Search, title: content.feature1Title, desc: content.feature1Desc },
    { icon: Zap, title: content.feature2Title, desc: content.feature2Desc },
    { icon: TrendingUp, title: content.feature3Title, desc: content.feature3Desc },
    { icon: Target, title: content.feature4Title, desc: content.feature4Desc },
    { icon: Code, title: content.feature5Title, desc: content.feature5Desc },
    { icon: Rocket, title: content.afterHoursTitle, desc: content.afterHoursDesc },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold">{content.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-accent-blue transition-colors">
              {t.common.home}
            </Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/products" className="text-text-secondary hover:text-accent-blue transition-colors">
              {t.nav.products}
            </Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-blue">{content.title}</span>
          </div>
        </div>
      </nav>

      {/* Problem Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-500/10">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.problemTitle}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {content.problemList.map((problem: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-text-secondary">{problem}</span>
                </div>
              ))}
            </div>

            <p className="text-text-secondary p-6 rounded-xl bg-surface border border-red-500/20">
              {content.problemConclusion} <span className="text-accent-blue font-semibold">PARVIS ADK</span>{content.problemSolution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent-blue/10">
                <Target className="w-6 h-6 text-accent-blue" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.targetTitle}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {content.targetList.map((target: string, index: number) => (
                <div key={index} className="p-6 rounded-2xl bg-surface border border-border hover:border-accent-blue/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
                    <span className="text-accent-blue font-bold">{index + 1}</span>
                  </div>
                  <p className="text-text-secondary">{target}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 Core Features */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-blue text-sm font-medium mb-3">Core Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{content.featuresTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-accent-blue/30 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-accent-blue/10 text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TDD Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <RefreshCcw className="w-6 h-6 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.tddTitle}</h2>
            </div>

            <p className="text-text-secondary text-lg mb-8">{content.tddDesc}</p>

            {/* TDD Cycle Visual */}
            <div className="flex items-center justify-center gap-4 flex-wrap p-8 rounded-2xl bg-surface border border-border">
              <div className="flex items-center gap-4">
                <div className="px-6 py-3 rounded-xl bg-red-500/10 text-red-500 font-semibold">RED</div>
                <ArrowRight className="w-5 h-5 text-text-tertiary" />
                <div className="px-6 py-3 rounded-xl bg-emerald-500/10 text-emerald-500 font-semibold">GREEN</div>
                <ArrowRight className="w-5 h-5 text-text-tertiary" />
                <div className="px-6 py-3 rounded-xl bg-accent-blue/10 text-accent-blue font-semibold">REFACTOR</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* After Hours Mode */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10">
                <Clock className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.afterHoursTitle}</h2>
            </div>

            <p className="text-text-secondary text-lg mb-8">{content.afterHoursDesc}</p>

            <div className="grid md:grid-cols-3 gap-4">
              {content.afterHoursFeatures.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent-cyan/10">
                <Layers className="w-6 h-6 text-accent-cyan" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.techStackTitle}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {content.techStack.map((tech: string, index: number) => (
                <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-surface border border-border">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <span className="text-text-secondary">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">{content.compareTitle}</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left text-text-secondary font-medium">{content.compareHeaders[0]}</th>
                    <th className="py-4 px-6 text-left text-text-secondary font-medium">{content.compareHeaders[1]}</th>
                    <th className="py-4 px-6 text-left text-accent-blue font-medium">{content.compareHeaders[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  {content.compareRows.map((row: { task: string; before: string; after: string }, index: number) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                      <td className="py-5 px-6 font-medium text-white">{row.task}</td>
                      <td className="py-5 px-6 text-text-tertiary">{row.before}</td>
                      <td className="py-5 px-6 text-accent-blue">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Business Value */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-accent-blue/10 to-transparent border border-accent-blue/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">{content.businessValueTitle}</h3>
              <ul className="space-y-4">
                {content.businessValues.map((value: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Value */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-surface border border-border"
            >
              <h3 className="text-xl font-bold text-white mb-6">{content.techValueTitle}</h3>
              <ul className="space-y-4">
                {content.techValues.map((value: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-12"
          >
            <h3 className="text-xl font-bold text-white text-center mb-6">{content.diffTitle}</h3>
            <div className="space-y-4">
              {content.diffValues.map((value: string, index: number) => (
                <div key={index} className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-accent-blue/5 to-accent-cyan/5 border border-accent-blue/20">
                  <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-8">{content.supportTitle}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-surface border border-border">
                <p className="text-text-tertiary text-sm mb-2">Version</p>
                <p className="text-white font-medium">{content.supportVersion}</p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border">
                <p className="text-text-tertiary text-sm mb-2">Platform</p>
                <p className="text-white font-medium">{content.supportPlatform}</p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border">
                <p className="text-text-tertiary text-sm mb-2">Language</p>
                <p className="text-white font-medium">{content.supportLang}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue/90 transition-colors"
            >
              {content.contact}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
