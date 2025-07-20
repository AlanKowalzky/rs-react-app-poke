import { render } from '@testing-library/react';
import Loader from '../components/Loader';
import '@testing-library/jest-dom';

describe('Loader', () => {
  it('renders without crashing', () => {
    render(<Loader />);
  });
});
