"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X, Bell, ArrowRight, Tag } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const notices = [
  {
    id: 1,
    title: "PopcornSAR AUTOSAR AI Agent 출시 안내",
    titleEn: "PopcornSAR AUTOSAR AI Agent Launch Announcement",
    titleCn: "PopcornSAR AUTOSAR AI Agent 发布公告",
    titleJp: "PopcornSAR AUTOSAR AI Agent リリースのお知らせ",
    content: "PopcornSAR에서 AUTOSAR AI Agent를 출시했습니다. AUTOSAR AI Agent는 자동차 소프트웨어 개발을 위한 AI 기반 도구로, 개발 생산성을 크게 향상시킵니다.",
    contentEn: "PopcornSAR has launched the AUTOSAR AI Agent. The AUTOSAR AI Agent is an AI-based tool for automotive software development that significantly improves development productivity.",
    contentCn: "PopcornSAR 发布了 AUTOSAR AI Agent。AUTOSAR AI Agent 是一款基于AI的汽车软件开发工具，可显著提高开发效率。",
    contentJp: "PopcornSARがAUTOSAR AI Agentをリリースしました。AUTOSAR AI Agentは、開発生産性を大幅に向上させるAIベースの自動車ソフトウェア開発ツールです。",
    date: "2024-12-15",
    category: "product",
  },
  {
    id: 2,
    title: "PARVIS ADK 1.0 버전 업데이트",
    titleEn: "PARVIS ADK 1.0 Version Update",
    titleCn: "PARVIS ADK 1.0 版本更新",
    titleJp: "PARVIS ADK 1.0 バージョンアップデート",
    content: "PARVIS ADK 1.0 버전이 업데이트되었습니다. 새로운 기능과 성능 개선이 포함되어 있으며, 기존 사용자는 무료로 업그레이드할 수 있습니다.",
    contentEn: "PARVIS ADK 1.0 has been updated. It includes new features and performance improvements, and existing users can upgrade for free.",
    contentCn: "PARVIS ADK 1.0 版本已更新。包含新功能和性能改进，现有用户可免费升级。",
    contentJp: "PARVIS ADK 1.0がアップデートされました。新機能とパフォーマンス改善が含まれており、既存ユーザーは無料でアップグレードできます。",
    date: "2024-11-20",
    category: "update",
  },
  {
    id: 3,
    title: "2024 Automotive World Japan 참가 안내",
    titleEn: "2024 Automotive World Japan Participation",
    titleCn: "2024 日本汽车世界展参展公告",
    titleJp: "2024 Automotive World Japan 出展のご案内",
    content: "PopcornSAR가 2024 Automotive World Japan에 참가합니다. 저희 부스에서 최신 AUTOSAR 솔루션을 만나보세요. 장소: 도쿄 빅사이트, 일시: 2024년 10월 23-25일",
    contentEn: "PopcornSAR will participate in 2024 Automotive World Japan. Visit our booth to see the latest AUTOSAR solutions. Location: Tokyo Big Sight, Date: October 23-25, 2024",
    contentCn: "PopcornSAR将参加2024日本汽车世界展。欢迎莅临我们的展位了解最新的AUTOSAR解决方案。地点：东京国际展览中心，日期：2024年10月23-25日",
    contentJp: "PopcornSARが2024 Automotive World Japanに出展します。当社ブースで最新のAUTOSARソリューションをご覧ください。場所：東京ビッグサイト、日時：2024年10月23-25日",
    date: "2024-10-05",
    category: "event",
  },
  {
    id: 4,
    title: "AUTOSAR R24-11 지원 업데이트",
    titleEn: "AUTOSAR R24-11 Support Update",
    titleCn: "AUTOSAR R24-11 支持更新",
    titleJp: "AUTOSAR R24-11 サポートアップデート",
    content: "AutoSAR.io가 최신 AUTOSAR R24-11 표준을 지원합니다. Adaptive Platform 및 Classic Platform 모두 지원하며, 기존 프로젝트의 마이그레이션도 가능합니다.",
    contentEn: "AutoSAR.io now supports the latest AUTOSAR R24-11 standard. Both Adaptive Platform and Classic Platform are supported, and migration of existing projects is possible.",
    contentCn: "AutoSAR.io 现已支持最新的 AUTOSAR R24-11 标准。支持 Adaptive Platform 和 Classic Platform，并可迁移现有项目。",
    contentJp: "AutoSAR.ioが最新のAUTOSAR R24-11標準をサポートしました。Adaptive PlatformとClassic Platformの両方をサポートし、既存プロジェクトの移行も可能です。",
    date: "2024-09-15",
    category: "update",
  },
  {
    id: 5,
    title: "PopcornSAR 신규 채용 공고",
    titleEn: "PopcornSAR Job Openings",
    titleCn: "PopcornSAR 招聘公告",
    titleJp: "PopcornSAR 採用情報",
    content: "PopcornSAR에서 함께 성장할 인재를 찾습니다. 모집 분야: SW 엔지니어, AI 연구원, 기술 지원. 자세한 내용은 채용 페이지를 확인해주세요.",
    contentEn: "PopcornSAR is looking for talented individuals to grow with us. Open positions: SW Engineer, AI Researcher, Technical Support. Please check our careers page for details.",
    contentCn: "PopcornSAR正在寻找与我们共同成长的人才。招聘岗位：软件工程师、AI研究员、技术支持。详情请查看招聘页面。",
    contentJp: "PopcornSARでは、共に成長する人材を募集しています。募集職種：SWエンジニア、AI研究員、テクニカルサポート。詳細は採用ページをご確認ください。",
    date: "2024-08-01",
    category: "recruitment",
  },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  product: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  update: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  event: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
  },
  recruitment: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
};

