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
    render(<Search onSearch={onSearch} />);
    expect(
      screen.getByPlaceholderText(/Enter Pokémon name/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('shows saved search term from localStorage', () => {
    (globalThis.localStorage.getItem as jest.Mock).mockReturnValue('pikachu');
    render(<Search onSearch={onSearch} />);
    expect(screen.getByDisplayValue('pikachu')).toBeInTheDocument();
  });

  it('shows empty input if no saved term', () => {
    (globalThis.localStorage.getItem as jest.Mock).mockReturnValue(null);
    render(<Search onSearch={onSearch} />);
    expect(screen.getByPlaceholderText(/Enter Pokémon name/i)).toHaveValue('');
  });

  it('updates input value when user types', () => {
    render(<Search onSearch={onSearch} />);
    const input = screen.getByPlaceholderText(/Enter Pokémon name/i);
    fireEvent.change(input, { target: { value: 'bulbasaur' } });
    expect(input).toHaveValue('bulbasaur');
  });

  it('saves trimmed search term to localStorage and calls onSearch on button click', () => {
    render(<Search onSearch={onSearch} />);
    const input = screen.getByPlaceholderText(/Enter Pokémon name/i);
    fireEvent.change(input, { target: { value: '  charmander  ' } });
    fireEvent.click(screen.getByRole('button', { name: /search/i }));
    expect(globalThis.localStorage.setItem).toHaveBeenCalledWith(
      'searchTerm',
      'charmander'
    );
    expect(onSearch).toHaveBeenCalledWith('charmander');
  });

  it('calls onSearch and saves to localStorage on Enter key', () => {
    render(<Search onSearch={onSearch} />);
    const input = screen.getByPlaceholderText(/Enter Pokémon name/i);
    fireEvent.change(input, { target: { value: 'squirtle' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(globalThis.localStorage.setItem).toHaveBeenCalledWith(
      'searchTerm',
      'squirtle'
    );
    expect(onSearch).toHaveBeenCalledWith('squirtle');
  });

  it('disables input and button when loading', () => {
    render(<Search onSearch={onSearch} loading />);
    expect(screen.getByPlaceholderText(/Enter Pokémon name/i)).toBeDisabled();
    expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();
  });
});
