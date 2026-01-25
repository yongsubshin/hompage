"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  const offices = [
    {
      name: t.company.contact.koreaOffice,
      address: t.company.contact.koreaAddress,
      tel: "TEL: 02-568-3068",
      fax: "FAX: 02-568-3069",
      email: "contact@popcornsar.com",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.2787896595394!2d127.05474662854648!3d37.50520199824616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca411465d84ab%3A0xd7901b99f65023e3!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDthYztl6TrnoDroZw3OOq4uCAxNg!5e0!3m2!1sko!2skr!4v1761019884114!5m2!1sko!2skr",
      gradient: "from-cyan-500 to-blue-500",
      delay: 0.1,
    },
    {
      name: t.company.contact.japanOffice,
      address: t.company.contact.japanAddress,
      tel: "TEL: +81-52-262-4580",
      fax: null,
      email: "japan-sales@popcornsar.com",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.7668217427718!2d136.90919261555604!3d35.162435680318595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600370cf4aa42e87%3A0x3ee1d5283703f962!2zNS1jaMWNbWUtMjYtMzkgU2FrYWUsIE5ha2Eta3UsIE5hZ295YSwgQWljaGkgNDYwLTAwMDgg7J2867O4!5e0!3m2!1sko!2skr!4v1567136561930!5m2!1sko!2skr",
      gradient: "from-blue-500 to-violet-500",
      delay: 0.2,
    },
  ];

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Minimal Modern Style */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
              <Building2 className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm text-accent-cyan font-medium">
                {t.company.contact.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.company.contact.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Office Cards Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/50 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {offices.map((office) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: office.delay }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-surface/80 backdrop-blur-xl border border-border rounded-3xl overflow-hidden transition-all duration-500 hover:border-accent-cyan/30 hover:shadow-2xl hover:shadow-accent-cyan/10">
                  {/* Gradient Header */}
                  <div
                    className={`relative h-20 bg-gradient-to-r ${office.gradient} overflow-hidden`}
                  >
                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                    {/* Office Name on Header */}
                    <div className="absolute inset-0 flex items-center px-8">
                      <h2 className="text-2xl font-bold text-white">
                        {office.name}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Map Container */}
                    <div className="mb-8 rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                      <iframe
                        src={office.mapSrc}
                        width="100%"
                        height="220"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-5">
                      {/* Address */}
                      <div className="flex items-start gap-4 group/item">
                        <div className="w-10 h-10 bg-accent-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent-cyan/20 transition-colors">
                          <MapPin className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <div>
                          <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">
                            {t.company.contact.addressLabel}
                          </p>
                          <p className="text-text-secondary leading-relaxed">
                            {office.address}
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4 group/item">
                        <div className="w-10 h-10 bg-accent-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent-cyan/20 transition-colors">
                          <Phone className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <div>
                          <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">
                            {t.company.contact.phoneLabel}
                          </p>
                          <p className="text-text-secondary">
                            {office.tel}
                            {office.fax && (
                              <span className="text-text-tertiary">
                                {" "}
                                | {office.fax}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-4 group/item">
                        <div className="w-10 h-10 bg-accent-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent-cyan/20 transition-colors">
                          <Mail className="w-5 h-5 text-accent-cyan" />
                        </div>
                        <div>
                          <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">
                            {t.company.contact.emailLabel}
                          </p>
                          <a
                            href={`mailto:${office.email}`}
                            className="text-accent-cyan hover:text-accent-cyan/80 transition-colors hover:underline"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-blue/5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-background to-accent-blue/5" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-cyan/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-blue/15 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t.company.contact.ctaTitle}
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              {t.company.contact.ctaDesc}
            </p>
            <Link
              href="/support/qna"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-background font-semibold rounded-xl hover:bg-accent-cyan/90 transition-all hover:shadow-lg hover:shadow-accent-cyan/25"
            >
              <span>{t.company.contact.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
