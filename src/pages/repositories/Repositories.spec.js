import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from 'store.js';
import { Repositories } from './Repositories';


describe('Repositories', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Repositories userName="belchior" />,
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
