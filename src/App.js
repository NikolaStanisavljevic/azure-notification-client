import React from "react";
import {
  subscribeUser,
  getNotification,
  getDelayedNotification
} from "./subscription";
import Logo from "./images/logo.png";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <div className="navigation">
        <img src={Logo} className="logo" />
        <h1>BLApp Push Notification Demo</h1>
      </div>

      <button onClick={subscribeUser}>
        <FontAwesomeIcon icon={faExchangeAlt} color="white" />
        Subscribe
      </button>
      <button onClick={getNotification}>
        <FontAwesomeIcon icon={faBell} color="white" />
        Send Notification
      </button>

      <button onClick={getDelayedNotification}>
        <FontAwesomeIcon icon={faHourglassStart} color="white" />
        Delayed Notification
      </button>
      <div className="background"></div>
      <div className="mask"></div>
    </div>
  );
}

export default App;
