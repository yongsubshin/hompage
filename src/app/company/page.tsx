"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const customers = [
  { name: "Mobis", href: "https://www.mobis.co.kr/kr/index.do", logo: "/images/contents/mobis.png" },
  { name: "Denso", href: "https://www.denso.com/jp/ja/", logo: "/images/contents/denso.png" },
  { name: "LG", href: "https://www.lge.co.kr/", logo: "/images/contents/lg.png" },
  { name: "Hyundai Kefico", href: "https://www.hyundai-kefico.com/ko/main/main/index.do", logo: "/images/contents/hyundai.png" },
  { name: "Autocrypt", href: "https://www.autocrypt.co.kr/", logo: "/images/contents/AutoCryptLogo.png" },
  { name: "Huawei", href: "https://www.huawei.com/cn/", logo: "/images/contents/HAWEI.png" },
  { name: "AVL", href: "https://www.avl.com/?avlregion=GLOBAL&groupId=10138&lang=en_US", logo: "/images/contents/avl.png" },
];

const partners = [
  { name: "OSB AG", href: "https://www.osb-ag.de/en/competence-centers/autosar.html", logo: "/images/contents/osb.png" },
  { name: "Kaspersky", href: "https://os.kaspersky.com/partners/", logo: "/images/contents/kaspersky.png" },
  { name: "Tech Mahindra", href: "https://www.techmahindra.com/en-in/?f=397692388", logo: "/images/contents/techm.png" },
];

const investors = [
  { name: "Kodit", href: "https://www.kodit.co.kr/index.jsp", logo: "/images/contents/kodit.png" },
  { name: "KRun Ventures", href: "https://www.krunventures.com/about-us", logo: "/images/contents/krun.png" },
];

export default function CompanyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">{t.company.title}</h1>
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
            <span className="text-accent-cyan">{t.company.title}</span>
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
          >
            {/* Company Image */}
            <div className="mb-12">
              <Image
                src="/images/contents/about_01.jpg"
                alt="PopcornSAR Company"
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />
            </div>

            {/* Company Description */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.company.description1}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.company.description2}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.company.description3}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {t.company.description4}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {t.company.description5}
              </p>
            </div>

            {/* Video */}
            <div className="mb-16">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GB_RiYzO-as"
                  title="PopcornSAR Company Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Second Image */}
            <div className="mb-16">
              <Image
                src="/images/contents/about_02.jpg"
                alt="PopcornSAR History"
                width={1200}
                height={600}
                className="w-full rounded-lg"
              />
            </div>

            {/* Partners Section */}
            <div className="bg-surface rounded-2xl border border-border p-8 md:p-12">
              {/* Customers */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                  <span className="w-2 h-8 bg-accent-cyan" />
                  {t.company.customers}
                </h3>
                <div className="flex flex-wrap gap-6 items-center">
                  {customers.map((customer) => (
                    <a
                      key={customer.name}
                      href={customer.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-105 transition-all duration-300"
                      title={customer.name}
                    >
                      <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm hover:shadow-md">
                        <img
                          src={customer.logo}
                          alt={customer.name}
                          className="object-contain w-full h-full max-w-[120px] max-h-[48px]"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tech Partners */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                  <span className="w-2 h-8 bg-accent-cyan" />
                  {t.company.partners}
                </h3>
                <div className="flex flex-wrap gap-6 items-center">
                  {partners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-105 transition-all duration-300"
                      title={partner.name}
                    >
                      <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm hover:shadow-md">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="object-contain w-full h-full max-w-[120px] max-h-[48px]"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Investors */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                  <span className="w-2 h-8 bg-accent-cyan" />
                  {t.company.investors}
                </h3>
                <div className="flex flex-wrap gap-6 items-center">
                  {investors.map((investor) => (
                    <a
                      key={investor.name}
                      href={investor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-105 transition-all duration-300"
                      title={investor.name}
                    >
                      <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm hover:shadow-md">
                        <img
                          src={investor.logo}
                          alt={investor.name}
                          className="object-contain w-full h-full max-w-[120px] max-h-[48px]"
                        />
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-sm text-tertiary mt-4">{t.company.sortNote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
