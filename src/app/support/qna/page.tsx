"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, User, Mail, Building, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function QnaPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: "product",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.support.qna.submitSuccess);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contents/sub_visual04.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold">{t.support.qna.title}</h1>
        </motion.div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.common.home}</Link>
            <span className="text-text-tertiary">/</span>
            <Link href="/support" className="text-text-secondary hover:text-accent-cyan transition-colors">{t.nav.support}</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent-cyan">{t.support.qna.title}</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">{t.support.qna.formTitle}</h2>
              <p className="text-text-secondary">
                {t.support.qna.formDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-surface rounded-2xl border border-border p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    {t.support.qna.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white placeholder-tertiary"
                    placeholder={t.support.qna.namePlaceholder}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    {t.support.qna.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white placeholder-tertiary"
                    placeholder={t.support.qna.emailPlaceholder}
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    {t.support.qna.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white placeholder-tertiary"
                    placeholder={t.support.qna.companyPlaceholder}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    {t.support.qna.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white placeholder-tertiary"
                    placeholder={t.support.qna.phonePlaceholder}
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-secondary mb-2">
                  {t.support.qna.inquiryType} *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white"
                >
                  <option value="product">{t.support.qna.inquiryTypes.product}</option>
                  <option value="service">{t.support.qna.inquiryTypes.service}</option>
                  <option value="education">{t.support.qna.inquiryTypes.education}</option>
                  <option value="partnership">{t.support.qna.inquiryTypes.partnership}</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-secondary mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  {t.support.qna.message} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all resize-none text-white placeholder-tertiary"
                  placeholder={t.support.qna.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-cyan/80 transition-colors"
              >
                <Send className="w-5 h-5" />
                {t.support.qna.submit}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 text-center text-secondary">
              <p className="mb-2">
                {t.support.qna.directContact}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@popcornsar.com" className="text-accent-cyan hover:underline">
                  contact@popcornsar.com
                </a>
              </p>
              <p>
                <strong>Tel:</strong> 02-568-3068
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
