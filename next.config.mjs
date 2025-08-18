// next.config.mjs
import createWithNextIntl from 'next-intl/plugin';
// Próba obejścia błędu rozszerzenia poprzez importowanie jako '.js'
import i18nConfig from './i18n.js'; // Próbujemy załadować jako .js
const withNextIntl = createWithNextIntl('./i18n.js'); // Używamy ścieżki do pliku i18n.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
      },
    ],
  },

  // 🔑 tutaj poprawnie
  allowedDevOrigins: [
    'https://3000-firebase-rs-react-app-poke-1755337128747.cluster-2a24trvdezeggvmpy7fccga2ee.cloudworkstations.dev',
    'http://localhost:3000',
  ],
};

// Exportujemy z opakowaniem withNextIntl and przekazujemy konfigurację locale
export default withNextIntl(nextConfig);
