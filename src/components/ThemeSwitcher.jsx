import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      Przełącz na motyw {theme === 'light' ? 'ciemny' : 'jasny'}
    </button>
  );
};
