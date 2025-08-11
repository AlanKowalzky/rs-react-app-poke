import { screen, fireEvent, render } from '../test-utils';
import { Flyout } from '../features/selectedItems/Flyout';
import '@testing-library/jest-dom';

describe('Flyout', () => {
  it('does not render when no items selected', () => {
    const { container } = render(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [] },
      },
    });
    expect(container.firstChild).toBeNull();
  });

  it('renders when items are selected', () => {
    render(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1, 2] },
      },
    });
    expect(screen.getByText(/2.*selected/)).toBeInTheDocument();
  });

  it('shows correct text for single item', () => {
    render(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1] },
      },
    });
    expect(screen.getByText(/1.*selected/)).toBeInTheDocument();
  });

  it('has unselect all and download buttons', () => {
    render(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1] },
      },
    });
    expect(screen.getByText('Unselect')).toBeInTheDocument();
    expect(screen.getByText('Download')).toBeInTheDocument();
  });

  it('handles download button click', () => {
    const mockCreateObjectURL = jest.fn(() => 'mock-url');
    const mockRevokeObjectURL = jest.fn();
    global.URL.createObjectURL = mockCreateObjectURL;
    global.URL.revokeObjectURL = mockRevokeObjectURL;

    render(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1] },
      },
    });

    fireEvent.click(screen.getByText('Download'));
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });

  it('handles unselect all button click', () => {
    const { store } = render(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1, 2] },
      },
    });

    fireEvent.click(screen.getByText('Unselect'));
    const state = store.getState() as {
      selectedItems: { selectedIds: number[] };
    };
    expect(state.selectedItems.selectedIds).toEqual([]);
  });
});
