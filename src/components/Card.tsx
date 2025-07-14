import { Component } from 'react';

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
      <tr
        className={`transition-colors duration-150 ${zebra ? 'bg-dark-header' : 'bg-dark-card'} hover:bg-gray-700`}
      >
        <td className="px-4 py-3 border-b border-border-gray text-center align-middle">
          <img
            src={imgUrl}
            alt={item.name}
            className="w-16 h-16 mx-auto rounded-full shadow-lg border-2 border-pokemon-orange bg-dark-bg"
          />
        </td>
        <td className="px-6 py-3 border-b border-border-gray font-bold text-lg text-text-light align-middle capitalize">
          {item.name}
        </td>
        <td className="px-6 py-3 border-b border-border-gray text-sm text-text-muted align-middle break-all">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-pokemon-orange transition-colors duration-150"
          >
            {item.url}
          </a>
        </td>
      </tr>
    );
  }
}

export default Card;
