'use client';

import { useGetPokemonDetailsQuery } from '@/services/pokemonApi';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

// Przykładowe komponenty do ładowania i błędów
const LoadingSpinner = () => <div>Loading...</div>;

const ErrorDisplay = ({ error }: { error: FetchBaseQueryError | SerializedError }) => {
  let errorMessage: string;
  if ('status' in error) {
    // `FetchBaseQueryError`
    const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
    errorMessage = `Error: ${errMsg}`;
  } else {
    // `SerializedError`
    errorMessage = error.message ?? 'Failed to load details';
  }
  return <div>{errorMessage}</div>;
};

export default function Details({ pokemonName }: { pokemonName: string }) {
  const { data: pokemon, error, isLoading } = useGetPokemonDetailsQuery(pokemonName);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (!pokemon) {
    return <div>Pokemon not found.</div>;
  }

  const imageUrl = pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default;

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h2>{pokemon.name}</h2>
      <img src={imageUrl} alt={pokemon.name} style={{ width: '150px', height: '150px' }} />
      <p><strong>ID:</strong> {pokemon.id}</p>
      <p><strong>Height:</strong> {pokemon.height / 10} m</p>
      <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
      <p><strong>Types:</strong> {pokemon.types.map((t: { type: { name: string } }) => t.type.name).join(', ')}</p>
    </div>
  );
}
