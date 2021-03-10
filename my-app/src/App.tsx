import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rooms} from './components/Rooms/Rooms';
import {Room} from './domain/Room'

function App() {
  let rooms= [{id:1, name : 'My room 1'}];
  
  return (
    <div className="App">
      <Rooms Rooms={[{id:1, name : 'My room 1'}]}></Rooms>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>      
    </div>
  );
}

export default App;
