import React from 'react';
import Card from './Card';
import type { Pokemon } from '../features/items/itemsSlice';

interface CardListProps {
  items: Pokemon[];
  selectedIds: number[];
  onDetailsClick: (id: string) => void;
  onToggleItem: (id: number) => void;
}

const CardList: React.FC<CardListProps> = ({
  items,
  selectedIds,
  onDetailsClick,
  onToggleItem,
}) => {
  if (items.length === 0) {
    return (
      <div className="py-10 px-5 text-center text-lg text-text-secondary">
        No results found. Try a different search term.
      </div>
    );
  }

  return (
    <div>
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          isSelected={selectedIds.includes(item.id)}
          onDetailsClick={onDetailsClick}
          onToggleItem={onToggleItem}
        />
      ))}
    </div>
  );
};

export default CardList;
