'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var ThemeSwitcher_1 = __importDefault(require('../components/ThemeSwitcher'));
var ThemeContext_1 = require('../context/ThemeContext');
require('@testing-library/jest-dom');
describe('ThemeSwitcher', function () {
  beforeEach(function () {
    localStorage.clear();
    document.documentElement.className = '';
  });
  it('renders with dark theme initially', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
        children: (0, jsx_runtime_1.jsx)(ThemeSwitcher_1.default, {}),
      })
    );
    expect(react_1.screen.getByText('Light')).toBeInTheDocument();
  });
  it('toggles theme when clicked', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
        children: (0, jsx_runtime_1.jsx)(ThemeSwitcher_1.default, {}),
      })
    );
    react_1.fireEvent.click(react_1.screen.getByRole('button'));
    expect(react_1.screen.getByText('Dark')).toBeInTheDocument();
  });
  it('has correct title attribute', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
        children: (0, jsx_runtime_1.jsx)(ThemeSwitcher_1.default, {}),
      })
    );
    var button = react_1.screen.getByRole('button');
    expect(button).toHaveAttribute('title', 'Switch to light mode');
  });
});
