import React from "react"
import { Switch } from "react-router-dom"

import { PrivateRoute } from "./components"
import { Main as MainLayout } from "./layouts"

import {
  Owerview as OwerviewView,
  // NotFound as NotFoundView,
  Objects as ObjectsView,
  MapView,
  // Passport as PassportView,
  // Monitoring as MonitoringView
} from "./views"

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute
        exact={true}
        path="/"
        component={OwerviewView}
        layout={MainLayout}
      />
      <PrivateRoute
        exact={false}
        component={ObjectsView}
        path="/objects"
        layout={MainLayout}
      />
      <PrivateRoute component={MapView} path="/map" layout={MainLayout} />
      {/* <PrivateRoute
        exact={true}
        component={PassportView}
        path="/passport"
        layout={MainLayout}
      /> */}
      {/* <PrivateRoute
        exact={false}
        component={PassportView}
        path="/passport/:id"
        layout={MainLayout}
      />
      <PrivateRoute
        exact={false}
        component={MonitoringView}
        path="/monitoring/:id"
        layout={MainLayout}
      /> */}
      {/* <PrivateRoute component={NotFoundView} layout={MainLayout} /> */}
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  )
}

export default Routes
