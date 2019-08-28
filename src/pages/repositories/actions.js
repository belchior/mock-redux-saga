import { createAction } from 'redux-actions';


const namespace = type => `repositories/${type}`;

export const FETCH_REPOS_STARTED = namespace('FETCH_REPOS_STARTED');
export const fetchRepos = createAction(FETCH_REPOS_STARTED);

export const FETCH_REPOS_FINISHED = namespace('FETCH_REPOS_FINISHED');
export const fetchReposFinished = createAction(FETCH_REPOS_FINISHED);
