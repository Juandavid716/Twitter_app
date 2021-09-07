import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/styles/index.scss";
import App from "./App";
import firebaseApp from "./services/firebase";
import { getAnalytics } from "firebase/analytics";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
getAnalytics(firebaseApp);
