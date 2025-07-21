import { render, screen, waitFor } from '@testing-library/react';
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
  mockedSearchItems.mockImplementation(() => new Promise(() => {})); // Never resolves
  render(<App />);
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
});

it('shows error on failed API', async () => {
  mockedSearchItems.mockRejectedValueOnce(new Error('API error'));
  render(<App />);
  expect(await screen.findByText(/Error: API error/i)).toBeInTheDocument();
});

it('shows results on successful API', async () => {
  mockedSearchItems.mockResolvedValueOnce([
    { name: 'pikachu', url: 'url1' },
    { name: 'bulbasaur', url: 'url2' },
  ]);
  render(<App />);

  expect(await screen.findByText(/pikachu/i)).toBeInTheDocument();
  expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
});

it('loads searchTerm from localStorage on start', async () => {
  Object.defineProperty(globalThis, 'localStorage', {
    value: {
      getItem: jest.fn().mockReturnValue('bulbasaur'),
      setItem: jest.fn(),
    },
    writable: true,
  });
  mockedSearchItems.mockResolvedValueOnce([{ name: 'bulbasaur', url: 'url2' }]);

  render(<App />);
  await waitFor(() =>
    expect(screen.getByPlaceholderText(/Enter Pokémon name/i)).toHaveValue(
      'bulbasaur'
    )
  );
});
