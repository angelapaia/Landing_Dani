'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * Header Component
 * Fixed header with logo (left) and language switcher (right)
 * Glassmorphism effect with subtle backdrop blur
 */
export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Image
              src="https://i.ibb.co/TMBDXDjw/LOGO-VERSIONES-Y-FIRMAS-ESPACIALES-DR-DANIEL-CARDONA-19-1.jpg"
              alt="Dr. Daniel Cardona"
              width={160}
              height={50}
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain rounded"
              priority
            />
          </div>

          {/* Language Switcher - Right */}
          <div className="flex-shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
