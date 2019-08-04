import React, { Component } from 'react';

import { Repositories } from '../Repositories/Repositories';
import logo from '../../logo.svg';
import './App.css';

export class App extends Component {
  userName = 'belchior';

  componentDidMount() {
    this.props.fetchRepos(this.userName);
  }

  render() {
    const { repos } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <span>{repos.isLoading}</span>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Repositories
          title={`Repositories from ${this.userName}`}
          repos={repos}
        />
      </div>
    );
  }
}

export default App;
