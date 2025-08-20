import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        {t('backToHome')}
      </Link>
    </div>
  );
}
