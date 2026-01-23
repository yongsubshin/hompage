"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight, X } from "lucide-react";
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
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contents/sub_visual01.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{t.company.notice.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/company" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.company}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.company.notice.title}</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Notice List */}
            <div className="bg-surface rounded-2xl border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="py-4 px-6 text-left font-semibold text-white w-24">{t.company.notice.number}</th>
                    <th className="py-4 px-6 text-left font-semibold text-white">{t.company.notice.titleColumn}</th>
                    <th className="py-4 px-6 text-left font-semibold text-white w-32">{t.company.notice.category}</th>
                    <th className="py-4 px-6 text-left font-semibold text-white w-40">{t.company.notice.date}</th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map((notice, index) => (
                    <tr
                      key={notice.id}
                      onClick={() => setSelectedNotice(notice)}
                      className="border-b border-border hover:bg-surface/50 transition-colors cursor-pointer"
                    >
                      <td className="py-4 px-6 text-tertiary">{notices.length - index}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="text-text-secondary hover:text-accent-cyan">
                            {getNoticeTitle(notice)}
                          </span>
                          <ChevronRight className="w-4 h-4 text-tertiary" />
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-sm rounded-full">
                          {getCategoryLabel(notice.category)}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-tertiary">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {notice.date}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedNotice(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="bg-surface rounded-2xl border border-border max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan text-sm rounded-full">
                    {getCategoryLabel(selectedNotice.category)}
                  </span>
                  <span className="text-text-tertiary text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedNotice.date}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="p-2 rounded-lg hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5 text-text-secondary" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  {getNoticeTitle(selectedNotice)}
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {getNoticeContent(selectedNotice)}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end p-6 border-t border-border">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="px-6 py-2 bg-accent-cyan text-white rounded-lg hover:bg-accent-cyan/80 transition-colors"
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
