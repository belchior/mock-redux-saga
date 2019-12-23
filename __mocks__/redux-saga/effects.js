const effects = require('redux-saga/effects');

const effectsMock = {
  ...effects,
  call: (fn, ...args) => fn(...args),
  select: (fn, ...args) => fn(...args),
  put: action => action,
  takeLatest: (actionType, genFn) => ({
    type: actionType,
    genFn: genFn.name
  })
};

module.exports = effectsMock;
