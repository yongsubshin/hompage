"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const notFoundTexts = {
  kr: {
    title: "페이지를 찾을 수 없습니다",
    description: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
    backHome: "홈으로 돌아가기",
  },
  en: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has been moved.",
    backHome: "Back to Home",
  },
  cn: {
    title: "页面未找到",
    description: "您查找的页面不存在或已被移动。",
    backHome: "返回首页",
  },
  jp: {
    title: "ページが見つかりません",
    description: "お探しのページは存在しないか、移動された可能性があります。",
    backHome: "ホームに戻る",
  },
};

export default function NotFound() {
  const { language } = useLanguage();
  const text = notFoundTexts[language] || notFoundTexts.kr;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-accent-blue mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-3">{text.title}</h2>
        <p className="text-text-secondary mb-8">
          {text.description}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-colors"
        >
          {text.backHome}
        </Link>
      </div>
    </div>
  );
}
