const effetcs = require('redux-saga/effects');

const effectsMock = {
  ...effetcs,
  call: (fn, ...args) => fn(...args),
  put: action => action,
};

module.exports = effectsMock;
