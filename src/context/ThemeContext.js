'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useTheme = exports.ThemeProvider = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var ThemeContext = (0, react_1.createContext)(undefined);
var ThemeProvider = function (_a) {
  var children = _a.children;
  var _b = (0, react_1.useState)(function () {
      var storedTheme = localStorage.getItem('theme');
      return storedTheme || 'dark';
    }),
    theme = _b[0],
    setTheme = _b[1];
  (0, react_1.useEffect)(
    function () {
      var html = document.documentElement;
      html.classList.remove('light', 'dark');
      html.classList.add(theme);
      localStorage.setItem('theme', theme);
    },
    [theme]
  );
  var toggleTheme = function () {
    setTheme(function (prevTheme) {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };
  return (0, jsx_runtime_1.jsx)(ThemeContext.Provider, {
    value: { theme: theme, toggleTheme: toggleTheme },
    children: children,
  });
};
exports.ThemeProvider = ThemeProvider;
var useTheme = function () {
  var context = (0, react_1.useContext)(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
exports.useTheme = useTheme;
