import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors - Electric blue for automotive tech
        "accent-blue": "#00A3FF",
        "accent-cyan": "#00E5FF",
        "accent-purple": "#7B61FF",

        // Background colors - Deep automotive dark
        background: {
          DEFAULT: "#0A0A0F",
          secondary: "#12121A",
          tertiary: "#1A1A24",
        },

        // Surface colors
        surface: {
          DEFAULT: "#1E1E2A",
          elevated: "#252532",
          overlay: "#2A2A38",
        },

        // Text colors - Enhanced for better readability
        text: {
          primary: "#FFFFFF",
          secondary: "#B9B9C8",  // Brighter for better contrast
          tertiary: "#8C8CA0",   // Brighter for better readability
          muted: "#64647A",
          accent: "#00A3FF",
        },

        // Border colors
        border: {
          DEFAULT: "#2A2A38",
          light: "#3A3A48",
          accent: "#00A3FF",
        },

        // Legacy support
        primary: {
          DEFAULT: "#00A3FF",
          dark: "#0088DD",
          light: "#33B5FF",
        },
        header: {
          DEFAULT: "#0A0A0F",
          light: "#12121A",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "Consolas", "monospace"],
        display: ["var(--font-pretendard)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-1": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-2": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-3": ["1.75rem", { lineHeight: "1.3" }],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-left": "slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "grid-flow": "gridFlow 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "dash": "dash 2s linear infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        gridFlow: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        dash: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
      },
      animationDelay: {
        "300": "300ms",
        "500": "500ms",
        "700": "700ms",
        "1000": "1000ms",
        "2000": "2000ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-pattern": `linear-gradient(rgba(0, 163, 255, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 163, 255, 0.03) 1px, transparent 1px)`,
        "circuit-pattern": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300A3FF' stroke-opacity='0.05' stroke-width='1'%3E%3Cpath d='M30 0v60M0 30h60M15 0v30h30M15 30v30M45 0v30M0 15h30v30M30 15h30M0 45h30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(0, 163, 255, 0.3)",
        "glow-md": "0 0 30px -5px rgba(0, 163, 255, 0.4)",
        "glow-lg": "0 0 50px -10px rgba(0, 163, 255, 0.5)",
        "glow-cyan": "0 0 30px -5px rgba(0, 229, 255, 0.4)",
        "inner-glow": "inset 0 0 20px -5px rgba(0, 163, 255, 0.2)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
