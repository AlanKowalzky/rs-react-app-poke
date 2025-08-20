'use client';

import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>{t('title')}</h1>
      <p>{t('message')}</p>
    </div>
  );
}
