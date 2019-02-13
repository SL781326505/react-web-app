import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from 'components/NotFound'
import Dashboard from 'components/Dashboard'
import PrivateRoute from 'components/PrivateRoute'
import Login from 'containers/Login'
import '@/styles/app.less'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app" push />} />
          <PrivateRoute path="/app" component={Dashboard} />
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
