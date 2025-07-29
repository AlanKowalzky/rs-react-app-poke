import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';
import '@testing-library/jest-dom';

describe('Search', () => {
  const onSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  it('renders input and button', () => {
    render(<Search onSearch={onSearch} loading={false} />);
    expect(
      screen.getByPlaceholderText(/Enter Pokémon name/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('shows saved search term from localStorage', () => {
    (globalThis.localStorage.getItem as jest.Mock).mockReturnValue('"pikachu"');
    render(<Search onSearch={onSearch} loading={false} />);
    expect(screen.getByDisplayValue('pikachu')).toBeInTheDocument();
  });

  it('shows empty input if no saved term', () => {
    (globalThis.localStorage.getItem as jest.Mock).mockReturnValue(null);
    render(<Search onSearch={onSearch} loading={false} />);
    expect(screen.getByPlaceholderText(/Enter Pokémon name/i)).toHaveValue('');
  });

  it('updates input value when user types', () => {
    render(<Search onSearch={onSearch} loading={false} />);
    const input = screen.getByPlaceholderText(/Enter Pokémon name/i);
    fireEvent.change(input, { target: { value: 'bulbasaur' } });
    expect(input).toHaveValue('bulbasaur');
  });

  it('calls onSearch on form submit', () => {
    render(<Search onSearch={onSearch} loading={false} />);
    const input = screen.getByPlaceholderText(/Enter Pokémon name/i);
    fireEvent.change(input, { target: { value: 'charmander' } });
    fireEvent.submit(screen.getByRole('button', { name: /search/i }));
    expect(onSearch).toHaveBeenCalledWith('charmander');
  });

  it('input and button are disabled when loading', () => {
    render(<Search onSearch={onSearch} loading={true} />);
    expect(screen.getByPlaceholderText(/Enter Pokémon name/i)).toBeDisabled();
    expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();
  });
});
