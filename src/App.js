import React from "react"
import "./styles.css"
import "./styles/App.scss"

import { Router } from "react-router-dom"
import Routes from "./Routes"

import { createBrowserHistory } from "history"
const browserHistory = createBrowserHistory()

export default function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </div>
  )
}
