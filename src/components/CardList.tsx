// app/components/CardList.tsx
'use client';

import React from 'react';
import Card from './Card'; // Importujemy zmodyfikowany komponent Card
import type { Pokemon } from '../lib/services/pokemonApi'; // Dostosuj ścieżkę importu
// Importujemy hooki Reduxa, jeśli komponent ma dostęp do stanu/dispatch
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { toggleItem } from '@/features/selectedItems/selectedItemsSlice';

interface CardListProps {
  items: Pokemon[]; // Lista pokemonów
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  // Używamy hooków Reduxa do pobrania zaznaczonych elementów i funkcji dispatch
  const dispatch = useAppDispatch(); // Importuj useAppDispatch
  const selectedItems = useAppSelector(
    (state) => state.selectedItems.selectedIds
  ); // Użyj useAppSelector

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
          />
        );
      })}
    </div>
  );
};

export default CardList;
