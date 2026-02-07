'use client';

import { motion } from 'framer-motion';
import PremiumCard from './PremiumCard';

interface TestimonialCardProps {
  initials: string;
  text: string;
  location: string;
  delay?: number;
}

/**
 * TestimonialCard Component
 * Card premium para testimonios de pacientes con sistema de elevation
 *
 * Mejora #2 - Fase 2: Usa PremiumCard con tier 2 (medium elevation)
 *
 * Features:
 * - Multi-layer shadow elevation
 * - Diseño anónimo con iniciales
 * - Quote marks decorativos
 * - Animated border on hover
 * - Rating stars visual con stagger
 * - 3D hover effect sutil
 */
export default function TestimonialCard({
  initials,
  text,
  location,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <PremiumCard
      tier={2}
      enable3D={false}
      spotlight={false}
      className="h-full group"
    >
      <div className="p-6 h-full relative overflow-hidden bg-brand-black/40 backdrop-blur-medical border border-white/10 rounded-2xl">
        {/* Gradient Accent on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Quote Icon */}
          <div className="mb-4">
            <svg
              className="w-10 h-10 text-brand-accent/30 group-hover:text-brand-accent/50 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>
          </div>

          {/* Testimonial Text */}
          <blockquote className="flex-1 mb-6">
            <p className="text-lg text-white font-medium leading-relaxed">
              "{text}"
            </p>
          </blockquote>

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <motion.svg
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3 + index * 0.1, duration: 0.3 }}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>

          {/* Patient Info */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            {/* Avatar with Initials */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent-light flex items-center justify-center">
              <span className="text-white font-bold text-sm">{initials}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium">Paciente verificado</p>
              <p className="text-sm text-gray-400 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {location}
              </p>
            </div>

            {/* Verified Badge */}
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-brand-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </PremiumCard>
  );
}
