"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Cloud, Server, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function CloudNativePage() {
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
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{common("solution")}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cloud&nbsp;
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Native
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl text-balance">
                {t("cloudNative.pageTitle")}
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
              {/* Card 1 - AWS Cloud */}
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
                    <Cloud className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">AWS Cloud</h3>
                  <p className="text-gray-400 text-sm">Scalable Infrastructure</p>
                </motion.div>
              </motion.div>

              {/* Card 2 - Virtual ECU */}
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
                    <Server className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Virtual ECU</h3>
                  <p className="text-gray-400 text-sm">ARM 64 Docker</p>
                </motion.div>
              </motion.div>

              {/* Card 3 - DevOps */}
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
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">DevOps</h3>
                  <p className="text-gray-400 text-sm">CI/CD Pipeline</p>
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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Scalability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#12121a] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <Cloud className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scalability</h3>
              <p className="text-gray-400 leading-relaxed">{t("cloudNative.text1")}</p>
            </motion.div>

            {/* Flexibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#12121a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Flexibility</h3>
              <p className="text-gray-400 leading-relaxed">{t("cloudNative.text2")}</p>
            </motion.div>

            {/* Reliability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#12121a] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Reliability</h3>
              <p className="text-gray-400 leading-relaxed">{t("cloudNative.text3")}</p>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#12121a] border border-cyan-500/20 rounded-2xl p-8 mb-16"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">AWS Integration</h3>
                <p className="text-gray-400 leading-relaxed">{t("cloudNative.text4")}</p>
              </div>
            </div>
          </motion.div>

          {/* Architecture Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#12121a] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-400 text-sm">Architecture Overview</span>
              </div>
              <div className="bg-white rounded-lg">
                <Image
                  src="/images/contents/solution_01.png"
                  alt="Cloud Native Solution Architecture 1"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#12121a] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-gray-400 text-sm">Infrastructure Design</span>
              </div>
              <div className="bg-white rounded-lg">
                <Image
                  src="/images/contents/solution_02.png"
                  alt="Cloud Native Solution Architecture 2"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>
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
              {t("cloudNative.ctaTitle1")}{" "}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t("cloudNative.ctaTitle2")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {t("cloudNative.pageTitle")}
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
