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

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={imageUrl} alt={item.name} className="mx-auto mb-4 h-24 w-24" />
      <h2 className="text-xl font-semibold capitalize text-gray-800">
        {item.name}
      </h2>
      <button
        onClick={() => onDetailsClick(itemId)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Szczegóły
      </button>
    </div>
  );
};

export default Card;
