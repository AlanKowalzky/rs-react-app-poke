// import { useTranslations } from 'next-intl';

export default function HomePage() {
  // const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>To jest placeholder dla strony głównej w Next.js App Router.</p>
    </div>
  );
}