// app/components/Card.tsx
'use client';

import React from 'react';
// Importujemy Link z `next-intl`, aby automatycznie obsługiwał locale
import { Link } from 'next-intl';
// Importujemy Image z next/image
import Image from 'next/image'; 
import type { Pokemon } from '../lib/services/pokemonApi'; // Dostosuj ścieżkę importu

interface CardProps {
  item: Pokemon;
  isSelected: boolean;
  // onDetailsClick: (id: string) => void; // Niepotrzebne po użyciu Link
  onToggleItem: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  item,
  isSelected,
  // onDetailsClick,
  onToggleItem,
}) => {
  const { id, name } = item;
  // Używamy URL obrazu z API (lub innego źródła)
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div
      className={`bg-background-secondary rounded-lg p-3 mb-2 border border-border flex items-center gap-3 hover:shadow-md transition-all ${isSelected ? 'ring-2 ring-pokemon-orange' : ''}`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggleItem(id)}
        onClick={(e) => e.stopPropagation()} // Zatrzymaj propagację, aby nie aktywować linku przy kliknięciu na checkbox
        className="mr-2"
        aria-label={`Select ${name}`}
      />
      {/* Używamy komponentu Link z next/link dla obszaru klikalnego */}
      <Link href={`/pokemon/${name}`} className="flex items-center gap-3 w-full cursor-pointer">
        {/* Używamy komponentu Image z next/image */}
        <Image 
          src={imageUrl} 
          alt={name} 
          width={40} // Dostosuj rozmiar
          height={40} // Dostosuj rozmiar
          className="flex-shrink-0" // Zachowaj klasę z oryginalnego img
        />
        <h2 className="text-sm font-medium capitalize text-text-primary">
          {name}
        </h2>
      </Link>
    </div>
  );
};

export default Card;
