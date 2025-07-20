import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';
import '@testing-library/jest-dom';

it('renderuje spinner z aria-label', () => {
  render(<Spinner />);
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
});
