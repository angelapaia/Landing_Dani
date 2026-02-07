import type { Metadata } from 'next';
import { Merriweather, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/siteConfig';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const DarkVeil = dynamic(
  () => import('@/components/effects/DarkVeil'),
  { ssr: false }
);

// Tipografía Premium
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: [
    'lipedema',
    'cirugía plástica',
    'plastic surgery',
    'Bogotá',
    'Colombia',
    'Dr. Daniel Cardona',
    'cirujano plástico',
    'plastic surgeon',
    'tratamiento lipedema',
    'lipedema treatment',
    'cirugía estética',
    'aesthetic surgery',
    'cirugía reconstructiva',
    'reconstructive surgery',
    'Usaquén',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/assets/images/doctor-hero.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/assets/images/doctor-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${merriweather.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to optimize font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Theme Color */}
        <meta name="theme-color" content="#1E3E54" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {/* Language Switcher - Fixed top right */}
          <div className="fixed top-6 right-6 z-50">
            <LanguageSwitcher />
          </div>

          {/* DarkVeil Background */}
          <DarkVeil />

          {/* Main Content */}
          <main className="relative z-10">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
