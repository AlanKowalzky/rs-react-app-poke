// app/[locale]/page.tsx
// To jest Server Component domyślnie, nie potrzebujemy 'use client';

// Importujemy fetchBaseQuery z RTK Query
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Importujemy komponent CardList
import CardList from '@/app/components/CardList'; 
// Importujemy typ Pokemon (upewnij się, że ścieżka jest poprawna)
import type { Pokemon } from '@/app/lib/services/pokemonApi'; 


// Definiujemy baseQuery do bezpośredniego użycia Fetch API
const baseQuery = fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' });


// Komponent strony głównej - async, traktuje params jako Promise (wymagane w tym środowisku)
export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params; 


  // Bezpośrednio wywołujemy zapytanie do API za pomocą baseQuery
  const response = await baseQuery(
    { url: 'pokemon?limit=20' }, 
    { signal: new AbortController().signal, abort: () => {}, dispatch: () => {}, getState: () => ({}) } as any, 
    {} as any 
  );

  const pokemons = (response.data as { results: Pokemon[] }).results;


  // Sprawdź, czy dane zostały pobrane pomyślnie
  if (!pokemons) {
    return <div>Ładowanie danych pokemonów...</div>; 
  }

  return (
    <div>
      <h1>Lista Pokemonów</h1>
      {/* Usunięto komponent ThemeSwitcher */}
      <CardList items={pokemons} currentLocale={locale} /> 
    </div>
  );
}
