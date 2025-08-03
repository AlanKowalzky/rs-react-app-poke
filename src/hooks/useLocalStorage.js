'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useLocalStorage = void 0;
var react_1 = require('react');
function getStorageValue(key, defaultValue) {
  var saved = localStorage.getItem(key);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error('Error parsing JSON from localStorage', error);
      return defaultValue;
    }
  }
  return defaultValue;
}
var useLocalStorage = function (key, defaultValue) {
  var _a = (0, react_1.useState)(function () {
      return getStorageValue(key, defaultValue);
    }),
    value = _a[0],
    setValue = _a[1];
  (0, react_1.useEffect)(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );
  return [value, setValue];
};
exports.useLocalStorage = useLocalStorage;
