"use client";

import { useRef } from "react";
import { Link } from "@/i18n/routing";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Layers,
  Shield,
  Zap,
  Wrench,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code2,
    title: "AUTOSAR Development",
    description:
      "Complete AUTOSAR Classic and Adaptive platform development services tailored to your vehicle architecture needs.",
    features: ["Classic Platform", "Adaptive Platform", "BSW Configuration"],
    color: "blue",
    href: "/service/autosar",
  },
  {
    icon: Layers,
    title: "System Integration",
    description:
      "Seamless integration of software components across ECUs and domains with comprehensive testing.",
    features: ["ECU Integration", "Domain Controllers", "Gateway Solutions"],
    color: "cyan",
    href: "/service/consulting",
  },
  {
    icon: Shield,
    title: "Functional Safety",
    description:
      "ISO 26262 compliant development processes ensuring the highest safety standards for automotive software.",
    features: ["ASIL D Capable", "Safety Analysis", "Certification Support"],
    color: "blue",
    href: "/service/consulting",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimize your automotive software for maximum performance, efficiency, and minimal resource usage.",
    features: ["Memory Optimization", "CPU Efficiency", "Real-time Tuning"],
    color: "cyan",
    href: "/service/tool",
  },
  {
    icon: Wrench,
    title: "Tool Development",
    description:
      "Custom tooling solutions for AUTOSAR development, testing, and deployment workflows.",
    features: ["Config Tools", "Testing Framework", "CI/CD Integration"],
    color: "blue",
    href: "/service/tool",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    description:
      "Comprehensive training programs and ongoing support to empower your development teams.",
    features: ["On-site Training", "Online Courses", "24/7 Support"],
    color: "cyan",
    href: "/service/education",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent-blue text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-display font-bold text-white mb-6"
          >
            Complete Automotive{" "}
            <span className="gradient-text">Software Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg"
          >
            From concept to production, we provide end-to-end services for
            automotive software development, ensuring quality and compliance at
            every step.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card
                variant="interactive"
                className={cn(
                  "h-full group",
                  "hover:border-accent-" + service.color + "/50"
                )}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300",
                      service.color === "blue"
                        ? "bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white"
                        : "bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white"
                    )}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <div
                          className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            service.color === "blue"
                              ? "bg-accent-blue"
                              : "bg-accent-cyan"
                          )}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className={cn(
                      "inline-flex items-center gap-1 text-sm font-medium transition-colors",
                      service.color === "blue"
                        ? "text-accent-blue hover:text-accent-cyan"
                        : "text-accent-cyan hover:text-accent-blue"
                    )}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
