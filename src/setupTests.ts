import '@testing-library/jest-dom';

// Mock TextEncoder/TextDecoder for React Router
Object.assign(global, {
  TextEncoder: class TextEncoder {
    encode(input: string) {
      return new Uint8Array([...input].map((char) => char.charCodeAt(0)));
    }
  },
  TextDecoder: class TextDecoder {
    decode(input: Uint8Array) {
      return String.fromCharCode(...input);
    }
  },
});
