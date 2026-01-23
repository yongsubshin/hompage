"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contents/sub_visual01.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{t.company.contact.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/company" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.company}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.company.contact.title}</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Korea Office */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-surface rounded-2xl border border-border overflow-hidden"
            >
              <div className="p-6 bg-accent-cyan text-white">
                <h2 className="text-2xl font-bold">{t.company.contact.koreaOffice}</h2>
              </div>

              <div className="p-6">
                {/* Map */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.2787896595394!2d127.05474662854648!3d37.50520199824616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca411465d84ab%3A0xd7901b99f65023e3!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDthYztl6TrnoDroZw3OOq4uCAxNg!5e0!3m2!1sko!2skr!4v1761019884114!5m2!1sko!2skr"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-cyan mt-1 flex-shrink-0" />
                    <p className="text-text-secondary">
                      {t.company.contact.koreaAddress}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                    <p className="text-text-secondary">
                      TEL: 02-568-3068 | FAX: 02-568-3069
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                    <a
                      href="mailto:contact@popcornsar.com"
                      className="text-accent-cyan hover:underline"
                    >
                      contact@popcornsar.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Japan Office */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-surface rounded-2xl border border-border overflow-hidden"
            >
              <div className="p-6 bg-accent-cyan text-white">
                <h2 className="text-2xl font-bold">{t.company.contact.japanOffice}</h2>
              </div>

              <div className="p-6">
                {/* Map */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.7668217427718!2d136.90919261555604!3d35.162435680318595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600370cf4aa42e87%3A0x3ee1d5283703f962!2zNS1jaMWNbWUtMjYtMzkgU2FrYWUsIE5ha2Eta3UsIE5hZ295YSwgQWljaGkgNDYwLTAwMDgg7J2867O4!5e0!3m2!1sko!2skr!4v1567136561930!5m2!1sko!2skr"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-cyan mt-1 flex-shrink-0" />
                    <p className="text-text-secondary">
                      {t.company.contact.japanAddress}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                    <p className="text-text-secondary">
                      TEL: +81-52-262-4580
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                    <a
                      href="mailto:japan-sales@popcornsar.com"
                      className="text-accent-cyan hover:underline"
                    >
                      japan-sales@popcornsar.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
