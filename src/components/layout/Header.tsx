"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage, Language } from "@/lib/i18n";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const languages: { code: Language; label: string }[] = [
  { code: "kr", label: "한국어" },
  { code: "en", label: "English" },
  { code: "cn", label: "中文" },
  { code: "jp", label: "日本語" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  // Navigation - Keep in English for all languages
  const navigation: NavItem[] = [
    {
      label: "COMPANY",
      href: "/company",
      children: [
        { label: "About Us", href: "/company" },
        { label: "Notice", href: "/company/notice" },
        { label: "Careers", href: "https://popcornsar.recruiter.co.kr/app/jobnotice/list" },
        { label: "Contact Us", href: "/company/contact" },
      ],
    },
    {
      label: "PRODUCTS",
      href: "/products",
      children: [
        { label: "Adaptive AUTOSAR Tool kit", href: "/products/adaptive" },
        { label: "AutoSAR.io", href: "/products/autosario" },
        { label: "PARA", href: "/products/para" },
        { label: "PACON IDE", href: "/products/pacon" },
        { label: "PARVIS", href: "/products/ai" },
        { label: "PARVIS ADK", href: "/products/parvisadk" },
        { label: "AUTOSAR AI Agent", href: "/products/aiagent" },
      ],
    },
    {
      label: "SOLUTION",
      href: "/solution",
      children: [
        { label: "Cloud Native", href: "/solution/cloudnative" },
        { label: "Digital Twin", href: "/solution/digital" },
        { label: "AI for Adaptive Platforms", href: "/solution/ai" },
        { label: "MATLAB & Simulink", href: "/solution/matlab" },
        { label: "PARVIS Agent", href: "/solution/aiagent" },
      ],
    },
    {
      label: "SERVICE",
      href: "/service",
      children: [
        { label: "Consulting Service", href: "/service/consulting" },
        { label: "AUTOSAR Implementation", href: "/service/autosar" },
        { label: "AUTOSAR Training", href: "/service/education" },
        { label: "Custom Development", href: "/service/tool" },
        { label: "AI Agent Core Training", href: "/service/ai" },
      ],
    },
    {
      label: "SUPPORT",
      href: "/support",
      children: [
        { label: "DOWNLOAD", href: "/support" },
        { label: "Q&A", href: "/support/qna" },
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
    setLanguage(e.target.value as Language);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
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
                  value={language}
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
            className="lg:hidden p-2 text-text-secondary hover:text-white hover:bg-surface/50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background border-t border-border transition-all duration-300 overflow-y-auto",
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
              value={language}
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
