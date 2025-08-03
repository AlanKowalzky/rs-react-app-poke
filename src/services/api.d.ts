interface PokemonListResponse {
  count: number;
  results: Pokemon[];
}
interface Pokemon {
  name: string;
  url: string;
}
export declare const searchItems: () => Promise<PokemonListResponse>;
export declare const getItems: () => Promise<PokemonListResponse>;
export {};
