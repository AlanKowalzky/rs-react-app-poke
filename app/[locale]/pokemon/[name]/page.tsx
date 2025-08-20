// app/[locale]/pokemon/[name]/page.tsx
import { notFound } from 'next/navigation';
import Details from '@/app/components/Details'; // Importujemy Client Component Details
import type { PokemonDetails } from '@/types/pokemon-details'; // Załóżmy, że masz zdefiniowany typ PokemonDetails

// Funkcja asynchroniczna do pobierania danych pokemona
async function getPokemonDetails(name: string): Promise<PokemonDetails | null> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!res.ok) {
      if (res.status === 404) {
        return null; // Pokemon not found
      }
      // W przypadku innych błędów, rzuć błąd lub zwróć null
      console.error(`Failed to fetch pokemon: ${res.statusText}`);
      return null;
    }
    const data = await res.json();
    return data as PokemonDetails; // Rzutowanie na odpowiedni typ
  } catch (error) {
    console.error("Error fetching pokemon details:", error);
    return null; // Obsłuż błędy pobierania
  }
}

interface PokemonDetailsPageProps {
  params: Promise<{ name: string; locale: string }>; // params teraz zawiera locale
}

// Komponent strony szczegółów pokemona (Server Component)
export default async function PokemonDetailsPage({
  params
}: PokemonDetailsPageProps) {
  const { name: pokemonName, locale } = await params; // Pobieramy nazwę pokemona i locale

  // Opcjonalna walidacja nazwy pokemona
  if (!pokemonName) {
    notFound(); // Przekierowanie do strony 404, jeśli nazwa jest pusta
  }

  // Pobieranie danych na serwerze
  const pokemonDetails = await getPokemonDetails(pokemonName);

  if (!pokemonDetails) {
    notFound(); // Jeśli pokemon nie istnieje po próbie pobrania
  }

  // Renderujemy komponent Details (Client Component) i przekazujemy pobrane dane
  return (
    <div>
      {/* Nagłówek strony - możesz użyć tłumaczeń z next-intl tutaj */}
      <h1>Strona Szczegółów Pokemona ({locale})</h1>
      {/* Przekazujemy całe pobrane dane do Client Component Details */}
      <Details pokemonDetails={pokemonDetails} />
    </div>
  );
}

// Opcjonalnie: Implementacja generateStaticParams
// Export async function generateStaticParams() { ... }
// (kod z poprzedniej odpowiedzi)
