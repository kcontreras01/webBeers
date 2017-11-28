import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Beers Here
        </p>

        <Search />

      </div>
    );
  }
}

export default App;
