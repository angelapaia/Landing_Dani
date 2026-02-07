'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MorphHeadlineProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  gradient?: boolean;
  variant?: 'default' | 'elegant' | 'strong';
}

/**
 * MorphHeadline Component
 * Headlines con clip-path morphing y gradient overlay animation
 *
 * Mejora #6 - Fase 2: Headline Morphing con clip-path
 *
 * Features:
 * - Clip-path reveal desde abajo
 * - Gradient overlay que aparece después
 * - Multiple variants (default, elegant, strong)
 * - GPU-accelerated animations
 * - Spring physics
 *
 * @param children - Texto del headline
 * @param className - Clases adicionales
 * @param delay - Delay inicial en segundos
 * @param gradient - Mostrar gradient overlay
 * @param variant - Variante de tipografía
 */
export default function MorphHeadline({
  children,
  className = '',
  delay = 0,
  gradient = true,
  variant = 'default',
}: MorphHeadlineProps) {
  // Variantes de tipografía
  const getVariantClass = () => {
    switch (variant) {
      case 'elegant':
        return 'text-heading-elegant font-serif font-light';
      case 'strong':
        return 'text-heading-strong font-serif font-bold';
      default:
        return 'text-3xl md:text-4xl lg:text-5xl font-bold';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Base text layer con clip-path reveal */}
      <motion.h2
        className={`relative ${getVariantClass()}`}
        initial={{
          clipPath: 'polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%)',
          opacity: 0,
        }}
        whileInView={{
          clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          delay,
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
        }}
      >
        {children}
      </motion.h2>

      {/* Gradient overlay morph (opcional) */}
      {gradient && (
        <motion.h2
          className={`absolute inset-0 bg-gradient-to-r from-brand-accent-light via-brand-accent to-luxury-gold bg-clip-text text-transparent ${getVariantClass()}`}
          initial={{
            opacity: 0,
            y: 10,
            filter: 'blur(10px)',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          viewport={{ once: true }}
          transition={{
            delay: delay + 0.3,
            duration: 0.6,
            ease: 'easeOut',
          }}
          aria-hidden="true"
        >
          {children}
        </motion.h2>
      )}
    </div>
  );
}
