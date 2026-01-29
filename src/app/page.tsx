"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Layers, Code2, ChevronDown, Brain, Sparkles, Bot } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import {
  SplitText,
  GradientFollower,
  RippleButton,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  ParticleBackground,
} from "@/components/animations";

export default function Home() {
  const { t } = useLanguage();

  const products = [
    {
      icon: Cpu,
      title: t.main.autosarTitle,
      subtitle: t.main.autosarSubtitle,
      description: t.main.autosarDesc,
      href: "/products",
    },
    {
      icon: Layers,
      title: t.main.paraTitle,
      subtitle: t.main.paraSubtitle,
      description: t.main.paraDesc,
      href: "/products/para",
    },
    {
      icon: Code2,
      title: t.main.paconTitle,
      subtitle: t.main.paconSubtitle,
      description: t.main.paconDesc,
      href: "/products/pacon",
    },
  ];

  const aiProducts = [
    {
      icon: Brain,
      title: t.main.parvisTitle,
      subtitle: t.main.parvisSubtitle,
      description: t.main.parvisDesc,
      href: "/products/ai",
    },
    {
      icon: Sparkles,
      title: t.main.parvisAdkTitle,
      subtitle: t.main.parvisAdkSubtitle,
      description: t.main.parvisAdkDesc,
      href: "/products/parvisadk",
    },
    {
      icon: Bot,
      title: t.main.aiAgentTitle,
      subtitle: t.main.aiAgentSubtitle,
      description: t.main.aiAgentDesc,
      href: "/products/aiagent",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section - Modern & Interactive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background base */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />

        {/* Background Image - positioned at bottom, blended edges */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[75%] bg-contain bg-bottom bg-no-repeat opacity-40 mix-blend-lighten"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 75%, black 30%, transparent 70%)",
            maskImage: "radial-gradient(ellipse 90% 80% at 50% 75%, black 30%, transparent 70%)",
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-transparent" />

        {/* Particle Background */}
        <ParticleBackground
          particleCount={35}
          particleColor="rgba(0, 163, 255, 0.35)"
          connectDistance={120}
          showConnections={true}
          speed={0.3}
        />

        {/* Mouse-following gradient */}
        <GradientFollower
          colors={["rgba(59, 130, 246, 0.06)", "rgba(6, 182, 212, 0.04)"]}
          size={600}
          blur={180}
        />

        <div className="relative z-10 container-custom text-center py-32 pb-40">
          {/* Badge with ping animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-border backdrop-blur-sm mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm text-text-secondary">AUTOSAR Solutions Provider</span>
          </motion.div>

          {/* Main Title with text reveal animation */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-normal">
              <SplitText delay={0.2} direction="up">
                {t.main.heroTitle.split(" ").slice(0, 2).join(" ")}
              </SplitText>
              <br />
              <span className="text-accent-blue">
                <SplitText delay={0.5} direction="up">
                  {t.main.heroTitle.split(" ").slice(2).join(" ") || "mobility"}
                </SplitText>
              </span>
            </h1>
          </div>

          {/* Description with fade animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg sm:text-xl text-text-secondary px-4 sm:px-8 lg:px-16 mx-auto mb-12"
          >
            {t.main.heroDesc}
          </motion.p>

          {/* CTA Buttons with ripple effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/products">
              <RippleButton className="btn-primary group inline-flex items-center gap-2">
                <span>{t.common.exploreProducts}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </RippleButton>
            </Link>
            <Link href="/company/contact">
              <RippleButton className="btn-outline" rippleColor="rgba(59, 130, 246, 0.3)">
                {t.common.contactUs}
              </RippleButton>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-text-tertiary"
            >
              <span className="text-xs uppercase tracking-wider">{t.common.scroll}</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section - with hover glow effect */}
      <section className="py-24 bg-background-secondary relative">
        <div className="container-custom">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-16">
            <p className="text-accent-blue text-sm font-medium mb-3 tracking-wider uppercase">
              {t.main.productsLabel}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.main.productsHeading}
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              {t.main.productsDesc}
            </p>
          </ScrollReveal>

          {/* Products Grid with stagger animation */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {products.map((product) => (
              <StaggerItem key={product.title}>
                <Link href={product.href} className="block group h-full">
                  <TiltCard
                    className="h-full"
                    tiltAmount={10}
                    glareEnabled={true}
                    glareColor="rgba(59, 130, 246, 0.15)"
                    scale={1.02}
                  >
                    <div className="relative h-full p-8 rounded-2xl bg-surface border border-border hover:border-accent-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/10">
                      {/* Icon */}
                      <div className="inline-flex p-3 rounded-xl bg-accent-blue/10 text-accent-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-blue transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-accent-cyan mb-3">{product.subtitle}</p>
                      <p className="text-text-secondary text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Link */}
                      <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-accent-blue transition-colors">
                        <span>{t.common.learnMore}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Products Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[150px]" />

        <div className="container-custom relative">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-16">
            <p className="text-accent-cyan text-sm font-medium mb-3 tracking-wider uppercase">
              {t.main.aiLabel}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.main.aiHeading}
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              {t.main.aiDesc}
            </p>
          </ScrollReveal>

          {/* AI Products Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {aiProducts.map((product) => (
              <StaggerItem key={product.title}>
                <Link href={product.href} className="block group h-full">
                  <TiltCard
                    className="h-full"
                    tiltAmount={10}
                    glareEnabled={true}
                    glareColor="rgba(6, 182, 212, 0.15)"
                    scale={1.02}
                  >
                    <div className="relative h-full p-8 rounded-2xl bg-surface border border-border hover:border-accent-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/10">
                      {/* Icon */}
                      <div className="inline-flex p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-accent-cyan/70 mb-3">{product.subtitle}</p>
                      <p className="text-text-secondary text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Link */}
                      <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-accent-cyan transition-colors">
                        <span>{t.common.learnMore}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-secondary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/3 rounded-full blur-[200px]" />

        <div className="container-custom relative">
          <ScrollReveal className="text-center mb-16">
            <p className="text-accent-blue text-sm font-medium mb-3 tracking-wider uppercase">
              {t.main.serviceSubtitle}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.main.serviceTitle}
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto whitespace-pre-line">
              {t.main.serviceDesc}
            </p>
          </ScrollReveal>

          <ScrollReveal className="text-center mt-8" delay={0.3}>
            <Link href="/service">
              <RippleButton className="btn-primary inline-flex items-center gap-2">
                <span>{t.common.learnMore}</span>
                <ArrowRight className="w-4 h-4" />
              </RippleButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-secondary relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-[150px] animate-float animation-delay-500" />
        </div>

        <div className="container-custom relative">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t.main.ctaTitle1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">
                {t.main.ctaTitle2}
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              {t.main.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/company/contact">
                <RippleButton className="btn-primary">
                  {t.main.ctaButton1}
                </RippleButton>
              </Link>
              <Link href="/products">
                <RippleButton className="btn-outline" rippleColor="rgba(59, 130, 246, 0.3)">
                  {t.main.ctaButton2}
                </RippleButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
