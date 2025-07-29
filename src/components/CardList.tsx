import React from 'react';
import Card from './Card';

interface CardListProps {
  items: { name: string; url: string }[];
  onDetailsClick: (id: string) => void;
}

const CardList: React.FC<CardListProps> = ({ items, onDetailsClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <Card key={item.name} item={item} onDetailsClick={onDetailsClick} />
      ))}
    </div>
  );
};

export default CardList;
