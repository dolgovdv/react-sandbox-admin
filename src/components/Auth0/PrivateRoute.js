// src/components/PrivateRoute.js

import React from 'react'
// import { Route } from 'react-router-dom'
// import { useAuth0 } from '../../react-auth0-spa'
import { RouteWithLayout } from '../../components'

// import { UnAuth } from '../../layouts'

const PrivateRoute = ({ component: Component, path, layout, ...rest }) => {
  // const { loading, isAuthenticated, loginWithRedirect } = useAuth0()

  // useEffect(() => {
  //   if (loading || isAuthenticated) {
  //     return
  //   }
  //   const fn = async () => {
  //     await loginWithRedirect({
  //       appState: { targetUrl: path }
  //     })
  //   }
  //   // return <RouteWithLayout component={Component} layout={UnAuth} path={path} />
  //   fn()
  // }, [loading, isAuthenticated, loginWithRedirect, path])

  // const render = (props) =>
  //   isAuthenticated === true ? <Component {...props} /> : null

  // return <Route path={path} render={render} {...rest} />
  return <RouteWithLayout component={Component} exact layout={layout} path={path} />
}

export default PrivateRoute
