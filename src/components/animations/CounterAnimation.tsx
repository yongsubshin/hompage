"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(from, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });

  const displayValue = useTransform(springValue, (value) =>
    value.toFixed(decimals)
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        springValue.set(to);
        setHasAnimated(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, springValue, to, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  delay?: number;
  className?: string;
}

export function StatCard({
  value,
  label,
  suffix = "",
  prefix = "",
  icon,
  delay = 0,
  className = "",
}: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      {icon && (
        <div className="inline-flex p-3 rounded-xl bg-accent-blue/10 text-accent-blue mb-4">
          {icon}
        </div>
      )}
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
        <Counter
          to={value}
          suffix={suffix}
          prefix={prefix}
          delay={delay + 0.3}
          duration={2}
        />
      </div>
      <div className="text-text-secondary text-sm">{label}</div>
    </motion.div>
  );
}

interface StatsGridProps {
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    icon?: React.ReactNode;
  }>;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function StatsGrid({
  stats,
  className = "",
  columns = 4,
}: StatsGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          prefix={stat.prefix}
          icon={stat.icon}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

interface AnimatedNumberProps {
  value: number;
  className?: string;
  duration?: number;
}

export function AnimatedNumber({
  value,
  className = "",
  duration = 1,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function (easeOutExpo)
      const eased = 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue.toLocaleString()}
    </span>
  );
}

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
  barColor?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  className = "",
  barColor = "bg-gradient-to-r from-accent-blue to-accent-cyan",
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div ref={ref} className={className}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm text-text-secondary">{label}</span>}
          {showValue && (
            <span className="text-sm font-medium text-white">
              <Counter to={value} duration={1.5} />%
            </span>
          )}
        </div>
      )}
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </div>
  );
}
