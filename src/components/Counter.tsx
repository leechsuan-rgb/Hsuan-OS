import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

export default function Counter({ value, prefix = "", suffix = "" }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [value, count]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
