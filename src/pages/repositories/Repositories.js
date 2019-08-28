import React from 'react';

import { useFetchRepos } from './hooks';
import logo from 'logo.svg';
import './Repositories.css';


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
