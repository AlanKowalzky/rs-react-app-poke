import React from 'react';
import type { Pokemon } from '../features/items/itemsSlice';
interface CardProps {
  item: Pokemon;
  isSelected: boolean;
  onDetailsClick: (id: string) => void;
  onToggleItem: (id: number) => void;
}
declare const Card: React.FC<CardProps>;
export default Card;
