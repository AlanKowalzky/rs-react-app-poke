// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
// Importujemy komponent CardList
import CardList from '@/app/components/CardList';

// Zaktualizowany typ Pokemon, aby zawierał ID i obrazki.
// Sugeruję zaktualizować ten typ również w pliku @/app/lib/services/pokemonApi.ts
export interface Pokemon {
  name: string;
  url: string;
  id: number;
  image: string;
}

// Typ dla podstawowej odpowiedzi z listy Pokemonów
interface PokeApiListResponse {
  results: { name: string; url: string }[];
}

// Typ dla szczegółów pojedynczego Pokemona
interface PokemonDetails {
  id: number;
  sprites: {
    front_default: string;
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Używamy `getTranslations` w Komponencie Serwerowym
  const t = await getTranslations('HomePage');
  let pokemons: Pokemon[] = [];

  try {
    // Używamy natywnego fetch, który jest rozszerzony przez Next.js
    const listRes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');

    if (!listRes.ok) {
      // W przypadku błędu API, można tu obsłużyć go w bardziej elegancki sposób
      throw new Error('Failed to fetch data from PokeAPI');
    }
    const listData: PokeApiListResponse = await listRes.json();

    // Pobieramy szczegóły dla każdego Pokemona równolegle
    const pokemonDetailsPromises = listData.results.map(async (p) => {
      const detailsRes = await fetch(p.url);
      if (!detailsRes.ok) {
        // Można dodać lepszą obsługę błędów dla pojedynczego fetch'a
        console.error(`Failed to fetch details for ${p.name}`);
        return null;
      }
      const details: PokemonDetails = await detailsRes.json();
      return {
        ...p,
        id: details.id,
        image: details.sprites.front_default,
      };
    });

    // Czekamy na wszystkie zapytania i filtrujemy te, które się nie powiodły
    pokemons = (await Promise.all(pokemonDetailsPromises)).filter(
      (p): p is Pokemon => p !== null
    );
  } catch (error) {
    console.error(error);
    // Zwracamy komunikat o błędzie, jeśli pobieranie się nie powiodło
    return <div>Nie udało się załadować danych. Spróbuj ponownie później.</div>;
  }

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <CardList items={pokemons} />
    </div>
  );
}
