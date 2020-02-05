import React from 'react';
import logo from './logo.svg';
import { subscribeUser } from './subscription';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            Push notifications demo.
          </p>
          <p>Subscribe to notification servrvice and recive push notification</p>
          <button onClick={subscribeUser}>Subscribe</button>
      </header>
    </div>
  );
}

export default App;
