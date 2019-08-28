import { combineReducers } from 'redux';
import { repositories } from 'pages/repositories/reducers';

export const rootReducers = combineReducers({
  repositories,
});
