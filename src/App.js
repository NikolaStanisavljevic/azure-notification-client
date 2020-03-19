import React from "react";
import "./App.css";
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./Home";
import Event from "./Event";
import UserList from "./UserList";

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact component={Home} />
          <Route path="/event" exact component={Event} />
          <Route path="/users" exact component={UserList} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

async function showAlert(title, msg, task) {
  const alert = await this.alertCtrl.create({
    header: title,
    subHeader: msg,
    buttons: [
      {
        text: `Action: ${task}`,
        handler: () => {
          // E.g: Navigate to a specific screen
        }
      }
    ]
  });
  alert.present();
}

export default App;
