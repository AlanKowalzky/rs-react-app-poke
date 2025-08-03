'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AppLayout = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var react_router_dom_1 = require('react-router-dom');
var hooks_1 = require('./app/hooks');
var itemsSlice_1 = require('./features/items/itemsSlice');
var selectedItemsSlice_1 = require('./features/selectedItems/selectedItemsSlice');
var Search_1 = __importDefault(require('./components/Search'));
var CardList_1 = __importDefault(require('./components/CardList'));
var Loader_1 = __importDefault(require('./components/Loader'));
var Details_1 = __importDefault(require('./components/Details'));
var About_1 = __importDefault(require('./components/About'));
var NotFound_1 = __importDefault(require('./components/NotFound'));
var Pagination_1 = __importDefault(require('./components/Pagination'));
var Flyout_1 = require('./features/selectedItems/Flyout');
var ThemeSwitcher_1 = __importDefault(require('./components/ThemeSwitcher'));
var ITEMS_PER_PAGE = 10;
var AppLayout = function () {
  var dispatch = (0, hooks_1.useAppDispatch)();
  var _a = (0, hooks_1.useAppSelector)(function (state) {
      return state.items;
    }),
    allItems = _a.items,
    status = _a.status,
    error = _a.error;
  var selectedIds = (0, hooks_1.useAppSelector)(function (state) {
    return state.selectedItems;
  }).selectedIds;
  var _b = (0, react_1.useState)(''),
    searchTerm = _b[0],
    setSearchTerm = _b[1];
  var _c = (0, react_router_dom_1.useSearchParams)(),
    searchParams = _c[0],
    setSearchParams = _c[1];
  var navigate = (0, react_router_dom_1.useNavigate)();
  var loading = status === 'loading' || status === 'idle';
  var filteredItems = (0, react_1.useMemo)(
    function () {
      if (!searchTerm.trim()) {
        return allItems;
      }
      var lower = searchTerm.toLowerCase();
      return allItems.filter(function (item) {
        return item.name.toLowerCase().includes(lower);
      });
    },
    [allItems, searchTerm]
  );
  var currentPage = parseInt(searchParams.get('page') || '1', 10);
  var totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  var startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  var paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  var handleSearch = function (newSearchTerm) {
    setSearchTerm(newSearchTerm);
    setSearchParams(function (prev) {
      var newParams = new URLSearchParams(prev);
      newParams.set('page', '1');
      return newParams;
    });
  };
  (0, react_1.useEffect)(
    function () {
      if (status === 'idle') {
        dispatch((0, itemsSlice_1.fetchItems)());
      }
    },
    [status, dispatch]
  );
  var handleDetailsClick = function (id) {
    navigate('/'.concat(id, '?').concat(searchParams.toString()));
  };
  var handleMainClick = function (e) {
    var target = e.target;
    if (target.tagName === 'DIV' && target === e.currentTarget) {
      navigate('/');
    }
  };
  var handlePageChange = function (page) {
    setSearchParams(function (prev) {
      var newParams = new URLSearchParams(prev);
      newParams.set('page', page.toString());
      return newParams;
    });
  };
  var handleToggleItem = function (id) {
    dispatch((0, selectedItemsSlice_1.toggleItem)(id));
  };
  return (0, jsx_runtime_1.jsxs)('div', {
    className: 'max-w-6xl mx-auto px-4',
    children: [
      (0, jsx_runtime_1.jsxs)('header', {
        className:
          'flex justify-between items-center py-4 border-b border-border',
        children: [
          (0, jsx_runtime_1.jsx)('h1', {
            className: 'text-3xl font-bold text-pokemon-orange',
            children: 'Pokemon Search',
          }),
          (0, jsx_runtime_1.jsxs)('nav', {
            className: 'flex items-center gap-4',
            children: [
              (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, {
                to: '/about',
                className:
                  'text-lg text-text-secondary hover:text-text-primary',
                children: 'About',
              }),
              (0, jsx_runtime_1.jsx)(ThemeSwitcher_1.default, {}),
            ],
          }),
        ],
      }),
      (0, jsx_runtime_1.jsxs)('main', {
        className: 'mt-6 flex gap-4',
        children: [
          (0, jsx_runtime_1.jsxs)('div', {
            onClick: handleMainClick,
            className: 'flex-1 flex flex-col',
            children: [
              (0, jsx_runtime_1.jsx)(Search_1.default, {
                onSearch: handleSearch,
                loading: loading,
              }),
              (0, jsx_runtime_1.jsxs)('section', {
                className: 'mt-4',
                children: [
                  loading && (0, jsx_runtime_1.jsx)(Loader_1.default, {}),
                  error &&
                    (0, jsx_runtime_1.jsxs)('div', {
                      className: 'text-red-500',
                      children: ['Error: ', error],
                    }),
                  !loading &&
                    !error &&
                    (0, jsx_runtime_1.jsx)(CardList_1.default, {
                      items: paginatedItems,
                      selectedIds: selectedIds,
                      onDetailsClick: handleDetailsClick,
                      onToggleItem: handleToggleItem,
                    }),
                ],
              }),
              totalPages > 1 &&
                (0, jsx_runtime_1.jsx)('div', {
                  className: 'flex justify-center py-4',
                  children: (0, jsx_runtime_1.jsx)(Pagination_1.default, {
                    currentPage: currentPage,
                    totalPages: totalPages,
                    onPageChange: handlePageChange,
                  }),
                }),
            ],
          }),
          (0, jsx_runtime_1.jsx)('aside', {
            className: 'w-96 flex-shrink-0',
            children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}),
          }),
        ],
      }),
      (0, jsx_runtime_1.jsx)(Flyout_1.Flyout, {}),
    ],
  });
};
exports.AppLayout = AppLayout;
var App = function () {
  return (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, {
    children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, {
      children: [
        (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
          path: '/',
          element: (0, jsx_runtime_1.jsx)(AppLayout, {}),
          children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
            path: ':detailsId',
            element: (0, jsx_runtime_1.jsx)(Details_1.default, {}),
          }),
        }),
        (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
          path: '/about',
          element: (0, jsx_runtime_1.jsx)(About_1.default, {}),
        }),
        (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {
          path: '*',
          element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}),
        }),
      ],
    }),
  });
};
exports.default = App;
