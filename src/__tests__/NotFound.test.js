'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var react_router_dom_1 = require('react-router-dom');
var NotFound_1 = __importDefault(require('../components/NotFound'));
require('@testing-library/jest-dom');
var renderWithRouter = function (component) {
  return (0, react_1.render)(
    (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, {
      children: component,
    })
  );
};
describe('NotFound', function () {
  it('renders 404 error message', function () {
    renderWithRouter((0, jsx_runtime_1.jsx)(NotFound_1.default, {}));
    expect(react_1.screen.getByText('404 - Not Found')).toBeInTheDocument();
    expect(
      react_1.screen.getByText(/page you are looking for does not exist/)
    ).toBeInTheDocument();
  });
  it('renders link to main page', function () {
    renderWithRouter((0, jsx_runtime_1.jsx)(NotFound_1.default, {}));
    var link = react_1.screen.getByRole('link', {
      name: /Go back to the main page/,
    });
    expect(link).toHaveAttribute('href', '/');
  });
});
