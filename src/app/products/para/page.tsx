"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Code2,
  Layers,
  Settings,
  Shield,
  Zap,
  Play,
  CheckCircle,
  Box,
  GitBranch,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InteractiveImageMap } from "@/components/ui";

export default function ParaPage() {
  const { t } = useLanguage();
  const content = t.para;

  // Key features with icons
  const keyFeatureIcons = [Cpu, Code2, Settings, GitBranch, Layers, Shield];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-accent-cyan/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">Classic & Adaptive Platform</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                PARA
              </h1>

              <p className="text-xl lg:text-2xl text-accent-cyan mb-4">
                {content.subtitle}
              </p>

              <p className="text-xl lg:text-2xl text-text-secondary mb-4 leading-relaxed">
                {content.title}
              </p>

              <p className="text-text-tertiary mb-8 max-w-lg leading-relaxed">
                {content.intro1}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-background font-semibold rounded-xl hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  <span>{content.contact}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-xl hover:bg-surface-elevated hover:border-emerald-500/30 transition-all"
                >
                  {t.common.learnMore}
                </Link>
              </div>
            </motion.div>

            {/* Right: Visual - Component Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Stack Visualization */}
              <div className="space-y-3">
                {/* FC API Card */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-xl p-5"
                >
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-emerald-400" />
                    <span className="text-white font-semibold">Functional Cluster API</span>
                  </div>
                </motion.div>

                {/* C++ Generator Card */}
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="bg-gradient-to-r from-accent-cyan/20 to-accent-cyan/10 border border-accent-cyan/30 rounded-xl p-5 ml-8"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-accent-cyan" />
                    <span className="text-white font-semibold">C++ Generator</span>
                  </div>
                </motion.div>

                {/* Manifest Generator Card */}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="bg-gradient-to-r from-accent-blue/20 to-accent-blue/10 border border-accent-blue/30 rounded-xl p-5 ml-4"
                >
                  <div className="flex items-center gap-3">
                    <Settings className="w-6 h-6 text-accent-blue" />
                    <span className="text-white font-semibold">Manifest Generator</span>
                  </div>
                </motion.div>

                {/* Platform Level App Card */}
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="bg-gradient-to-r from-violet-500/20 to-violet-500/10 border border-violet-500/30 rounded-xl p-5 ml-12"
                >
                  <div className="flex items-center gap-3">
                    <Layers className="w-6 h-6 text-violet-400" />
                    <span className="text-white font-semibold">Platform Level Application</span>
                  </div>
                </motion.div>
              </div>

              {/* Version Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-4 bg-gradient-to-r from-emerald-500 to-accent-cyan text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                R20-11
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
              <p className="text-text-secondary text-lg leading-relaxed">
                {content.intro2}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ARA Diagram Section */}
      <section className="py-24 relative" id="features">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Architecture</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              {content.araTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8 hover:border-emerald-500/30 transition-all">
              <div className="bg-white rounded-lg">
                <Image
                  src="/images/contents/para_01.png"
                  alt="PARA Architecture"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Flow Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full mb-4">
                <GitBranch className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm text-accent-cyan font-medium">Workflow</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {content.flowTitle}
              </h2>
              <p className="text-text-secondary text-lg mb-2">
                {content.flowDesc}
              </p>
              <p className="text-text-tertiary text-sm">
                {content.flowNote}
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8 hover:border-accent-cyan/30 transition-all">
              <InteractiveImageMap
                baseImage="/images/contents/para_02.png"
                overlayImage="/images/contents/para_screen.png"
                hotspots={[
                  {
                    id: "shape01",
                    x: 270,
                    y: 58,
                    width: 169,
                    height: 142,
                    hoverImage: "/images/contents/para_02_1.png",
                  },
                  {
                    id: "shape02",
                    x: 270,
                    y: 398,
                    width: 173,
                    height: 143,
                    hoverImage: "/images/contents/para_02_2.png",
                  },
                ]}
                alt="PARA Implementation Flow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Level Application Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full mb-4">
                <Layers className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-400 font-medium">Platform</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {content.platformTitle}
              </h2>
              <p className="text-text-secondary text-lg">
                {content.platformDesc}
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8 hover:border-violet-500/30 transition-all">
              <div className="bg-white rounded-lg">
                <Image
                  src="/images/contents/para_03.png"
                  alt="Platform Level Application"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standard & Extension - Side by Side Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PARA-Standard */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-emerald-500/10 to-surface border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Box className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-400">{content.standardTitle}</h3>
                </div>
                <ul className="space-y-4">
                  {content.standardItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* PARA-Extension */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-accent-cyan/10 to-surface border border-accent-cyan/20 rounded-2xl p-8 hover:border-accent-cyan/40 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent-cyan">{content.extensionTitle}</h3>
                </div>
                <ul className="space-y-4">
                  {content.extensionItems.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features - Grid Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">Features</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              {content.keyFeaturesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.keyFeatures.map((feature: string, index: number) => {
              const Icon = keyFeatureIcons[index % keyFeatureIcons.length];
              const colors = [
                "emerald", "cyan", "blue", "violet", "emerald", "cyan"
              ];
              const color = colors[index % colors.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`h-full bg-surface border border-border rounded-xl p-6 hover:border-${color === 'emerald' ? 'emerald-500' : color === 'cyan' ? 'accent-cyan' : color === 'blue' ? 'accent-blue' : 'violet-500'}/30 transition-all`}>
                    <div className={`w-10 h-10 rounded-lg bg-${color === 'emerald' ? 'emerald-500' : color === 'cyan' ? 'accent-cyan' : color === 'blue' ? 'accent-blue' : 'violet-500'}/10 flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${color === 'emerald' ? 'text-emerald-400' : color === 'cyan' ? 'text-accent-cyan' : color === 'blue' ? 'text-accent-blue' : 'text-violet-400'}`} />
                    </div>
                    <p className="text-text-secondary">{feature}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supporting Version */}
      <section className="py-16 relative">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-emerald-500/10 via-accent-cyan/10 to-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">{content.supportingTitle}</h3>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-surface border border-border rounded-xl">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span className="text-lg text-white font-medium">{content.supportingVersion}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <Play className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-400 font-medium">Demo Video</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              {content.demoTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-red-500/30 transition-all">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cZ1hYkecOL4"
                  title="PARA Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-b-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-accent-cyan/20 to-emerald-500/20" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-500/30 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent-cyan/30 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to build with PARA?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              {content.subtitle}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-background font-semibold rounded-xl hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/25"
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
