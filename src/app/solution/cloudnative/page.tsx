"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CloudNativePage() {
  const { t } = useLanguage();

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
          <h1 className="text-4xl md:text-5xl font-bold">{t.solution.cloudNative.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/solution" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.solution}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.solution.cloudNative.title}</span>
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
              <p className="text-text-secondary leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.solution.cloudNative.text1 }} />
              <p className="text-text-secondary leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.solution.cloudNative.text2 }} />
              <p className="text-text-secondary leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.solution.cloudNative.text3 }} />
              <p className="text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: t.solution.cloudNative.text4 }} />
            </div>

            {/* Architecture Images */}
            <div className="space-y-8">
              <div className="bg-surface rounded-2xl border border-border p-8">
                <Image
                  src="/images/contents/solution_01.png"
                  alt="Cloud Native Solution Architecture 1"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>

              <div className="bg-surface rounded-2xl border border-border p-8">
                <Image
                  src="/images/contents/solution_02.png"
                  alt="Cloud Native Solution Architecture 2"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
