import Immutable from 'seamless-immutable';
import {
  FETCH_REPOS_STARTED,
  FETCH_REPOS_FINISHED,
  SET_REPOS,
} from '../actions';


export const initialState = Immutable({
  isLoading: false,
  list: [],
});

export const repositories = (rootState = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REPOS_STARTED: return Immutable.setIn(rootState, ['isLoading'], true);
    case FETCH_REPOS_FINISHED: return Immutable.setIn(rootState, ['isLoading'], false);;
    case SET_REPOS: return Immutable.setIn(rootState, ['list'], action.payload);
    default: return rootState;
  }
};
