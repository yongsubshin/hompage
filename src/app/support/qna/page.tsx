"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Building, Phone, MessageSquare, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FormStatus = "idle" | "sending" | "success" | "error";

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
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        category: "product",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (status === "error") {
      setStatus("idle");
    }
  };

  const isSending = status === "sending";

  return (
    <div className="pt-20 bg-background min-h-screen overflow-hidden">
      {/* Hero Section - Stripe Style */}
      <section className="relative min-h-[40vh] flex items-center justify-center py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[200px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <MessageSquare className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm text-accent-cyan font-medium">{t.common.support}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{t.support.qna.title}</h1>
        </motion.div>
      </section>

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

            {/* Success Message */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-300">{t.support.qna.submitSuccess}</p>
              </motion.div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-300">
                  {t.support.qna.submitError || errorMessage}
                </p>
              </motion.div>
            )}

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
                    disabled={isSending}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white placeholder-tertiary disabled:opacity-50"
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
                    disabled={isSending}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white placeholder-tertiary disabled:opacity-50"
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
                    disabled={isSending}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white placeholder-tertiary disabled:opacity-50"
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
                    disabled={isSending}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white placeholder-tertiary disabled:opacity-50"
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
                  disabled={isSending}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all text-white disabled:opacity-50"
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
                  disabled={isSending}
                  rows={6}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent outline-none transition-all resize-none text-white placeholder-tertiary disabled:opacity-50"
                  placeholder={t.support.qna.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent-cyan text-white font-semibold rounded-lg hover:bg-accent-cyan/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.support.qna.sending || "Sending..."}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.support.qna.submit}
                  </>
                )}
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
