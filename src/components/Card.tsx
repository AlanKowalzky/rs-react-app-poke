import React from 'react';

interface CardProps {
  item: { name: string; url: string };
  onDetailsClick: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ item, onDetailsClick }) => {
  const extractIdFromUrl = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  const itemId = extractIdFromUrl(item.url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${itemId}.png`;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDetailsClick(itemId);
  };

  return (
    <div
      className="bg-white rounded-md shadow-sm p-2 cursor-pointer hover:shadow-md transition-shadow flex items-center gap-2"
      onClick={handleClick}
      style={{ height: '60px' }}
    >
      <img src={imageUrl} alt={item.name} className="h-8 w-8 flex-shrink-0" />
      <h2 className="text-sm font-medium capitalize text-gray-800 truncate">
        {item.name}
      </h2>
    </div>
  );
};

export default Card;
