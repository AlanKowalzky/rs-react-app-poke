import { screen, fireEvent, render } from '../test-utils';
import { ItemsDashboard } from '../features/selectedItems/ItemsDashboard';
import '@testing-library/jest-dom';

describe('ItemsDashboard', () => {
  it('renders title and items', () => {
    render(<ItemsDashboard />);

    expect(screen.getByText('Items List')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 5')).toBeInTheDocument();
  });

  it('toggles item selection', () => {
    render(<ItemsDashboard />);

    const checkbox = screen.getByLabelText('Item 1');
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('shows selected items as checked', () => {
    render(<ItemsDashboard />, {
      preloadedState: {
        selectedItems: { selectedIds: [1, 3] },
      },
    });

    expect(screen.getByLabelText('Item 1')).toBeChecked();
    expect(screen.getByLabelText('Item 3')).toBeChecked();
    expect(screen.getByLabelText('Item 2')).not.toBeChecked();
  });
});
