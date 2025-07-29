import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { searchItems } from '../services/api';

jest.mock('../services/api');
const mockedSearchItems = searchItems as jest.Mock;

beforeEach(() => {
  mockedSearchItems.mockClear();
  localStorage.clear();
});

it('shows loader while loading', async () => {
  mockedSearchItems.mockImplementation(() => new Promise(() => {}));
  render(<App />);
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
});

it('shows error on failed API', async () => {
  mockedSearchItems.mockRejectedValueOnce(new Error('API error'));
  render(<App />);
  expect(await screen.findByText(/Error: API error/i)).toBeInTheDocument();
});

it('shows results on successful API', async () => {
  mockedSearchItems.mockResolvedValueOnce({
    results: [
      { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    ],
  });
  render(<App />);

  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
});
