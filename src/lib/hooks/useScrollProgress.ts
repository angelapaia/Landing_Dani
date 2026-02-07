import { useScroll, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

/**
 * useScrollProgress Hook
 * Calcula el progreso de scroll de un elemento dentro del viewport
 *
 * Mejora #3 - Fase 3: Scroll-Physics Animation System
 *
 * @param ref - Referencia al elemento DOM a trackear
 * @param offset - Array [start, end] que define cuándo comienza/termina el tracking
 *                 Default: ['start end', 'end start'] = desde que entra hasta que sale del viewport
 *
 * @returns scrollYProgress - MotionValue de 0 a 1 representando el progreso
 *
 * Uso típico:
 * ```tsx
 * const ref = useRef(null);
 * const scrollProgress = useScrollProgress(ref);
 * const rotate = useTransform(scrollProgress, [0, 1], [0, 360]);
 *
 * <motion.div ref={ref} style={{ rotate }}>...</motion.div>
 * ```
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement>,
  offset: ['start end' | 'end start' | 'start start' | 'end end' | 'center center', 'start end' | 'end start' | 'start start' | 'end end' | 'center center'] = ['start end', 'end start']
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: offset as any,
  });

  return scrollYProgress;
}

/**
 * useScrollVelocity Hook
 * Trackea la velocidad de scroll para efectos dinámicos
 *
 * @param ref - Referencia al elemento DOM
 * @returns scrollYProgress, velocity - Progress y velocidad de scroll
 */
export function useScrollVelocity(ref: RefObject<HTMLElement>) {
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // TODO: Implementar velocity tracking con useVelocity de Framer Motion
  // const velocity = useVelocity(scrollY);

  return { scrollYProgress, scrollY };
}
