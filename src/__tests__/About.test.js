'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var About_1 = __importDefault(require('../components/About'));
require('@testing-library/jest-dom');
describe('About', function () {
  it('renders about page content', function () {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(About_1.default, {}));
    expect(react_1.screen.getByText('About This App')).toBeInTheDocument();
    expect(
      react_1.screen.getByText(/Pokemon search application/)
    ).toBeInTheDocument();
  });
  it('renders RS School link with correct attributes', function () {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(About_1.default, {}));
    var link = react_1.screen.getByRole('link', {
      name: /Rolling Scopes School React Course/,
    });
    expect(link).toHaveAttribute('href', 'https://rs.school/react/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
  it('changes link color on hover', function () {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(About_1.default, {}));
    var link = react_1.screen.getByRole('link', {
      name: /Rolling Scopes School React Course/,
    });
    react_1.fireEvent.mouseEnter(link);
    expect(link.style.color).toBe('rgb(255, 138, 101)');
    react_1.fireEvent.mouseLeave(link);
    expect(link.style.color).toBe('rgb(255, 112, 67)');
  });
});
