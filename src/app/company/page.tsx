"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Users,
  Rocket,
  Globe,
  Building2,
  Play,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const customers = [
  { name: "Mobis", href: "https://www.mobis.co.kr/kr/index.do", logo: "/images/contents/mobis.png" },
  { name: "Denso", href: "https://www.denso.com/jp/ja/", logo: "/images/contents/denso.png" },
  { name: "LG", href: "https://www.lge.co.kr/", logo: "/images/contents/lg.png" },
  { name: "Hyundai Kefico", href: "https://www.hyundai-kefico.com/ko/main/main/index.do", logo: "/images/contents/hyundai.png" },
  { name: "Autocrypt", href: "https://www.autocrypt.co.kr/", logo: "/images/contents/AutoCryptLogo.png" },
  { name: "Huawei", href: "https://www.huawei.com/cn/", logo: "/images/contents/HAWEI.png" },
  { name: "AVL", href: "https://www.avl.com/?avlregion=GLOBAL&groupId=10138&lang=en_US", logo: "/images/contents/avl.png" },
];

const partners = [
  { name: "OSB AG", href: "https://www.osb-ag.de/en/competence-centers/autosar.html", logo: "/images/contents/osb.png" },
  { name: "Kaspersky", href: "https://os.kaspersky.com/partners/", logo: "/images/contents/kaspersky.png" },
  { name: "Tech Mahindra", href: "https://www.techmahindra.com/en-in/?f=397692388", logo: "/images/contents/techm.png" },
];

const investors = [
  { name: "Kodit", href: "https://www.kodit.co.kr/index.jsp", logo: "/images/contents/kodit.png" },
  { name: "KRun Ventures", href: "https://www.krunventures.com/about-us", logo: "/images/contents/krun.png" },
];

const visionCards = [
  {
    icon: Target,
    titleKey: "visionMission" as const,
    descKey: "visionMissionDesc" as const,
    color: "cyan",
  },
  {
    icon: Lightbulb,
    titleKey: "visionInnovation" as const,
    descKey: "visionInnovationDesc" as const,
    color: "blue",
  },
  {
    icon: Users,
    titleKey: "visionCollaboration" as const,
    descKey: "visionCollaborationDesc" as const,
    color: "purple",
  },
  {
    icon: Rocket,
    titleKey: "visionGrowth" as const,
    descKey: "visionGrowthDesc" as const,
    color: "emerald",
  },
];

