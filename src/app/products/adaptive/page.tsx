"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AdaptivePage() {
  const { t } = useLanguage();
  const content = t.adaptive;

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
            <Link href="/" className="text-text-secondary hover:text-accent-cyan">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/products" className="text-text-secondary hover:text-accent-cyan">{t.nav.products}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{content.title}</span>
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
              {content.intro.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed mb-8 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tool Kit Components */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-surface rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-20 h-20 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/images/main/con01.png"
                    alt="AutoSAR.io"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{content.toolAuthoring}</h3>
                <p className="text-accent-cyan font-semibold mb-4">{content.toolAuthoringName}</p>
                <Link
                  href="/products/autosario"
                  className="inline-block mt-4 text-accent-cyan hover:underline"
                >
                  {t.common.learnMore} →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-surface rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-20 h-20 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/images/main/con02.png"
                    alt="PARA"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{content.toolFunctional}</h3>
                <p className="text-accent-cyan font-semibold mb-4">{content.toolFunctionalName}</p>
                <Link
                  href="/products/para"
                  className="inline-block mt-4 text-accent-cyan hover:underline"
                >
                  {t.common.learnMore} →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-surface rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-20 h-20 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/images/main/con03.png"
                    alt="PACON IDE"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{content.toolIde}</h3>
                <p className="text-accent-cyan font-semibold mb-4">{content.toolIdeName}</p>
                <Link
                  href="/products/pacon"
                  className="inline-block mt-4 text-accent-cyan hover:underline"
                >
                  {t.common.learnMore} →
                </Link>
              </motion.div>
            </div>

            <div className="bg-accent-cyan/10 rounded-2xl p-8 text-center border border-accent-cyan/20">
              <p className="text-xl text-white font-medium">
                {content.subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
