import React from 'react';
import Card from './Card';

interface CardListProps {
  items: { name: string; url: string }[];
  onDetailsClick: (id: string) => void;
}

const CardList: React.FC<CardListProps> = ({ items, onDetailsClick }) => {
  if (items.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#9CA3AF',
          fontSize: '1.125rem',
        }}
      >
        No results found. Try a different search term.
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item) => (
        <Card key={item.name} item={item} onDetailsClick={onDetailsClick} />
      ))}
    </div>
  );
};

export default CardList;
