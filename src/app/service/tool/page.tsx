"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, FileCode, TestTube, Settings } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CustomToolPage() {
  const { t } = useLanguage();

  const toolExamples = [
    { icon: FileCode, title: t.service.tool.exampleList[0], desc: t.service.tool.exampleDescList[0] },
    { icon: Wrench, title: t.service.tool.exampleList[1], desc: t.service.tool.exampleDescList[1] },
    { icon: TestTube, title: t.service.tool.exampleList[2], desc: t.service.tool.exampleDescList[2] },
    { icon: Settings, title: t.service.tool.exampleList[3], desc: t.service.tool.exampleDescList[3] },
    { icon: FileCode, title: t.service.tool.exampleList[4], desc: t.service.tool.exampleDescList[4] },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contents/sub_visual03.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{t.service.tool.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/service" className="text-text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.service}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.service.tool.title}</span>
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
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-secondary leading-relaxed text-center max-w-3xl mx-auto">
                {t.service.tool.description}
              </p>
            </div>

            {/* Tool Examples */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">{t.service.tool.examples}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolExamples.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-surface rounded-2xl border border-border p-6 hover:border-accent-cyan/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mb-4">
                      <tool.icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">{tool.title}</h4>
                    <p className="text-text-secondary text-sm">{tool.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/support/qna"
                className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors"
              >
                {t.service.consulting.contact}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
