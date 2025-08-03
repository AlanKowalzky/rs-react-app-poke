import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import '@testing-library/jest-dom';

// Komponent-mock, który rzuca błędem
const ProblemChild = () => {
  throw new Error('Test error');
};

// Komponent-mock, który renderuje się poprawnie
const HealthyChild = () => <div>Everything is fine</div>;

describe('ErrorBoundary', () => {
  // Ukrywamy błąd w konsoli, który jest oczekiwany i łapany przez ErrorBoundary
let consoleErrorSpy: jest.SpyInstance;
beforeAll(() => {
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
});
afterAll(() => {
  consoleErrorSpy.mockRestore();
});

  // Mockujemy window.location.reload, aby przetestować kliknięcie przycisku
  const originalLocation = window.location;
  beforeEach(() => {
    // Musimy redefiniować window.location dla każdego testu,
    // ponieważ jest to właściwość tylko do odczytu.
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { ...originalLocation, reload: jest.fn() },
    });
  });
  afterEach(() => {
    // Przywracamy oryginalne window.location
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: originalLocation,
    });
  });

  describe('when there is no error', () => {
    it('renders children correctly', () => {
      render(
        <ErrorBoundary>
          <HealthyChild />
        </ErrorBoundary>
      );
      expect(screen.getByText('Everything is fine')).toBeInTheDocument();
      expect(screen.queryByText(/error boundary/i)).not.toBeInTheDocument();
    });
  });

  describe('when an error is thrown', () => {
    beforeEach(() => {
      // Renderujemy komponent, który spowoduje błąd
      render(
        <ErrorBoundary>
          <ProblemChild />
        </ErrorBoundary>
      );
    });

    it('catches the error and displays the fallback UI', () => {
      expect(screen.getByText(/Something went wrong./i)).toBeInTheDocument();
      expect(screen.getByText(/error boundary/i)).toBeInTheDocument();
    });

    it('displays a "Reload Application" button', () => {
      expect(
        screen.getByRole('button', { name: /reload application/i })
      ).toBeInTheDocument();
    });

    it('calls window.location.reload when the reload button is clicked', () => {
      const reloadButton = screen.getByRole('button', { name: /reload application/i });
      fireEvent.click(reloadButton);
      expect(window.location.reload).toHaveBeenCalledTimes(1);
    });
  });
});
