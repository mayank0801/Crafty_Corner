import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import DataProvider from "./context/dataContext/dataContext";
import AuthContextProvider from "./context/AuthContext/AuthContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
      <DataProvider>
        <App />
      </DataProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
