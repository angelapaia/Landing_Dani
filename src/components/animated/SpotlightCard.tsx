'use client';

import PremiumCard from '@/components/ui/PremiumCard';
import { ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  tier?: 1 | 2 | 3 | 'gold';
  enable3D?: boolean;
}

/**
 * SpotlightCard Component
 * Card con efecto de spotlight que sigue al mouse + sistema de elevation
 *
 * Mejora #2 - Fase 2: Extiende PremiumCard con spotlight habilitado
 *
 * Features:
 * - Spotlight effect que sigue al mouse
 * - Multi-layer elevation system
 * - Animated borders on hover
 * - 3D transform opcional
 * - Gradient border glow
 *
 * @param tier - Nivel de elevación (1-3 o 'gold'), default 2
 * @param enable3D - Habilitar efecto 3D con mouse tracking, default false
 * @param className - Clases adicionales
 */
export default function SpotlightCard({
  children,
  className = '',
  tier = 2,
  enable3D = false,
}: SpotlightCardProps) {
  return (
    <PremiumCard
      tier={tier}
      enable3D={enable3D}
      spotlight={true}
      className={`card-medical group ${className}`}
    >
      {/* Content con padding interno */}
      <div className="p-6 h-full relative z-10">{children}</div>
    </PremiumCard>
  );
}
