"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1] as const,
      when: "beforeChildren" as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

interface SlideTransitionProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

const slideVariants = {
  left: {
    initial: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  right: {
    initial: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  up: {
    initial: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  down: {
    initial: { opacity: 0, y: -100 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  },
};

export function SlideTransition({
  children,
  direction = "up",
}: SlideTransitionProps) {
  const pathname = usePathname();
  const variants = slideVariants[direction];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={variants.initial}
        animate={{
          ...variants.enter,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        }}
        exit={{
          ...variants.exit,
          transition: {
            duration: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

interface FadeScaleTransitionProps {
  children: ReactNode;
}

export function FadeScaleTransition({ children }: FadeScaleTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.4, 0.25, 1],
          },
        }}
        exit={{
          opacity: 0,
          scale: 1.02,
          transition: {
            duration: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

interface RevealTransitionProps {
  children: ReactNode;
  color?: string;
}

export function RevealTransition({
  children,
  color = "#00A3FF",
}: RevealTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative">
        {/* Reveal overlay */}
        <motion.div
          className="fixed inset-0 z-50 pointer-events-none"
          style={{ backgroundColor: color }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={{
            scaleY: [0, 1, 1, 0],
            originY: [0, 0, 1, 1],
          }}
          transition={{
            duration: 0.8,
            times: [0, 0.4, 0.6, 1],
            ease: [0.25, 0.4, 0.25, 1],
          }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 0.4,
            },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
