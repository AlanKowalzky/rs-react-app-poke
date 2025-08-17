// app/components/ThemeSwitcher.tsx (fragment)
'use client';

import React from 'react';
import { useTheme } from '@/app/hooks/useTheme'; 
import { useTranslations, useLocale } from 'next-intl'; // Nadal importujemy tylko useTranslations i useLocale
import { useRouter } from 'next/navigation'; // Importujemy router z next/navigation
import { SunIcon, MoonIcon } from '@/app/components/Icons'; 

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('ThemeSwitcher');
  const locale = useLocale();
  const router = useRouter(); // Używamy routera z next/navigation

  // Funkcja do przełączania języków - manualnie konstruujemy ścieżkę
  const switchLocale = (nextLocale: string) => {
    const path = router.pathname; // Pobierz obecną ścieżkę (bez locale)
    // Konstruujemy nową ścieżkę z nowym locale
    const newPath = `/${nextLocale}${path === '/' ? '' : path}`; 
    router.push(newPath); // Przełączamy na nową ścieżkę
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Przełącznik motywu */}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary hover:bg-border text-pokemon-orange border border-border transition-colors"
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
