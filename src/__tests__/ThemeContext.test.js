'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var ThemeContext_1 = require('../context/ThemeContext');
require('@testing-library/jest-dom');
var TestComponent = function () {
  var _a = (0, ThemeContext_1.useTheme)(),
    theme = _a.theme,
    toggleTheme = _a.toggleTheme;
  return (0, jsx_runtime_1.jsxs)('div', {
    children: [
      (0, jsx_runtime_1.jsx)('span', {
        'data-testid': 'theme',
        children: theme,
      }),
      (0, jsx_runtime_1.jsx)('button', {
        onClick: toggleTheme,
        children: 'Toggle',
      }),
    ],
  });
};
describe('ThemeContext', function () {
  beforeEach(function () {
    localStorage.clear();
    document.documentElement.className = '';
  });
  it('provides default dark theme', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
        children: (0, jsx_runtime_1.jsx)(TestComponent, {}),
      })
    );
    expect(react_1.screen.getByTestId('theme')).toHaveTextContent('dark');
  });
  it('toggles theme from dark to light', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
        children: (0, jsx_runtime_1.jsx)(TestComponent, {}),
      })
    );
    react_1.fireEvent.click(react_1.screen.getByText('Toggle'));
    expect(react_1.screen.getByTestId('theme')).toHaveTextContent('light');
  });
  it('applies theme class to html element', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
        children: (0, jsx_runtime_1.jsx)(TestComponent, {}),
      })
    );
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    react_1.fireEvent.click(react_1.screen.getByText('Toggle'));
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
  it('saves theme to localStorage', function () {
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
        children: (0, jsx_runtime_1.jsx)(TestComponent, {}),
      })
    );
    react_1.fireEvent.click(react_1.screen.getByText('Toggle'));
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
