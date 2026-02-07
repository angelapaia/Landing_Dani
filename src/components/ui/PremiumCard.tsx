'use client';

import { motion } from 'framer-motion';
import { useRef, useState, MouseEvent, ReactNode } from 'react';
import {
  elevationTier1,
  elevationTier2,
  elevationTier3,
  elevationGold,
  calculate3DTransform,
} from '@/lib/utils/elevationVariants';

type ElevationTier = 1 | 2 | 3 | 'gold';

interface PremiumCardProps {
  children: ReactNode;
  tier?: ElevationTier;
  enable3D?: boolean;
  className?: string;
  spotlight?: boolean;
  rotatingBorder?: boolean; // Mejora #5: Rotating conic-gradient border
}

/**
 * PremiumCard Component
 * Sistema jerárquico de cards con elevación multi-capa y efectos 3D
 *
 * Mejora #2 - Fase 2: Hierarchical Card System
 * Mejora #5 - Fase 2: Bento Grid Glassmorphism con rotating border
 *
 * @param tier - Nivel de elevación (1: subtle, 2: medium, 3: premium, 'gold': exclusive)
 * @param enable3D - Habilitar efecto 3D con mouse tracking
 * @param spotlight - Mostrar efecto spotlight que sigue al mouse
 * @param rotatingBorder - Rotating conic-gradient border (Mejora #5)
 * @param className - Clases adicionales
 *
 * Features:
 * - 3D perspective con mouse tracking
 * - Multi-layer shadows según tier
 * - Animated borders con gradient
 * - Rotating conic-gradient border (Mejora #5)
 * - Spotlight effect opcional
 * - Spring physics animations
 * - Glassmorphism backdrop
 */
export default function PremiumCard({
  children,
  tier = 2,
  enable3D = false,
  className = '',
  spotlight = false,
  rotatingBorder = false,
}: PremiumCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  // Seleccionar variant según tier
  const getVariant = () => {
    switch (tier) {
      case 1:
        return elevationTier1;
      case 2:
        return elevationTier2;
      case 3:
        return elevationTier3;
      case 'gold':
        return elevationGold;
      default:
        return elevationTier2;
    }
  };

  // Seleccionar clase CSS según tier
  const getElevationClass = () => {
    switch (tier) {
      case 1:
        return 'card-elevation-1';
      case 2:
        return 'card-elevation-2';
      case 3:
        return 'card-elevation-3';
      case 'gold':
        return 'card-elevation-gold';
      default:
        return 'card-elevation-2';
    }
  };

  // Mouse move handler para spotlight y 3D
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  // 3D Transform style
  const transform3D = enable3D && isHovered
    ? calculate3DTransform(mousePosition.x, mousePosition.y, tier === 3 || tier === 'gold' ? 1.5 : 1)
    : {};

  const variant = getVariant();

  return (
    <motion.div
      ref={cardRef}
      className={`${getElevationClass()} overflow-hidden ${className}`}
      variants={variant}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...transform3D,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Spotlight Effect (opcional) */}
      {spotlight && isHovered && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(
              600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
              rgba(47, 88, 118, 0.15),
              transparent 40%
            )`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Gradient Border Glow (para tier 3 y gold) */}
      {(tier === 3 || tier === 'gold') && isHovered && (
        <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(
                600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
                ${tier === 'gold' ? 'rgba(212, 175, 55, 0.4)' : 'rgba(47, 88, 118, 0.4)'},
                transparent 40%
              )`,
              padding: '1px',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
        </div>
      )}

      {/* Rotating Border - Conic Gradient (Mejora #5) */}
      {rotatingBorder && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -inset-[1px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                ${tier === 'gold' ? 'rgba(212, 175, 55, 0.6)' : 'rgba(47, 88, 118, 0.6)'} 90deg,
                ${tier === 'gold' ? 'rgba(212, 175, 55, 0.8)' : 'rgba(47, 88, 118, 0.8)'} 180deg,
                ${tier === 'gold' ? 'rgba(212, 175, 55, 0.6)' : 'rgba(47, 88, 118, 0.6)'} 270deg,
                transparent 360deg
              )`,
            }}
          />
          {/* Inner mask to create border effect */}
          <div className="absolute inset-[2px] bg-brand-dark rounded-2xl" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
