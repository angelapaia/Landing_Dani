import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ProofSection from '@/components/sections/ProofSection';
import CtaSection from '@/components/sections/CtaSection';

/**
 * Home Page - Dr. Daniel Cardona Landing Page
 *
 * Estructura de secciones (según protocolo PASTOR):
 * 1. ✅ Hero Section (Impacto & Autoridad)
 * 2. ✅ Problem Section (Empatía & Agitación)
 * 3. ✅ Solution Section (Mecanismo Único - Protocolo LIP360)
 * 4. ✅ Proof Section (Social Proof & Trust)
 * 5. ✅ CTA Section (Risk Reversal & Conversión Final)
 */
export default function HomePage() {
  return (
    <>
      {/* PASO 2 COMPLETADO: Hero Section */}
      <HeroSection />

      {/* PASO 3 COMPLETADO: Problem Section */}
      <ProblemSection />

      {/* PASO 4 COMPLETADO: Solution Section */}
      <SolutionSection />

      {/* PASO 5 COMPLETADO: Proof Section */}
      <ProofSection />

      {/* PASO 6 COMPLETADO: CTA Section (Risk Reversal & Conversión) */}
      <CtaSection />
    </>
  );
}
