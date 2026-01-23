"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  // Footer links - Keep in English for all languages
  const footerLinks = {
    company: [
      { label: "About Us", href: "/company" },
      { label: "Notice", href: "/company/notice" },
      { label: "Careers", href: "https://popcornsar.recruiter.co.kr/app/jobnotice/list" },
      { label: "Contact Us", href: "/company/contact" },
    ],
    products: [
      { label: "Adaptive AUTOSAR Tool kit", href: "/products/adaptive" },
      { label: "AutoSAR.io", href: "/products/autosario" },
      { label: "PARA", href: "/products/para" },
      { label: "PACON IDE", href: "/products/pacon" },
      { label: "PARVIS", href: "/products/ai" },
      { label: "PARVIS ADK", href: "/products/parvisadk" },
      { label: "AUTOSAR AI Agent", href: "/products/aiagent" },
    ],
    service: [
      { label: "Consulting Service", href: "/service/consulting" },
      { label: "AUTOSAR Implementation", href: "/service/autosar" },
      { label: "AUTOSAR Training", href: "/service/education" },
      { label: "Custom Development", href: "/service/tool" },
      { label: "AI Agent Core Training", href: "/service/ai" },
    ],
  };

  return (
    <footer className="bg-[#25262a]">
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/layout/logo.png"
                alt="PopcornSAR"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              {t.footer.companyDesc}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:support@popcornsar.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#4180E9] transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@popcornsar.com
              </a>
              <a
                href="tel:+82-2-6953-4556"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#4180E9] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +82-2-6953-4556
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Links Sections - Keep in English for all languages */}
          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#4180E9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">PRODUCTS</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#4180E9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">SERVICE</h4>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#4180E9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <p className="text-sm text-gray-500 text-center">
            &copy; {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
