import React from 'react';
import type { Pokemon } from '../features/items/itemsSlice';
interface CardListProps {
  items: Pokemon[];
  selectedIds: number[];
  onDetailsClick: (id: string) => void;
  onToggleItem: (id: number) => void;
}
declare const CardList: React.FC<CardListProps>;
export default CardList;
