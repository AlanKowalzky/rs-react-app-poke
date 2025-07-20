import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import '@testing-library/jest-dom';

let consoleErrorSpy: jest.SpyInstance;

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
  expect(
    screen.getByText((content) =>
      content.toLowerCase().includes('error boundary')
    )
  ).toBeInTheDocument();
});

it('po błędzie pojawia się przycisk Reload Application', () => {
  render(
    <ErrorBoundary>
      <ProblemChild />
    </ErrorBoundary>
  );
  expect(
    screen.getByRole('button', { name: /reload application/i })
  ).toBeInTheDocument();
});

beforeAll(() => {
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
});
afterAll(() => {
  consoleErrorSpy.mockRestore();
});
