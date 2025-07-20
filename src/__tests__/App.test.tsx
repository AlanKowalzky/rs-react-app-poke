import { render, waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders without crashing', async () => {
    await waitFor(() => render(<App />));
  });
});
