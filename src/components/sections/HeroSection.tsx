'use client';

import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import SplitText from '@/components/animated/SplitText';
import MagnetButton from '@/components/animated/MagnetButton';
import DualImageCrossfade from '@/components/ui/DualImageCrossfade';
import { siteConfig } from '@/config/siteConfig';
import { generateWhatsAppLink } from '@/lib/utils/whatsapp';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';
import { useTranslations } from 'next-intl';


/**
 * HeroSection Component
 * Layout Binario: Texto (Izquierda) / Imagen (Derecha)
 *
 * Mejora #3 - Fase 3: Scroll-Physics Animation System
 *
 * Implementa:
 * - Headline con SplitText animado
 * - Subtítulo persuasivo médico
 * - CTA con MagnetButton
 * - Imagen del doctor con efecto glow premium + rotación tied a scroll
 * - Scroll indicator con pulse dinámico
 */
export default function HeroSection() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useScrollProgress(sectionRef, ['start start', 'end start']);

  // Transformaciones basadas en scroll progress
  const imageRotate = useTransform(scrollProgress, [0, 1], [0, 5]);
  const imageScale = useTransform(scrollProgress, [0, 1], [1, 0.95]);
  const imageY = useTransform(scrollProgress, [0, 1], [0, 50]);

  const whatsappLink = generateWhatsAppLink(
    siteConfig.whatsapp.number,
    t('cta.whatsappMessage')
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 lg:py-section overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-brand-accent-light/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="section-container relative z-10">
        {/* Logo - Top Left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-6 left-6 lg:top-8 lg:left-8 z-20"
        >
          <Image
            src="https://i.ibb.co/TMBDXDjw/LOGO-VERSIONES-Y-FIRMAS-ESPACIALES-DR-DANIEL-CARDONA-19-1.jpg"
            alt={t('site.name')}
            width={180}
            height={60}
            className="h-12 lg:h-16 w-auto object-contain rounded-lg"
            priority
          />
        </motion.div>

        <div className="grid-binary">
          {/* LEFT SIDE - TEXTO */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge/Label Superior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-sm font-medium text-brand-accent-light backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                </span>
                {t('hero.specialization')} · {t('location.city')}
              </span>
            </motion.div>

            {/* Headline Principal (3 líneas) */}
            <div className="space-y-2">
              <SplitText
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white block"
                delay={0.3}
                duration={0.08}
              >
                {t('hero.title')}
              </SplitText>
              <SplitText
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white block"
                delay={0.5}
                duration={0.08}
              >
                {t('hero.subtitle')}
              </SplitText>
              <SplitText
                className="text-xl md:text-2xl lg:text-3xl text-brand-accent-light font-bold leading-tight block"
                delay={0.7}
                duration={0.08}
              >
                {`#${t('hero.protocol')}`}
              </SplitText>
            </div>

            {/* Subtítulo Persuasivo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              {t('site.description')}
            </motion.p>

            {/* Trust Badges (Micro-Proof) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-white">{t('location.city')}, {t('location.area')}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>
                  <strong className="text-white">{t('consultation.price')}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{t('proof.target')}</span>
              </div>
            </motion.div>

            {/* CTA con MagnetButton */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="pt-4"
            >
              <MagnetButton href={whatsappLink} strength={0.4}>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t('cta.primary')}
              </MagnetButton>

              <p className="mt-3 text-sm text-gray-400">
                {t('cta.secondary')}
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE - IMAGEN CON EFECTO GLOW PREMIUM + SCROLL ROTATION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              rotateZ: imageRotate,
              scale: imageScale,
              y: imageY,
            }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <DualImageCrossfade
              images={[
                'https://i.ibb.co/ZzT6mW4S/MG-6287.jpg',
                'https://i.ibb.co/FkW5xypY/74884b67-fc62-46c0-8b76-0faf64c04db0.jpg',
              ]}
              alt={`${t('site.name')} - ${t('hero.subtitle')} ${t('hero.specialization')}`}
              width={600}
              height={800}
              priority
              className="max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Desaparece con scroll progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          opacity: useTransform(scrollProgress, [0, 0.2], [1, 0]),
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
