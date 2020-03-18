import React from "react";

import Logo from "./images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const showUsersPage = () => {
    window.location.href = "/users";
  };
  return (
    <>
      <div className="navigation">
        <img src={Logo} className="logo" alt="logo" />
        <h1>BLApp Push Notification Demo</h1>
      </div>

      <div className="button-grp">
        <div className="button-wrap">
          <p>View list of our test users</p>
          <button onClick={showUsersPage}>
            <FontAwesomeIcon icon={faExchangeAlt} color="white" />
          </button>
        </div>
      </div>

      <div className="background"></div>
      <div className="mask"></div>
    </>
  );
}
