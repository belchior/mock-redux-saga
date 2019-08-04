import React from 'react';

import './Repositories.css';

export function Repositories(props) {
  const { repos, title = 'Repositories' } = props;
  return (
    <section className="Repositories">
      <h1>{title}</h1>
      <nav className="RepositoriesList">
        {repos.list.map(repo => (
          <a
            className="RepositoriesItem"
            href={repo.html_url}
            key={repo.id}
          >
            {repo.name}
          </a>
        ))}
      </nav>
    </section>
  );
}
