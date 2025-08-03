'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== 'default') __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === 'function' ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g['throw'] = verb(1)),
      (g['return'] = verb(2)),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('@testing-library/react');
var react_router_dom_1 = require('react-router-dom');
var react_redux_1 = require('react-redux');
var toolkit_1 = require('@reduxjs/toolkit');
var itemsSlice_1 = __importDefault(require('../features/items/itemsSlice'));
var selectedItemsSlice_1 = __importDefault(
  require('../features/selectedItems/selectedItemsSlice')
);
var ThemeContext_1 = require('../context/ThemeContext');
var api = __importStar(require('../services/api'));
require('@testing-library/jest-dom');
var App_1 = require('../App');
jest.mock('../services/api');
var mockedSearchItems = api.searchItems;
var createTestStore = function (preloadedState) {
  if (preloadedState === void 0) {
    preloadedState = {};
  }
  return (0, toolkit_1.configureStore)({
    reducer: {
      items: itemsSlice_1.default,
      selectedItems: selectedItemsSlice_1.default,
    },
    preloadedState: preloadedState,
  });
};
var renderAppLayout = function (preloadedState) {
  if (preloadedState === void 0) {
    preloadedState = {};
  }
  var store = createTestStore(preloadedState);
  return __assign(
    { store: store },
    (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(react_redux_1.Provider, {
        store: store,
        children: (0, jsx_runtime_1.jsx)(ThemeContext_1.ThemeProvider, {
          children: (0, jsx_runtime_1.jsx)(react_router_dom_1.MemoryRouter, {
            children: (0, jsx_runtime_1.jsx)(App_1.AppLayout, {}),
          }),
        }),
      })
    )
  );
};
beforeEach(function () {
  mockedSearchItems.mockClear();
  localStorage.clear();
});
it('renders main layout elements', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      mockedSearchItems.mockResolvedValue({ results: [] });
      renderAppLayout();
      expect(react_1.screen.getByText('Pokemon Search')).toBeInTheDocument();
      expect(react_1.screen.getByText('About')).toBeInTheDocument();
      expect(
        react_1.screen.getByPlaceholderText(/Enter Pokémon name/i)
      ).toBeInTheDocument();
      return [2 /*return*/];
    });
  });
});
it('shows loader initially', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      mockedSearchItems.mockImplementation(function () {
        return new Promise(function () {});
      });
      renderAppLayout();
      expect(react_1.screen.getByLabelText(/loading/i)).toBeInTheDocument();
      return [2 /*return*/];
    });
  });
});
it('displays error on API failure', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          mockedSearchItems.mockRejectedValue(new Error('API Error'));
          renderAppLayout();
          return [
            4 /*yield*/,
            (0, react_1.waitFor)(function () {
              expect(
                react_1.screen.getByText(/Error: API Error/i)
              ).toBeInTheDocument();
            }),
          ];
        case 1:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
});
it('displays items after successful fetch', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          mockedSearchItems.mockResolvedValue({
            results: [
              { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
              {
                name: 'bulbasaur',
                url: 'https://pokeapi.co/api/v2/pokemon/1/',
              },
            ],
          });
          renderAppLayout();
          return [
            4 /*yield*/,
            (0, react_1.waitFor)(function () {
              expect(react_1.screen.getByText('pikachu')).toBeInTheDocument();
              expect(react_1.screen.getByText('bulbasaur')).toBeInTheDocument();
            }),
          ];
        case 1:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
});
it('handles search input changes', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var searchInput;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          mockedSearchItems.mockResolvedValue({
            results: [
              { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
            ],
          });
          renderAppLayout();
          return [
            4 /*yield*/,
            (0, react_1.waitFor)(function () {
              expect(react_1.screen.getByText('pikachu')).toBeInTheDocument();
            }),
          ];
        case 1:
          _a.sent();
          searchInput =
            react_1.screen.getByPlaceholderText(/Enter Pokémon name/i);
          react_1.fireEvent.change(searchInput, { target: { value: 'pika' } });
          expect(searchInput).toHaveValue('pika');
          return [2 /*return*/];
      }
    });
  });
});
it('shows pagination for many items', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var manyItems;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          manyItems = Array.from({ length: 25 }, function (_, i) {
            return {
              name: 'pokemon'.concat(i),
              url: 'https://pokeapi.co/api/v2/pokemon/'.concat(i, '/'),
            };
          });
          mockedSearchItems.mockResolvedValue({ results: manyItems });
          renderAppLayout();
          return [
            4 /*yield*/,
            (0, react_1.waitFor)(function () {
              expect(react_1.screen.getByText('pokemon0')).toBeInTheDocument();
            }),
          ];
        case 1:
          _a.sent();
          expect(react_1.screen.getByText('Next')).toBeInTheDocument();
          expect(react_1.screen.getByText('Prev')).toBeInTheDocument();
          return [2 /*return*/];
      }
    });
  });
});
