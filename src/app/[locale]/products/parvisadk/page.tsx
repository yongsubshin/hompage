"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Brain,
  BarChart3,
  Code2,
  Cpu,
  Clock,
  CheckCircle,
  Database,
  GitBranch,
  Rocket,
  Moon,
  Play,
  RefreshCw,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ParvisAdkPage() {
  const content = useTranslations("parvisAdk");
  
  const benefits = [
    { icon: Zap, title: content("businessValues")[0], desc: content("benefitDescs")[0] },
    { icon: TrendingUp, title: content("businessValues")[1], desc: content("benefitDescs")[1] },
    { icon: Target, title: content("businessValues")[2], desc: content("benefitDescs")[2] },
    { icon: Sparkles, title: content("businessValues")[3], desc: content("benefitDescs")[3] },
  ];

  // Pipeline steps for Hero visual
  const pipelineSteps = [
    { icon: Database, label: "Data Input", color: "cyan" },
    { icon: Brain, label: "AI Analysis", color: "blue" },
    { icon: BarChart3, label: "Insights", color: "teal" },
    { icon: Rocket, label: "DevOps", color: "cyan" },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Pipeline Flow Design */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Effects - Cyan/Blue theme */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">{content("badge")}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                {content("title")}
              </h1>

              <p className="text-xl lg:text-2xl text-text-secondary mb-4 leading-relaxed text-balance">
                {content("heroSubtitle1")}
                <br />
                <span className="text-cyan-400">{content("heroSubtitle2")}</span>
              </p>

              <p className="text-text-tertiary mb-8 max-w-lg leading-relaxed">
                {content("intro")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <span>{content("contact")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-xl hover:bg-surface-elevated hover:border-cyan-500/30 transition-all"
                >
                  {content("learnMore")}
                </Link>
              </div>
            </motion.div>

            {/* Right: Pipeline Flow Visual (Differentiator) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-full blur-[80px] animate-pulse" />
                </div>

                {/* Pipeline Flow - Vertical Steps */}
                <div className="relative space-y-4 py-8">
                  {pipelineSteps.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                      className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                    >
                      <div className="flex-1">
                        <div className={`bg-surface/80 backdrop-blur-xl border border-${step.color}-500/30 rounded-2xl p-4 shadow-xl ${index % 2 === 0 ? 'ml-auto mr-0' : 'mr-auto ml-0'} max-w-[200px]`}>
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-xl flex items-center justify-center`}>
                              <step.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <span className="text-xs text-cyan-400 font-medium">Step {index + 1}</span>
                              <p className="text-white font-medium text-sm">{step.label}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Center line */}
                      <div className="w-12 flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 ${index === 0 ? '' : ''}`} />
                        {index < pipelineSteps.length - 1 && (
                          <div className="w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-blue-500/50" />
                        )}
                      </div>
                      <div className="flex-1" />
                    </motion.div>
                  ))}
                </div>

                {/* Output badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-cyan-500/25">
                    End-to-End Automation
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section - Timeline Style (Differentiator) */}
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
              {content("compareTitle")}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {content("metricsSubtitle")}
            </p>
          </motion.div>

          {/* Large Metric + Timeline Cards */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large Card - Time Reduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:row-span-2 bg-gradient-to-br from-cyan-500/20 via-surface to-surface border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] group-hover:bg-cyan-500/20 transition-all duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="text-7xl lg:text-8xl font-bold text-white mb-4">
                  {content("timeReduction")}<span className="text-cyan-400">{content("timeReductionUnit")}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{content("timeReductionLabel")}</h3>
                <p className="text-text-secondary">
                  {content("timeReductionDesc")}
                </p>
              </div>
            </motion.div>

            {/* Timeline Cards - Before/After */}
            {content.raw("compareRows").slice(0, 4).map((row: { task: string; before: string; after: string }, index: number) => (
              <motion.div
                key={row.task}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-5 hover:border-cyan-500/30 transition-all group"
              >
                <p className="text-cyan-400 text-sm font-medium mb-3">{row.task}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-text-tertiary text-xs mb-1">Before</p>
                    <p className="text-text-secondary text-sm line-through opacity-60">{row.before}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                  <div className="flex-1">
                    <p className="text-cyan-400 text-xs mb-1">After</p>
                    <p className="text-white text-sm font-medium">{row.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Step Flow (Differentiator: Not alternating, but connected flow) */}
      <section id="features" className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              {content("featuresLabel")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-4">
              {content("featuresTitle")}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {content("featuresSubtitle")}
            </p>
          </motion.div>

          {/* Connected Feature Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-teal-500/30 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="bg-surface border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-500/40 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-cyan-400 text-xs font-medium">Step 1</span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">{content("feature1Title")}</h3>
                  <p className="text-text-secondary text-sm mb-4">{content("feature1Desc")}</p>
                  <ul className="space-y-2">
                    {content.raw("feature1Items").map((item: string) => (
                      <li key={item} className="flex items-center gap-2 text-text-tertiary text-xs">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Step connector */}
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-cyan-500/50" />
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-surface border border-blue-500/20 rounded-2xl p-6 h-full hover:border-blue-500/40 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-blue-400 text-xs font-medium">Step 2</span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">{content("feature2Title")}</h3>
                  <p className="text-text-secondary text-sm mb-4">{content("feature2Desc")}</p>
                  <ul className="space-y-2">
                    {content.raw("feature2Items").map((item: string) => (
                      <li key={item} className="flex items-center gap-2 text-text-tertiary text-xs">
                        <CheckCircle className="w-3 h-3 text-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-blue-500/50" />
                </div>
              </motion.div>

              {/* Feature 3 & 4 Combined */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="bg-surface border border-teal-500/20 rounded-2xl p-6 h-full hover:border-teal-500/40 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-teal-400 text-xs font-medium">Step 3</span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">{content("feature3Title")} & {content("feature4Title")}</h3>
                  <p className="text-text-secondary text-sm mb-4">{content("feature34Subtitle")}</p>
                  <ul className="space-y-2">
                    {content.raw("feature34Items").map((item: string) => (
                      <li key={item} className="flex items-center gap-2 text-text-tertiary text-xs">
                        <CheckCircle className="w-3 h-3 text-teal-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-teal-500/50" />
                </div>
              </motion.div>

              {/* Feature 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="bg-surface border border-cyan-500/20 rounded-2xl p-6 h-full hover:border-cyan-500/40 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-cyan-400 text-xs font-medium">Step 4</span>
                  <h3 className="text-lg font-semibold text-white mt-1 mb-2">{content("feature5Title")}</h3>
                  <p className="text-text-secondary text-sm mb-4">{content("feature5Desc")}</p>
                  <ul className="space-y-2">
                    {content.raw("feature5Items").map((item: string) => (
                      <li key={item} className="flex items-center gap-2 text-text-tertiary text-xs">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TDD Section - Circular Cycle (Differentiator) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <RefreshCw className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">{content("tddBadge")}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {content("tddTitle")}
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                {content("tddDesc")}
              </p>
            </div>

            {/* Circular TDD Cycle */}
            <div className="relative flex items-center justify-center py-12">
              {/* Center circle */}
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl" />

              {/* Cycle container */}
              <div className="relative w-80 h-80">
                {/* RED */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500/30 to-red-600/20 border-2 border-red-500/50 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-red-400">RED</span>
                    <span className="text-[10px] text-red-300/70 text-center px-2">{content("tddRed")}</span>
                  </div>
                </motion.div>

                {/* GREEN */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-4 left-4"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 border-2 border-emerald-500/50 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-emerald-400">GREEN</span>
                    <span className="text-[10px] text-emerald-300/70 text-center px-2">{content("tddGreen")}</span>
                  </div>
                </motion.div>

                {/* REFACTOR */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-4 right-4"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 border-2 border-blue-500/50 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-blue-400">REFACTOR</span>
                    <span className="text-[10px] text-blue-300/70 text-center px-2">{content("tddRefactor")}</span>
                  </div>
                </motion.div>

                {/* Connecting arrows - SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="rgba(6, 182, 212, 0.5)" />
                    </marker>
                  </defs>
                  {/* RED to GREEN */}
                  <path d="M 130 70 Q 60 160 90 240" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowhead)" />
                  {/* GREEN to REFACTOR */}
                  <path d="M 130 270 Q 160 300 230 270" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowhead)" />
                  {/* REFACTOR to RED */}
                  <path d="M 260 240 Q 280 160 190 70" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowhead)" />
                </svg>

                {/* Center label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <RefreshCw className="w-8 h-8 text-cyan-400/50 mx-auto mb-1 animate-spin-slow" />
                  <span className="text-xs text-text-tertiary">Cycle</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* After Hours Section - Terminal Style (Differentiator) */}
      <section className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <Moon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">{content("afterHoursBadge")}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {content("afterHoursTitle")}
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {content("afterHoursDesc")}
                </p>
                <div className="space-y-4">
                  {content.raw("afterHoursFeatures").map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        {index === 0 && <Play className="w-4 h-4 text-blue-400" />}
                        {index === 1 && <Clock className="w-4 h-4 text-blue-400" />}
                        {index === 2 && <GitBranch className="w-4 h-4 text-blue-400" />}
                      </div>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Terminal Style UI (Differentiator) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-[#0d1117] border border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Terminal className="w-4 h-4 text-text-tertiary" />
                      <span className="text-xs text-text-tertiary font-mono">parvis-adk ~ after-hours</span>
                    </div>
                  </div>
                  {/* Terminal content */}
                  <div className="p-4 font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">$</span>
                      <span className="text-text-secondary">parvis-adk start --mode=after-hours</span>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>{content("afterHoursActive")}</span>
                    </div>
                    <div className="mt-4 space-y-1.5 border-t border-white/5 pt-4">
                      <div className="flex justify-between text-xs">
                        <span className="text-text-tertiary">{content("afterHoursTasksCompleted")}</span>
                        <span className="text-white">24</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-text-tertiary">{content("afterHoursTestsPassed")}</span>
                        <span className="text-emerald-400">156/156</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-text-tertiary">{content("afterHoursSessionDuration")}</span>
                        <span className="text-white">6h 42m</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-cyan-400">$</span>
                      <span className="text-text-secondary animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
              {content("businessValueTitle")}
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
                className="group bg-surface border border-border rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-text-secondary">{content("techStackBadge")}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {content("techStackTitle")}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {content.raw("techStack").map((tech: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl text-left hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-text-secondary text-sm">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background to-blue-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {content("ctaTitle1")}{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {content("ctaTitle2")}
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              {content("ctaDesc1")}
              <br />
              {content("ctaDesc2")}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all hover:shadow-xl hover:shadow-cyan-500/25 text-lg"
            >
              <span>{content("contact")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
