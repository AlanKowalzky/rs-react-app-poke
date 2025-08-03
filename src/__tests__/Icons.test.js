'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var Icons_1 = require('../components/Icons');
require('@testing-library/jest-dom');
describe('Icons', function () {
  it('renders SunIcon with correct attributes', function () {
    var container = (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Icons_1.SunIcon, { className: 'h-5 w-5' })
    ).container;
    var svg = container.querySelector('svg');
    expect(svg).toHaveClass('h-5', 'w-5');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });
  it('renders MoonIcon with correct attributes', function () {
    var container = (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(Icons_1.MoonIcon, { className: 'h-4 w-4' })
    ).container;
    var svg = container.querySelector('svg');
    expect(svg).toHaveClass('h-4', 'w-4');
    expect(svg).toHaveAttribute('fill', 'none');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });
});
