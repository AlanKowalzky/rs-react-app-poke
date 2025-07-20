import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import '@testing-library/jest-dom';

function ProblemChild() {
  throw new Error('Test error');
  return null;
}

it('łapie błąd i pokazuje fallback UI', () => {
  render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );
  expect(screen.getByText(/error boundary caught/i)).toBeInTheDocument();
});

it('po kliknięciu przycisku odświeża stronę', () => {
  jest.spyOn(window.location, 'reload').mockImplementation(() => {});
  render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );
  fireEvent.click(screen.getByRole('button'));
  expect(window.location.reload).toHaveBeenCalled();
});
