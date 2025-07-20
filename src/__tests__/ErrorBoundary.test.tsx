import { render } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import '@testing-library/jest-dom';

describe('ErrorBoundary', () => {
  it('renders without crashing', () => {
    render(
      <ErrorBoundary>
        <div>Test</div>
      </ErrorBoundary>
    );
  });
});
