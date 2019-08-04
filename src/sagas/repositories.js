import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchRepos } from '../apis/repositories';
import {
  FETCH_REPOS,
  fetchReposStarted,
  fetchReposFinished,
  setRepos,
  responseError,
} from '../redux/actions';

export function* rootSaga() {
  yield takeLatest(FETCH_REPOS, fetchReposAsync);
}

export function* fetchReposAsync(action) {
  try {
    yield put(fetchReposStarted());
    const repos = yield call(fetchRepos, action.payload);
    const custommRepos = repos.map(repo => ({
      id: repo.id,
      html_url: repo.html_url,
      name: repo.name,
    }));
    yield put(setRepos(custommRepos));
    yield put(fetchReposFinished());
  } catch (error) {
    yield put(responseError(error.message));
  }
}
