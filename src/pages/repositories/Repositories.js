import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRepos } from './actions';
import logo from 'logo.svg';
import './Repositories.css';

const useFetchRepos = userName => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRepos(userName));
  }, [userName, dispatch]);

  return useSelector(
    rootState => ({
      isLoading: rootState.repositories.isLoading,
      list: rootState.repositories.list
    }),
    (currentRepos, prevRepos) => (
      currentRepos.isLoading === prevRepos.isLoading &&
      currentRepos.list.length === prevRepos.list.length
    )
  );
};

export function Repositories(props) {
  const { userName } = props;
  const repos = useFetchRepos(userName);

  return (
    <section className="Repositories">
      <h1 className="Title">
        Repositories from {userName}
        {repos.isLoading && (
          <img src={logo} className="App-logo Spinner" alt="logo" />
        )}
      </h1>
      <nav className="RepositoriesList">
        {repos.list.map(repo => (
          <a className="RepositoriesItem" href={repo.html_url} key={repo.id}>
            {repo.name}
          </a>
        ))}
      </nav>
    </section>
  );
}
