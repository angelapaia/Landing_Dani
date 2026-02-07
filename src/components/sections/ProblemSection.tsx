'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

/**
 * ProblemSection Component
 * Sección de Empatía - Agitación del Dolor
 *
 * Mejora #3 - Fase 3: Scroll-Physics Animation System
 *
 * Layout Binario: Texto (Izquierda) / Imagen (Derecha)
 *
 * Objetivo:
 * - Conectar emocionalmente con el dolor del paciente
 * - Validar sus frustraciones
 * - Crear urgencia para la solución
 */

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useScrollProgress(sectionRef, ['start end', 'end start']);

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
        <div className="grid-binary gap-16 items-center">
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

          {/* RIGHT SIDE - IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative h-full min-h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 border border-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

            {/* Imagen solicitada */}
            <img
              src="https://i.ibb.co/RkLDnwhF/PHOTO-2025-09-11-17-13-33.jpg"
              alt="Paciente con lipedema buscando solución real"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
            />

            {/* Decorative Glow Effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-brand-accent opacity-20 blur-xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Section Divider - Premium */}
      <div className="absolute bottom-0 left-0 right-0 divider-premium" />
    </section>
  );
}
