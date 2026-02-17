"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Terminal,
  Bug,
  Cpu,
  GitBranch,
  Workflow,
  Server,
  Container,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Play,
  Box,
  Network,
  Settings,
  FileCode,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function PaconPage() {
  const content = useTranslations("pacon");
  
  const features = [
    { icon: Code2, title: content("feature1Title"), desc: content("feature1Desc"), color: "blue" },
    { icon: Bug, title: content("feature2Title"), desc: content("feature2Desc"), color: "cyan" },
    { icon: Terminal, title: content("feature3Title"), desc: content("feature3Desc"), color: "violet" },
    { icon: FileCode, title: content("feature4Title"), desc: content("feature4Desc"), color: "blue" },
    { icon: Network, title: content("feature5Title"), desc: content("feature5Desc"), color: "cyan" },
    { icon: Container, title: content("feature6Title"), desc: content("feature6Desc"), color: "violet" },
  ];

  const benefits = [
    { icon: Shield, title: content("benefit1Title"), desc: content("benefit1Desc") },
    { icon: Users, title: content("benefit2Title"), desc: content("benefit2Desc") },
    { icon: Zap, title: content("benefit3Title"), desc: content("benefit3Desc") },
    { icon: Settings, title: content("benefit4Title"), desc: content("benefit4Desc") },
  ];

  // Code autocomplete demo lines
  const codeLines = [
    { num: 1, code: '#include <ara/com/api.h>', type: 'include' },
    { num: 2, code: '', type: 'empty' },
    { num: 3, code: 'int main() {', type: 'function' },
    { num: 4, code: '    ara::com::', type: 'typing', cursor: true },
    { num: 5, code: '', type: 'empty' },
  ];

  const autocompleteSuggestions = [
    'FindService()',
    'OfferService()',
    'StopOfferService()',
    'GetProxy()',
  ];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - IDE Interface Design */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Effects - Blue/Cyan theme */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">{content("badge")}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                PACON IDE
              </h1>

              <p className="text-xl lg:text-2xl text-text-secondary mb-4 leading-relaxed text-balance">
                {content("heroSubtitle1")}
                <br />
                <span className="text-blue-400">{content("heroSubtitle2")}</span>
              </p>

              <p className="text-text-tertiary mb-8 max-w-lg leading-relaxed">
                {content("intro")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <span>{content("contact")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-xl hover:bg-surface-elevated hover:border-blue-500/30 transition-all"
                >
                  {content("learnMore")}
                </Link>
              </div>
            </motion.div>

            {/* Right: IDE Interface Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-[80px] animate-pulse" />
                </div>

                {/* IDE Window */}
                <div className="relative bg-[#1e1e1e] backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl">
                  {/* IDE Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <FileCode className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-text-secondary font-mono">main.cpp - PACON IDE</span>
                    </div>
                  </div>

                  {/* Code Editor */}
                  <div className="p-4 font-mono text-sm min-h-[280px]">
                    {codeLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.15 }}
                        className="flex"
                      >
                        <span className="w-8 text-text-tertiary text-right mr-4 select-none">{line.num}</span>
                        <span className={`
                          ${line.type === 'include' ? 'text-emerald-400' : ''}
                          ${line.type === 'function' ? 'text-blue-400' : ''}
                          ${line.type === 'typing' ? 'text-white' : ''}
                        `}>
                          {line.code}
                          {line.cursor && <span className="animate-pulse text-blue-400">|</span>}
                        </span>
                      </motion.div>
                    ))}

                    {/* Autocomplete Popup */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="ml-12 mt-1 bg-[#252526] border border-blue-500/30 rounded-lg overflow-hidden shadow-xl w-52"
                    >
                      {autocompleteSuggestions.map((suggestion, index) => (
                        <div
                          key={suggestion}
                          className={`px-3 py-1.5 text-xs flex items-center gap-2 ${
                            index === 0 ? 'bg-blue-500/20 text-blue-400' : 'text-text-secondary hover:bg-surface'
                          }`}
                        >
                          <Box className="w-3 h-3" />
                          {suggestion}
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#007acc] text-white text-xs">
                    <div className="flex items-center gap-4">
                      <span>C++</span>
                      <span>UTF-8</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>AUTOSAR Coding Rules: OK</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute -left-4 top-1/4 bg-surface border border-blue-500/20 rounded-xl px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-text-secondary">ARA API</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.3 }}
                  className="absolute -right-4 bottom-1/3 bg-surface border border-cyan-500/20 rounded-xl px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Container className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-text-secondary">Virtual ECU</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              Key Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-4">
              {content("keyFeaturesTitle")}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {content("featuresSubtitle")}
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const colorClasses: Record<string, { border: string; bg: string }> = {
                blue: { border: "border-blue-500/20 hover:border-blue-500/40", bg: "from-blue-500 to-blue-600" },
                cyan: { border: "border-cyan-500/20 hover:border-cyan-500/40", bg: "from-cyan-500 to-cyan-600" },
                violet: { border: "border-violet-500/20 hover:border-violet-500/40", bg: "from-violet-500 to-violet-600" },
              };
              const colors = colorClasses[feature.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group bg-surface border ${colors.border} rounded-2xl p-6 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtual ECU Section */}
      <section className="py-24 relative overflow-hidden">
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                  <Container className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-cyan-400 font-medium">{content("virtualEcuBadge")}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {content("virtualEcuTitle")}
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {content("virtualEcuDesc")}
                </p>
                <div className="space-y-4">
                  {content.raw("virtualEcuItems").map((item: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Docker Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-surface border border-cyan-500/20 rounded-2xl p-6 shadow-2xl">
                  {/* Docker Container Visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <Container className="w-6 h-6 text-cyan-400" />
                      <span className="text-white font-medium">Virtual ECU Container</span>
                    </div>

                    {/* Container Stack */}
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                              <Cpu className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">Adaptive Application</p>
                              <p className="text-text-tertiary text-xs">Your AUTOSAR App</p>
                            </div>
                          </div>
                          <div className="px-2 py-1 bg-emerald-500/20 rounded text-emerald-400 text-xs">Running</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                              <Server className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">PARA Runtime</p>
                              <p className="text-text-tertiary text-xs">Functional Cluster</p>
                            </div>
                          </div>
                          <div className="px-2 py-1 bg-emerald-500/20 rounded text-emerald-400 text-xs">Active</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                              <Box className="w-4 h-4 text-violet-400" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium">POSIX OS</p>
                              <p className="text-text-tertiary text-xs">Linux Container</p>
                            </div>
                          </div>
                          <div className="px-2 py-1 bg-emerald-500/20 rounded text-emerald-400 text-xs">Ready</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CI/CD Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Pipeline Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-surface border border-blue-500/20 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Workflow className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Jenkins Pipeline</span>
                  </div>

                  {/* Pipeline Steps */}
                  <div className="space-y-3">
                    {['Build', 'Test', 'Deploy to Virtual ECU', 'Integration Test'].map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="flex items-center gap-4"
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          index < 3 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {index < 3 ? <CheckCircle className="w-4 h-4" /> : index + 1}
                        </div>
                        <div className="flex-1 bg-surface-elevated rounded-lg px-4 py-3">
                          <p className="text-white text-sm">{step}</p>
                        </div>
                        {index < 3 && (
                          <div className="text-emerald-400 text-xs">Done</div>
                        )}
                        {index === 3 && (
                          <div className="text-blue-400 text-xs animate-pulse">Running...</div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-xs text-text-tertiary mb-2">
                      <span>Pipeline Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Text */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <GitBranch className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">{content("jenkinsBadge")}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {content("jenkinsTitle")}
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {content("jenkinsDesc")}
                </p>
                <div className="space-y-4">
                  {content.raw("jenkinsItems").map((item: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-surface border border-border rounded-2xl p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Play className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">{content("demoBadge")}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              {content("demoTitle")}
            </h2>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/261nJnl8mNg"
                  title="PACON IDE Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-cyan-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {content("ctaTitle2")}
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              {content("ctaDesc")}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all hover:shadow-xl hover:shadow-blue-500/25 text-lg"
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
