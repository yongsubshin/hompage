"use client";

import { useState, useCallback, MouseEvent as ReactMouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  rippleColor?: string;
  duration?: number;
  onClick?: (e: ReactMouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function RippleButton({
  children,
  className = "",
  rippleColor = "rgba(255, 255, 255, 0.3)",
  duration = 600,
  onClick,
  disabled = false,
  type = "button",
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = useCallback(
    (e: ReactMouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const newRipple: Ripple = {
        id: Date.now(),
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, duration);

      onClick?.(e);
    },
    [duration, onClick]
  );

  return (
    <button
      type={type}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: rippleColor,
            }}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration / 1000, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
}

interface ClickSpreadProps {
  className?: string;
  color?: string;
  children: React.ReactNode;
}

export function ClickSpread({
  className = "",
  color = "rgba(59, 130, 246, 0.3)",
  children,
}: ClickSpreadProps) {
  const [spread, setSpread] = useState<{
    x: number;
    y: number;
    active: boolean;
  } | null>(null);

  const handleClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpread({ x, y, active: true });

    setTimeout(() => setSpread(null), 800);
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
      <AnimatePresence>
        {spread?.active && (
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              left: spread.x,
              top: spread.y,
              backgroundColor: color,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ width: 0, height: 0, opacity: 0.6 }}
            animate={{ width: 1000, height: 1000, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface HoverGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
}

export function HoverGlow({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.2)",
  glowSize = 200,
}: HoverGlowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: position.x - glowSize / 2,
          top: position.y - glowSize / 2,
          width: glowSize,
          height: glowSize,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      {children}
    </div>
  );
}
