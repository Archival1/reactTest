import React, { Component } from 'react';
import logo from './Images/Logo.png';
import './App.css';
import PlayerList from "./Components/playerList/playerList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            How do I code?
          </p>
        </header>
        <div>
          <PlayerList />
        </div>
      </div>

    );
  }
}

export default App;
