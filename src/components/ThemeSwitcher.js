'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var ThemeContext_1 = require('../context/ThemeContext');
var Icons_1 = require('./Icons');
var ThemeSwitcher = function () {
  var _a = (0, ThemeContext_1.useTheme)(),
    theme = _a.theme,
    toggleTheme = _a.toggleTheme;
  return (0, jsx_runtime_1.jsx)('button', {
    onClick: toggleTheme,
    className:
      'flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary hover:bg-border text-pokemon-orange border border-border transition-colors',
    title: 'Switch to '.concat(theme === 'light' ? 'dark' : 'light', ' mode'),
    children:
      theme === 'light'
        ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
            children: [
              (0, jsx_runtime_1.jsx)(Icons_1.MoonIcon, {
                className: 'h-5 w-5',
              }),
              (0, jsx_runtime_1.jsx)('span', {
                className: 'text-sm',
                children: 'Dark',
              }),
            ],
          })
        : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, {
            children: [
              (0, jsx_runtime_1.jsx)(Icons_1.SunIcon, { className: 'h-5 w-5' }),
              (0, jsx_runtime_1.jsx)('span', {
                className: 'text-sm',
                children: 'Light',
              }),
            ],
          }),
  });
};
exports.default = ThemeSwitcher;
