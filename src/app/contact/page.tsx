"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";

const offices = [
  {
    city: "Seoul (HQ)",
    country: "South Korea",
    address: "123 Tech Street, Gangnam-gu, Seoul 06000",
    phone: "+82-2-1234-5678",
    email: "contact@popcornsar.com",
  },
  {
    city: "Munich",
    country: "Germany",
    address: "456 Auto Strasse, 80331 Munich",
    phone: "+49-89-1234-5678",
    email: "europe@popcornsar.com",
  },
  {
    city: "Detroit",
    country: "USA",
    address: "789 Motor Ave, Detroit, MI 48201",
    phone: "+1-313-555-0123",
    email: "usa@popcornsar.com",
  },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const ct = t.contactPage;

  const contactMethods = [
    {
      icon: MessageSquare,
      title: ct.salesInquiry,
      description: ct.salesDesc,
      action: "sales@popcornsar.com",
    },
    {
      icon: Building2,
      title: ct.partnershipTitle,
      description: ct.partnershipDesc,
      action: "partners@popcornsar.com",
    },
    {
      icon: Clock,
      title: ct.supportTitle,
      description: ct.supportDesc,
      action: "support@popcornsar.com",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    alert(ct.successMessage);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              {ct.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-display font-bold text-white mb-6"
            >
              {ct.heroTitle1}{" "}
              <span className="gradient-text">{ct.heroTitle2}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              {ct.heroDesc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-background-secondary border-y border-border">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="interactive" className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-6 h-6 text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {method.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-3">
                      {method.description}
                    </p>
                    <a
                      href={`mailto:${method.action}`}
                      className="text-accent-blue text-sm hover:text-accent-cyan transition-colors"
                    >
                      {method.action}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {ct.formTitle}
              </h2>
              <Card variant="gradient">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-text-secondary mb-2"
                        >
                          {ct.nameLabel}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder={ct.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-text-secondary mb-2"
                        >
                          {ct.emailLabel}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder={ct.emailPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-text-secondary mb-2"
                        >
                          {ct.companyLabel}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder={ct.companyPlaceholder}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-text-secondary mb-2"
                        >
                          {ct.subjectLabel}
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
                        >
                          <option value="" className="bg-background">
                            {ct.selectTopic}
                          </option>
                          <option value="sales" className="bg-background">
                            {ct.topicSales}
                          </option>
                          <option value="support" className="bg-background">
                            {ct.topicSupport}
                          </option>
                          <option value="partnership" className="bg-background">
                            {ct.topicPartnership}
                          </option>
                          <option value="other" className="bg-background">
                            {ct.topicOther}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        {ct.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                        placeholder={ct.messagePlaceholder}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-5 h-5" />}
                      className="w-full sm:w-auto"
                    >
                      {ct.sendButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {ct.officesTitle}
              </h2>
              <div className="space-y-6">
                {offices.map((office) => (
                  <Card key={office.city} variant="glass">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-accent-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {office.city}
                          </h3>
                          <p className="text-accent-blue text-sm mb-3">
                            {office.country}
                          </p>
                          <p className="text-text-secondary text-sm mb-4">
                            {office.address}
                          </p>
                          <div className="space-y-2">
                            <a
                              href={`tel:${office.phone}`}
                              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-blue transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                              {office.phone}
                            </a>
                            <a
                              href={`mailto:${office.email}`}
                              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-blue transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-background-secondary border-t border-border relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-accent-blue/50 mx-auto mb-4" />
            <p className="text-text-muted">{ct.mapPlaceholder}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
