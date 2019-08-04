const namespace = type => `repos/${type}`;

export const FETCH_REPOS = namespace('FETCH_REPOS');
export const fetchRepos = payload => ({ type: FETCH_REPOS, payload });

export const FETCH_REPOS_STARTED = namespace('FETCH_REPOS_STARTED');
export const fetchReposStarted = () => ({ type: FETCH_REPOS_STARTED });

export const FETCH_REPOS_FINISHED = namespace('FETCH_REPOS_FINISHED');
export const fetchReposFinished = () => ({ type: FETCH_REPOS_FINISHED });

export const SET_REPOS = namespace('SET_REPOS');
export const setRepos = payload => ({ type: SET_REPOS, payload });
