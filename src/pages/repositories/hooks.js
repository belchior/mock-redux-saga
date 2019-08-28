import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRepos } from './actions';


const selectorFetchRepos = rootState => ({
  isLoading: rootState.repositories.isLoading,
  list: rootState.repositories.list
});
const isEqualFetchRepos = (current, previous) => (
  current.isLoading === previous.isLoading &&
  current.list.length === previous.list.length
);
export const useFetchRepos = userName => {
  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(fetchRepos(userName)); },
    [userName, dispatch],
  );
  return useSelector(selectorFetchRepos, isEqualFetchRepos);
};
