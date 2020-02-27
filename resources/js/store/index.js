import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authStore from './reducers/authStore'

const rooterReducers = combineReducers({
  form: formReducer,
  authStore
})

export default rooterReducers
