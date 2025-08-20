'use client';

import { useGetPokemonDetailsQuery } from '@/app/lib/services/pokemonApi'; // Załóżmy, że ścieżka jest poprawna

// Przykładowe komponenty do ładowania i błędów
const LoadingSpinner = () => <div>Loading...</div>;
const ErrorDisplay = ({ error }: { error: any }) => <div>Error: {error.message || 'Failed to load details'}</div>;

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
      <p><strong>Types:</strong> {pokemon.types.map((t) => t.type.name).join(', ')}</p>
    </div>
  );
}
