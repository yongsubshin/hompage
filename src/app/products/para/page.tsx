"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { InteractiveImageMap } from "@/components/ui";

export default function ParaPage() {
  const { t } = useLanguage();
  const content = t.para;

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
          <h1 className="text-4xl md:text-5xl font-bold">PARA</h1>
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
            <span className="text-accent-cyan">PARA</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              {content.title}
            </h2>
            <p className="text-xl text-accent-cyan text-center mb-12">
              {content.subtitle}
            </p>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-secondary leading-relaxed mb-6">
                {content.intro1}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                {content.intro2}
              </p>
            </div>

            {/* ARA Diagram */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.araTitle}</h3>
              <div className="bg-surface rounded-2xl shadow-lg p-8 border border-border">
                <Image
                  src="/images/contents/para_01.png"
                  alt="PARA Architecture"
                  width={1200}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>

            {/* Implementation Flow - Interactive Image Map */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-white">{content.flowTitle}</h3>
              <p className="text-text-secondary mb-2">
                {content.flowDesc}
              </p>
              <p className="text-text-tertiary mb-6 text-sm">
                {content.flowNote}
              </p>
              <div className="bg-surface rounded-2xl shadow-lg p-8 border border-border">
                <InteractiveImageMap
                  baseImage="/images/contents/para_02.png"
                  overlayImage="/images/contents/para_screen.png"
                  hotspots={[
                    {
                      id: "shape01",
                      x: 270,
                      y: 58,
                      width: 169,
                      height: 142,
                      hoverImage: "/images/contents/para_02_1.png",
                    },
                    {
                      id: "shape02",
                      x: 270,
                      y: 398,
                      width: 173,
                      height: 143,
                      hoverImage: "/images/contents/para_02_2.png",
                    },
                  ]}
                  alt="PARA Implementation Flow"
                />
              </div>
            </div>

            {/* Platform Level Application */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-4 text-white">{content.platformTitle}</h3>
              <p className="text-text-secondary mb-6">
                {content.platformDesc}
              </p>
              <div className="bg-surface rounded-2xl shadow-lg p-8 border border-border">
                <Image
                  src="/images/contents/para_03.png"
                  alt="Platform Level Application"
                  width={1200}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>

            {/* PARA Standard & Extension */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-surface rounded-2xl shadow-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-accent-cyan mb-4">{content.standardTitle}</h3>
                <ul className="space-y-3 text-secondary">
                  {content.standardItems.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface rounded-2xl shadow-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-accent-cyan mb-4">{content.extensionTitle}</h3>
                <ul className="space-y-3 text-secondary">
                  {content.extensionItems.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.keyFeaturesTitle}</h3>
              <div className="bg-surface/50 rounded-2xl p-8 border border-border">
                <ul className="grid md:grid-cols-2 gap-4 text-secondary">
                  {content.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent-cyan">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Supporting Version */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.supportingTitle}</h3>
              <div className="bg-accent-cyan/10 rounded-2xl p-8 border border-accent-cyan/20">
                <p className="text-lg text-secondary">- {content.supportingVersion}</p>
              </div>
            </div>

            {/* Demo Video */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-white">{content.demoTitle}</h3>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cZ1hYkecOL4"
                  title="PARA Demo"
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
