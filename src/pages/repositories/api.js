
const endpoint = 'https://api.github.com';

export function fetchRepos(name) {
  return fetch(`${endpoint}/users/${name}/repos`).then(res => res.json());
}
