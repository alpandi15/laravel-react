import React, { Component, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './app'

import reducer from './store'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

class Index extends Component {
  render () {
    return (
        <Provider store={store}>
            <Suspense fallback={(<div>Loading</div>)}>
                <App />
            </Suspense>
        </Provider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
