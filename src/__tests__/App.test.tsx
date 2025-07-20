import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

beforeAll(() => {
  global.fetch = jest.fn();
});
afterAll(() => {
  jest.resetAllMocks();
});

it('pokazuje loader podczas ładowania', async () => {
  (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));
  render(<App />);
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
});

it('pokazuje błąd przy nieudanym API', async () => {
  (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API error'));
  render(<App />);
  await waitFor(() =>
    expect(screen.getByText(/api error/i)).toBeInTheDocument()
  );
});

it('pokazuje wyniki po sukcesie API', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ results: [{ name: 'pikachu', url: 'url1' }] }),
  });
  render(<App />);
  await waitFor(() => expect(screen.getByText(/pikachu/i)).toBeInTheDocument());
});

it('pobiera searchTerm z localStorage przy starcie', async () => {
  Object.defineProperty(globalThis, 'localStorage', {
    value: {
      getItem: jest.fn().mockReturnValue('bulbasaur'),
      setItem: jest.fn(),
    },
    writable: true,
  });
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => ({ results: [] }),
  });
  render(<App />);
  await waitFor(() =>
    expect(screen.getByPlaceholderText(/Enter Pokémon name/i)).toHaveValue(
      'bulbasaur'
    )
  );
});
