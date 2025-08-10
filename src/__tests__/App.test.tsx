import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import selectedItemsReducer from '../features/selectedItems/selectedItemsSlice';
import { pokemonApi } from '../services/pokemonApi';
import { ThemeProvider } from '../context/ThemeContext';
import '@testing-library/jest-dom';

import { AppLayout } from '../App';

const createTestStore = () => {
  return configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });
};

const renderAppLayout = () => {
  const store = createTestStore();
  return render(
    <Provider store={store}>
      <ThemeProvider>
        <MemoryRouter>
          <AppLayout />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

it('renders main layout elements', () => {
  renderAppLayout();

  expect(screen.getByText('Pokemon Search')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/Enter Pokémon name/i)
  ).toBeInTheDocument();
  expect(screen.getByTitle('Refresh data')).toBeInTheDocument();
});

it('handles refresh button click', () => {
  renderAppLayout();

  const refreshButton = screen.getByTitle('Refresh data');
  fireEvent.click(refreshButton);

  expect(refreshButton).toBeInTheDocument();
});

it('handles search input changes', () => {
  renderAppLayout();

  const searchInput = screen.getByPlaceholderText(/Enter Pokémon name/i);
  fireEvent.change(searchInput, { target: { value: 'pika' } });

  expect(searchInput).toHaveValue('pika');
});
