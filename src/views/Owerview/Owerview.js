import React from "react";

import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
// import { Dashboard, Map, ChartCompensation } from './components'

import { Dashboard, HourProfile } from "./components";
const Owerview = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="owerview">
      <ul className="nav nav-justified">
        <li className="nav-item">
          <NavLink exact to={`${url}/dashboard`}>
            dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to={`${url}/hourprofile`}>
            hourprofile
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
  );
};

export default Owerview;
