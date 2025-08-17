// app/components/CardList.tsx
'use client';

import React from 'react';
import Card from './Card'; // Importujemy zmodyfikowany komponent Card
import type { Pokemon } from '../lib/services/pokemonApi'; // Dostosuj ścieżkę importu
// Importujemy hooki Reduxa, jeśli komponent ma dostęp do stanu/dispatch
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks'; 
import { toggleItem } from '@/app/features/selectedItems/selectedItemsSlice'; 

import { useLocale } from 'next-intl'; // Importuj useLocale

interface CardListProps {
  items: Pokemon[]; // Lista pokemonów
  currentLocale: string; // Dodaj prop currentLocale

}

const CardList: React.FC<CardListProps> = ({ items }) => {
  // Używamy hooków Reduxa do pobrania zaznaczonych elementów i funkcji dispatch
  const dispatch = useAppDispatch(); // Importuj useAppDispatch
  const selectedItems = useAppSelector((state) => state.selectedItems.selectedIds); // Użyj useAppSelector

  const locale = useLocale(); // Pobierz obecny locale

  // Logika obsługująca zaznaczanie/odznaczanie

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => {
        const isSelected = selectedItems.includes(item.id);
        return (
          <Card
            key={item.id}
            item={item}
            isSelected={isSelected}
            onToggleItem={() => dispatch(toggleItem(item.id))} // Używamy poprawną nazwę akcji
            currentLocale={locale} // Przekaż obecny locale do Card
          />
        );
      })}
    </div>
  );
};

export default CardList;
