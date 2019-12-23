/* eslint no-null/no-null:off */
export const isGenerator = value =>
  value != null && value.toString() === '[object Generator]';

export const isPromise = value =>
  typeof value === 'object' &&
  typeof value.then === 'function' &&
  value.toString() === '[object Promise]';

export const isIterator = value =>
  typeof value === 'object' && typeof value.next === 'function';

export async function runGen(iterator) {
  let result = iterator.next();
  let values = [];

  while (result.done === false) {
    if (isGenerator(result.value)) {
      // eslint-disable-next-line no-await-in-loop
      const newValues = await runGen(result.value);
      values = values.concat(newValues);
      result = iterator.next(newValues);
    } else if (isPromise(result.value)) {
      // eslint-disable-next-line no-await-in-loop
      const value = await result.value;
      values.push(value);
      result = iterator.next(value);
    } else {
      values.push(result.value);
      result = iterator.next(result.value);
    }
  }

  return values;
}

export function sagaHistory(values) {
  const get = index => values[index];
  const getAll = () => values;
  const hasAction = action => {
    if (!action || !action.type) return false;
    const answer = values.find(
      item =>
        typeof item === 'object' &&
        typeof item.type === 'string' &&
        item.type === action.type
    );
    return Boolean(answer);
  };
  const hasActionType = actionType => {
    if (!actionType) return false;
    const answer = values.find(
      item =>
        typeof item === 'object' &&
        typeof item.type === 'string' &&
        item.type === actionType
    );
    return Boolean(answer);
  };
  return {
    get,
    getAll,
    hasAction,
    hasActionType
  };
}

export async function runSaga(iterator) {
  if (isIterator(iterator) === false) {
    throw new TypeError('runSaga needs a iterator as the first argument');
  }
  const values = await runGen(iterator);
  return sagaHistory(values);
}

export const withBackendError = (
  message = { message: 'generic error message' }
) => () => {
  throw message;
};

export const withBackendSuccess = body => () => body;

export const mockOnceFabric = (
  api,
  resSuccess = {},
  resError = { message: 'backend error' }
) => shouldMockError => {
  let response = resSuccess;
  let mockFn = withBackendSuccess(resSuccess);

  if (shouldMockError) {
    response = resError;
    mockFn = withBackendError(resError);
  }

  api.mockImplementationOnce(mockFn);
  return response;
};
