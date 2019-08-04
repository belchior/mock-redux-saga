import { runSaga, withBackendError, withBackendSuccess } from './sagaUtils';
import { fetchReposAsync } from './repositories';
import { fetchRepos as fetchReposApi } from '../apis/repositories';
import {
  FETCH_REPOS_STARTED,
  FETCH_REPOS_FINISHED,
  fetchRepos as fetchReposAction,
  setRepos,
  responseError,
} from '../redux/actions';


jest.mock('../apis/repositories');

it('should run the repositories saga with success response', async () => {
  const data = [
    { id: 1, name: 'mock-redux-saga', html_url: '/' },
  ];
  fetchReposApi.mockImplementationOnce(withBackendSuccess(data));
  const sagaHistory = await runSaga(
    fetchReposAsync(fetchReposAction('belchior')),
  );

  expect(sagaHistory.hasActionType(FETCH_REPOS_STARTED)).toBeTruthy();
  expect(sagaHistory.get(1)).toEqual(data);
  expect(sagaHistory.hasAction(setRepos(data))).toBeTruthy();
  expect(sagaHistory.hasActionType(FETCH_REPOS_FINISHED)).toBeTruthy();
});

it('should run the repositories saga with error response', async () => {
  const errorMessage = 'backend error';
  fetchReposApi.mockImplementationOnce(withBackendError(errorMessage));
  const sagaHistory = await runSaga(
    fetchReposAsync(fetchReposAction('belchior')),
  );

  expect(sagaHistory.hasActionType(FETCH_REPOS_STARTED)).toBeTruthy();
  expect(sagaHistory.hasAction(responseError(errorMessage))).toBeTruthy();
});
