"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  Building2,
  Calendar,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "Pushing the boundaries of automotive software technology to drive the future of mobility.",
  },
  {
    icon: Eye,
    title: "Quality",
    description:
      "Delivering excellence through rigorous testing and industry-leading development practices.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Building trust through transparent communication and ethical business practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with partners and clients to achieve shared success.",
  },
];

const milestones = [
  { year: "2008", event: "Company Founded", description: "Started with a vision to revolutionize automotive software" },
  { year: "2012", event: "AUTOSAR Partnership", description: "Became official AUTOSAR development partner" },
  { year: "2016", event: "Global Expansion", description: "Opened offices in Europe and North America" },
  { year: "2020", event: "100+ Customers", description: "Reached milestone of 100+ global automotive clients" },
  { year: "2024", event: "Adaptive Platform", description: "Launched next-gen AUTOSAR Adaptive solutions" },
];

const stats = [
  { icon: Building2, value: "5", label: "Global Offices" },
  { icon: Users, value: "200+", label: "Team Members" },
  { icon: Globe, value: "30+", label: "Countries Served" },
  { icon: TrendingUp, value: "500%", label: "Growth Since 2018" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent-blue text-sm font-semibold uppercase tracking-wider mb-4"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-display font-bold text-white mb-6"
            >
              Driving the Future of{" "}
              <span className="gradient-text">Automotive Software</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              Since 2008, PopcornSAR has been at the forefront of automotive
              software innovation, helping OEMs and suppliers build the vehicles
              of tomorrow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background-secondary border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-accent-blue mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" className="h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-accent-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Our Mission
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    To accelerate the automotive industry&apos;s software
                    transformation by providing innovative, reliable, and
                    scalable AUTOSAR solutions that empower our clients to build
                    safer and smarter vehicles.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="gradient" className="h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Our Vision
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    To be the global leader in automotive software solutions,
                    recognized for our technical excellence, innovation, and
                    commitment to driving the future of mobility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary max-w-2xl mx-auto"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="interactive" className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Our Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary max-w-2xl mx-auto"
            >
              Key milestones in our company history
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center text-white font-bold text-sm">
                    <Calendar className="w-5 h-5" />
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-accent-blue font-semibold mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-text-secondary">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
