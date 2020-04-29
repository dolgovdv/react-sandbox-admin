import React from "react";
import "./styles.css";
import "./styles/App.scss";

import { Router } from "react-router-dom";
import Routes from "./Routes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
