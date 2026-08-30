'use client';

import { useInView, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ target, suffix = '', duration = 2, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const unsubscribe = count.on('change', (v) => {
        setDisplay(Math.round(v));
      });
      const controls = animate(count, target, { duration, ease: 'easeOut' });
      return () => {
        unsubscribe();
        controls.stop();
      };
    }
  }, [count, target, duration, isInView]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
