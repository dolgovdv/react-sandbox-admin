// src/components/PrivateRoute.js

import React from "react"
// import { Route } from 'react-router-dom'
// import { useAuth0 } from '../../react-auth0-spa'
import { RouteWithLayout } from "../../components"

// import { UnAuth } from '../../layouts'

const PrivateRoute = ({ component: Component, path, layout, ...rest }) => {
  return <RouteWithLayout component={Component} layout={layout} path={path} />
}

export default PrivateRoute
