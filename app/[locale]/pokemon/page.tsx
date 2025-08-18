// app/[locale]/pokemon/page.tsx
// To jest Server Component domyślnie

import React from 'react'; 

export default function PokemonListPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  return (
    <div>
      <h1>Lista Pokemonów (Placeholder dla locale: {locale})</h1>
      <p>Tutaj pojawi się lista pokemonów.</p>
    </div>
  );
}