"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Monitor,
  Globe,
  Check,
  Layers,
  FileCode,
  Cpu,
  Zap,
  Shield,
  Settings,
  Youtube,
} from "lucide-react";
import { ImageSlider, YouTubeEmbed } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";
import { VFBEditorModal } from "@/components/vfb-editor";

export default function AutosarioPage() {
  const { t } = useLanguage();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const content = t.autosario;

  // Image slider data - first set
  const autosarSlides = [
    { src: "/images/contents/autosar01.png", caption: content.sliderCaptions.autosar01 },
    { src: "/images/contents/autosar02.png", caption: content.sliderCaptions.autosar02 },
    { src: "/images/contents/autosar03.png", caption: content.sliderCaptions.autosar03 },
    { src: "/images/contents/autosar04.png", caption: content.sliderCaptions.autosar04 },
  ];

  // Image slider data - web version
  const webSlides = [
    { src: "/images/contents/web01.png", caption: content.sliderCaptions.web01 },
    { src: "/images/contents/web02.png", caption: content.sliderCaptions.web02 },
    { src: "/images/contents/web03.png", caption: content.sliderCaptions.web03 },
    { src: "/images/contents/web04.png", caption: content.sliderCaptions.web04 },
  ];

  // YouTube video IDs
  const youtubeVideos = [
    { id: "3FYzR0bQ44s", title: content.demoR2011 },
    { id: "AGS_JJPvs9g", title: content.demoR1911 },
    { id: "hz3xM6ER8ZM", title: content.demoR1903 },
  ];

  // Support items with icons
  const supportIcons = [Layers, Cpu, Settings, FileCode, Zap, Shield, Settings];

  // Benefit icons
  const benefitIcons = [Check, Layers, Settings, Shield, Zap];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
                <FileCode className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm text-accent-cyan font-medium">ARXML Design Tool</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                AutoSAR.io
              </h1>

              <p className="text-xl lg:text-2xl text-text-secondary mb-4 leading-relaxed">
                {content.title}
              </p>

              <p className="text-text-tertiary mb-8 max-w-lg leading-relaxed">
                {content.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-background font-semibold rounded-xl hover:bg-accent-cyan/90 transition-all hover:shadow-lg hover:shadow-accent-cyan/25"
                >
                  <Play className="w-5 h-5" />
                  <span>Try Demo</span>
                </button>
                <Link
                  href="/support/qna"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-border text-white font-semibold rounded-xl hover:bg-surface-elevated hover:border-accent-cyan/30 transition-all"
                >
                  {content.contact}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Visual - Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block py-12 px-8"
            >
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-gradient-to-br from-surface to-surface-elevated border border-accent-cyan/20 rounded-2xl p-6 shadow-2xl max-w-sm mx-auto"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
                    <FileCode className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">ARXML Editor</h3>
                    <p className="text-text-tertiary text-sm">Visual Design Tool</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-accent-cyan/20 rounded w-full" />
                  <div className="h-3 bg-accent-blue/20 rounded w-3/4" />
                  <div className="h-3 bg-accent-cyan/20 rounded w-5/6" />
                </div>
              </motion.div>

              {/* Floating Card 1 - Top Right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-0 right-0 bg-surface border border-border rounded-xl p-4 shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent-blue" />
                  <span className="text-white text-sm font-medium">Adaptive Platform</span>
                </div>
              </motion.div>

              {/* Floating Card 2 - Bottom Left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 bg-surface border border-accent-cyan/30 rounded-xl p-4 shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent-cyan" />
                  <span className="text-white text-sm font-medium">Web-based</span>
                </div>
              </motion.div>

              {/* Version Badge - Right Middle */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20"
              >
                R20-11
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VFB Editor Demo Modal */}
      <VFBEditorModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      {/* Main Image Slider Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full text-accent-cyan text-sm font-medium mb-4">
              Product Screenshots
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Powerful ARXML Design Interface
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-surface/50 border border-border rounded-2xl p-4 backdrop-blur-sm">
              <ImageSlider slides={autosarSlides} autoPlay={true} autoPlayInterval={3000} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Scope & Benefits - Feature Showcase */}
      <section className="py-24 relative" id="features">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          {/* Support Scope */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6">
                <Monitor className="w-4 h-4 text-accent-blue" />
                <span className="text-sm text-accent-blue font-medium">Design Scope</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {content.supportScopeTitle}
              </h2>
              <div className="space-y-4">
                {content.supportItems.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-surface/50 border border-border rounded-xl hover:border-accent-cyan/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                      {(() => {
                        const Icon = supportIcons[index % supportIcons.length];
                        return <Icon className="w-5 h-5 text-accent-cyan" />;
                      })()}
                    </div>
                    <span className="text-text-secondary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full mb-6">
                <Zap className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm text-accent-cyan font-medium">Benefits</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {content.benefitsTitle}
              </h2>
              <div className="space-y-4">
                {content.benefits.map((benefit: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-surface/50 to-surface border border-border rounded-xl hover:border-accent-blue/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                      {(() => {
                        const Icon = benefitIcons[index % benefitIcons.length];
                        return <Icon className="w-5 h-5 text-accent-blue" />;
                      })()}
                    </div>
                    <span className="text-text-secondary">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supporting Versions - Bento Style */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/20 to-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {content.versionsTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid sm:grid-cols-3 gap-4">
              {content.versions.map((version: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-surface border border-border rounded-2xl p-6 text-center hover:border-accent-cyan/30 transition-all">
                    <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center mx-auto mb-4">
                      <Cpu className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <p className="text-white font-medium">{version}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web-based AutoSAR.io - Feature Highlight */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full mb-6">
                <Globe className="w-4 h-4 text-accent-cyan" />
                <span className="text-sm text-accent-cyan font-medium">Web Platform</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {content.webBasedTitle}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {content.webBasedDesc}
              </p>
              <Link
                href="/support/qna"
                className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-cyan/80 font-medium transition-colors"
              >
                {content.contact}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-surface/50 border border-border rounded-2xl p-4 backdrop-blur-sm">
                <ImageSlider slides={webSlides} autoPlay={true} autoPlayInterval={3500} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Demos - Modern Cards */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
              <Youtube className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-400 font-medium">Demo Videos</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Watch AutoSAR.io in Action
            </h2>
          </motion.div>

          <div className="space-y-8">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent-cyan/30 transition-all">
                  <div className="p-4 border-b border-border flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Play className="w-4 h-4 text-red-500" />
                    </div>
                    <h3 className="text-white font-semibold">{video.title}</h3>
                  </div>
                  <div className="p-4">
                    <YouTubeEmbed videoId={video.id} title={video.title} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 via-accent-blue/20 to-accent-cyan/20" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-cyan/30 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent-blue/30 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {content.rentalTitle}
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              {content.rentalDesc}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-background font-semibold rounded-xl hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/25"
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
