import React from 'react';
import type { Pokemon } from '../features/items/itemsSlice';

interface CardProps {
  item: Pokemon;
  isSelected: boolean;
  onDetailsClick: (id: string) => void;
  onToggleItem: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  item,
  isSelected,
  onDetailsClick,
  onToggleItem,
}) => {
  const { id, name } = item;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDetailsClick(String(id));
  };

  return (
    <div
      className={`bg-background-secondary rounded-md shadow-sm p-2 hover:shadow-lg transition-shadow flex items-center gap-2 relative ${
        isSelected ? 'ring-2 ring-pokemon-orange' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggleItem(id)}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 left-2 h-4 w-4 z-10"
        aria-label={`Select ${name}`}
      />
      <div
        className="flex items-center gap-2 w-full h-full cursor-pointer"
        onClick={handleClick}
      >
        <img src={imageUrl} alt={name} className="h-8 w-8 flex-shrink-0 ml-8" />
        <h2 className="text-sm font-medium capitalize text-text-primary truncate">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
