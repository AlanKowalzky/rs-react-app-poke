import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../components/NotFound';
import '@testing-library/jest-dom';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('NotFound', () => {
  it('renders 404 error message', () => {
    renderWithRouter(<NotFound />);
    expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
    expect(
      screen.getByText(/page you are looking for does not exist/)
    ).toBeInTheDocument();
  });

  it('renders link to main page', () => {
    renderWithRouter(<NotFound />);
    const link = screen.getByRole('link', { name: /Go back to the main page/ });
    expect(link).toHaveAttribute('href', '/');
  });
});
