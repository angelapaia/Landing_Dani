'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useTransform } from 'framer-motion';
import { siteConfig, faqData } from '@/config/siteConfig';
import { generateWhatsAppLink } from '@/lib/utils/whatsapp';
import MagnetButton from '@/components/animated/MagnetButton';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

/**
 * CtaSection Component
 * Risk Reversal & Conversión Final
 *
 * Mejora #3 - Fase 3: Scroll-Physics Animation System
 *
 * Objetivo:
 * - Resolver últimas objeciones con FAQ
 * - Mostrar garantías y risk reversal
 * - CTA final irresistible
 * - Generar confianza para la conversión
 * - FAQ border glow pulse
 * - CTA button scale basado en scroll proximity
 */

export default function CtaSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Scroll progress para animaciones
  const scrollProgress = useScrollProgress(sectionRef, ['start end', 'center center']);
  const ctaScrollProgress = useScrollProgress(ctaRef, ['start end', 'center center']);

  // FAQ border glow pulse basado en scroll
  const faqBorderOpacity = useTransform(scrollProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  // CTA button scale basado en scroll proximity
  const ctaScale = useTransform(ctaScrollProgress, [0, 0.5, 1], [0.95, 1.05, 1]);

  const whatsappLink = generateWhatsAppLink(
    siteConfig.whatsapp.number,
    siteConfig.whatsapp.message
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-section overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent opacity-20" />

        {/* Decorative Circles */}
        <motion.div
          className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="section-container relative z-10">
        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto mb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-sm font-medium text-brand-accent-light mb-4">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Tienes dudas? Aquí las resolvemos
            </h2>
            <p className="text-lg text-gray-300">
              Respuestas directas a las preguntas más comunes
            </p>
          </motion.div>

          {/* FAQ Accordion - Border glow pulse */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-medical overflow-hidden relative"
                style={{
                  boxShadow: useTransform(
                    faqBorderOpacity,
                    (opacity) =>
                      `0 0 20px rgba(47, 88, 118, ${opacity}), 0 0 40px rgba(47, 88, 118, ${opacity * 0.5})`
                  ),
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-white/5"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent mb-4" />
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FINAL CTA BOX - Scale basado en scroll proximity */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-accent/20 via-brand-accent/10 to-transparent border border-brand-accent/30 p-8 md:p-12 lg:p-16">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-sm font-medium text-green-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Garantía de acompañamiento
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Agenda tu consulta hoy y da el primer paso hacia tu bienestar
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                {siteConfig.pastor.cta.secondary}: valoración clara, plan
                personalizado y seguimiento continuo.
              </motion.p>

              {/* Trust Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-6 mb-10"
              >
                {[
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                    text: 'Coordinación directa por WhatsApp',
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                    text: 'Atención en Bogotá (Usaquén)',
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                    text: 'Valoración desde $280.000 COP',
                  },
                ].map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <span className="text-whatsapp-green">{point.icon}</span>
                    <span>{point.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button - Dynamic scale basado en scroll proximity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{ scale: ctaScale }}
                className="flex justify-center"
              >
                <MagnetButton strength={0.5}>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 shadow-2xl"
                  >
                    <svg
                      className="w-6 h-6 border-none"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {siteConfig.pastor.cta.primary}
                  </a>
                </MagnetButton>
              </motion.div>

              {/* Risk Reversal */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <p className="text-sm text-gray-400 flex items-center justify-center gap-2 flex-wrap">
                  <svg
                    className="w-5 h-5 text-whatsapp-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong className="text-white">Sin riesgo:</strong>{' '}
                    Coordinación sin compromiso. Si coordinas cita y necesitas
                    reprogramar, te apoyamos con flexibilidad administrativa.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            Centro Médico de la Sabana, Usaquén, Bogotá, Colombia
          </p>
          <p className="text-xs text-gray-600 mt-2">
            © {new Date().getFullYear()} Dr. Daniel Cardona. Todos los derechos
            reservados.
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
    </section>
  );
}
