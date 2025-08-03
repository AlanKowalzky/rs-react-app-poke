'use strict';
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, '__esModule', { value: true });
require('@testing-library/jest-dom');
// Mock TextEncoder/TextDecoder for React Router
Object.assign(global, {
  TextEncoder: /** @class */ (function () {
    function TextEncoder() {}
    TextEncoder.prototype.encode = function (input) {
      return new Uint8Array(
        __spreadArray([], input, true).map(function (char) {
          return char.charCodeAt(0);
        })
      );
    };
    return TextEncoder;
  })(),
  TextDecoder: /** @class */ (function () {
    function TextDecoder() {}
    TextDecoder.prototype.decode = function (input) {
      return String.fromCharCode.apply(String, input);
    };
    return TextDecoder;
  })(),
});
