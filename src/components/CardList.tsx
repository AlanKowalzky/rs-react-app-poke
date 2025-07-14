import { Component } from 'react';
import Card from './Card';

interface CardListProps {
  items: { name: string; url: string }[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { items } = this.props;
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl overflow-x-auto rounded-xl shadow-lg bg-dark-card border border-border-gray">
          <table className="min-w-full text-left border-separate border-spacing-0 rounded-xl">
            <thead>
              <tr className="bg-dark-header text-pokemon-orange">
                <th className="px-4 py-3 border-b border-border-gray font-semibold text-base rounded-tl-xl w-20 text-left">
                  Image
                </th>
                <th className="px-6 py-3 border-b border-border-gray font-semibold text-base w-48">
                  Pokémon Name
                </th>
                <th className="px-6 py-3 border-b border-border-gray font-semibold text-base rounded-tr-xl">
                  Endpoint URL
                </th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center text-text-muted py-8">
                    Brak wyników.
                  </td>
                </tr>
              )}
              {items.map((item, idx) => (
                <Card key={item.name} item={item} zebra={idx % 2 === 1} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CardList;
