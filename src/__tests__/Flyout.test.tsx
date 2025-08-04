import { screen, fireEvent } from '@testing-library/react';
import { Flyout } from '../features/selectedItems/Flyout';
import { renderWithProviders } from '../test-utils';
import '@testing-library/jest-dom';

describe('Flyout', () => {
  it('does not render when no items selected', () => {
    const { container } = renderWithProviders(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [] },
        items: { items: [], status: 'idle', error: null },
      },
    });
    expect(container.firstChild).toBeNull();
  });

  it('renders when items are selected', () => {
    renderWithProviders(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1, 2] },
        items: {
          items: [
            { id: 1, name: 'pikachu', url: 'url1' },
            { id: 2, name: 'bulbasaur', url: 'url2' },
          ],
          status: 'succeeded',
          error: null,
        },
      },
    });
    expect(screen.getByText(/2.*selected/)).toBeInTheDocument();
  });

  it('shows correct text for single item', () => {
    renderWithProviders(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1] },
        items: {
          items: [{ id: 1, name: 'pikachu', url: 'url1' }],
          status: 'succeeded',
          error: null,
        },
      },
    });
    expect(screen.getByText(/1.*selected/)).toBeInTheDocument();
  });

  it('has unselect all and download buttons', () => {
    renderWithProviders(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1] },
        items: {
          items: [{ id: 1, name: 'pikachu', url: 'url1' }],
          status: 'succeeded',
          error: null,
        },
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

    renderWithProviders(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1] },
        items: {
          items: [{ id: 1, name: 'pikachu', url: 'url1' }],
          status: 'succeeded',
          error: null,
        },
      },
    });

    fireEvent.click(screen.getByText('Download'));
    expect(mockCreateObjectURL).toHaveBeenCalled();
  });

  it('handles unselect all button click', () => {
    const { store } = renderWithProviders(<Flyout />, {
      preloadedState: {
        selectedItems: { selectedIds: [1, 2] },
        items: {
          items: [
            { id: 1, name: 'pikachu', url: 'url1' },
            { id: 2, name: 'bulbasaur', url: 'url2' },
          ],
          status: 'succeeded',
          error: null,
        },
      },
    });

    fireEvent.click(screen.getByText('Unselect'));
    const state = store.getState() as {
      selectedItems: { selectedIds: number[] };
    };
    expect(state.selectedItems.selectedIds).toEqual([]);
  });
});
