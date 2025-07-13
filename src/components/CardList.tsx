import React, { Component } from 'react';
import Card from './Card';

interface CardListProps {  
  items: { name: string; url: string }[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { items } = this.props;
    return (
      <div className="card-list">  {/* Można dodać klasę CSS */}
        {items.map(item => (  // Używamy item.name jako klucza, powinno być unikalne
          <Card key={item.name} item={item} />
        ))}
      </div>
    );
  }
}

export default CardList;