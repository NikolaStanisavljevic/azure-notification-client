import React from 'react';
import logo from './logo.svg';
import { subscribeUser, getNotification } from './subscription';
import './App.css';

function App() {
  getNotification()
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
          <button onClick={getNotification}>Send Notification</button>
      </header>
    </div>
  );
}

export default App;
