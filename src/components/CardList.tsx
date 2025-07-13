import React, { Component } from 'react';
import Card from './Card';

interface CardListProps {  
  items: { name: string; url: string }[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { items } = this.props;
    return (
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-left border-separate border-spacing-0 rounded-xl shadow-lg bg-gray-900">
          <thead>
            <tr className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
              <th className="px-6 py-3 border-b-2 border-blue-400 font-bold text-lg rounded-tl-xl">Item Name</th>
              <th className="px-6 py-3 border-b-2 border-blue-400 font-bold text-lg rounded-tr-xl">Item Description</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr>
                <td colSpan={2} className="text-center text-gray-400 py-8">Brak wyników.</td>
              </tr>
            )}
            {items.map((item, idx) => (
              <Card key={item.name} item={item} zebra={idx % 2 === 1} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CardList;