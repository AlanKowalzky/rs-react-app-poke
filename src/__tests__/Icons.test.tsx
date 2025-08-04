import { render } from '@testing-library/react';
import { SunIcon, MoonIcon } from '../components/Icons';
import '@testing-library/jest-dom';

describe('Icons', () => {
  it('renders SunIcon with correct attributes', () => {
    const { container } = render(<SunIcon className="h-5 w-5" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('h-5', 'w-5');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('renders MoonIcon with correct attributes', () => {
    const { container } = render(<MoonIcon className="h-4 w-4" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('h-4', 'w-4');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });
});
