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
exports.Flyout = Flyout;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var selectedItemsSlice_1 = require('./selectedItemsSlice');
var hooks_1 = require('../../app/hooks');
var generateCSV = function (selectedItems) {
  var headers = ['name', 'url'];
  var csvRows = __spreadArray(
    [headers.join(',')],
    selectedItems.map(function (item) {
      return headers
        .map(function (header) {
          return '"'.concat(item[header], '"');
        })
        .join(',');
    }),
    true
  );
  return csvRows.join('\n');
};
function Flyout() {
  var dispatch = (0, hooks_1.useAppDispatch)();
  var allItems = (0, hooks_1.useAppSelector)(function (state) {
    return state.items.items;
  });
  var selectedIds = (0, hooks_1.useAppSelector)(function (state) {
    return state.selectedItems;
  }).selectedIds;
  var _a = (0, react_1.useState)(null),
    downloadUrl = _a[0],
    setDownloadUrl = _a[1];
  var downloadLinkRef = (0, react_1.useRef)(null);
  var itemsToDownload = allItems.filter(function (item) {
    return selectedIds.includes(item.id);
  });
  (0, react_1.useEffect)(
    function () {
      if (downloadUrl && downloadLinkRef.current) {
        downloadLinkRef.current.click();
        URL.revokeObjectURL(downloadUrl);
        setDownloadUrl(null);
      }
    },
    [downloadUrl]
  );
  if (selectedIds.length === 0) {
    return null;
  }
  var handleDownload = function () {
    var csvData = generateCSV(itemsToDownload);
    var blob = new Blob([csvData], {
      type: 'text/csv;charset=utf-8;',
    });
    setDownloadUrl(URL.createObjectURL(blob));
  };
  return (0, jsx_runtime_1.jsxs)('div', {
    className:
      'fixed top-4 right-4 bg-background-secondary p-3 rounded-lg shadow-lg border border-border text-text-primary z-50',
    children: [
      (0, jsx_runtime_1.jsxs)('div', {
        className: 'text-sm mb-2',
        children: [
          selectedIds.length,
          ' ',
          selectedIds.length === 1 ? 'selected' : 'selected',
        ],
      }),
      (0, jsx_runtime_1.jsxs)('div', {
        className: 'flex gap-2',
        children: [
          (0, jsx_runtime_1.jsx)('button', {
            onClick: function () {
              return dispatch((0, selectedItemsSlice_1.unselectAll)());
            },
            className:
              'px-3 py-1 text-xs rounded bg-gray-600 text-white hover:bg-gray-500 transition-colors',
            children: 'Unselect',
          }),
          (0, jsx_runtime_1.jsx)('button', {
            onClick: handleDownload,
            className:
              'px-3 py-1 text-xs rounded bg-pokemon-orange text-white hover:bg-orange-500 transition-colors',
            children: 'Download',
          }),
          (0, jsx_runtime_1.jsx)('a', {
            ref: downloadLinkRef,
            href: downloadUrl || '',
            download: ''.concat(itemsToDownload.length, '_items.csv'),
            className: 'hidden',
            'aria-hidden': 'true',
          }),
        ],
      }),
    ],
  });
}
