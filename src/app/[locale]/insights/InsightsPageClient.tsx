"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";
import type { LocalizedInsight } from "@/lib/insights";

interface InsightsPageClientProps {
  posts: LocalizedInsight[];
  translations: {
    heroTitle: string;
    heroDescription: string;
    readMore: string;
    tags: string;
    publishedAt: string;
    noPosts: string;
  };
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function InsightsPageClient({ posts, translations }: InsightsPageClientProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6"
            >
              <BookOpen className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm text-accent-cyan font-medium">Insights</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {translations.heroTitle}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-text-secondary mb-8"
            >
              {translations.heroDescription}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Card Grid Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {posts.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-accent-cyan" />
              </div>
              <p className="text-lg text-text-secondary">{translations.noPosts}</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                  variants={cardVariants}
                >
                  <Link href={`/insights/${post.slug}`}>
                    <article className="group relative h-full bg-[var(--surface)] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/30 hover:shadow-lg hover:shadow-accent-cyan/5 cursor-pointer">
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan/5 to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Tags */}
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]"
                              >
                                <Tag className="w-3 h-3" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-accent-cyan transition-colors mb-3 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-3 flex-1">
                          {post.description}
                        </p>

                        {/* Footer: Date + Read More */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                          <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.publishedAt}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                            {translations.readMore}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
