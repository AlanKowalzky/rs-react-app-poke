import { render, screen } from '@testing-library/react';
import CardList from '../components/CardList';
import '@testing-library/jest-dom';

describe('CardList', () => {
  it('renders without crashing', () => {
    render(<CardList items={[]} />);
  });

  it('shows "Brak wyników." when items is empty', () => {
    render(<CardList items={[]} />);
    expect(screen.getByText(/Brak wyników/i)).toBeInTheDocument();
  });

  it('renders correct number of Card rows', () => {
    const items = [
      { name: 'pikachu', url: 'url1' },
      { name: 'bulbasaur', url: 'url2' },
    ];
    render(<CardList items={items} />);
    // Card renders <tr> for each item
    expect(screen.getAllByRole('row')).toHaveLength(3); // 1 header + 2 items
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});
