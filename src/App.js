import React from 'react';
import { subscribeUser, getNotification } from './subscription';
import Logo from "./images/logo.png";
import './App.css';

function App() {
  return (
    <div className="App">
          <img src={Logo}/>
          <h1>BLApp</h1>
          <p>BLApp</p>
          <button onClick={subscribeUser}>Subscribe</button>
          <button onClick={getNotification}>Send Notification</button>
          <div className="background"></div>
          <div className="mask"></div>
    </div>
  );
}

export default App;
