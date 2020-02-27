import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Example from '../pages/Example'
import User from '../pages/User'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Example} />
          <Route exact path='/user' component={User} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
