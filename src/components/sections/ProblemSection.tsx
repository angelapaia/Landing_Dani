'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SpotlightCard from '@/components/animated/SpotlightCard';
import { siteConfig } from '@/config/siteConfig';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

/**
 * ProblemSection Component
 * Sección de Empatía - Agitación del Dolor
 *
 * Mejora #3 - Fase 3: Scroll-Physics Animation System
 * Mejora #4 - Fase 1: Stagger Animation Pattern
 *
 * Layout Binario: Texto (Izquierda) / SpotlightCards (Derecha)
 *
 * Objetivo:
 * - Conectar emocionalmente con el dolor del paciente
 * - Validar sus frustraciones
 * - Crear urgencia para la solución
 * - Icons shake en frustration
 * - Emotion badges pulse basado en scroll
 */

// Animation variants para stagger pattern premium (Mejora #4)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,      // 80ms entre items
      delayChildren: 0.2,          // Initial delay
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)"  // Blur entrance effect
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      mass: 0.8
    }
  }
};

const frustrations = [
  {
    icon: '💪',
    title: 'Dieta y ejercicio sin resultados',
    description:
      'Hago dieta y ejercicio, pero mis piernas (o brazos) no cambian. La desproporción sigue igual o empeora.',
    emotion: 'Frustración',
  },
  {
    icon: '😣',
    title: 'Dolor y pesadez constante',
    description:
      'Siento dolor, inflamación y pesadez que no desaparece. Me limita en mi día a día y afecta mi calidad de vida.',
    emotion: 'Agotamiento',
  },
  {
    icon: '🚫',
    title: 'Diagnósticos incorrectos',
    description:
      'Me dijeron que es celulitis, obesidad o "solo retención"... pero los síntomas empeoran y nadie me da una solución real.',
    emotion: 'Confusión',
  },
  {
    icon: '😰',
    title: 'Miedo a una cirugía sin experto',
    description:
      'Quiero una solución, pero me da miedo operarme sin un especialista que realmente entienda el lipedema y tenga experiencia.',
    emotion: 'Incertidumbre',
  },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useScrollProgress(sectionRef, ['start end', 'end start']);

  // Transformaciones basadas en scroll para efectos de frustración
  const badgeOpacity = useTransform(scrollProgress, [0.2, 0.5, 0.8], [0.5, 1, 0.5]);
  const iconShake = useTransform(scrollProgress, [0, 0.5, 1], [0, 2, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-section overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark opacity-50" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(10, 61, 98, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="section-container relative z-10">
        <div className="grid-binary gap-16">
          {/* LEFT SIDE - COPY DE AGITACIÓN */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-sm font-medium text-red-400">
                El Problema Real
              </span>
            </motion.div>

            {/* Headline - Pain Point */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
            >
              {siteConfig.pastor.pain.headline}
            </motion.h2>

            {/* Pain Points List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              {siteConfig.pastor.pain.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Emotional Impact Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20"
            >
              <p className="text-xl font-medium text-white leading-relaxed">
                No es solo estética.{' '}
                <span className="text-red-400">
                  Es dolor, limitación funcional y pérdida de calidad de vida
                </span>
                . Y necesitas un diagnóstico claro y un plan integral, no más
                frustración.
              </p>
            </motion.div>

            {/* Trust Reinforcement */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-sm text-gray-400 italic"
            >
              Si te identificas con esto, no estás sola/o. El lipedema es una
              condición médica real que requiere un abordaje especializado.
            </motion.p>
          </div>

          {/* RIGHT SIDE - GRID DE SPOTLIGHT CARDS */}
          <div className="relative">
            {/* Cards Grid - Stagger Animation Pattern (Mejora #4) */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frustrations.map((frustration, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <SpotlightCard className="h-full">
                    {/* Emotion Badge - Pulse basado en scroll */}
                    <motion.div
                      className="mb-4"
                      style={{
                        opacity: badgeOpacity,
                      }}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-xs font-medium text-brand-accent-light">
                        {frustration.emotion}
                      </span>
                    </motion.div>

                    {/* Icon - Shake en frustration */}
                    <motion.div
                      className="text-4xl mb-4"
                      style={{
                        x: iconShake,
                      }}
                      animate={{
                        rotate: [0, -5, 5, -5, 5, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      {frustration.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {frustration.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {frustration.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Glow Effect */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </div>

      {/* Section Divider - Premium (Mejora #10) */}
      <div className="absolute bottom-0 left-0 right-0 divider-premium" />
    </section>
  );
}
