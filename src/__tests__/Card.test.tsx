import { render } from '@testing-library/react';
import Card from '../components/Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('renders without crashing', () => {
    render(
      <table>
        <tbody>
          <Card item={{ name: 'pikachu', url: 'url' }} />
        </tbody>
      </table>
    );
  });
});
