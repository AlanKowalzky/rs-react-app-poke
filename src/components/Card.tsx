import React, { Component } from 'react';

interface CardProps {
  item: { name: string; url: string };
  zebra?: boolean;
}

class Card extends Component<CardProps> {
  extractIdFromUrl = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  render() {
    const { item, zebra } = this.props;
    const itemId = this.extractIdFromUrl(item.url);
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${itemId}.png`;
    return (
      <tr className={
        `transition-colors duration-150 ${zebra ? 'bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50' : 'bg-white'} hover:bg-yellow-200`
      }>
        <td className="px-4 py-3 border-b border-gray-200 text-center align-middle">
          <img src={imgUrl} alt={item.name} className="w-14 h-14 mx-auto rounded-full shadow-md bg-white border-2 border-yellow-300" />
        </td>
        <td className="px-6 py-3 border-b border-gray-200 font-bold text-lg text-gray-800 align-middle capitalize">{item.name}</td>
        <td className="px-6 py-3 border-b border-gray-200 text-sm text-gray-600 align-middle">URL: {item.url}</td>
      </tr>
    );
  }
}

export default Card;