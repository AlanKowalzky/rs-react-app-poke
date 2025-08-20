'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next-intl/client';

// Zdefiniuj interfejs propsów - przykład typowania
interface PokemonDetails { // Nazwa interfejsu dopasowana do przykładu w page.tsx
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other?: {
      'official-artwork'?: {
        front_default: string;
      };
    };
  };
  types: { type: { name: string } }[];
}

interface DetailsProps {
  pokemonDetails: PokemonDetails | null; // Dane pokemona lub null
}

const Details: React.FC<DetailsProps> = ({ pokemonDetails }) => {
  const router = useRouter();

  const handleClose = (): void => {
    // Użyj router.back() aby wrócić do poprzedniej strony (listy pokemonów)
    router.back();
    // Alternatywnie, jeśli wiesz ścieżkę do listy pokemonów, możesz użyć router.push('/pokemon');
  };

  if (!pokemonDetails) {
    return (
      <div className="p-4 text-center text-text-secondary">
        No Pokémon details available.
      </div>
    );
  }

  // Użyj danych przekazanych jako props do uzyskania URL obrazka
  const imageUrl =
    pokemonDetails.sprites.other?.['official-artwork']?.front_default ||
    pokemonDetails.sprites.front_default;

  return (
    <div className="bg-background-secondary rounded-lg shadow-lg relative text-text-primary p-4 border border-border">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl transition-colors z-10"
        aria-label="Close details"
      >
        &times;
      </button>
      <div className="pt-8">
        <h2
          className="text-xl font-bold capitalize mb-4 text-center"
          style={{ color: '#ff7043' }}
        >
          {pokemonDetails.name} {/* Użyj danych z props */}
        </h2>
        {/* Użyj komponentu Image z next/image */}
        <Image
          src={imageUrl}
          alt={pokemonDetails.name} {/* Użyj danych z props */}
          width={200} // Dostosuj rozmiar według potrzeb
          height={200} // Dostosuj rozmiar według potrzeb
          className="mx-auto mb-4 object-contain"
          unoptimized={imageUrl.startsWith('http')} // Dodaj unoptimized dla zewnętrznych URL
        />
        <div className="space-y-2">
          <p>
            <strong>ID:</strong> {pokemonDetails.id} {/* Użyj danych z props */}
          </p>
          <p>
            <strong>Height:</strong> {pokemonDetails.height / 10} m {/* Użyj danych z props */}
          </p>
          <p>
            <strong>Weight:</strong> {pokemonDetails.weight / 10} kg {/* Użyj danych z props */}
          </p>
          <p>
            <strong>Types:</strong>{' '}
            {pokemonDetails.types.map((t) => t.type.name).join(', ')}{" "}
            {/* Użyj danych z props */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
