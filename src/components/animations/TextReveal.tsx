"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "words" | "chars" | "lines";
  staggerChildren?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { stagger: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: (custom: { duration: number }) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const charVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: (custom: { duration: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    skewY: 3,
  },
  visible: (custom: { duration: number }) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: custom.duration,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  type = "words",
  staggerChildren = 0.05,
}: TextRevealProps) {
  const text = typeof children === "string" ? children : "";

  const getVariants = () => {
    switch (type) {
      case "chars":
        return charVariants;
      case "lines":
        return lineVariants;
      default:
        return wordVariants;
    }
  };

  const getItems = () => {
    switch (type) {
      case "chars":
        return text.split("");
      case "lines":
        return text.split("\n");
      default:
        return text.split(" ");
    }
  };

  const items = getItems();
  const variants = getVariants();

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={{ stagger: staggerChildren, delay }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={variants}
          custom={{ duration }}
          style={{ whiteSpace: type === "words" ? "pre" : undefined }}
        >
          {item}
          {type === "words" && index < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export function Typewriter({
  text,
  className = "",
  delay = 0,
  speed = 50,
  cursor = true,
}: TypewriterProps) {
  return (
    <motion.span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delay + index * (speed / 1000),
          }}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-current ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </motion.span>
  );
}

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SplitTextProps) {
  const words = children.split(" ");

  const getInitialPosition = () => {
    switch (direction) {
      case "down":
        return { y: -40, opacity: 0 };
      case "left":
        return { x: 40, opacity: 0 };
      case "right":
        return { x: -40, opacity: 0 };
      default:
        return { y: 40, opacity: 0 };
    }
  };

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden py-4">
          <motion.span
            className="inline-block"
            initial={getInitialPosition()}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.08,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
