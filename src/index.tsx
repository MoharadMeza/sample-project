import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import mockAxios from "./setup/axios/MockAxios";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import "./assets/components/_variables.scss";
import "./assets/components/components.scss";
import store, { persistor } from "./setup/redux/Store";
import { setupAxios } from "./setup/axios/SetupAxios";

// import "./assets/sass/style.scss";
// import "./assets/sass/style.react.scss";

mockAxios(axios);
setupAxios(axios, store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<>Loading...</>}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
