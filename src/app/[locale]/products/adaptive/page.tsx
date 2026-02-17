"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  FileCode,
  Cpu,
  Code2,
  Layers,
  Settings,
  Zap,
  Package,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function AdaptivePage() {
  const t = useTranslations("adaptive");
  const common = useTranslations("common");
  
  // Tool cards data
  const tools = [
    {
      icon: FileCode,
      title: t("toolAuthoring"),
      name: t("toolAuthoringName"),
      href: "/products/autosario",
      image: "/images/main/con01.png",
      color: "cyan",
      description: "ARXML Design & Modeling",
    },
    {
      icon: Cpu,
      title: t("toolFunctional"),
      name: t("toolFunctionalName"),
      href: "/products/para",
      image: "/images/main/con02.png",
      color: "blue",
      description: "Functional Cluster APIs",
    },
    {
      icon: Code2,
      title: t("toolIde"),
      name: t("toolIdeName"),
      href: "/products/pacon",
      image: "/images/main/con03.png",
      color: "violet",
      description: "Development & Testing",
    },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-blue/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-accent-cyan/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/10 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-6">
                <Wrench className="w-4 h-4 text-accent-blue" />
                <span className="text-sm text-accent-blue font-medium">Development Toolkit</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                {t("title")}
              </h1>

              <p className="text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed text-balance">
                {t("subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-blue text-white font-semibold rounded-xl hover:bg-accent-blue/90 transition-all hover:shadow-lg hover:shadow-accent-blue/25"
                >
                  <span>{t("ctaGetStarted")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#tools"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-xl hover:bg-surface-elevated hover:border-accent-blue/30 transition-all"
                >
                  {t("ctaExploreTools")}
                </Link>
              </div>
            </motion.div>

            {/* Right: Visual - Toolkit Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block py-8 px-4"
            >
              {/* Toolkit Visualization */}
              <div className="relative">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <line x1="50%" y1="25%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8 4" />
                  <line x1="50%" y1="25%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="8 4" />
                </svg>

                {/* Main Package Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 mx-auto w-fit mb-8"
                >
                  <div className="bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 border border-accent-blue/30 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent-blue/20 flex items-center justify-center">
                        <Package className="w-8 h-8 text-accent-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Adaptive AUTOSAR</h3>
                        <p className="text-accent-cyan text-sm">Tool Kit</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tool Cards */}
                <div className="grid grid-cols-3 gap-4">
                  {/* AutoSAR.io */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="bg-surface border border-accent-cyan/30 rounded-xl p-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center mx-auto mb-2">
                      <FileCode className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <p className="text-white text-sm font-medium">AutoSAR.io</p>
                    <p className="text-text-tertiary text-xs">Design</p>
                  </motion.div>

                  {/* PARA */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="bg-surface border border-emerald-500/30 rounded-xl p-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mx-auto mb-2">
                      <Cpu className="w-6 h-6 text-emerald-400" />
                    </div>
                    <p className="text-white text-sm font-medium">PARA</p>
                    <p className="text-text-tertiary text-xs">Platform</p>
                  </motion.div>

                  {/* PACON IDE */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="bg-surface border border-violet-500/30 rounded-xl p-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mx-auto mb-2">
                      <Code2 className="w-6 h-6 text-violet-400" />
                    </div>
                    <p className="text-white text-sm font-medium">PACON IDE</p>
                    <p className="text-text-tertiary text-xs">Develop</p>
                  </motion.div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-0 bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                Complete Solution
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-surface/50 border border-border rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
              <div className="prose prose-lg max-w-none">
                {t("intro").split("\n\n").map((paragraph: string, index: number) => (
                  <p key={index} className="text-text-secondary leading-relaxed mb-6 last:mb-0 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tool Kit Components - Feature Cards */}
      <section className="py-24 relative" id="tools">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-4">
              <Layers className="w-4 h-4 text-accent-blue" />
              <span className="text-sm text-accent-blue font-medium">Tool Kit Components</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("toolSuiteTitle")}
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t("toolSuiteDesc")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tools.map((tool, index) => {
              const colorClasses = {
                cyan: {
                  bg: "bg-accent-cyan/10",
                  border: "border-accent-cyan/20",
                  hoverBorder: "hover:border-accent-cyan/50",
                  icon: "text-accent-cyan",
                  glow: "bg-accent-cyan/20",
                },
                blue: {
                  bg: "bg-accent-blue/10",
                  border: "border-accent-blue/20",
                  hoverBorder: "hover:border-accent-blue/50",
                  icon: "text-accent-blue",
                  glow: "bg-accent-blue/20",
                },
                violet: {
                  bg: "bg-violet-500/10",
                  border: "border-violet-500/20",
                  hoverBorder: "hover:border-violet-500/50",
                  icon: "text-violet-400",
                  glow: "bg-violet-500/20",
                },
              };
              const colors = colorClasses[tool.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 ${colors.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className={`relative h-full bg-surface border ${colors.border} ${colors.hoverBorder} rounded-2xl p-8 transition-all duration-300`}>
                    {/* Icon */}
                    <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={50}
                        height={50}
                        className="opacity-90"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-1">{tool.title}</h3>
                      <p className={`font-semibold mb-3 ${colors.icon}`}>{tool.name}</p>
                      <p className="text-text-tertiary text-sm mb-6">{tool.description}</p>

                      <Link
                        href={tool.href}
                        className={`inline-flex items-center gap-2 ${colors.icon} hover:opacity-80 font-medium transition-all group-hover:gap-3`}
                      >
                        {common("learnMore")}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full mb-4">
                <Settings className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm text-accent-cyan font-medium">Workflow</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                {t("workflowTitle")}
              </h2>
            </div>

            {/* Workflow Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-cyan via-accent-blue to-violet-500 -translate-y-1/2" />

              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-surface border border-accent-cyan/30 rounded-2xl p-6 text-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-cyan font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{t("workflowStep1")}</h3>
                    <p className="text-text-tertiary text-sm">{t("workflowStep1Desc")}</p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <div className="bg-surface border border-accent-blue/30 rounded-2xl p-6 text-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent-blue font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{t("workflowStep2")}</h3>
                    <p className="text-text-tertiary text-sm">{t("workflowStep2Desc")}</p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-surface border border-violet-500/30 rounded-2xl p-6 text-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-violet-400 font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-white font-semibold mb-2">{t("workflowStep3")}</h3>
                    <p className="text-text-tertiary text-sm">{t("workflowStep3Desc")}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 via-accent-cyan/20 to-accent-blue/20" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-blue/30 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent-cyan/30 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">{t("ctaBadge")}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("subtitle")}
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              {t("ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support/qna"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-background font-semibold rounded-xl hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/25"
              >
                {common("contactUs")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                {common("allProducts")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
