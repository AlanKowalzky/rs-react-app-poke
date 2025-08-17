import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./minimal-i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Podstawowa konfiguracja Next.js, jeśli potrzebna
  // np. experimental: { appDir: true },
};

export default withNextIntl(nextConfig);