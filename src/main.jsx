import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import "./index.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(

    <Auth0Provider
    domain="dev-z25hjkz5wzzcssfc.us.auth0.com"
    clientId="I8uqHqz59Heq3q1ShDSQACV0TSHtBr1G"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
         
    <Provider store={store}>
        <App />
    </Provider>

  </Auth0Provider>,
);
