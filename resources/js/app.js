import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Router from './router/index'

class App extends Component {
  render () {
    return <Router />
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
