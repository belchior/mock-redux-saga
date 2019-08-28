import { all } from 'redux-saga/effects';
import { repositories } from './pages/repositories/sagas';


export function* rootSaga() {
  yield all([
    repositories(),
  ]);
}
