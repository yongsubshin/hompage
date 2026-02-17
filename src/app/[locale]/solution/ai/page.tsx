"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Brain, Cpu, Code, CheckCircle, ArrowRight } from "lucide-react";

export default function AiSolutionPage() {
  const common = useTranslations("common");
  const t = useTranslations("solution");

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
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{common("solution")}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                AI for Adaptive&nbsp;
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Platforms
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl text-balance">
                {t("ai.pageTitle")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  {common("contactUs")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solution"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  {common("allSolutions")}
                </Link>
              </div>
            </motion.div>

            {/* Right: Floating Icon Cards */}
            <div className="relative h-[400px] hidden lg:block">
              {/* Card 1 - AI Model */}
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
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">AI Model</h3>
                  <p className="text-gray-400 text-sm">TensorFlow / PyTorch</p>
                </motion.div>
              </motion.div>

              {/* Card 2 - C++ AA */}
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
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">C++ AA</h3>
                  <p className="text-gray-400 text-sm">Adaptive AUTOSAR</p>
                </motion.div>
              </motion.div>

              {/* Card 3 - Docker */}
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
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Docker</h3>
                  <p className="text-gray-400 text-sm">ARM Container</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* AI Framework Support */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#12121a] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Framework Support</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">{t("ai.text1")}</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  TensorFlow Integration
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  PyTorch Support
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  AA Migration Tool
                </li>
              </ul>
            </motion.div>

            {/* Compatibility Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#12121a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Compatibility Solution</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{t("ai.text2")}</p>
            </motion.div>

            {/* PopcornSAR Solution */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#12121a] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">PopcornSAR Solution</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">{t("ai.text3")}</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  Compiler Version Matching
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  Python SOME/IP Module
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  AI SDK Integration
                </li>
              </ul>
            </motion.div>

            {/* Docker Container */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#12121a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Docker Container</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{t("ai.text4")}</p>
            </motion.div>
          </div>

          {/* Architecture Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#12121a] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-400 text-sm">AI Integration Architecture</span>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Image
                src="/images/contents/solution_04.png"
                alt="AI for Adaptive Platforms Architecture"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
            </div>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-gray-400 text-center mt-6"
          >
            {t("ai.note")}
          </motion.p>
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
              {t("ai.ctaTitle1")}{" "}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t("ai.ctaTitle2")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {t("ai.pageTitle")}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              {common("contactUs")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
