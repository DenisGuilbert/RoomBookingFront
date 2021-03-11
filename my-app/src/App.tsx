import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rooms from './components/Rooms/Rooms';
import {Room} from './domain/Room'
import CreateRooms  from './components/Rooms/CreateRoom';

function App() {  
  return (
    <div className="App">
      <Rooms></Rooms>
      <CreateRooms></CreateRooms>
      {/*<header className="App-header">
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
      </header>*/}
    </div>
  );
}

export default App;
