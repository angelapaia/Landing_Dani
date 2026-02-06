import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dr. Daniel Cardona Brand Colors - Nueva Paleta Médica
        brand: {
          black: '#000000',        // Base (8%)
          dark: '#1E3E54',         // Azul Oscuro Clínico (15%)
          accent: '#2F5876',       // Azul Médico Profundo (60%)
          'accent-light': '#4A7C9E',
          'accent-dark': '#1E4A5F',
          beige: '#F4EBDD',        // Beige Clínico (15%)
          green: '#7C9A6D',        // Verde Médico Suave (2%)
        },
        // Luxury Metallic Accents (Mejora #8)
        luxury: {
          gold: '#D4AF37',         // Warm luxury accent
          'gold-light': '#E8D7A0',
          'gold-dark': '#B8941F',
          platinum: '#E8E8E8',     // Premium border accent
        },
        // Semantic Colors
        medical: {
          trust: '#2F5876',
          authority: '#1E3E54',
          calm: '#F4EBDD',
        },
        // Official WhatsApp Colors
        whatsapp: {
          green: '#25D366',
          teal: '#128C7E',
          dark: '#075E54',
          light: '#DCF8C6',
        },
      },
      fontFamily: {
        // Tipografía de Autoridad Premium
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Scale tipográfica médica profesional
        'headline-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'headline-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.65', letterSpacing: '0', fontWeight: '400' }],
        // Serif Hierarchy Expansion (Mejora #9)
        'heading-elegant': ['2.75rem', { lineHeight: '1.2', letterSpacing: '0.01em', fontWeight: '400' }],
        'heading-strong': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
        'subheading-serif': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '400' }],
        'body-sm-premium': ['0.95rem', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      spacing: {
        // Sistema de espaciado 8pt grid
        'section': '8rem',
        'section-sm': '6rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'medical-glow': 'radial-gradient(circle at center, rgba(10, 61, 98, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'premium': '0 20px 60px -15px rgba(47, 88, 118, 0.3)',
        'glow-accent': '0 0 40px rgba(47, 88, 118, 0.4)',
        'whatsapp': '0 15px 35px -5px rgba(37, 211, 102, 0.4)',
        'medical-card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        // Luxury Shadow Hierarchy (Mejora #11)
        'luxury-minimal': '0 2px 8px rgba(0, 0, 0, 0.12)',
        'luxury-medium': '0 8px 24px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)',
        'luxury-elevated': '0 20px 60px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        'gold-glow': '0 0 24px rgba(212, 175, 55, 0.2), 0 0 48px rgba(212, 175, 55, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'medical': '16px',
      },
    },
  },
  plugins: [],
};

export default config;
