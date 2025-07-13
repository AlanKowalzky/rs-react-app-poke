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
    return (
      <tr className={
        `transition-colors duration-150 ${zebra ? 'bg-gray-800' : 'bg-gray-900'} hover:bg-blue-950`
      }>
        <td className="px-6 py-3 border-b border-gray-800 font-semibold text-base rounded-l-xl">{item.name}</td>
        <td className="px-6 py-3 border-b border-gray-800 text-sm break-all rounded-r-xl">URL: {item.url}</td>
      </tr>
    );
  }
}

export default Card;