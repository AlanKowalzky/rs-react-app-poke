import React from 'react';
import type { Pokemon } from '../services/pokemonApi';

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
      className={`bg-background-secondary rounded-lg p-3 mb-2 border border-border flex items-center gap-3 hover:shadow-md transition-all ${isSelected ? 'ring-2 ring-pokemon-orange' : ''}`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggleItem(id)}
        onClick={(e) => e.stopPropagation()}
        className="mr-2"
        aria-label={`Select ${name}`}
      />
      <div
        className="flex items-center gap-3 w-full cursor-pointer"
        onClick={handleClick}
      >
        <img src={imageUrl} alt={name} className="w-8 h-8 flex-shrink-0" />
        <h2 className="text-sm font-medium capitalize text-text-primary">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;
