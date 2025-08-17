import { notFound } from 'next/navigation';

interface PokemonDetailsPageProps {
  params: {
    name: string;
  };
}

// This is a placeholder, actual data fetching will be implemented later
async function getPokemonDetails(name: string) {
  // Simulate fetching data
  // In a real scenario, you would fetch from the PokeAPI here
  // For now, just return the name
  if (!name) {
    notFound(); // Example of using notFound in RSC
  }
  return { name };
}

export default async function PokemonDetailsPage({ params }: PokemonDetailsPageProps) {
  // Data fetching will happen here in a real app
  const pokemon = await getPokemonDetails(params.name);

  return (
    <div>
      <h1>Szczegóły Pokemona (migracja w toku)</h1>
      <p>Wyświetlam szczegóły dla: {pokemon.name}</p>
    </div>
  );
}