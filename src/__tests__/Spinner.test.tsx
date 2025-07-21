import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';
import '@testing-library/jest-dom';

it('renders spinner with aria-label', () => {
  render(<Spinner />);
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
});
