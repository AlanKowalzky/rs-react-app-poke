import { useTranslations } from 'next-intl';

export default function HomePage() {
  // Pobierz funkcję tłumaczącą dla namespace 'HomePage'
  const t = useTranslations('HomePage');

  return (
    <div>
      {/* Użyj funkcji t do pobrania tłumaczenia */}
      <h1>{t('welcome')}</h1>
      <p>To jest placeholder dla strony głównej w Next.js App Router.</p>
    </div>
  );
}