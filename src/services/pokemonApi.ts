import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  results: Pokemon[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

const extractId = (url: string): number => {
  const segments = url.split('/').filter(Boolean);
  const id = segments.pop();
  return id ? parseInt(id, 10) : 0;
};

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  tagTypes: ['Pokemon', 'PokemonList'],
  endpoints: (builder) => ({
    getPokemonList: builder.query<Pokemon[], undefined>({
      query: () => 'pokemon?limit=100000',
      transformResponse: (response: PokemonListResponse) => {
        return response.results.map((pokemon) => ({
          ...pokemon,
          id: extractId(pokemon.url),
        }));
      },
      providesTags: ['PokemonList'],
    }),
    getPokemonDetails: builder.query<PokemonDetails, string>({
      query: (id) => `pokemon/${id}`,
      providesTags: (result, error, id) => [{ type: 'Pokemon', id }],
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;
