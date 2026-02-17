"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const languages: { code: string; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

const CAREERS_URL = process.env.NEXT_PUBLIC_CAREERS_URL ?? "/company/notice";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");

  const navigation: NavItem[] = [
    {
      label: t("company"),
      href: "/company",
      children: [
        { label: t("companyAbout"), href: "/company" },
        { label: t("companyNotice"), href: "/company/notice" },
        { label: t("companyCareers"), href: CAREERS_URL },
        { label: t("companyContact"), href: "/company/contact" },
      ],
    },
    {
      label: t("products"),
      href: "/products",
      children: [
        { label: t("productsToolkit"), href: "/products/adaptive" },
        { label: t("productsAutosar"), href: "/products/autosario" },
        { label: t("productsPara"), href: "/products/para" },
        { label: t("productsPacon"), href: "/products/pacon" },
        { label: t("productsParvis"), href: "/products/ai" },
        { label: t("productsParvisAdk"), href: "/products/parvisadk" },
        { label: t("productsAiAgent"), href: "/products/aiagent" },
      ],
    },
    {
      label: t("solution"),
      href: "/solution",
      children: [
        { label: t("solutionCloud"), href: "/solution/cloudnative" },
        { label: t("solutionDigital"), href: "/solution/digital" },
        { label: t("solutionAi"), href: "/solution/ai" },
        { label: t("solutionMatlab"), href: "/solution/matlab" },
        { label: t("solutionAgent"), href: "/solution/aiagent" },
      ],
    },
    {
      label: t("service"),
      href: "/service",
      children: [
        { label: t("serviceConsulting"), href: "/service/consulting" },
        { label: t("serviceAutosar"), href: "/service/autosar" },
        { label: t("serviceTraining"), href: "/service/education" },
        { label: t("serviceCustom"), href: "/service/tool" },
        { label: t("serviceAiTraining"), href: "/service/ai" },
      ],
    },
    {
      label: t("support"),
      href: "/support",
      children: [
        { label: t("supportDownload"), href: "/support" },
        { label: t("supportQna"), href: "/support/qna" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as "ko" | "en" | "ja" | "zh";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop blur wrapper - separated to prevent CSS containing block issue */}
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/layout/logo.png"
              alt="PopcornSAR"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                      pathname.startsWith(item.href)
                        ? "text-accent-blue"
                        : "text-text-secondary hover:text-white hover:bg-surface/50"
                    )}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={cn(
                        "absolute top-full left-0 pt-2 transition-all duration-200",
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      )}
                    >
                      <div className="w-56 py-2 bg-surface border border-border rounded-xl shadow-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            target={child.href.startsWith("http") ? "_blank" : undefined}
                            rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-colors",
                              pathname === child.href
                                ? "text-accent-blue bg-accent-blue/5"
                                : "text-text-secondary hover:text-white hover:bg-surface-elevated"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}

              {/* Language Selector */}
              <li className="ml-4">
                <select
                  value={locale}
                  onChange={handleLanguageChange}
                  className="bg-surface text-text-secondary text-sm border border-border rounded-lg px-3 py-2 focus:outline-none focus:border-accent-blue cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-surface">
                      {lang.label}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 text-text-secondary hover:text-white hover:bg-surface/50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu - outside backdrop-blur div to fix position issue */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-background border-t border-border transition-all duration-300 overflow-y-auto",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="container-custom py-6">
          <div className="space-y-1">
            {navigation.map((item) => (
              <div key={item.href}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full px-4 py-3 text-white font-medium rounded-lg hover:bg-surface/50"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-text-tertiary transition-transform",
                      activeDropdown === item.label && "rotate-180"
                    )}
                  />
                </button>
                {item.children && activeDropdown === item.label && (
                  <div className="mt-1 ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        target={child.href.startsWith("http") ? "_blank" : undefined}
                        rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block px-4 py-2.5 text-sm text-text-secondary hover:text-accent-blue rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="mt-6 px-4">
            <select
              value={locale}
              onChange={handleLanguageChange}
              className="w-full bg-surface text-text-secondary text-sm border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent-blue"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}
