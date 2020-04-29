import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

// import { PrivateRoute } from '../../components'

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props

  return (
    <Route
      // <PrivateRoute
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  )
}

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
}

export default RouteWithLayout