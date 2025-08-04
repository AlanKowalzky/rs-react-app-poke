import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/items/itemsSlice';
import selectedItemsReducer from '../features/selectedItems/selectedItemsSlice';
import { ThemeProvider } from '../context/ThemeContext';
import * as api from '../services/api';
import '@testing-library/jest-dom';

import { AppLayout } from '../App';

jest.mock('../services/api');
const mockedSearchItems = api.searchItems as jest.Mock;

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      items: itemsReducer,
      selectedItems: selectedItemsReducer,
    },
    preloadedState,
  });
};

const renderAppLayout = (preloadedState = {}) => {
  const store = createTestStore(preloadedState);
  return {
    store,
    ...render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <AppLayout />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    ),
  };
};

beforeEach(() => {
  mockedSearchItems.mockClear();
  localStorage.clear();
});

it('renders main layout elements', async () => {
  mockedSearchItems.mockResolvedValue({ results: [] });
  renderAppLayout();

  expect(screen.getByText('Pokemon Search')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Enter Pokémon name/i)
  ).toBeInTheDocument();
});

it('shows loader initially', async () => {
  mockedSearchItems.mockImplementation(() => new Promise(() => {}));
  renderAppLayout();

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
});

it('displays error on API failure', async () => {
  mockedSearchItems.mockRejectedValue(new Error('API Error'));
  renderAppLayout();

  await waitFor(() => {
    expect(screen.getByText(/Error: API Error/i)).toBeInTheDocument();
  });
});

it('displays items after successful fetch', async () => {
  mockedSearchItems.mockResolvedValue({
    results: [
      { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    ],
  });

  renderAppLayout();

  await waitFor(() => {
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});

it('handles search input changes', async () => {
  mockedSearchItems.mockResolvedValue({
    results: [
      { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
    ],
  });

  renderAppLayout();

  await waitFor(() => {
    expect(screen.getByText('pikachu')).toBeInTheDocument();
  });

  const searchInput = screen.getByPlaceholderText(/Enter Pokémon name/i);
  fireEvent.change(searchInput, { target: { value: 'pika' } });

  expect(searchInput).toHaveValue('pika');
});

it('shows pagination for many items', async () => {
  const manyItems = Array.from({ length: 25 }, (_, i) => ({
    name: `pokemon${i}`,
    url: `https://pokeapi.co/api/v2/pokemon/${i}/`,
  }));

  mockedSearchItems.mockResolvedValue({ results: manyItems });
  renderAppLayout();

  await waitFor(() => {
    expect(screen.getByText('pokemon0')).toBeInTheDocument();
  });

  expect(screen.getByText('Next')).toBeInTheDocument();
  expect(screen.getByText('Prev')).toBeInTheDocument();
});
