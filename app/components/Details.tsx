// app/[locale]/pokemon/[name]/page.tsx
// To jest Server Component domyślnie, nie potrzebujemy 'use client';

import { notFound } from 'next/navigation';
// Importujemy komponent Details (Client Component)
import Details from '@/app/components/Details'; 


interface PokemonDetailsPageProps {
  // Zmień typowanie na Promise
  params: Promise<{ name: string }>; 
  // searchParams: { [key: string]: string | string[] | undefined }; // Opcjonalne
}

// Komponent strony szczegółów pokemona (Server Component)
export default async function PokemonDetailsPage({ 
  // Użyj await na params przed destrukturyzacją
  params 
}: PokemonDetailsPageProps) {
  const { name: pokemonName } = await params; // Pobieramy nazwę pokemona z awaited params

  // Opcjonalna walidacja nazwy pokemona
  if (!pokemonName) {
    notFound(); // Przekierowanie do strony 404
  }

  // Renderujemy komponent Details (Client Component) i przekazujemy nazwę pokemona
  return (
    <div>
      {/* Nagłówek strony */}
      <h1>Strona Szczegółów Pokemona</h1> 
      {/* Renderujemy komponent Details i przekazujemy mu nazwę pokemona */}
      <Details pokemonName={pokemonName} /> 
    </div>
  );
}

// Opcionalnie: Implementacja generateStaticParams
// export async function generateStaticParams() {
//   // Tutaj można pobrać listę wszystkich nazw pokemonów
//   // i zwrócić tablicę obiektów z paramsem 'name'
//   // Aby Next.js wygenerował strony szczegółów statycznie
//   // const pokemons = await fetch('...');
//   // return pokemons.map(pokemon => ({ name: pokemon.name }));
//   return []; // Domyślnie - renderowanie dynamiczne na żądanie
// }
