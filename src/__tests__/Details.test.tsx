import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Details from '../components/Details';
import { pokemonApi } from '../services/pokemonApi';
import selectedItemsReducer from '../features/selectedItems/selectedItemsSlice';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useParams: () => ({ detailsId: undefined }),
  useNavigate: () => mockNavigate,
  useLocation: () => ({ search: '?page=1' }),
}));

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

const renderWithStore = (component: React.ReactElement) => {
  const store = createTestStore();
  return render(<Provider store={store}>{component}</Provider>);
};

it('shows message when no detailsId', () => {
  renderWithStore(<Details />);
  expect(
    screen.getByText(/Select a Pokémon to see the details/i)
  ).toBeInTheDocument();
});
