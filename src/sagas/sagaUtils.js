
export const isGenerator = value => (
  value != null &&
  value.toString() === '[object Generator]'
);

export const isPromise = value => (
  typeof value === 'object' &&
  typeof value.then === 'function' &&
  value.toString() === '[object Promise]'
);

export async function runSaga(iterator) {
  let result = iterator.next();
  let values = [];

  while (result.done === false) {
    if (isGenerator(result.value)) {
      values = values.concat(runSaga(result.value));
    } else if (isPromise(result.value)) {
      const value = await result.value;
      values.push(value);
      result = iterator.next(value);
    } else {
      values.push(result.value);
      result = iterator.next(result.value);
    }
  }

  return SagaHistory(values);
}

export function SagaHistory(values) {
  const get = index => values[index];
  const getAll = () => values;
  const hasAction = action => {
    const answear = values.find(item => item && item.type === action.type);
    return Boolean(answear);
  }
  const hasActionType = actionType => {
    const answear = values.find(item => item && item.type === actionType);
    return Boolean(answear);
  }
  return {
    get,
    getAll,
    hasAction,
    hasActionType,
  };
}

export const withBackendError = (message = 'generic error message') => () => {
  throw new Error(message);
};

export const withBackendSuccess = body => () => body;
