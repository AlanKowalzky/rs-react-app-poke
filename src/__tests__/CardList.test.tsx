import { render, screen } from '@testing-library/react';
import CardList from '../components/CardList';
import '@testing-library/jest-dom';

describe('CardList', () => {
  const mockOnDetailsClick = jest.fn();
  const mockOnToggleItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <CardList
        items={[]}
        selectedIds={[]}
        onDetailsClick={mockOnDetailsClick}
        onToggleItem={mockOnToggleItem}
      />
    );
  });

  it('shows "No results found" when items is empty', () => {
    render(
      <CardList
        items={[]}
        selectedIds={[]}
        onDetailsClick={mockOnDetailsClick}
        onToggleItem={mockOnToggleItem}
      />
    );
    expect(screen.getByText(/No results found/i)).toBeInTheDocument();
  });

  it('renders correct number of cards', () => {
    const items = [
      { id: 25, name: 'pikachu', url: 'url1' },
      { id: 1, name: 'bulbasaur', url: 'url2' },
    ];
    render(
      <CardList
        items={items}
        selectedIds={[]}
        onDetailsClick={mockOnDetailsClick}
        onToggleItem={mockOnToggleItem}
      />
    );
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});
