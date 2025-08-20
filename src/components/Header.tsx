'use client';

import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="p-4 bg-background-primary border-b border-border shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-text-primary">
          Pokémon App
        </h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
}