export default function CompanyPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
                <Building2 className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm text-accent-cyan font-medium">{t.company.badge}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                {t.company.title}
              </h1>

              <p className="text-xl lg:text-2xl text-text-secondary mb-4 leading-relaxed">
                {t.company.subtitle1}
                <br />
                <span className="text-accent-cyan">{t.company.subtitle2}</span>
              </p>

              <p className="text-text-tertiary mb-8 max-w-lg leading-relaxed">
                {t.company.description1}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support/qna"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-background font-semibold rounded-xl hover:bg-accent-cyan/90 transition-all hover:shadow-lg hover:shadow-accent-cyan/25"
                >
                  <span>{t.company.ctaContact}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#story"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-xl hover:bg-surface-elevated hover:border-accent-cyan/30 transition-all"
                >
                  {t.company.learnMore}
                </Link>
              </div>
            </motion.div>

            {/* Right: Floating Vision Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Central Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-accent-cyan/30 rounded-full blur-[80px] animate-pulse" />
                </div>

                {/* Mission Card - Top Left */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-0 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">{t.company.visionMission}</span>
                  </div>
                  <p className="text-xs text-text-tertiary">{t.company.visionMissionDesc}</p>
                </motion.div>

                {/* Innovation Card - Top Right */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/4 right-0 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">{t.company.visionInnovation}</span>
                  </div>
                  <p className="text-xs text-text-tertiary">{t.company.visionInnovationDesc}</p>
                </motion.div>

                {/* Collaboration Card - Bottom Left */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 left-4 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">{t.company.visionCollaboration}</span>
                  </div>
                  <p className="text-xs text-text-tertiary">{t.company.visionCollaborationDesc}</p>
                </motion.div>

                {/* Growth Card - Bottom Right */}
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-8 right-8 bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-5 shadow-2xl max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-white">{t.company.visionGrowth}</span>
                  </div>
                  <p className="text-xs text-text-tertiary">{t.company.visionGrowthDesc}</p>
                </motion.div>

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(0, 229, 255, 0.3)" />
                      <stop offset="100%" stopColor="rgba(123, 97, 255, 0.3)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 100 80 Q 200 180 320 160 Q 400 140 360 280 Q 320 380 160 340"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    className="opacity-50"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-cyan text-sm font-medium tracking-wider uppercase">
              {t.company.ourStory}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-4">
              {t.company.storyTitle}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t.company.storyDesc}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-accent-cyan/10 to-transparent border border-accent-cyan/20 rounded-3xl p-2 overflow-hidden">
                <div className="absolute top-4 right-4 w-32 h-32 bg-accent-cyan/20 rounded-full blur-[60px]" />
                <Image
                  src="/images/contents/about_01.jpg"
                  alt="PopcornSAR Company"
                  width={800}
                  height={500}
                  className="rounded-2xl w-full relative z-10"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-text-secondary leading-relaxed text-lg">
                {t.company.description2}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {t.company.description3}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {t.company.description4}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section - Feature Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-cyan text-sm font-medium tracking-wider uppercase">
              {t.company.ourVision}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-4">
              {t.company.visionTitle}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t.company.visionDesc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionCards.map((card, index) => (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-surface border border-border rounded-2xl p-6 hover:border-accent-cyan/30 hover:shadow-lg hover:shadow-accent-cyan/5 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-accent-${card.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-${card.color}/20 transition-colors`}>
                  <card.icon className={`w-6 h-6 text-accent-${card.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{t.company[card.titleKey]}</h3>
                <p className="text-text-secondary text-sm">{t.company[card.descKey]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - macOS Style Window */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-6">
              <Play className="w-4 h-4 text-accent-blue" />
              <span className="text-sm text-text-secondary">{t.company.companyVideo}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.company.title}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t.company.videoDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-surface/80 backdrop-blur rounded-2xl border border-border overflow-hidden shadow-2xl">
              {/* macOS Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-text-tertiary ml-2">{t.company.videoTitle}</span>
              </div>
              {/* Video */}
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GB_RiYzO-as"
                  title="PopcornSAR Company Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-accent-cyan text-sm font-medium tracking-wider uppercase">
                {t.company.ourJourney}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-6">
                {t.company.journeyTitle}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.company.description5}
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-surface border border-border rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-accent-cyan">{t.company.statYears}</p>
                  <p className="text-xs text-text-tertiary">{t.company.statYearsLabel}</p>
                </div>
                <div className="bg-surface border border-border rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-accent-blue">{t.company.statClients}</p>
                  <p className="text-xs text-text-tertiary">{t.company.statClientsLabel}</p>
                </div>
                <div className="bg-surface border border-border rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-accent-purple">{t.company.statProjects}</p>
                  <p className="text-xs text-text-tertiary">{t.company.statProjectsLabel}</p>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative bg-gradient-to-br from-accent-blue/10 to-transparent border border-accent-blue/20 rounded-3xl p-2 overflow-hidden">
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-accent-blue/20 rounded-full blur-[60px]" />
                <Image
                  src="/images/contents/about_02.jpg"
                  alt="PopcornSAR History"
                  width={800}
                  height={500}
                  className="rounded-2xl w-full relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section - Modern Logo Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-cyan text-sm font-medium tracking-wider uppercase">
              {t.company.networkLabel}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-4">
              {t.company.networkTitle}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t.company.networkDesc}
            </p>
          </motion.div>

          <div className="bg-surface rounded-3xl border border-border p-8 md:p-12">
            {/* Customers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-accent-cyan/10 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white">{t.company.customers}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {customers.map((customer, index) => (
                  <motion.a
                    key={customer.name}
                    href={customer.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                    title={customer.name}
                  >
                    <div className="h-20 bg-white rounded-xl p-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-cyan/10 group-hover:scale-105 group-hover:border-accent-cyan/30 border border-transparent">
                      <img
                        src={customer.logo}
                        alt={customer.name}
                        className="object-contain w-full h-full max-w-[100px] max-h-[50px] transition-all duration-300"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Tech Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white">{t.company.partners}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
                {partners.map((partner, index) => (
                  <motion.a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                    title={partner.name}
                  >
                    <div className="h-20 bg-white rounded-xl p-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-blue/10 group-hover:scale-105 group-hover:border-accent-blue/30 border border-transparent">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="object-contain w-full h-full max-w-[100px] max-h-[50px] transition-all duration-300"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Investors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-accent-purple/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white">{t.company.investors}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-xs">
                {investors.map((investor, index) => (
                  <motion.a
                    key={investor.name}
                    href={investor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                    title={investor.name}
                  >
                    <div className="h-20 bg-white rounded-xl p-3 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent-purple/10 group-hover:scale-105 group-hover:border-accent-purple/30 border border-transparent">
                      <img
                        src={investor.logo}
                        alt={investor.name}
                        className="object-contain w-full h-full max-w-[100px] max-h-[50px] transition-all duration-300"
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-text-tertiary mt-6">{t.company.sortNote}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-background to-accent-blue/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              {t.company.ctaTitle}
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              {t.company.ctaDesc}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent-cyan text-background font-semibold rounded-xl hover:bg-accent-cyan/90 transition-all hover:shadow-xl hover:shadow-accent-cyan/25 text-lg"
            >
              <span>{t.company.ctaContact}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
