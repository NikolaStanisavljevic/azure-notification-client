import React from "react";
import EventPhoto from "./images/event.png";
import Logo from "./images/logo.png";

function Event() {
  return (
    <div className="event-page">
      <h4>Welcome to</h4>
      <img src={EventPhoto} alt="event" className="event-img" />
      <h4>Our new event...</h4>
      <img src={Logo} alt="event" className="event-logo" />
    </div>
  );
}

export default Event;
