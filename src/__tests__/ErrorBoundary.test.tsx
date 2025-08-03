import { render, screen } from '@testing-library/react';
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

  it('renders children correctly when no error', () => {
    render(
      <ErrorBoundary>
        <HealthyChild />
      </ErrorBoundary>
    );
    expect(screen.getByText('Everything is fine')).toBeInTheDocument();
  });

  it('catches error and displays fallback UI', () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(screen.getByText(/Something went wrong./i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /reload application/i })
    ).toBeInTheDocument();
  });
});
