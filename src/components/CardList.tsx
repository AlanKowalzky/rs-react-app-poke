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
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 border-b border-gray-600">Item Name</th>
              <th className="px-4 py-2 border-b border-gray-600">Item Description</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <Card key={item.name} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CardList;