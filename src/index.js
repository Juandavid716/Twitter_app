import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/styles/index.scss";
import App from "./App";
import firebaseApp from "./services/firebase";
import { AuthProvider } from "./context/AuthContext";
import { getAnalytics } from "firebase/analytics";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
getAnalytics(firebaseApp);
