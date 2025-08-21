import {
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import Details from '@/components/Details';
import type { Metadata } from 'next';

type Props = {
  params: {
    locale: string;
    name: string;
  };
};

// Krok 1: Generowanie statycznych ścieżek dla lepszej wydajności
// Ta funkcja pobierze listę Pokémonów w trakcie budowania aplikacji
// i wygeneruje dla nich statyczne strony.
export async function generateStaticParams() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();

  return data.results.map((pokemon: { name: string }) => ({
    name: pokemon.name,
  }));
}

// Krok 2: Generowanie dynamicznych metadanych dla SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'PokemonDetailsPage',
  });
  const pokemonName = params.name.charAt(0).toUpperCase() + params.name.slice(1);

  return {
    title: t('title', { pokemonName }),
  };
}

export default function PokemonDetailsPage({ params }: Props) {
  // Ta linia jest kluczowa do naprawienia błędu dla tej strony
  unstable_setRequestLocale(params.locale);

  return <Details pokemonName={params.name} />;
}
