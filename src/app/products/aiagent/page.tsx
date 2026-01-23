"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Code,
  Search,
  Hash,
  Tag,
  AlertTriangle,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function AiAgentPage() {
  const { t } = useLanguage();
  const content = t.aiAgent;

  const features = [
    { icon: FileText, title: content.feature1Title, desc: content.feature1Desc },
    { icon: Code, title: content.feature2Title, desc: content.feature2Desc },
    { icon: Search, title: content.feature3Title, desc: content.feature3Desc },
    { icon: Hash, title: content.feature4Title, desc: content.feature4Desc },
    { icon: Tag, title: content.feature5Title, desc: content.feature5Desc },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contents/sub_visual02.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{content.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-accent-cyan transition-colors">
              {t.common.home}
            </Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/products" className="text-text-secondary hover:text-accent-cyan transition-colors">
              {t.nav.products}
            </Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{content.title}</span>
          </div>
        </div>
      </nav>

      {/* Problem Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-amber-500/10">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.problemTitle}</h2>
            </div>
            <p className="text-text-secondary text-lg p-6 rounded-xl bg-surface border border-amber-500/20">
              {content.problemDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent-cyan/10">
                <Users className="w-6 h-6 text-accent-cyan" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.targetTitle}</h2>
            </div>
            <p className="text-text-secondary text-lg">
              {content.targetDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5 Core Features */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-cyan text-sm font-medium mb-3">Core Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{content.featuresTitle}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-xl bg-accent-cyan/10 text-accent-cyan mb-6 group-hover:bg-accent-cyan group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Superiority */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <Zap className="w-6 h-6 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">{content.techTitle}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {content.techList.map((tech: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-5 rounded-xl bg-surface border border-border">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-text-secondary">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Efficiency Comparison */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">{content.compareTitle}</h2>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left text-text-secondary font-medium">{content.compareHeaders[0]}</th>
                    <th className="py-4 px-6 text-left text-text-secondary font-medium">{content.compareHeaders[1]}</th>
                    <th className="py-4 px-6 text-left text-accent-cyan font-medium">{content.compareHeaders[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  {content.compareRows.map((row: { task: string; before: string; after: string }, index: number) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                      <td className="py-5 px-6 font-medium text-white">{row.task}</td>
                      <td className="py-5 px-6 text-text-tertiary">{row.before}</td>
                      <td className="py-5 px-6 text-accent-cyan font-semibold">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unique Value */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-blue/10 border border-accent-cyan/20">
              <h3 className="text-2xl font-bold text-white mb-4">{content.valueTitle}</h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                {content.valueDesc}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="px-4 py-2 rounded-lg bg-accent-cyan/20 text-accent-cyan font-semibold">
                  70%+
                </div>
                <span className="text-text-secondary">Development time reduction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-8">{content.supportTitle}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-surface border border-border">
                <p className="text-text-tertiary text-sm mb-2">Version</p>
                <p className="text-white font-medium">{content.supportVersion}</p>
              </div>
              <div className="p-6 rounded-xl bg-surface border border-border">
                <p className="text-text-tertiary text-sm mb-2">Language</p>
                <p className="text-white font-medium">{content.supportLang}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-white font-semibold rounded-xl hover:bg-accent-cyan/90 transition-colors"
            >
              {content.contact}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
