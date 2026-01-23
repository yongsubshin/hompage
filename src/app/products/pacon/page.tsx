"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PaconPage() {
  const { t } = useLanguage();
  const content = t.pacon;

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
          <h1 className="text-4xl md:text-5xl font-bold">PACON IDE</h1>
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
            <span className="text-accent-cyan">PACON IDE</span>
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
              {content.title}
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              {content.intro.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Main Image */}
            <div className="mb-16">
              <div className="bg-surface rounded-2xl shadow-lg p-8 border border-border">
                <Image
                  src="/images/contents/pacon_01.png"
                  alt="PACON IDE"
                  width={1200}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.keyFeaturesTitle}</h3>
              <div className="bg-surface/50 rounded-2xl p-8 border border-border">
                <ul className="space-y-3 text-secondary">
                  {content.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-cyan">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.benefitsTitle}</h3>
              <div className="bg-surface/50 rounded-2xl p-8 border border-border">
                <ul className="space-y-3 text-secondary">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-cyan">-</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Optional Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-white">{content.optionalTitle}</h3>
              <p className="text-text-secondary mb-6">
                {content.optionalDesc}
              </p>
            </div>

            {/* Virtual ECU */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.virtualEcuTitle}</h3>
              <div className="bg-surface/50 rounded-2xl p-8 border border-border">
                <ul className="space-y-3 text-secondary">
                  {content.virtualEcuItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-cyan">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Image
                  src="/images/contents/pacon_02.png"
                  alt="PACON Screenshot 1"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/contents/pacon_03.png"
                  alt="PACON Screenshot 2"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Jenkins CI/CD */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.jenkinsTitle}</h3>
              <div className="bg-surface/50 rounded-2xl p-8 border border-border">
                <ul className="space-y-3 text-secondary">
                  {content.jenkinsItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-cyan">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Demo Video */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.demoTitle}</h3>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/261nJnl8mNg"
                  title="PACON IDE Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/support/qna"
                className="inline-block px-8 py-4 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-cyan/80 transition-colors"
              >
                {content.contact}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
