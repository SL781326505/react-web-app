import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


@connect(
  state => state.user
)
class PrivateRoute extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { isAuth, component: Component, ...rest } = this.props

    return (
      <Route
        {...rest}
        render={props => (
          isAuth==='yes' ? <Component {...props} />
                : <Redirect to={{
                  pathname: '/login',
                  state: { from: props.location }
                }}/>
        )}
      />
    )
  }
}

export default PrivateRoute
