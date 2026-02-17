"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  Shield,
  Zap,
  Code2,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function ProductsPage() {
  const common = useTranslations("common");
  const t = useTranslations("products");
  const productsOverview = useTranslations("productsOverview");

  const products = [
    {
      id: "toolkit",
      name: "AUTOSAR Tool Kit",
      description: productsOverview("toolkit"),
      icon: Layers,
      color: "cyan",
      href: "/products/adaptive",
    },
    {
      id: "autosario",
      name: "AutoSAR.io",
      description: productsOverview("autosario"),
      icon: Cpu,
      color: "blue",
      href: "/products/autosario",
    },
    {
      id: "para",
      name: "PARA",
      description: productsOverview("para"),
      icon: Settings,
      color: "cyan",
      href: "/products/para",
    },
    {
      id: "pacon",
      name: "PACON IDE",
      description: productsOverview("pacon"),
      icon: Code2,
      color: "blue",
      href: "/products/pacon",
    },
    {
      id: "parvis",
      name: "PARVIS",
      description: productsOverview("parvis"),
      icon: Zap,
      color: "cyan",
      href: "/products/ai",
    },
    {
      id: "parvisadk",
      name: "PARVIS ADK",
      description: productsOverview("parvisadk"),
      icon: Shield,
      color: "blue",
      href: "/products/parvisadk",
    },
    {
      id: "aiagent",
      name: "AUTOSAR AI Agent",
      description: productsOverview("aiagent"),
      icon: Cpu,
      color: "cyan",
      href: "/products/aiagent",
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
              {t("pageTitle")}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-display font-bold text-white mb-6"
            >
              {t("pageSubtitle").split(" ")[0]}
              <br />
              <span className="gradient-text">
                {t("pageSubtitle").split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              {t("pageDesc")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={product.href}>
                  <Card variant="interactive" className="h-full group">
                    <CardContent className="p-6">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                          product.color === "blue"
                            ? "bg-accent-blue/10 text-accent-blue"
                            : "bg-accent-cyan/10 text-accent-cyan"
                        )}
                      >
                        <product.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-blue transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-text-secondary text-sm mb-4 text-balance">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent-blue">
                        <span>{common("learnMore")}</span>
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
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg mb-8"
            >
              {t("cta.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/support/qna">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {common("consultation")}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
