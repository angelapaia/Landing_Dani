'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';

interface DualImageCrossfadeProps {
    images: [string, string];
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
    interval?: number;
}

/**
 * DualImageCrossfade Component
 * 
 * Alterna suavemente entre dos imágenes con efecto crossfade premium.
 * Incluye todos los efectos de GlowImage: parallax, glow pulsante, border rotante.
 */
export default function DualImageCrossfade({
    images,
    alt,
    width = 600,
    height = 800,
    priority = false,
    className = '',
    interval = 5000,
}: DualImageCrossfadeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-switch between images
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev === 0 ? 1 : 0));
        }, interval);
        return () => clearInterval(timer);
    }, [interval]);

    // Parallax effect en scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* Parallax Container */}
            <motion.div
                style={{ y, scale }}
                className="relative"
            >
                {/* Glow Background (Pulsante) */}
                <motion.div
                    className="absolute inset-0 -z-10 rounded-3xl bg-brand-accent opacity-20 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Rotating Border Gradient */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(10, 61, 98, 0.6) 90deg,
                rgba(10, 61, 98, 0.8) 180deg,
                rgba(10, 61, 98, 0.6) 270deg,
                transparent 360deg
              )`,
                            padding: '2px',
                        }}
                    />
                </div>

                {/* Glass Border Effect */}
                <div className="absolute inset-0 rounded-3xl border border-white/10" />

                {/* Image Container with Glassmorphism and Crossfade */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-premium"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Backdrop Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent z-10 pointer-events-none" />

                    {/* Crossfade Images */}
                    <div className="relative" style={{ width, height }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[activeIndex]}
                                    alt={`${alt} - ${activeIndex + 1}`}
                                    width={width}
                                    height={height}
                                    priority={priority}
                                    className="object-cover w-full h-full"
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, 600px"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Inner Glow Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent z-10 pointer-events-none" />
                </motion.div>

                {/* Floating Light Particles */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-accent rounded-full opacity-10 blur-2xl"
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-brand-accent-light rounded-full opacity-10 blur-2xl"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -15, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                    }}
                />

                {/* Image Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                ? 'bg-brand-accent w-6'
                                : 'bg-white/40 hover:bg-white/60'
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Ver imagen ${index + 1}`}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Corner Accent Lines */}
            <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-brand-accent rounded-tl-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            />
            <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-brand-accent rounded-br-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            />
        </div>
    );
}
