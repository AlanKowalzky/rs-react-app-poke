const BASE_URL = 'https://pokeapi.co/api/v2'; // Nowe API: PokeAPI

interface PokemonListResponse {
  count: number;
  results: Pokemon[];
}

async function fetchData<T>(endpoint: string): Promise<T> {
  const url = `${BASE_URL}/${endpoint}?limit=100000`; // Pobieramy wszystkie rekordy

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `API request failed with status ${response.status}: ${response.statusText}`
    );
  }

  if (response.status === 404) {
    throw new Error('Not found');
  }

  const data = await response.json();
  return data;
}

interface Pokemon {
  name: string;
  url: string; // Dodatkowe pole, może być użyte jako "description" lub do pobrania szczegółów
}

export const searchItems = (): Promise<PokemonListResponse> =>
  new Promise((resolve, reject) => {
    fetchData<PokemonListResponse>('pokemon')
      .then((data) => {
        setTimeout(() => resolve(data), 1500); // artificial 1.5s delay
      })
      .catch(reject);
  });

export const getItems = () => fetchData<PokemonListResponse>('pokemon');
