"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Settings, GraduationCap, Wrench, Bot, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export default function ServicePage() {
  const { t } = useLanguage();

  const services = [
    {
      id: "consulting",
      name: t.nav.serviceConsulting,
      description: t.service.cards.consulting,
      icon: Users,
      color: "cyan",
      href: "/service/consulting",
    },
    {
      id: "autosar",
      name: t.nav.serviceAutosar,
      description: t.service.cards.autosar,
      icon: Settings,
      color: "blue",
      href: "/service/autosar",
    },
    {
      id: "education",
      name: t.nav.serviceTraining,
      description: t.service.cards.education,
      icon: GraduationCap,
      color: "cyan",
      href: "/service/education",
    },
    {
      id: "tool",
      name: t.nav.serviceCustom,
      description: t.service.cards.tool,
      icon: Wrench,
      color: "blue",
      href: "/service/tool",
    },
    {
      id: "ai",
      name: t.nav.serviceAiTraining,
      description: t.service.cards.ai,
      icon: Bot,
      color: "cyan",
      href: "/service/ai",
    },
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
              className="inline-block text-accent-blue text-sm font-semibold uppercase tracking-wider mb-4"
            >
              {t.common.services}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-display font-bold text-white mb-6"
            >
              {t.service.mainTitle.split(" ")[0]}{" "}
              <span className="gradient-text">{t.service.mainTitle.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              {t.service.mainSubtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card variant="interactive" className="h-full group">
                    <CardContent className="p-6">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                          service.color === "blue"
                            ? "bg-accent-blue/10 text-accent-blue"
                            : "bg-accent-cyan/10 text-accent-cyan"
                        )}
                      >
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-blue transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-text-secondary text-sm mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent-blue">
                        <span>{t.common.learnMore}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              {t.service.ctaTitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg mb-8"
            >
              {t.service.ctaDesc}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/support/qna">
                <button className="px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-accent-blue/90 transition-colors inline-flex items-center gap-2">
                  {t.service.ctaButton}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
