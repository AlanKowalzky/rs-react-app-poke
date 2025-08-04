import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Details from '../components/Details';
import '@testing-library/jest-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useParams: () => ({ detailsId: '1' }),
  useNavigate: () => mockNavigate,
  useLocation: () => ({ search: '?page=1' }),
}));

global.fetch = jest.fn();

describe('Details', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loader initially', () => {
    (fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));
    render(<Details />);
    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });

  it('displays pokemon details after successful fetch', async () => {
    const mockPokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'image.png',
        other: { 'official-artwork': { front_default: 'artwork.png' } },
      },
      height: 7,
      weight: 69,
      types: [{ type: { name: 'grass' } }],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPokemon,
    });

    render(<Details />);

    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    });
  });

  it('navigates back on close', async () => {
    const mockPokemon = {
      id: 1,
      name: 'bulbasaur',
      sprites: {
        front_default: 'image.png',
        other: { 'official-artwork': { front_default: 'artwork.png' } },
      },
      height: 7,
      weight: 69,
      types: [{ type: { name: 'grass' } }],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPokemon,
    });

    render(<Details />);

    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByLabelText('Close details'));
    expect(mockNavigate).toHaveBeenCalledWith('/?page=1');
  });
});
