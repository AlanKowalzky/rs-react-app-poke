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
var react_1 = require('react');
var react_router_dom_1 = require('react-router-dom');
var Loader_1 = __importDefault(require('./Loader'));
var Details = function () {
  var _a, _b;
  var detailsId = (0, react_router_dom_1.useParams)().detailsId;
  var navigate = (0, react_router_dom_1.useNavigate)();
  var location = (0, react_router_dom_1.useLocation)();
  var _c = (0, react_1.useState)(null),
    details = _c[0],
    setDetails = _c[1];
  var _d = (0, react_1.useState)(true),
    loading = _d[0],
    setLoading = _d[1];
  var _e = (0, react_1.useState)(null),
    error = _e[0],
    setError = _e[1];
  (0, react_1.useEffect)(
    function () {
      if (!detailsId) {
        setDetails(null);
        setLoading(false);
        return;
      }
      var fetchDetails = function () {
        return __awaiter(void 0, void 0, void 0, function () {
          var response, data, e_1;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                setLoading(true);
                setError(null);
                _a.label = 1;
              case 1:
                _a.trys.push([1, 4, 5, 6]);
                return [
                  4 /*yield*/,
                  fetch('https://pokeapi.co/api/v2/pokemon/'.concat(detailsId)),
                ];
              case 2:
                response = _a.sent();
                if (!response.ok) {
                  throw new Error('Pokémon not found');
                }
                return [4 /*yield*/, response.json()];
              case 3:
                data = _a.sent();
                setDetails(data);
                return [3 /*break*/, 6];
              case 4:
                e_1 = _a.sent();
                setError(e_1.message);
                return [3 /*break*/, 6];
              case 5:
                setLoading(false);
                return [7 /*endfinally*/];
              case 6:
                return [2 /*return*/];
            }
          });
        });
      };
      fetchDetails();
    },
    [detailsId]
  );
  var handleClose = function () {
    navigate('/'.concat(location.search));
  };
  if (loading) {
    return (0, jsx_runtime_1.jsx)(Loader_1.default, {});
  }
  if (error) {
    return (0, jsx_runtime_1.jsxs)('div', {
      className: 'text-red-500 p-4',
      children: ['Error: ', error],
    });
  }
  if (!details) {
    return (0, jsx_runtime_1.jsx)('div', {
      className: 'p-4 text-center text-text-secondary',
      children: 'Select a Pok\u00E9mon to see the details.',
    });
  }
  var imageUrl =
    ((_b =
      (_a = details.sprites.other) === null || _a === void 0
        ? void 0
        : _a['official-artwork']) === null || _b === void 0
      ? void 0
      : _b.front_default) || details.sprites.front_default;
  return (0, jsx_runtime_1.jsxs)('div', {
    className:
      'bg-background-secondary rounded-lg shadow-lg relative text-text-primary p-4 border border-border',
    children: [
      (0, jsx_runtime_1.jsx)('button', {
        onClick: handleClose,
        className:
          'absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl transition-colors z-10',
        'aria-label': 'Close details',
        children: '\u00D7',
      }),
      (0, jsx_runtime_1.jsxs)('div', {
        className: 'pt-8',
        children: [
          (0, jsx_runtime_1.jsx)('h2', {
            className:
              'text-xl font-bold capitalize mb-4 text-center text-pokemon-orange',
            children: details.name,
          }),
          (0, jsx_runtime_1.jsx)('img', {
            src: imageUrl,
            alt: details.name,
            className: 'mx-auto mb-4 w-48 h-48 object-contain',
          }),
          (0, jsx_runtime_1.jsxs)('div', {
            className: 'space-y-2',
            children: [
              (0, jsx_runtime_1.jsxs)('p', {
                children: [
                  (0, jsx_runtime_1.jsx)('strong', { children: 'ID:' }),
                  ' ',
                  details.id,
                ],
              }),
              (0, jsx_runtime_1.jsxs)('p', {
                children: [
                  (0, jsx_runtime_1.jsx)('strong', { children: 'Height:' }),
                  ' ',
                  details.height / 10,
                  ' m',
                ],
              }),
              (0, jsx_runtime_1.jsxs)('p', {
                children: [
                  (0, jsx_runtime_1.jsx)('strong', { children: 'Weight:' }),
                  ' ',
                  details.weight / 10,
                  ' kg',
                ],
              }),
              (0, jsx_runtime_1.jsxs)('p', {
                children: [
                  (0, jsx_runtime_1.jsx)('strong', { children: 'Types:' }),
                  ' ',
                  details.types
                    .map(function (t) {
                      return t.type.name;
                    })
                    .join(', '),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
exports.default = Details;
