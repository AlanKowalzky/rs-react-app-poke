import React, { Component } from 'react';
import Card from './Card';

interface CardListProps {  
  items: { name: string; url: string }[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { items } = this.props;
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl overflow-x-auto rounded-2xl shadow-2xl bg-white border-4 border-yellow-300">
          <table className="min-w-full text-left border-separate border-spacing-0 rounded-2xl">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-gray-900">
                <th className="px-4 py-3 border-b-2 border-yellow-400 font-bold text-lg rounded-tl-2xl text-center">Image</th>
                <th className="px-6 py-3 border-b-2 border-yellow-400 font-bold text-lg">Item Name</th>
                <th className="px-6 py-3 border-b-2 border-yellow-400 font-bold text-lg rounded-tr-2xl">Item Description</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center text-gray-400 py-8">Brak wyników.</td>
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