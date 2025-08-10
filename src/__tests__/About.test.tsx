import { render, screen } from '@testing-library/react';
import About from '../components/About';
import '@testing-library/jest-dom';

describe('About', () => {
  it('renders about page content', () => {
    render(<About />);
    expect(screen.getByText('About This App')).toBeInTheDocument();
    expect(screen.getByText(/Pokemon search application/)).toBeInTheDocument();
  });

  it('renders RS School link with correct attributes', () => {
    render(<About />);
    const link = screen.getByRole('link', {
      name: /Rolling Scopes School React Course/,
    });
    expect(link).toHaveAttribute('href', 'https://rs.school/react/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
