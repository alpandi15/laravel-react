import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/auth/login'
import Dashboard from '../pages/dashboard'
import User from '../pages/User'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/user' component={User} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
