import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill for TextEncoder/TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: An update to') ||
        args[0].includes('act(...)'))
    ) {
      return;
    }
    originalConsoleError(...args);
  };

  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('SerializableStateInvariantMiddleware') ||
        args[0].includes('ImmutableStateInvariantMiddleware'))
    ) {
      return;
    }
    originalConsoleWarn(...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});
