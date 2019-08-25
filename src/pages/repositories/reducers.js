import Immutable from "seamless-immutable";
import { FETCH_REPOS_STARTED, FETCH_REPOS_FINISHED } from "./actions";

export const initialState = Immutable({
  isLoading: true,
  list: []
});

export const repositories = (localState = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_REPOS_STARTED:
      return Immutable.merge(localState, { isLoading: true, list: [] });
    case FETCH_REPOS_FINISHED:
      return Immutable.merge(localState, {
        isLoading: false,
        list: action.payload
      });
    default:
      return localState;
  }
};
