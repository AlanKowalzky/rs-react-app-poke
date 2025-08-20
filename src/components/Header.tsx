import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="bg-background-secondary shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-pokemon-orange">
          {t('title')}
        </Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}