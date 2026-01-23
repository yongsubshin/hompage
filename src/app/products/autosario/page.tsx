"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Monitor, Globe, Play } from "lucide-react";
import { Button, Card, CardContent, ImageSlider, YouTubeEmbed } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";
import { VFBEditorModal } from "@/components/vfb-editor";
import Link from "next/link";

export default function AutosarioPage() {
  const { t } = useLanguage();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Image slider data - first set
  const autosarSlides = [
    { src: "/images/contents/autosar01.png", caption: t.autosario.sliderCaptions.autosar01 },
    { src: "/images/contents/autosar02.png", caption: t.autosario.sliderCaptions.autosar02 },
    { src: "/images/contents/autosar03.png", caption: t.autosario.sliderCaptions.autosar03 },
    { src: "/images/contents/autosar04.png", caption: t.autosario.sliderCaptions.autosar04 },
  ];

  // Image slider data - web version
  const webSlides = [
    { src: "/images/contents/web01.png", caption: t.autosario.sliderCaptions.web01 },
    { src: "/images/contents/web02.png", caption: t.autosario.sliderCaptions.web02 },
    { src: "/images/contents/web03.png", caption: t.autosario.sliderCaptions.web03 },
    { src: "/images/contents/web04.png", caption: t.autosario.sliderCaptions.web04 },
  ];

  // YouTube video IDs
  const youtubeVideos = [
    { id: "3FYzR0bQ44s", title: t.autosario.demoR2011 },
    { id: "AGS_JJPvs9g", title: t.autosario.demoR1911 },
    { id: "hz3xM6ER8ZM", title: t.autosario.demoR1903 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent-cyan text-sm font-semibold uppercase tracking-wider mb-4"
            >
              AutoSAR.io
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              {t.autosario.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-3xl mx-auto mb-8"
            >
              {t.autosario.intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                onClick={() => setIsDemoOpen(true)}
                rightIcon={<Play className="w-5 h-5" />}
                className="bg-accent-cyan hover:bg-accent-cyan/90"
              >
                Use Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VFB Editor Demo Modal */}
      <VFBEditorModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      {/* Main Image Slider */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <ImageSlider slides={autosarSlides} autoPlay={true} autoPlayInterval={3000} />
          </motion.div>
        </div>
      </section>

      {/* Support Scope & Benefits */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Support Scope */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-accent-blue" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t.autosario.supportScopeTitle}</h2>
              </div>
              <div className="space-y-3">
                {t.autosario.supportItems.map((item: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-cyan flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">{t.autosario.benefitsTitle}</h2>
              <div className="space-y-3">
                {t.autosario.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supporting Versions */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {t.autosario.versionsTitle}
            </h2>
            <Card variant="gradient">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {t.autosario.versions.map((version: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                      <span className="text-text-secondary">{version}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Web-based AutoSAR.io */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent-cyan" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t.autosario.webBasedTitle}</h2>
              </div>
              <p className="text-text-secondary mb-6">{t.autosario.webBasedDesc}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageSlider slides={webSlides} autoPlay={true} autoPlayInterval={3500} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Demos */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-12">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-xl font-bold text-white mb-4">{video.title}</h2>
                <YouTubeEmbed videoId={video.id} title={video.title} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Request CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{t.autosario.rentalTitle}</h2>
            <p className="text-text-secondary mb-8">{t.autosario.rentalDesc}</p>
            <Link href="/support/qna">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                {t.autosario.contact}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
