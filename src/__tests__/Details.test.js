'use strict';
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
var Details_1 = __importDefault(require('../components/Details'));
require('@testing-library/jest-dom');
var mockNavigate = jest.fn();
jest.mock('react-router-dom', function () {
  return {
    useParams: function () {
      return { detailsId: '1' };
    },
    useNavigate: function () {
      return mockNavigate;
    },
    useLocation: function () {
      return { search: '?page=1' };
    },
  };
});
global.fetch = jest.fn();
describe('Details', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it('shows loader initially', function () {
    fetch.mockImplementation(function () {
      return new Promise(function () {});
    });
    (0, react_1.render)((0, jsx_runtime_1.jsx)(Details_1.default, {}));
    expect(react_1.screen.getByLabelText(/loading/i)).toBeInTheDocument();
  });
  it('displays pokemon details after successful fetch', function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var mockPokemon;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockPokemon = {
              id: 1,
              name: 'bulbasaur',
              sprites: {
                front_default: 'image.png',
                other: { 'official-artwork': { front_default: 'artwork.png' } },
              },
              height: 7,
              weight: 69,
              types: [{ type: { name: 'grass' } }],
            };
            fetch.mockResolvedValueOnce({
              ok: true,
              json: function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    return [2 /*return*/, mockPokemon];
                  });
                });
              },
            });
            (0, react_1.render)((0, jsx_runtime_1.jsx)(Details_1.default, {}));
            return [
              4 /*yield*/,
              (0, react_1.waitFor)(function () {
                expect(
                  react_1.screen.getByText('bulbasaur')
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
  it('navigates back on close', function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var mockPokemon;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockPokemon = {
              id: 1,
              name: 'bulbasaur',
              sprites: {
                front_default: 'image.png',
                other: { 'official-artwork': { front_default: 'artwork.png' } },
              },
              height: 7,
              weight: 69,
              types: [{ type: { name: 'grass' } }],
            };
            fetch.mockResolvedValueOnce({
              ok: true,
              json: function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    return [2 /*return*/, mockPokemon];
                  });
                });
              },
            });
            (0, react_1.render)((0, jsx_runtime_1.jsx)(Details_1.default, {}));
            return [
              4 /*yield*/,
              (0, react_1.waitFor)(function () {
                expect(
                  react_1.screen.getByText('bulbasaur')
                ).toBeInTheDocument();
              }),
            ];
          case 1:
            _a.sent();
            react_1.fireEvent.click(
              react_1.screen.getByLabelText('Close details')
            );
            expect(mockNavigate).toHaveBeenCalledWith('/?page=1');
            return [2 /*return*/];
        }
      });
    });
  });
});
