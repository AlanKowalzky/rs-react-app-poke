import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  const mockOnDetailsClick = jest.fn();
  const mockItem = {
    id: 25,
    name: 'pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/25/',
  };
  const mockOnToggleItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders pokemon name and image', () => {
    render(
      <Card
        item={mockItem}
        isSelected={false}
        onDetailsClick={mockOnDetailsClick}
        onToggleItem={mockOnToggleItem}
      />
    );
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByAltText('pikachu')).toBeInTheDocument();
  });

  it('calls onDetailsClick when clicked', () => {
    render(
      <Card
        item={mockItem}
        isSelected={false}
        onDetailsClick={mockOnDetailsClick}
        onToggleItem={mockOnToggleItem}
      />
    );
    fireEvent.click(screen.getByText('pikachu'));
    expect(mockOnDetailsClick).toHaveBeenCalledWith('25');
  });

  it('extracts correct ID from URL', () => {
    render(
      <Card
        item={mockItem}
        isSelected={false}
        onDetailsClick={mockOnDetailsClick}
        onToggleItem={mockOnToggleItem}
      />
    );
    const img = screen.getByAltText('pikachu');
    expect(img).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
    );
  });
});
