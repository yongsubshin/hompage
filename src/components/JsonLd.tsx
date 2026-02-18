export function OrganizationJsonLd({ locale }: { locale?: string }) {
  const baseUrl = locale && locale !== 'ko'
    ? `https://autosar.io/${locale}`
    : 'https://autosar.io';

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PopcornSAR",
    url: baseUrl,
    logo: "https://autosar.io/images/logo.png",
    description:
      "ASPICE V-Model automation and AUTOSAR development specialist. AI-powered test case generation, ISO 26262 verification, and automotive software engineering services.",
    foundingDate: "2015",
    sameAs: [
      "https://www.youtube.com/@PopcornSAR",
      "https://www.youtube.com/@popcornsarkorea692",
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Seoul",
        addressCountry: "KR",
        name: "Korea Headquarters",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Tokyo",
        addressCountry: "JP",
        name: "Japan Office",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@popcornsar.com",
      availableLanguage: ["Korean", "English", "Japanese", "Chinese"],
    },
    knowsAbout: [
      "ASPICE",
      "ISO 26262",
      "V-Model",
      "AUTOSAR",
      "Adaptive AUTOSAR",
      "Classic AUTOSAR",
      "Automotive Software",
      "ECU Development",
      "SDV",
      "AI for Automotive",
      "Test Case Generation",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    brand: {
      "@type": "Organization",
      name: "PopcornSAR",
    },
    manufacturer: {
      "@type": "Organization",
      name: "PopcornSAR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "PopcornSAR ASPICE & AUTOSAR Engineering Services",
    description:
      "ASPICE consulting, AUTOSAR implementation, training, and custom development services",
    url: "https://autosar.io/service",
    provider: {
      "@type": "Organization",
      name: "PopcornSAR",
    },
    areaServed: ["KR", "JP", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ASPICE & AUTOSAR Consulting",
            description:
              "ASPICE certification consulting and AUTOSAR project consulting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AUTOSAR Implementation",
            description:
              "ECU project AUTOSAR Classic & Adaptive implementation support",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AUTOSAR Training",
            description:
              "ASPICE and AUTOSAR professional training for ECU production projects",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Development",
            description:
              "Custom AUTOSAR development tools and automation scripts",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Agent Core Training",
            description:
              "SDV-specialized AI Agent architecture design training",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd({ locale }: { locale?: string }) {
  const baseUrl = locale && locale !== 'ko'
    ? `https://autosar.io/${locale}`
    : 'https://autosar.io';

  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PopcornSAR",
    url: baseUrl,
    inLanguage: ["ko", "en", "ja", "zh"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://autosar.io/support/qna?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  description,
  datePublished,
  url,
  locale,
}: {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  locale: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: {
      "@type": "Organization",
      name: "PopcornSAR",
    },
    publisher: {
      "@type": "Organization",
      name: "PopcornSAR",
      logo: {
        "@type": "ImageObject",
        url: "https://autosar.io/images/layout/logo.png",
      },
    },
    datePublished,
    url,
    inLanguage: locale,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
