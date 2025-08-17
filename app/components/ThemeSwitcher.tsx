// app/components/ThemeSwitcher.tsx
'use client'; // Upewnij się, że ta linia jest na początku

import React from 'react';
import { useTheme } from '@/app/hooks/useTheme'; // Dostosuj ścieżkę, jeśli potrzebne
import { useTranslations, useLocale, useRouter } from 'next-intl';
import { SunIcon, MoonIcon } from '@/app/components/Icons'; // Dostosuj ścieżkę, jeśli potrzebne

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  // Pobierz funkcję tłumaczącą dla namespace 'ThemeSwitcher'
  const t = useTranslations('ThemeSwitcher');
  // Pobierz obecny locale
  const locale = useLocale();
  // Pobierz router next-intl
  const router = useRouter();

  // Funkcja do przełączania języków
  const switchLocale = (nextLocale: string) => {
    // Przełącz na główną stronę z nowym locale
    router.push('/', { locale: nextLocale });
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Przełącznik motywu */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary hover:bg-border text-pokemon-orange border border-border transition-colors"
        // Użyj tłumaczeń dla tytułu
        title={theme === 'light' ? t('switchToDark') : t('switchToLight')}
      >
        {theme === 'light' ? (
          <>
            <MoonIcon className="h-5 w-5" />
            <span className="text-sm">Dark</span>
          </>
        ) : (
          <>
            <SunIcon className="h-5 w-5" />
            <span className="text-sm">Light</span>
          </>
        )}
      </button>

      {/* Przełącznik języków */}
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
        className="px-4 py-2 rounded-lg bg-background-secondary border border-border text-text-primary"
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
