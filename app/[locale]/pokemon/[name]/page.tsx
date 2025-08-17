// app/[locale]/pokemon/[name]/page.tsx
// To jest Server Component domyślnie, nie potrzebujemy 'use client';

import { notFound } from 'next/navigation';
// Importujemy komponent Details (Client Component)
import Details from '@/app/components/Details'; 


interface PokemonDetailsPageProps {
  // Zmień typowanie na Promise
  params: Promise<{ name: string; locale: string; }>; // params to Promise, dodajemy locale
  // searchParams: { [key: string]: string | string[] | undefined }; // Opcjonalne
}

// Komponent strony szczegółów pokemona (Server Component)
export default async function PokemonDetailsPage({ 
  // Użyj await na params przed destrukturyzacją
  params 
}: PokemonDetailsPageProps) {
  const { name: pokemonName, locale } = await params; // Pobieramy nazwę i locale z awaited params

  // Opcjonalna walidacja nazwy pokemona
  if (!pokemonName) {
    notFound(); // Przekierowanie do strony 404
  }

  // Renderujemy komponent Details (Client Component) i przekazujemy nazwę pokemona
  return (
    <div>
      {/* Nagłówek strony */}
      <h1>Strona Szczegółów Pokemona ({locale})</h1> 
      {/* Renderujemy komponent Details i przekazujemy mu nazwę pokemona */}
      <Details pokemonName={pokemonName} /> 
    </div>
  );
}

// Opcjonalnie: Implementacja generateStaticParams
// export async function generateStaticParams() {
//   return []; // Domyślnie - renderowanie dynamiczne na żądanie
// }
