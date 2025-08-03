'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var Pagination = function (_a) {
  var currentPage = _a.currentPage,
    totalPages = _a.totalPages,
    onPageChange = _a.onPageChange;
  var getPageNumbers = function () {
    var pageNumbers = [];
    if (totalPages <= 7) {
      for (var i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 4) pageNumbers.push('...');
      var start = Math.max(2, currentPage - 1);
      var end = Math.min(totalPages - 1, currentPage + 1);
      for (var i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 3) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };
  if (totalPages <= 1) return null;
  return (0, jsx_runtime_1.jsxs)('div', {
    className: 'flex justify-center items-center gap-2 text-text-primary',
    children: [
      (0, jsx_runtime_1.jsx)('button', {
        onClick: function () {
          return onPageChange(currentPage - 1);
        },
        disabled: currentPage === 1,
        className:
          'px-4 py-2 rounded-md bg-background-secondary border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-border transition-colors',
        children: 'Prev',
      }),
      getPageNumbers().map(function (page, index) {
        return typeof page === 'number'
          ? (0, jsx_runtime_1.jsx)(
              'button',
              {
                onClick: function () {
                  return onPageChange(page);
                },
                className:
                  'px-3 py-2 rounded-md border transition-colors '.concat(
                    currentPage === page
                      ? 'bg-pokemon-orange text-white border-pokemon-orange font-bold'
                      : 'bg-background-secondary border-border hover:bg-border'
                  ),
                children: page,
              },
              ''.concat(page, '-').concat(index)
            )
          : (0, jsx_runtime_1.jsx)(
              'span',
              { className: 'px-3 py-2 text-text-secondary', children: '...' },
              'ellipsis-'.concat(index)
            );
      }),
      (0, jsx_runtime_1.jsx)('button', {
        onClick: function () {
          return onPageChange(currentPage + 1);
        },
        disabled: currentPage === totalPages,
        className:
          'px-4 py-2 rounded-md bg-background-secondary border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-border transition-colors',
        children: 'Next',
      }),
    ],
  });
};
exports.default = Pagination;
