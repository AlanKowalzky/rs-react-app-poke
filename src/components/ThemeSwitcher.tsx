import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary hover:bg-border text-pokemon-orange border border-border transition-colors"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
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
  );
};

export default ThemeSwitcher;
