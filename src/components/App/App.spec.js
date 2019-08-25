import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


jest.mock('pages/repositories/Repositories', () => (
  function Repositories() { return 'RepositoriesMocked'; }
));


const setup = () => {
  const props = {
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
