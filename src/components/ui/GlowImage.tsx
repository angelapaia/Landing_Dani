'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface GlowImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

/**
 * GlowImage Component - Efecto Premium "Medical Glow Frame"
 *
 * Características:
 * - Resplandor dinámico en color accent (#0A3D62) que pulsa suavemente
 * - Border gradient animado que rota alrededor de la imagen
 * - Parallax sutil en scroll para crear profundidad
 * - Blur backdrop con glassmorphism
 */
export default function GlowImage({
  src,
  alt,
  width = 600,
  height = 800,
  priority = false,
  className = '',
}: GlowImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect en scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Parallax Container */}
      <motion.div
        style={{ y, scale }}
        className="relative"
      >
        {/* Glow Background (Pulsante) */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-3xl bg-brand-accent opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Rotating Border Gradient */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(10, 61, 98, 0.6) 90deg,
                rgba(10, 61, 98, 0.8) 180deg,
                rgba(10, 61, 98, 0.6) 270deg,
                transparent 360deg
              )`,
              padding: '2px',
            }}
          />
        </div>

        {/* Glass Border Effect */}
        <div className="absolute inset-0 rounded-3xl border border-white/10 backdrop-blur-sm" />

        {/* Image Container with Glassmorphism */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-premium"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Backdrop Blur Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent backdrop-blur-[2px] z-10 pointer-events-none" />

          {/* Next.js Optimized Image */}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="object-cover w-full h-full"
            quality={90}
            sizes="(max-width: 768px) 100vw, 600px"
          />

          {/* Inner Glow Highlight */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent z-10 pointer-events-none" />
        </motion.div>

        {/* Floating Light Particles (Sutil) */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-accent rounded-full opacity-10 blur-2xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-brand-accent-light rounded-full opacity-10 blur-2xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </motion.div>

      {/* Corner Accent Lines */}
      <motion.div
        className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-brand-accent rounded-tl-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-brand-accent rounded-br-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />
    </div>
  );
}
