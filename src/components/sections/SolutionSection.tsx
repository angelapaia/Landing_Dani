'use client';

import { motion } from 'framer-motion';
import ProtocolDiagram from '@/components/ui/ProtocolDiagram';
import { siteConfig } from '@/config/siteConfig';

/**
 * SolutionSection Component
 * El Mecanismo Único - Protocolo LIP360 Cardona®
 *
 * Layout Binario: Texto (Izquierda) / Diagrama Interactivo (Derecha)
 *
 * Objetivo:
 * - Presentar el sistema único del Dr. Cardona
 * - Explicar el enfoque integral (no solo cirugía)
 * - Transmitir confianza y expertise
 * - Diferenciar de competidores
 */

const protocolSteps = siteConfig.pastor.mechanism.steps.map((step, index) => ({
  number: index + 1,
  title: step.title,
  description: step.description,
  icon: ['🔍', '📚', '🏥', '💆‍♀️', '📊'][index], // Icons for each step
}));

export default function SolutionSection() {
  return (
    <section className="relative py-20 lg:py-section overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-transparent opacity-50" />

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(10, 61, 98, 0.2) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(10, 61, 98, 0.2) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="section-container relative z-10">
        <div className="grid-binary gap-16">
          {/* LEFT SIDE - EXPLICACIÓN TÉCNICA */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-sm font-medium text-brand-accent-light">
                La Solución Integral
              </span>
            </motion.div>

            {/* Headline - Mecanismo Único */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                {siteConfig.pastor.mechanism.name}
              </h2>
              <p className="text-xl text-brand-accent-light font-medium">
                {siteConfig.pastor.mechanism.description}
              </p>
            </motion.div>

            {/* Key Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                El lipedema no es un problema estético. Es una{' '}
                <strong className="text-white">condición médica crónica</strong>{' '}
                que requiere un enfoque integral:
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  'No solo cirugía → Tratamiento completo',
                  'No solo estética → Funcionalidad y calidad de vida',
                  'No solo operar → Entender, educar y acompañar',
                  'No solo un día → Seguimiento y optimización continua',
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-brand-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Differentiation Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/30 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    ¿Por qué es diferente?
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Porque integra{' '}
                    <strong className="text-brand-accent-light">
                      criterios médicos claros
                    </strong>
                    , educación del paciente, coordinación con terapia
                    conservadora y seguimiento a largo plazo. No es solo
                    "operarse y ya".
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Credibility Statement */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-sm text-gray-400 italic border-l-2 border-brand-accent/30 pl-4"
            >
              "El objetivo no es solo mejorar la apariencia, sino{' '}
              <strong className="text-white">
                reducir el dolor, mejorar la movilidad y recuperar calidad de
                vida
              </strong>
              ." — Dr. Daniel Cardona
            </motion.p>
          </div>

          {/* RIGHT SIDE - DIAGRAMA INTERACTIVO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex items-center"
          >
            {/* Diagram Container */}
            <div className="w-full max-w-lg mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-8 text-center lg:text-left"
              >
                <h3 className="text-2xl font-bold text-white mb-2">
                  El Proceso Paso a Paso
                </h3>
                <p className="text-gray-400">
                  Pasa el cursor sobre cada paso para más detalles
                </p>
              </motion.div>

              {/* Protocol Diagram */}
              <ProtocolDiagram steps={protocolSteps} />

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
                    Cada caso es único.
                  </span>{' '}
                  El protocolo se personaliza según tus necesidades,
                  diagnóstico y objetivos.
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none"
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
          </motion.div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
    </section>
  );
}
