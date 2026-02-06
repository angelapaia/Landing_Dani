'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollFloatProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

/**
 * ScrollFloat Component
 * Elemento que flota suavemente con el scroll (parallax)
 */
export default function ScrollFloat({
  children,
  className = '',
  speed = 50,
}: ScrollFloatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
