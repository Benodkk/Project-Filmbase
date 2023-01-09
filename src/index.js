import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

import RouteSwitch from "./RouteSwitch";

import GlobalStyles from "./components/styles/GlobalStyles";
import Theme from "./components/styles/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles />
      <Theme>
        <RouteSwitch />
      </Theme>
    </PersistGate>
  </Provider>
);
