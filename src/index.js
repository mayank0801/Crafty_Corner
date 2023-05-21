import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import DataProvider from "./context/dataContext/dataContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
      <App />
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
