"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Users, Target, CheckCircle, ArrowRight, Building2, Factory } from "lucide-react";

export default function ConsultingPage() {
  const common = useTranslations("common");
  const t = useTranslations("consultingPage");
  const service = useTranslations("service");
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
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{t("badge")}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {service("consulting.title")}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl text-balance">
                {service("consulting.description")}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  {service("consulting.contact")}
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
              {/* Card 1 - Partnership */}
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
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{t("partnership")}</h3>
                  <p className="text-gray-400 text-sm">{t("partnershipDesc")}</p>
                </motion.div>
              </motion.div>

              {/* Card 2 - Customized */}
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
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{t("customized")}</h3>
                  <p className="text-gray-400 text-sm">{t("customizedDesc")}</p>
                </motion.div>
              </motion.div>

              {/* Card 3 - Verified */}
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
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{t("verified")}</h3>
                  <p className="text-gray-400 text-sm">{t("verifiedDesc")}</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section - OEM & Tier1 */}
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
              {t("targetTitle")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {service("consulting.description")}
            </p>
          </motion.div>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* For OEM Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-[#12121a] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service("consulting.forOem")}</h3>
                    <p className="text-cyan-400 text-sm">{t("oemSubtitle")}</p>
                  </div>
                </div>

                {/* List */}
                <ul className="space-y-3">
                  {service.raw("consulting.forOemList").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* For Tier1 Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="h-full bg-[#12121a] border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Factory className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service("consulting.forTier1")}</h3>
                    <p className="text-blue-400 text-sm">{t("tier1Subtitle")}</p>
                  </div>
                </div>

                {/* List */}
                <ul className="space-y-3">
                  {service.raw("consulting.forTier1List").map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
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
              {t("ctaTitle1")}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t("ctaTitle2")}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {service("consulting.description")}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              {service("consulting.contact")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
