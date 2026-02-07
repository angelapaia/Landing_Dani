'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

/**
 * BeforeAfterSlider Component
 *
 * Technical Implementation:
 * - Stacking: After (base) → Before (top with clip-path) → Handle
 * - Uses clip-path: inset() for GPU-accelerated clipping
 * - Click-to-move with smooth CSS transitions
 * - Drag events: mousemove + touchmove
 * - Formula: Position % = ((X_mouse - X_container) / Width_total) * 100
 */
export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate position based on mouse/touch X coordinate
  const calculatePosition = useCallback((clientX: number): number => {
    if (!containerRef.current) return sliderPosition;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    // Clamp between 0 and 100
    return Math.min(Math.max(percentage, 0), 100);
  }, [sliderPosition]);

  // Handle drag movement (no transition)
  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    setSliderPosition(calculatePosition(clientX));
  }, [isDragging, calculatePosition]);

  // Handle click-to-move (with smooth transition)
  const handleClick = useCallback((e: React.MouseEvent) => {
    // Only trigger if not dragging and clicking on the container (not the handle)
    if (isDragging) return;

    const newPosition = calculatePosition(e.clientX);
    setIsAnimating(true);
    setSliderPosition(newPosition);
    setHasInteracted(true);

    // Remove animation class after transition completes
    setTimeout(() => setIsAnimating(false), 300);
  }, [isDragging, calculatePosition]);

  // Drag start
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setHasInteracted(true);
    setIsAnimating(false);
  }, []);

  // Mouse events
  const handleMouseMove = useCallback((e: MouseEvent) => {
    handleDragMove(e.clientX);
  }, [handleDragMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch events
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleDragMove(e.touches[0].clientX);
    }
  }, [handleDragMove]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Global event listeners for drag
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Calculate clip-path for the "Before" image
  // Using inset(top right bottom left) - we clip from the right
  const clipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;

  // Calculate label opacity based on handle position
  const beforeLabelOpacity = sliderPosition > 15 ? 1 : 0.3;
  const afterLabelOpacity = sliderPosition < 85 ? 1 : 0.3;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className={`relative h-full min-h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10 border border-white/5 select-none ${className}`}
      style={{ cursor: isDragging ? 'ew-resize' : 'default' }}
      onClick={handleClick}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

      {/* LAYER 1: After Image (Background - Always Full) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
          draggable={false}
        />
      </div>

      {/* LAYER 2: Before Image (Foreground - Clipped with clip-path) */}
      <div
        className="absolute inset-0"
        style={{
          clipPath,
          transition: isAnimating ? 'clip-path 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
          draggable={false}
        />
      </div>

      {/* LAYER 3: Slider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20"
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)',
          transition: isAnimating ? 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
        }}
      >
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[3px] bg-white shadow-lg transform -translate-x-1/2" />

        {/* Handle Button - Glassmorphism Style */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center cursor-ew-resize"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
          }}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          whileHover={{ scale: 1.1, background: 'rgba(255, 255, 255, 0.25)' }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Bidirectional Arrows Icon */}
          <div className="flex items-center gap-1">
            {/* Left Arrow */}
            <svg
              className="w-5 h-5 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>

            {/* Right Arrow */}
            <svg
              className="w-5 h-5 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Labels with dynamic opacity */}
      <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ opacity: beforeLabelOpacity }}
          className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 transition-opacity duration-300"
        >
          <span className="text-sm font-bold text-white uppercase tracking-wider">{beforeLabel}</span>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ opacity: afterLabelOpacity }}
          className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 transition-opacity duration-300"
        >
          <span className="text-sm font-bold text-white uppercase tracking-wider">{afterLabel}</span>
        </motion.div>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-brand-accent opacity-20 blur-xl -z-10" />

      {/* Instruction Text (disappears after first interaction) */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
        >
          <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-2">
            <motion.svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </motion.svg>
            <span className="text-xs font-medium text-white">Desliza para comparar</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
