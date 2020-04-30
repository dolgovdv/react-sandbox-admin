import React from "react"

import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom"
import { Dashboard, HourProfile } from "./components"
const Objects = (params) => {
  let { path, url } = useRouteMatch()
  return (
    <div>
      <ul className="nav nav-justified">
        <li className="nav-item">
          <NavLink exact to={`${url}/dashboard`}>
            dashboard 1
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to={`${url}/hourprofile`}>
            hourprofile 1
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/dashboard`}>
          <Dashboard />
        </Route>
        <Route path={`${path}/hourprofile`}>
          <HourProfile />
        </Route>
      </Switch>
    </div>
  )
}

export default Objects
