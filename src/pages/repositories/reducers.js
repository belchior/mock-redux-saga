import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

import { FETCH_REPOS_STARTED, FETCH_REPOS_FINISHED } from './actions';

export const initialState = Immutable({
  isLoading: true,
  list: []
});

export const repositories = handleActions({
  [FETCH_REPOS_STARTED]: localState => Immutable.merge(localState, { isLoading: true }),
  [FETCH_REPOS_FINISHED]: (localState, { payload = initialState.list }) => (
    Immutable.merge(localState, { isLoading: false, list: payload })
  ),
}, initialState);