export default function NoticePage() {
  const { t, language } = useLanguage();
  const [selectedNotice, setSelectedNotice] = useState<typeof notices[0] | null>(null);

  const getNoticeTitle = (notice: typeof notices[0]) => {
    switch (language) {
      case "en":
        return notice.titleEn;
      case "cn":
        return notice.titleCn;
      case "jp":
        return notice.titleJp;
      default:
        return notice.title;
    }
  };

  const getNoticeContent = (notice: typeof notices[0]) => {
    switch (language) {
      case "en":
        return notice.contentEn;
      case "cn":
        return notice.contentCn;
      case "jp":
        return notice.contentJp;
      default:
        return notice.content;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "product":
        return t.company.notice.categories.product;
      case "update":
        return t.company.notice.categories.update;
      case "event":
        return t.company.notice.categories.event;
      case "recruitment":
        return t.company.notice.categories.recruitment;
      default:
        return category;
    }
  };

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Stripe Style */}
      <section className="relative min-h-[50vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6"
            >
              <Bell className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm text-accent-cyan font-medium">{t.company.notice.badge}</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.company.notice.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-text-secondary mb-8">
              {t.company.notice.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice List Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/50 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Notice Cards */}
            <div className="space-y-4">
              {notices.map((notice, index) => {
                const colors = categoryColors[notice.category] || categoryColors.product;

                return (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedNotice(notice)}
                    className="group relative bg-[#0a0a0f] border border-white/[0.08] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-accent-cyan/30 hover:shadow-lg hover:shadow-accent-cyan/5"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4">
                      {/* Left: Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          {/* Category Badge */}
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
                          >
                            <Tag className="w-3 h-3" />
                            {getCategoryLabel(notice.category)}
                          </span>

                          {/* Date */}
                          <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
                            <Calendar className="w-3.5 h-3.5" />
                            {notice.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors line-clamp-2">
                          {getNoticeTitle(notice)}
                        </h3>
                      </div>

                      {/* Right: Arrow */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-text-tertiary group-hover:text-accent-cyan transition-colors" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedNotice(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-[#0a0a0f] rounded-2xl border border-white/[0.1] max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/[0.08]">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Category Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                      categoryColors[selectedNotice.category]?.bg
                    } ${categoryColors[selectedNotice.category]?.text} border ${
                      categoryColors[selectedNotice.category]?.border
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    {getCategoryLabel(selectedNotice.category)}
                  </span>

                  {/* Date */}
                  <span className="flex items-center gap-1.5 text-sm text-text-tertiary">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedNotice.date}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-surface-elevated hover:border-accent-cyan/30 transition-all"
                >
                  <X className="w-5 h-5 text-text-secondary" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[50vh]">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                  {getNoticeTitle(selectedNotice)}
                </h2>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {getNoticeContent(selectedNotice)}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end p-6 border-t border-white/[0.08]">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan text-background font-semibold rounded-xl hover:bg-accent-cyan/90 transition-all hover:shadow-lg hover:shadow-accent-cyan/25"
                >
                  {language === "kr" ? "닫기" : language === "jp" ? "閉じる" : language === "cn" ? "关闭" : "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
