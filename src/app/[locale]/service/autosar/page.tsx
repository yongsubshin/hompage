"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Settings, CheckCircle, ArrowRight, FileCode, Cpu, Puzzle } from "lucide-react";

export default function AutosarServicePage() {
  const common = useTranslations("common");
  const t = useTranslations("service");

  const steps = [
    {
      number: "01",
      title: t("autosarPage.step1Title"),
      desc: t("autosarPage.step1Desc"),
      icon: FileCode,
      color: "cyan",
    },
    {
      number: "02",
      title: t("autosarPage.step2Title"),
      desc: t("autosarPage.step2Desc"),
      icon: Cpu,
      color: "blue",
    },
    {
      number: "03",
      title: t("autosarPage.step3Title"),
      desc: t("autosarPage.step3Desc"),
      icon: Puzzle,
      color: "emerald",
    },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Blur Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Settings className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{t("autosarPage.badge")}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-white mb-6 leading-tight">
                AUTOSAR<br />Implementation
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl text-balance">
                {t("autosar.description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  {t("consulting.contact")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/service"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  {common("allServices")}
                </Link>
              </div>
            </motion.div>

            {/* Right: Floating Icon Cards */}
            <div className="relative h-[400px] hidden lg:block">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 right-0 w-48"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#12121a] border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                    <FileCode className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{t("autosarPage.card1Title")}</h3>
                  <p className="text-gray-400 text-sm">{t("autosarPage.card1Desc")}</p>
                </motion.div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-1/3 left-0 w-48"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#12121a] border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{t("autosarPage.card2Title")}</h3>
                  <p className="text-gray-400 text-sm">{t("autosarPage.card2Desc")}</p>
                </motion.div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-0 right-1/4 w-48"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#12121a] border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Puzzle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{t("autosarPage.card3Title")}</h3>
                  <p className="text-gray-400 text-sm">{t("autosarPage.card3Desc")}</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("autosarPage.processTitle")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("autosarPage.processSubtitle")}
            </p>
          </motion.div>

          {/* Step Flow */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-emerald-500/50 -translate-y-1/2" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`h-full bg-[#12121a] border border-${step.color}-500/20 rounded-2xl p-8 hover:border-${step.color}-500/40 transition-all duration-300`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-8 px-4 py-1 bg-${step.color}-500 text-white text-sm font-bold rounded-full`}>
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 bg-${step.color}-500/20 rounded-xl flex items-center justify-center mb-6 mt-4`}>
                    <step.icon className={`w-7 h-7 text-${step.color}-400`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Scope Section */}
      <section className="py-24 relative bg-[#0d0d12]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {t("autosarPage.scopeTitle")}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {t.raw("autosarPage.scopeItems").map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-[#12121a] border border-cyan-500/20 rounded-xl p-5 hover:border-cyan-500/40 transition-all"
                >
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("autosarPage.ctaTitle1")}{" "}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t("autosarPage.ctaTitle2")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {t("autosar.description")}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              {t("consulting.contact")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
