const namespace = type => `repositories/${type}`;

export const FETCH_REPOS_STARTED = namespace("FETCH_REPOS_STARTED");
export const fetchRepos = payload => ({ type: FETCH_REPOS_STARTED, payload });

export const FETCH_REPOS_FINISHED = namespace("FETCH_REPOS_FINISHED");
export const fetchReposFinished = payload => ({
  type: FETCH_REPOS_FINISHED,
  payload
});
