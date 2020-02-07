import React from "react";
import {
  subscribeUser,
  getNotification,
  getDelayedNotification
} from "./subscription";
import Logo from "./images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className="navigation">
        <img src={Logo} className="logo" alt="logo" />
        <h1>BLApp Push Notification Demo</h1>
      </div>

      <div className="button-grp">
        <div className="button-wrap">
          <p>Subscribe to our service to receive notifications</p>
          <button onClick={subscribeUser}>
            <FontAwesomeIcon icon={faExchangeAlt} color="white" />
          </button>
        </div>

        <div className="button-wrap">
          <p>Receive Notification</p>
          <button onClick={getNotification}>
            <FontAwesomeIcon icon={faBell} color="white" />
          </button>
        </div>
        <div className="button-wrap">
          <p>Receive delayed notification (60sec)</p>
          <button onClick={getDelayedNotification}>
            <FontAwesomeIcon icon={faHourglassStart} color="white" />
          </button>
        </div>
      </div>

      <div className="background"></div>
      <div className="mask"></div>
    </>
  );
}
