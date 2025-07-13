import React, { Component } from 'react';

interface CardProps {
  item: { name: string; url: string }; // Zmieniony interfejs
}

class Card extends Component<CardProps> {
  // Funkcja do wyciągnięcia ID z URL (można użyć do pobrania szczegółów)
  extractIdFromUrl = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  render() {
    const { item } = this.props;
    const itemId = this.extractIdFromUrl(item.url);

    return (
      <tr className="hover:bg-gray-800">
        <td className="px-4 py-2 border-b border-gray-700 font-semibold">{item.name}</td>
        <td className="px-4 py-2 border-b border-gray-700 text-sm">URL: {item.url}</td>
      </tr>
    );
  }
}

export default Card;