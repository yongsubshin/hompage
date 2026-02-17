"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  Code2,
  TestTube,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Cpu,
  GitBranch,
  FileCode,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ParvisPage() {
  const content = useTranslations("parvis");
  
  const metrics = [
    { before: "40%", after: "94%", label: content("metricMisra"), improvement: "+54%" },
    { before: "5%", after: "100%", label: content("metricDocs"), improvement: "+95%" },
    { before: "0%", after: "86.4%", label: content("metricTest"), improvement: "+86%" },
  ];

  const benefits = [
    { icon: Shield, title: content("benefit1Title"), desc: content("benefit1Desc") },
    { icon: Zap, title: content("benefit2Title"), desc: content("benefit2Desc") },
    { icon: TrendingUp, title: content("benefit3Title"), desc: content("benefit3Desc") },
    { icon: Sparkles, title: content("benefit4Title"), desc: content("benefit4Desc") },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
                <Cpu className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm text-accent-cyan font-medium">{content("badge")}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                {content("title")}
              </h1>

              <p className="text-xl lg:text-2xl text-text-secondary mb-4 leading-relaxed text-balance">
                {content("subtitle1")}
                <br />
                <span className="text-accent-cyan">{content("subtitle2")}</span>
              </p>

              <p className="text-text-tertiary mb-8 max-w-lg leading-relaxed">
                {content("heroDesc")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-background font-semibold rounded-xl hover:bg-accent-cyan/90 transition-all hover:shadow-lg hover:shadow-accent-cyan/25"
                >
                  <span>{content("cta1")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-xl hover:bg-surface-elevated hover:border-accent-cyan/30 transition-all"
                >
                  {content("cta2")}
                </Link>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating Cards Visual */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Central Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-accent-cyan/30 rounded-full blur-[80px] animate-pulse" />
                </div>

                {/* Spec Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-4 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">{content("specCard")}</span>
                  </div>
                  <p className="text-xs text-text-tertiary">{content("specCardDesc")}</p>
                </motion.div>

                {/* Coder Card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">{content("coderCard")}</span>
                  </div>
                  <p className="text-xs text-text-tertiary">{content("coderCardDesc")}</p>
                </motion.div>

                {/* Verify Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 left-12 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <TestTube className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">{content("verifyCard")}</span>
                  </div>
                  <p className="text-xs text-text-tertiary">{content("verifyCardDesc")}</p>
                </motion.div>

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0, 229, 255, 0.3)" />
                      <stop offset="100%" stopColor="rgba(123, 97, 255, 0.3)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 120 100 Q 200 200 300 180 Q 400 160 350 300 Q 300 400 180 350"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="opacity-50"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section - Bento Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {content("metricsTitle")}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {content("metricsSubtitle")}
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Large Card - Efficiency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:row-span-2 bg-gradient-to-br from-accent-cyan/20 via-surface to-surface border border-accent-cyan/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] group-hover:bg-accent-cyan/20 transition-all duration-500" />
              <div className="relative z-10">
                <div className="text-6xl lg:text-8xl font-bold text-white mb-4">
                  {content("efficiencyValue")}<span className="text-accent-cyan">{content("efficiencyUnit")}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{content("efficiencyLabel")}</h3>
                <p className="text-text-secondary">
                  {content("efficiencyDesc")}
                </p>
              </div>
            </motion.div>

            {/* Metric Cards */}
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-surface border border-border rounded-3xl p-6 hover:border-accent-cyan/30 transition-all group"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-text-tertiary text-sm line-through">{metric.before}</span>
                  <ArrowRight className="w-3 h-3 text-text-tertiary" />
                  <span className="text-3xl font-bold text-white">{metric.after}</span>
                </div>
                <p className="text-text-secondary text-sm mb-2">{metric.label}</p>
                <span className="inline-block px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full">
                  {metric.improvement}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Alternating Layout */}
      <section id="features" className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-accent-cyan text-sm font-medium tracking-wider uppercase">
              {content("featuresLabel")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-4">
              {content("featuresTitle")}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {content("featuresSubtitle")}
            </p>
          </motion.div>

          {/* Feature 1: PARVIS-Spec */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white">1</span>
                <span className="text-sm text-cyan-400 font-medium">{content("specCard")}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {content("specTitle")}<br />{content("specTitle2")}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {content("specDesc")}
              </p>
              <ul className="space-y-3">
                {[content("specFeature1"), content("specFeature2"), content("specFeature3")].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-3xl p-8 lg:p-12">
                <div className="absolute top-4 right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px]" />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4 bg-surface/50 backdrop-blur rounded-xl p-4 border border-border">
                    <FileText className="w-8 h-8 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">{content("specFile")}</p>
                      <p className="text-xs text-text-tertiary">{content("specFileStatus")} · {content("specFileCount")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-surface/50 backdrop-blur rounded-xl p-4 border border-border">
                    <GitBranch className="w-8 h-8 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">{content("specMatrix")}</p>
                      <p className="text-xs text-text-tertiary">{content("specMatrixStatus")} · {content("specMatrixCoverage")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: PARVIS-Coder */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-3xl p-8 lg:p-12">
                <div className="absolute top-4 left-4 w-32 h-32 bg-violet-500/20 rounded-full blur-[60px]" />
                <div className="relative">
                  <div className="bg-surface/80 backdrop-blur rounded-xl border border-border overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2 bg-surface border-b border-border">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-xs text-text-tertiary ml-2">main.c</span>
                    </div>
                    <div className="p-4 font-mono text-sm">
                      <div className="text-text-tertiary">{content("coderComment")}</div>
                      <div><span className="text-violet-400">void</span> <span className="text-cyan-400">SafetyCheck</span>() {"{"}</div>
                      <div className="text-emerald-400 pl-4">✓ {content("coderRule1")}</div>
                      <div className="text-emerald-400 pl-4">✓ {content("coderRule2")}</div>
                      <div>{"}"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                <span className="w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-xs font-bold text-white">2</span>
                <span className="text-sm text-violet-400 font-medium">{content("coderCard")}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {content("coderTitle")}<br />{content("coderTitle2")}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {content("coderDesc")}
              </p>
              <ul className="space-y-3">
                {[content("coderFeature1"), content("coderFeature2"), content("coderFeature3")].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Feature 3: PARVIS-Verify */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white">3</span>
                <span className="text-sm text-emerald-400 font-medium">{content("verifyCard")}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {content("verifyTitle")}<br />{content("verifyTitle2")}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {content("verifyDesc")}
              </p>
              <ul className="space-y-3">
                {[content("verifyFeature1"), content("verifyFeature2"), content("verifyFeature3")].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-text-secondary">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-3xl p-8 lg:p-12">
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-emerald-500/20 rounded-full blur-[60px]" />
                <div className="relative space-y-4">
                  {/* Coverage Bar */}
                  <div className="bg-surface/50 backdrop-blur rounded-xl p-4 border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{content("verifyCoverage")}</span>
                      <span className="text-emerald-400 font-bold">86.4%</span>
                    </div>
                    <div className="h-3 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "86.4%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface/50 backdrop-blur rounded-xl p-4 border border-border text-center">
                      <p className="text-2xl font-bold text-white">247</p>
                      <p className="text-xs text-text-tertiary">{content("verifyTestCases")}</p>
                    </div>
                    <div className="bg-surface/50 backdrop-blur rounded-xl p-4 border border-border text-center">
                      <p className="text-2xl font-bold text-emerald-400">100%</p>
                      <p className="text-xs text-text-tertiary">{content("verifyPassRate")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {content("benefitsTitle")}
            </h2>
            <p className="text-text-secondary">
              {content("benefitsSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-surface border border-border rounded-2xl p-6 hover:border-accent-cyan/30 hover:shadow-lg hover:shadow-accent-cyan/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <FileCode className="w-4 h-4 text-accent-blue" />
              <span className="text-sm text-text-secondary">{content("integrationBadge")}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {content("integrationTitle")}<br />{content("integrationTitle2")}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              {content("integrationDesc")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-surface border border-border rounded-xl">
                <span className="text-white font-medium">AutoSAR.io</span>
              </div>
              <div className="px-6 py-3 bg-surface border border-border rounded-xl">
                <span className="text-white font-medium">PARA</span>
              </div>
              <div className="px-6 py-3 bg-surface border border-border rounded-xl">
                <span className="text-white font-medium">CI/CD Pipeline</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-background to-accent-blue/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {content("ctaTitle1")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">
                {content("ctaTitle2")}
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              {content("ctaDesc")}<br />
              {content("ctaDesc2")}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent-cyan text-background font-semibold rounded-xl hover:bg-accent-cyan/90 transition-all hover:shadow-xl hover:shadow-accent-cyan/25 text-lg"
            >
              <span>{content("ctaButton")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
