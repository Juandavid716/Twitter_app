import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/styles/index.scss";
import App from "./App";
import firebaseApp from "./services/firebase";
import { AuthProvider } from "./context/AuthContext";
import { getAnalytics } from "firebase/analytics";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
getAnalytics(firebaseApp);
