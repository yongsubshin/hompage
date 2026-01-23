"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MouseFollowerProps {
  children?: React.ReactNode;
  className?: string;
  size?: number;
  color?: string;
  blur?: number;
  opacity?: number;
}

export function MouseFollower({
  children,
  className = "",
  size = 400,
  color = "rgba(59, 130, 246, 0.15)",
  blur = 100,
  opacity = 1,
}: MouseFollowerProps) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, size]);

  return (
    <motion.div
      className={`pointer-events-none fixed z-0 rounded-full ${className}`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
}

interface GradientFollowerProps {
  className?: string;
  colors?: string[];
  size?: number;
  blur?: number;
}

export function GradientFollower({
  className = "",
  colors = ["rgba(59, 130, 246, 0.2)", "rgba(6, 182, 212, 0.2)"],
  size = 500,
  blur = 120,
}: GradientFollowerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradientStyle = {
    background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${colors[0]}, ${colors[1] || "transparent"}, transparent)`,
    filter: `blur(${blur}px)`,
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <div className="absolute inset-0" style={gradientStyle} />
    </div>
  );
}

interface SpotlightProps {
  className?: string;
  size?: number;
}

export function Spotlight({ className = "", size = 600 }: SpotlightProps) {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 50%)`,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
