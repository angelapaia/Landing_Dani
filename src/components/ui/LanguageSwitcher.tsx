'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const languages = [
  { code: 'es', label: 'ES', fullName: 'Español' },
  { code: 'en', label: 'EN', fullName: 'English' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');
    // Create new path with new locale
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <div className="relative">
      {/* Language Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-2
                   bg-black/40 backdrop-blur-md border border-white/10
                   rounded-full overflow-hidden
                   hover:border-accent/50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Gradient background on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Globe Icon */}
        <svg
          className="w-5 h-5 text-white/80 group-hover:text-accent transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        {/* Current Language */}
        <span className="relative z-10 text-sm font-medium text-white/90 group-hover:text-white">
          {currentLanguage?.label}
        </span>

        {/* Dropdown Arrow */}
        <motion.svg
          className="w-4 h-4 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 z-50
                       bg-black/60 backdrop-blur-xl border border-white/10
                       rounded-2xl overflow-hidden shadow-2xl"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center justify-between
                           transition-all duration-200
                           ${
                             lang.code === locale
                               ? 'bg-accent/20 text-white'
                               : 'text-white/70 hover:bg-white/5 hover:text-white'
                           }`}
              >
                <span className="text-sm font-medium">{lang.fullName}</span>
                <span className="text-xs font-bold text-accent/80">{lang.label}</span>
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
