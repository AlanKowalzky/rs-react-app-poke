'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var react_1 = require('@testing-library/react');
var useLocalStorage_1 = require('../hooks/useLocalStorage');
describe('useLocalStorage', function () {
  beforeEach(function () {
    localStorage.clear();
    jest.clearAllMocks();
  });
  it('returns default value when no stored value exists', function () {
    var result = (0, react_1.renderHook)(function () {
      return (0, useLocalStorage_1.useLocalStorage)('test-key', 'default');
    }).result;
    expect(result.current[0]).toBe('default');
  });
  it('returns stored value when it exists', function () {
    localStorage.setItem('test-key', JSON.stringify('stored-value'));
    var result = (0, react_1.renderHook)(function () {
      return (0, useLocalStorage_1.useLocalStorage)('test-key', 'default');
    }).result;
    expect(result.current[0]).toBe('stored-value');
  });
  it('updates localStorage when value changes', function () {
    var result = (0, react_1.renderHook)(function () {
      return (0, useLocalStorage_1.useLocalStorage)('test-key', 'initial');
    }).result;
    (0, react_1.act)(function () {
      result.current[1]('updated');
    });
    expect(result.current[0]).toBe('updated');
    expect(localStorage.getItem('test-key')).toBe('"updated"');
  });
  it('handles invalid JSON gracefully', function () {
    localStorage.setItem('test-key', 'invalid-json');
    var consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    var result = (0, react_1.renderHook)(function () {
      return (0, useLocalStorage_1.useLocalStorage)('test-key', 'default');
    }).result;
    expect(result.current[0]).toBe('default');
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
