"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SupportPage() {
  const { t } = useLanguage();

  // Product & Service Catalog - All 3 language versions always shown
  const catalogFiles = [
    {
      title: "PopcornSAR Adaptive AUTOSAR (R20-11) 개발 플랫폼 소개",
      description: "AUTOSAR Adaptive Platform 설계를 위한 AutoSAR.io 평가판 (한국어)",
      src: "/downloads/PopcornSAR_Adaptive_AUTOSAR_R20-11_KR.pdf",
      lang: "KR",
    },
    {
      title: "Introduction to PopcornSAR Adaptive AUTOSAR (R20-11) Tool chain",
      description: "AutoSAR.io trial version for AUTOSAR Adaptive Platform design (English)",
      src: "/downloads/PopcornSAR_Adaptive_AUTOSAR_R20-11_EN.pdf",
      lang: "EN",
    },
    {
      title: "PopcornSAR Adaptive AUTOSAR (R20-11) 開発プラットフォームの紹介",
      description: "AUTOSAR Adaptive Platform設計用AutoSAR.io評価版 (日本語)",
      src: "/downloads/PopcornSAR_Adaptive_AUTOSAR_R20-11_JP.pdf",
      lang: "JP",
    },
  ];

  // Technical Documents
  const technicalFiles = [
    {
      title: "AUTOSAR Adaptive Platform Overview",
      description: t.support.download.files.autosarOverview.description,
      src: "/downloads/220315164045_4292.pdf",
    },
    {
      title: "PopcornSAR Product Catalog",
      description: t.support.download.files.productCatalog.description,
      src: "/downloads/190925172016_7909.pdf",
    },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Stripe Style */}
      <section className="relative min-h-[40vh] flex items-center justify-center py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[200px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <Download className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm text-accent-cyan font-medium">Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{t.support.download.title}</h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Product & Service Catalog Downloads */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <FileText className="w-6 h-6 text-accent-cyan" />
                {t.support.download.productDownload}
              </h2>
              <div className="space-y-4">
                {catalogFiles.map((file) => (
                  <div
                    key={file.src}
                    className="bg-surface rounded-xl border border-border p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-accent-cyan/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-2 py-0.5 bg-accent-cyan/20 text-accent-cyan text-xs font-bold rounded">
                          {file.lang}
                        </span>
                        <h3 className="font-bold text-lg text-white">{file.title}</h3>
                      </div>
                      <p className="text-text-secondary text-sm">{file.description}</p>
                    </div>
                    <a
                      href={file.src}
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-background font-medium rounded-lg hover:bg-accent-cyan/90 transition-colors whitespace-nowrap"
                    >
                      <Download className="w-4 h-4" />
                      {t.support.download.downloadBtn}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Documents */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <FileText className="w-6 h-6 text-accent-cyan" />
                {t.support.download.technicalDocs}
              </h2>
              <div className="space-y-4">
                {technicalFiles.map((file) => (
                  <div
                    key={file.src}
                    className="bg-surface rounded-xl border border-border p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-accent-cyan/30 transition-colors"
                  >
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-white">{file.title}</h3>
                      <p className="text-text-secondary text-sm">{file.description}</p>
                    </div>
                    <a
                      href={file.src}
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-cyan text-background font-medium rounded-lg hover:bg-accent-cyan/90 transition-colors whitespace-nowrap"
                    >
                      <Download className="w-4 h-4" />
                      {t.support.download.downloadBtn}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
