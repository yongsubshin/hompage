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

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Sales Inquiry",
    description: "Talk to our sales team about solutions",
    action: "sales@popcornsar.com",
  },
  {
    icon: Building2,
    title: "Partnership",
    description: "Explore partnership opportunities",
    action: "partners@popcornsar.com",
  },
  {
    icon: Clock,
    title: "Support",
    description: "Get help from our support team",
    action: "support@popcornsar.com",
  },
];

export default function ContactPage() {
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    alert("Message sent successfully!");
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
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-display font-bold text-white mb-6"
            >
              Let&apos;s Start a{" "}
              <span className="gradient-text">Conversation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-secondary max-w-2xl mx-auto"
            >
              Have questions about our solutions? Want to discuss a project?
              We&apos;re here to help.
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
                key={method.title}
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
                Send us a message
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
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-text-secondary mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-text-secondary mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-text-secondary mb-2"
                        >
                          Subject *
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
                            Select a topic
                          </option>
                          <option value="sales" className="bg-background">
                            Sales Inquiry
                          </option>
                          <option value="support" className="bg-background">
                            Technical Support
                          </option>
                          <option value="partnership" className="bg-background">
                            Partnership
                          </option>
                          <option value="other" className="bg-background">
                            Other
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text-secondary mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-5 h-5" />}
                      className="w-full sm:w-auto"
                    >
                      Send Message
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
                Our Offices
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
            <p className="text-text-muted">Interactive map would be here</p>
          </div>
        </div>
        {/* In production, this would be an actual map component */}
      </section>
    </div>
  );
}
