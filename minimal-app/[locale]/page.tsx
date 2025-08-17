import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Test'); // Assuming 'Test' is a key in your message files

  return (
    <div>
      <h1>Minimalna Strona Testowa</h1>
      <p>{t('Test')}</p> {/* Example usage of translation */}
    </div>
  );
}