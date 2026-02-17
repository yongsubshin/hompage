"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageSquare,
  Bot,
  Sparkles,
  FileCode2,
  Search,
  Hash,
  Tag,
  Zap,
  TrendingUp,
  Target,
  Globe,
  ChevronRight,
  CheckCircle,
  Send,
  FileText,
  Code2,
  Brain,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function AiAgentPage() {
  const content = useTranslations("aiAgent");
  
  const features = [
    { icon: FileCode2, title: content("feature1Title"), desc: content("feature1Desc"), color: "blue" },
    { icon: Code2, title: content("feature2Title"), desc: content("feature2Desc"), color: "cyan" },
    { icon: Search, title: content("feature3Title"), desc: content("feature3Desc"), color: "violet" },
    { icon: Hash, title: content("feature4Title"), desc: content("feature4Desc"), color: "emerald" },
    { icon: Tag, title: content("feature5Title"), desc: content("feature5Desc"), color: "amber" },
  ];

  const benefits = [
    { icon: Zap, title: content("benefit1Title"), desc: content("benefit1Desc") },
    { icon: TrendingUp, title: content("benefit2Title"), desc: content("benefit2Desc") },
    { icon: Target, title: content("benefit3Title"), desc: content("benefit3Desc") },
    { icon: Globe, title: content("benefit4Title"), desc: content("benefit4Desc") },
  ];

  // Chat messages for demo visualization
  const chatMessages = [
    { type: "user", text: content("chatDemo1User") },
    { type: "ai", text: content("chatDemo1AI") },
    { type: "user", text: content("chatDemo2User") },
    { type: "ai", text: content("chatDemo2AI") },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Chat Interface Design */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Effects - Blue theme */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px]" />
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
                <Bot className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">{content("badge")}</span>
              </div>

              <h1
                className="font-bold text-white mb-6 leading-tight text-balance"
                style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)' }}
              >
                {content("title")}
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-violet-400 transition-all hover:shadow-lg hover:shadow-blue-500/25"
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

            {/* Right: Chat Interface Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500/30 to-violet-500/20 rounded-full blur-[80px] animate-pulse" />
                </div>

                {/* Chat Window */}
                <div className="relative bg-surface/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Chat Header */}
                  <div className="flex items-center gap-3 px-4 py-3 bg-surface-elevated border-b border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">AUTOSAR AI Agent</p>
                      <p className="text-emerald-400 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {content("chatOnline")}
                      </p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 min-h-[300px]">
                    {chatMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.3 }}
                        className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                            msg.type === "user"
                              ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-br-md"
                              : "bg-surface-elevated border border-border text-text-secondary rounded-bl-md"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-3 border-t border-white/5">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-background rounded-xl">
                      <input
                        type="text"
                        placeholder={content("chatPlaceholder")}
                        className="flex-1 bg-transparent text-sm text-white placeholder-text-tertiary outline-none"
                        disabled
                      />
                      <button className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                        <Send className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -left-4 top-1/4 bg-surface border border-blue-500/20 rounded-xl px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-text-secondary">AI-Powered</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                  className="absolute -right-4 bottom-1/4 bg-surface border border-violet-500/20 rounded-xl px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    <span className="text-xs text-text-secondary">70%+ {content("timeReduction")}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">{content("targetTitle")}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {content("targetSubtitle")}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {content("targetDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              Core Features
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-4">
              {content("featuresTitle")}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {content("featuresSubtitle")}
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const colorClasses: Record<string, { border: string; bg: string; text: string }> = {
                blue: { border: "border-blue-500/20 hover:border-blue-500/40", bg: "from-blue-500 to-blue-600", text: "text-blue-400" },
                cyan: { border: "border-cyan-500/20 hover:border-cyan-500/40", bg: "from-cyan-500 to-cyan-600", text: "text-cyan-400" },
                violet: { border: "border-violet-500/20 hover:border-violet-500/40", bg: "from-violet-500 to-violet-600", text: "text-violet-400" },
                emerald: { border: "border-emerald-500/20 hover:border-emerald-500/40", bg: "from-emerald-500 to-emerald-600", text: "text-emerald-400" },
                amber: { border: "border-amber-500/20 hover:border-amber-500/40", bg: "from-amber-500 to-amber-600", text: "text-amber-400" },
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

      {/* Metrics Section - Before/After */}
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
          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Large Card - Time Reduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:row-span-2 bg-gradient-to-br from-blue-500/20 via-surface to-surface border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="text-7xl lg:text-8xl font-bold text-white mb-4">
                  70<span className="text-blue-400">%+</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{content("timeReductionLabel")}</h3>
                <p className="text-text-secondary">
                  {content("timeReductionDesc")}
                </p>
              </div>
            </motion.div>

            {/* Timeline Cards - Before/After */}
            {content.raw("compareRows").map((row: { task: string; before: string; after: string }, index: number) => (
              <motion.div
                key={row.task}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-5 hover:border-blue-500/30 transition-all group"
              >
                <p className="text-blue-400 text-sm font-medium mb-3">{row.task}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <p className="text-text-tertiary text-xs mb-1">{content("compareHeaders")[1]}</p>
                    <p className="text-text-secondary text-sm line-through opacity-60">{row.before}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <div className="flex-1">
                    <p className="text-blue-400 text-xs mb-1">{content("compareHeaders")[2]}</p>
                    <p className="text-white text-sm font-medium">{row.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Demo Chat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-surface border border-blue-500/20 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Chat header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <MessageSquare className="w-4 h-4 text-text-tertiary" />
                      <span className="text-xs text-text-tertiary font-mono">AUTOSAR AI Agent - Demo</span>
                    </div>
                  </div>
                  {/* Chat content */}
                  <div className="p-4 space-y-3 min-h-[280px]">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="max-w-[85%] px-4 py-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-2xl rounded-br-md text-sm">
                        {content("demoQuestion")}
                      </div>
                    </div>
                    {/* AI response */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] px-4 py-3 bg-surface-elevated border border-border rounded-2xl rounded-bl-md">
                        <p className="text-text-secondary text-sm mb-2">{content("demoAnswer")}</p>
                        <div className="mt-2 p-2 bg-background rounded-lg font-mono text-xs text-blue-400">
                          {content("demoCode")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Text */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-sm text-violet-400 font-medium">{content("demoBadge")}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {content("demoTitle")}
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  {content("demoDesc")}
                </p>
                <div className="space-y-4">
                  {content.raw("demoFeatures").map((feature: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-text-secondary">{content("techTitle")}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {content("valueTitle")}
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              {content("valueDesc")}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {content.raw("techList").map((tech: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-blue-500/30 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-text-secondary text-sm">{tech}</span>
                </motion.div>
              ))}
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-colors">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-20 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">{content("supportTitle")}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-surface border border-border hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <p className="text-text-tertiary text-sm">Version</p>
                </div>
                <p className="text-white font-medium">{content("supportVersion")}</p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <p className="text-text-tertiary text-sm">Language</p>
                </div>
                <p className="text-white font-medium">{content("supportLang")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-violet-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px]" />

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                {content("ctaTitle2")}
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              {content("ctaDesc")}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-violet-400 transition-all hover:shadow-xl hover:shadow-blue-500/25 text-lg"
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
