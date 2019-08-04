import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const setup = () => {
  const props = {
    repos: {
      isLoading: false,
      list: [],
    },
    fetchRepos: () => {},
  };
  return (
    <App {...props} />
  );
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(setup(), div);
  ReactDOM.unmountComponentAtNode(div);
});
