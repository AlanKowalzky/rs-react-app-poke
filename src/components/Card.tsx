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
    const itemId = this.extractIdFromUrl(item.url); // Wyciągamy ID (można użyć np. do linkowania)

    return (
      <div>
        <h3>{item.name}</h3>
        {/* Używamy URL lub ID jako prostego "opisu" lub linku */}
        <p>URL: {item.url}</p>  
        {/*  Można dodać link np. <a href={`/pokemon/${itemId}`}>Szczegóły</a> */}
      </div>
    );
  }
}

export default Card;