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
import { OneSignal } from "@ionic-native/onesignal/ngx";

const App = () => {
  const initNotifications = () => {
    OneSignal.startInit("9753bb3a-52fb-472a-abd8-3eeef79de1d3", "703322744261");

    OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);

    OneSignal.handleNotificationReceived().subscribe(data => {
      // do something when notification is received
      let msg = data.payload.body;
      let title = data.payload.title;
      let additionalData = data.payload.additionalData;
      this.showAlert(title, msg, additionalData.task);
    });

    OneSignal.handleNotificationOpened().subscribe(data => {
      // do something when a notification is opened
      let additionalData = data.notification.payload.additionalData;

      showAlert(
        "Notification opened",
        "You already read this before",
        additionalData.task
      );
    });

    this.oneSignal.endInit();
  };

  initNotifications();

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact component={Home} />
          <Route path="/event" exact component={Event} />
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
