'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface ProtocolDiagramProps {
  steps: Step[];
}

/**
 * ProtocolDiagram Component
 * Diagrama interactivo del Protocolo LIP360 Cardona®
 *
 * Features:
 * - Nodos animados con números de paso
 * - Líneas conectoras animadas
 * - Hover states interactivos
 * - Descripción expandible
 */
export default function ProtocolDiagram({ steps }: ProtocolDiagramProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Vertical Timeline */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative"
          >
            {/* Connector Line (except for last step) */}
            {index < steps.length - 1 && (
              <motion.div
                className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-brand-accent to-brand-accent/30"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
              />
            )}

            {/* Step Card */}
            <motion.div
              className="flex items-start gap-4 cursor-pointer group"
              onHoverStart={() => setActiveStep(index)}
              onHoverEnd={() => setActiveStep(null)}
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Step Number Circle */}
              <motion.div
                className={`
                  flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                  font-bold text-lg relative overflow-hidden
                  ${activeStep === index ? 'bg-brand-accent text-white' : 'bg-brand-accent/20 text-brand-accent'}
                `}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-brand-accent"
                  initial={{ scale: 0 }}
                  animate={{ scale: activeStep === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Number */}
                <span className="relative z-10">{step.number}</span>

                {/* Pulse Ring */}
                {activeStep === index && (
                  <motion.div
                    className="absolute inset-0 border-2 border-brand-accent rounded-full"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* Step Content */}
              <div className="flex-1 min-w-0">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3
                    className={`
                      text-xl font-bold leading-tight transition-colors
                      ${activeStep === index ? 'text-brand-accent-light' : 'text-white'}
                    `}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <motion.p
                  className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: activeStep === index ? 1 : 0.8 }}
                >
                  {step.description}
                </motion.p>

                {/* Hover Indicator */}
                <motion.div
                  className="h-1 mt-3 rounded-full bg-brand-accent origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeStep === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Background Glow Effect */}
      <motion.div
        className="absolute -right-20 top-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
