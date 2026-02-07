'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { siteConfig, testimonialsData } from '@/config/siteConfig';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

// Animation variants para stagger pattern premium (Mejora #4)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)"
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

/**
 * ProofSection Component
 * Social Proof & Trust - Credibilidad y Autoridad
 *
 * Mejora #3 - Fase 3: Scroll-Physics Animation System
 * Mejora #4 - Fase 1: Stagger Animation Pattern
 *
 * Layout Binario: Texto (Izquierda) / Testimonios (Derecha)
 *
 * Objetivo:
 * - Reforzar autoridad y credibilidad
 * - Mostrar prueba social (testimonios)
 * - Destacar métricas clave (ubicación, precio, alcance)
 * - Generar confianza para la conversión
 * - Metric boxes slide from edges basado en scroll
 */

const metrics = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: 'Ubicación',
    value: siteConfig.pastor.proof.location,
    description: 'Centro Médico de la Sabana',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    label: 'Consulta',
    value: siteConfig.pastor.proof.consultationPrice,
    description: 'Primera valoración médica',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: 'Alcance',
    value: siteConfig.pastor.proof.target,
    description: 'Coordinación por WhatsApp',
  },
];

export default function ProofSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useScrollProgress(sectionRef, ['start end', 'end start']);

  // Metric boxes slide directions basado en index
  const getMetricSlideDirection = (index: number) => {
    const directions = [-100, 0, 100]; // Left, Center, Right
    return directions[index] || 0;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-section overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent opacity-30" />

        {/* Decorative Circles */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="section-container relative z-10">
        <div className="grid-binary gap-16">
          {/* LEFT SIDE - COPY DE AUTORIDAD */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-sm font-medium text-green-400">
                Confianza Comprobada
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
            >
              Resultados reales con pacientes reales
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              {siteConfig.pastor.proof.approach} con enfoque integral a través
              de un {siteConfig.pastor.proof.integration}.
            </motion.p>

            {/* Metrics Grid - Slide from edges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 gap-6"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: getMetricSlideDirection(index),
                    scale: 0.9,
                  }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7 + index * 0.15,
                    duration: 0.6,
                    type: 'spring',
                    damping: 20,
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-brand-black/40 border border-white/5 hover:border-brand-accent/30 transition-colors group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent/30 transition-colors">
                    {metric.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400 mb-1">
                      {metric.label}
                    </p>
                    <p className="text-xl font-bold text-white mb-1">
                      {metric.value}
                    </p>
                    <p className="text-sm text-gray-400">
                      {metric.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Garantía de acompañamiento
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Desde la primera consulta hasta el seguimiento
                    post-tratamiento, recibes atención personalizada y
                    coordinación directa por WhatsApp para resolver tus dudas y
                    coordinar tu plan.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stat Highlight */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-sm text-gray-400 italic"
            >
              Más de{' '}
              <strong className="text-brand-accent-light">
                cientos de pacientes
              </strong>{' '}
              han confiado en el Dr. Cardona para su tratamiento de lipedema y
              cirugía plástica.
            </motion.p>
          </div>

          {/* RIGHT SIDE - TESTIMONIOS */}
          <div className="relative">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8 text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Lo que dicen nuestros pacientes
              </h3>
              <p className="text-gray-400">
                Experiencias reales de personas que recuperaron su bienestar
              </p>
            </motion.div>

            {/* Testimonials Grid - Stagger Animation Pattern (Mejora #4) */}
            <motion.div
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonialsData.map((testimonial, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <TestimonialCard
                    initials={testimonial.initials}
                    text={testimonial.text}
                    location={testimonial.location}
                    delay={0}  // Delay ahora manejado por stagger pattern
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-8 p-4 rounded-xl bg-brand-accent/5 border border-brand-accent/20"
            >
              <p className="text-sm text-gray-400 text-center">
                <span className="text-brand-accent-light font-medium">
                  Testimonios verificados.
                </span>{' '}
                Protegemos la privacidad de nuestros pacientes usando solo
                iniciales.
              </p>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl pointer-events-none"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
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

      {/* Section Divider - Luxury Gold (Mejora #10) */}
      <div className="absolute bottom-0 left-0 right-0 divider-luxury" />
    </section>
  );
}
