'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var Loader_1 = __importDefault(require('../components/Loader'));
require('@testing-library/jest-dom');
describe('Loader', function () {
  it('renders without crashing', function () {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(Loader_1.default, {}));
  });
});
