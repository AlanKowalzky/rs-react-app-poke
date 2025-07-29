import { render, screen } from '@testing-library/react';
import CardList from '../components/CardList';
import '@testing-library/jest-dom';

describe('CardList', () => {
  const mockOnDetailsClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<CardList items={[]} onDetailsClick={mockOnDetailsClick} />);
  });

  it('shows "No results found" when items is empty', () => {
    render(<CardList items={[]} onDetailsClick={mockOnDetailsClick} />);
    expect(screen.getByText(/No results found/i)).toBeInTheDocument();
  });

  it('renders correct number of cards', () => {
    const items = [
      { name: 'pikachu', url: 'url1' },
      { name: 'bulbasaur', url: 'url2' },
    ];
    render(<CardList items={items} onDetailsClick={mockOnDetailsClick} />);
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});
