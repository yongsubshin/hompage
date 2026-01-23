"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// Placeholder partner logos - in production, these would be actual company logos
const partners = [
  { name: "Hyundai Motor", logo: "HMC" },
  { name: "Kia Corporation", logo: "KIA" },
  { name: "Samsung SDI", logo: "SDI" },
  { name: "LG Electronics", logo: "LGE" },
  { name: "SK Hynix", logo: "SKH" },
  { name: "Mando", logo: "MND" },
  { name: "Hyundai Mobis", logo: "MOB" },
  { name: "HL Klemove", logo: "HLK" },
];

const stats = [
  { value: "150+", label: "Global Partners" },
  { value: "50M+", label: "Vehicles Deployed" },
  { value: "15+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

export function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Stats */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent-blue text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Trusted By Industry Leaders
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Our Partners & Clients
          </motion.h2>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex gap-8 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={cn(
                  "flex-shrink-0 w-32 h-20 flex items-center justify-center",
                  "bg-white/5 border border-white/10 rounded-xl",
                  "hover:border-accent-blue/50 hover:bg-white/10 transition-all duration-300"
                )}
              >
                <span className="text-xl font-bold text-text-secondary">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-xl sm:text-2xl text-white font-medium mb-6 leading-relaxed">
            &ldquo;PopcornSAR has been instrumental in accelerating our AUTOSAR
            adoption. Their expertise and commitment to quality have made them
            an invaluable partner.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <span className="text-lg font-bold text-accent-blue">JK</span>
            </div>
            <div className="text-left">
              <div className="text-white font-medium">John Kim</div>
              <div className="text-text-secondary text-sm">
                VP of Engineering, Leading OEM
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom animation for scrolling */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
