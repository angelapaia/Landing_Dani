/**
 * Elevation Variants - Framer Motion
 * Sistema jerárquico de animaciones 3D para cards premium
 * Mejora #2 - Fase 2
 */

import { Variants } from 'framer-motion';

/**
 * Tier 1: Subtle Elevation
 * Para cards de información general, FAQs, métricas
 */
export const elevationTier1: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      mass: 0.8,
    },
  },
  hover: {
    y: -2,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
    },
  },
};

/**
 * Tier 2: Medium Elevation with 3D Tilt
 * Para testimonios, features destacados, protocol steps
 */
export const elevationTier2: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.92,
    rotateX: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      mass: 1,
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 200,
    },
  },
};

/**
 * Tier 3: Premium Elevation with Perspective
 * Para CTAs principales, pricing, hero cards
 */
export const elevationTier3: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.9,
    rotateX: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 120,
      mass: 1.2,
    },
  },
  hover: {
    y: -8,
    scale: 1.03,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 250,
    },
  },
};

/**
 * Gold Variant - Elementos premium destacados
 * Para badges exclusivos, certificaciones, garantías
 */
export const elevationGold: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      mass: 0.8,
    },
  },
  hover: {
    y: -6,
    scale: 1.05,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 300,
    },
  },
};

/**
 * 3D Mouse Tracking Transform
 * Calcula rotación basada en posición del mouse
 *
 * @param mouseX - Posición X del mouse en el card (0-1)
 * @param mouseY - Posición Y del mouse en el card (0-1)
 * @param intensity - Intensidad del efecto (1-3)
 * @returns Transform style object
 */
export function calculate3DTransform(
  mouseX: number,
  mouseY: number,
  intensity: number = 1
): React.CSSProperties {
  // Normalizar a -1 a 1
  const normalizedX = (mouseX - 0.5) * 2;
  const normalizedY = (mouseY - 0.5) * 2;

  // Calcular rotación (máximo 15deg * intensity)
  const rotateY = normalizedX * 15 * intensity;
  const rotateX = -normalizedY * 15 * intensity;

  return {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.2s ease-out',
  };
}

/**
 * Stagger Container para múltiples cards con elevation
 */
export const elevationContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: 'easeOut',
    },
  },
};
