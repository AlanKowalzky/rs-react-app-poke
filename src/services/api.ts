const BASE_URL = 'https://pokeapi.co/api/v2'; // Nowe API: PokeAPI

async function fetchData<T>(endpoint: string): Promise<T[]> {
  const url = `${BASE_URL}/${endpoint}?limit=200`; // Pobieramy większą liczbę rekordów

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `API request failed with status ${response.status}: ${response.statusText}`
    );
  }

  if (response.status === 404) {
    return [];
  }

  const data = await response.json();
  return data.results || [];
}

interface Pokemon {
  name: string;
  url: string; // Dodatkowe pole, może być użyte jako "description" lub do pobrania szczegółów
}

export const searchItems = (): Promise<Pokemon[]> =>
  new Promise((resolve, reject) => {
    fetchData<Pokemon>(`pokemon`)
      .then((data) => {
        setTimeout(() => resolve(data), 1500); // sztuczne opóźnienie 1,5s
      })
      .catch(reject);
  });

export const getItems = () => fetchData<Pokemon>('pokemon');
