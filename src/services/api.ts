const BASE_URL = 'https://pokeapi.co/api/v2'; // Nowe API: PokeAPI

async function fetchData<T>(endpoint: string, searchTerm?: string): Promise<T[]> {
  let url = `${BASE_URL}/${endpoint}`; // Poprawiona konstrukcja URL
  if (searchTerm) {
    url += `?search=${searchTerm}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}: ${response.statusText}`); // Dodaj komunikat statusu
  }

  if (response.status === 404) { // Specjalna obsługa błędu 404 (Not Found)
    return []; // Zwracamy pustą listę, jeśli nie znaleziono
  }

  const data = await response.json();
  return data.results || []; // Zakładam, że wyniki są w polu 'results'
}


interface Pokemon {
    name: string;
    url: string; // Dodatkowe pole, może być użyte jako "description" lub do pobrania szczegółów
  }
  
export const searchItems = (searchTerm: string): Promise<Pokemon[]> =>
  fetchData<Pokemon>(`pokemon`, searchTerm);

export const getItems = () =>
  fetchData<Pokemon>('pokemon');
  