import { call, put, takeLatest } from "redux-saga/effects";

import { responseError } from "actions/error";
import { fetchRepos } from "./api";
import { FETCH_REPOS_STARTED, fetchReposFinished } from "./actions";

export function* fetchReposAsync(action) {
  try {
    const repos = yield call(fetchRepos, action.payload);
    const custommRepos = repos.map(repo => ({
      id: repo.id,
      html_url: repo.html_url,
      name: repo.name
    }));
    yield put(fetchReposFinished(custommRepos));
  } catch (error) {
    yield put(responseError(error.message));
  }
}

export function* mainSaga() {
  yield takeLatest(FETCH_REPOS_STARTED, fetchReposAsync);
}
