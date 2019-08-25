import { responseError, } from 'actions/error';
import { runSaga, withBackendError, withBackendSuccess } from 'utils/sagaUtils';
import { fetchRepos as fetchReposAction, fetchReposFinished } from './actions';
import { fetchReposAsync } from './sagas';
import { fetchRepos as fetchReposApi } from './api';
jest.mock('./api');



it('should run the repositories saga with success response', async () => {
  const data = [
    { id: 1, name: 'mock-redux-saga', html_url: '/' },
  ];
  fetchReposApi.mockImplementationOnce(withBackendSuccess(data));
  const sagaHistory = await runSaga(
    fetchReposAsync(fetchReposAction('belchior')),
  );

  expect(sagaHistory.get(0)).toEqual(data);
  expect(sagaHistory.hasAction(fetchReposFinished(data))).toBeTruthy();
});

it('should run the repositories saga with error response', async () => {
  const errorMessage = { message: 'backend error' };
  fetchReposApi.mockImplementationOnce(withBackendError(errorMessage));
  const sagaHistory = await runSaga(
    fetchReposAsync(fetchReposAction('belchior')),
  );

  expect(sagaHistory.hasAction(responseError(errorMessage))).toBeTruthy();
});
