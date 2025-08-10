import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfills for Node.js environment
global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;

// Mock fetch for RTK Query
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ results: [] }),
  })
) as jest.Mock;

// Mock Request for RTK Query
global.Request = jest.fn().mockImplementation((url: string) => ({
  url,
  method: 'GET',
})) as unknown as typeof Request;

beforeEach(() => {
  (global.fetch as jest.Mock).mockClear();
});

const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: `fetch` is not available') ||
        args[0].includes('An unhandled error occurred') ||
        args[0].includes('Unexpected key "items" found') ||
        args[0].includes('An update to') ||
        args[0].includes('not wrapped in act'))
    ) {
      return;
    }
    originalConsoleError(...args);
  };

  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: `fetch` is not available')
    ) {
      return;
    }
    originalConsoleWarn(...args);
  };
});
