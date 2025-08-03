'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var ErrorBoundary_1 = __importDefault(require('../components/ErrorBoundary'));
require('@testing-library/jest-dom');
// Komponent-mock, który rzuca błędem
var ProblemChild = function () {
  throw new Error('Test error');
};
// Komponent-mock, który renderuje się poprawnie
var HealthyChild = function () {
  return (0, jsx_runtime_1.jsx)('div', { children: 'Everything is fine' });
};
describe('ErrorBoundary', function () {
  // Ukrywamy błąd w konsoli, który jest oczekiwany i łapany przez ErrorBoundary
  var consoleErrorSpy;
  beforeAll(function () {
    consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(function () {});
  });
  afterAll(function () {
    consoleErrorSpy.mockRestore();
  });
  it('renders children correctly when no error', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, {
        children: (0, jsx_runtime_1.jsx)(HealthyChild, {}),
      })
    );
    expect(react_1.screen.getByText('Everything is fine')).toBeInTheDocument();
  });
  it('catches error and displays fallback UI', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, {
        children: (0, jsx_runtime_1.jsx)(ProblemChild, {}),
      })
    );
    expect(
      react_1.screen.getByText(/Something went wrong./i)
    ).toBeInTheDocument();
    expect(
      react_1.screen.getByRole('button', { name: /reload application/i })
    ).toBeInTheDocument();
  });
});
