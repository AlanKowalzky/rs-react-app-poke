'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var About = function () {
  return (0, jsx_runtime_1.jsxs)('div', {
    style: {
      padding: '32px',
      color: 'white',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
    },
    children: [
      (0, jsx_runtime_1.jsx)('h2', {
        style: {
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '24px',
          color: '#FF7043',
        },
        children: 'About This App',
      }),
      (0, jsx_runtime_1.jsx)('p', {
        style: {
          fontSize: '1.125rem',
          lineHeight: '1.6',
          marginBottom: '24px',
        },
        children:
          'This Pokemon search application was created by a student of The Rolling Scopes School as part of the React development course. The app demonstrates modern React patterns including functional components, hooks, routing, and comprehensive testing.',
      }),
      (0, jsx_runtime_1.jsxs)('p', {
        style: {
          fontSize: '1rem',
          lineHeight: '1.6',
        },
        children: [
          'Learn more about React development at',
          ' ',
          (0, jsx_runtime_1.jsx)('a', {
            href: 'https://rs.school/react/',
            target: '_blank',
            rel: 'noopener noreferrer',
            style: {
              color: '#FF7043',
              textDecoration: 'underline',
              fontWeight: '600',
            },
            onMouseEnter: function (e) {
              e.currentTarget.style.color = '#FF8A65';
            },
            onMouseLeave: function (e) {
              e.currentTarget.style.color = '#FF7043';
            },
            children: 'The Rolling Scopes School React Course',
          }),
          '.',
        ],
      }),
    ],
  });
};
exports.default = About;
