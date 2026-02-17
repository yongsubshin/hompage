"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GraduationCap, BookOpen, Code, Users, Monitor, CheckCircle, ArrowRight, Wrench } from "lucide-react";

export default function EducationPage() {
  const common = useTranslations("common");
  const t = useTranslations("service");

  const trainingMethods = [
    {
      icon: BookOpen,
      title: t("educationPage.theoryTitle"),
      desc: t("educationPage.theoryDesc"),
      color: "cyan",
    },
    {
      icon: Code,
      title: t("educationPage.practiceTitle"),
      desc: t("education.toolsDesc"),
      color: "blue",
    },
    {
      icon: Users,
      title: t("educationPage.onSiteTitle"),
      desc: t("educationPage.onSiteDesc"),
      color: "emerald",
    },
    {
      icon: Monitor,
      title: t("educationPage.onlineTitle"),
      desc: t("educationPage.onlineDesc"),
      color: "violet",
    },
  ];

  const tools = ["AutoSAR.io", "PARA", "PACON IDE"];

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
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{t("educationPage.badge")}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("education.title")}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl text-balance">
                {t("education.description")}
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
              {/* Card 1 - Theory */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 right-8 w-44"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#12121a] border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-3">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{t("educationPage.theoryTitle")}</h3>
                  <p className="text-gray-400 text-xs">{t("educationPage.theoryDesc")}</p>
                </motion.div>
              </motion.div>

              {/* Card 2 - Practice */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-4 left-4 w-44"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#12121a] border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{t("educationPage.practiceTitle")}</h3>
                  <p className="text-gray-400 text-xs">{t("education.toolsDesc")}</p>
                </motion.div>
              </motion.div>

              {/* Card 3 - On-site */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-16 left-16 w-44"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#12121a] border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-3">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{t("educationPage.onSiteTitle")}</h3>
                  <p className="text-gray-400 text-xs">{t("educationPage.onSiteDesc")}</p>
                </motion.div>
              </motion.div>

              {/* Card 4 - Online */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 right-0 w-44"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-[#12121a] border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center mb-3">
                    <Monitor className="w-5 h-5 text-violet-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{t("educationPage.onlineTitle")}</h3>
                  <p className="text-gray-400 text-xs">{t("educationPage.onlineDesc")}</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methods Section */}
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
              {t("educationPage.methodsTitle")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("educationPage.methodsSubtitle")}
            </p>
          </motion.div>

          {/* 4 Column Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`h-full bg-[#12121a] border border-${method.color}-500/20 rounded-2xl p-6 text-center hover:border-${method.color}-500/40 transition-all duration-300`}>
                  <div className={`w-16 h-16 bg-${method.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className={`w-8 h-8 text-${method.color}-400`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 text-sm">{method.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Scope & Tools Section */}
      <section className="py-24 relative bg-[#0d0d12]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Training Scope */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {t("education.scope")}
              </h2>
              <div className="space-y-4">
                {t.raw("educationPage.scopeItems").map((item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-[#12121a] border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-500/40 transition-all"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Training Tools */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {t("education.tools")}
              </h2>
              <div className="bg-[#12121a] border border-blue-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-gray-400">{t("education.toolsDesc")}</p>
                </div>
                <div className="space-y-3">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-4 py-3 bg-blue-500/5 border border-blue-500/10 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-white font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 bg-[#12121a] border border-white/10 rounded-2xl p-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t("education.contactInfo")}
                </p>
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
              {t("educationPage.ctaTitle1")}{" "}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t("educationPage.ctaTitle2")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {t("education.contactInfo")}
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
