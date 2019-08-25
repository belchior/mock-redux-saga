import { all } from 'redux-saga/effects';
import { mainSaga as repositoriesSagas } from './pages/repositories/sagas';


export function* rootSaga() {
  yield all([
    repositoriesSagas(),
  ]);
}
