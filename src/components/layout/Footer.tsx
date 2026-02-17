"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const CAREERS_URL = process.env.NEXT_PUBLIC_CAREERS_URL ?? "/company/notice";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const nav = useTranslations("nav");
  const footer = useTranslations("footer");

  const footerLinks = {
    company: [
      { label: nav("companyAbout"), href: "/company" },
      { label: nav("companyNotice"), href: "/company/notice" },
      { label: nav("companyCareers"), href: CAREERS_URL },
      { label: nav("companyContact"), href: "/company/contact" },
    ],
    products: [
      { label: nav("productsToolkit"), href: "/products/adaptive" },
      { label: nav("productsAutosar"), href: "/products/autosario" },
      { label: nav("productsPara"), href: "/products/para" },
      { label: nav("productsPacon"), href: "/products/pacon" },
      { label: nav("productsParvis"), href: "/products/ai" },
      { label: nav("productsParvisAdk"), href: "/products/parvisadk" },
      { label: nav("productsAiAgent"), href: "/products/aiagent" },
    ],
    service: [
      { label: nav("serviceConsulting"), href: "/service/consulting" },
      { label: nav("serviceAutosar"), href: "/service/autosar" },
      { label: nav("serviceTraining"), href: "/service/education" },
      { label: nav("serviceCustom"), href: "/service/tool" },
      { label: nav("serviceAiTraining"), href: "/service/ai" },
    ],
  };

  return (
    <footer className="bg-surface">
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
              {footer("companyDesc")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:support@popcornsar.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent-blue transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@popcornsar.com
              </a>
              <a
                href="tel:+82-2-6953-4556"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent-blue transition-colors"
              >
                <Phone className="w-4 h-4" />
                +82-2-6953-4556
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{footer("address")}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{nav("company")}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{nav("products")}</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{nav("service")}</h4>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
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
          <p className="text-sm text-gray-400 text-center">
            &copy; {currentYear} {footer("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
