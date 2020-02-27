import {
  FETCH_AUTH,
  RECEIVE_AUTH,
  SUCCESS_AUTH,
  FAILED_AUTH
} from '../../actions/type'

const initialState = {
  loading: false,
  currentItem: {},
  list: [],
  meta: {},
  error: false,
  message: ''
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        meta: [],
        currentItem: {},
        loading: true
      }
    case SUCCESS_AUTH:
      return {
        ...state,
        loading: false,
        error: false,
        message: action.payload.message
      }
    case FAILED_AUTH:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message
      }
    case RECEIVE_AUTH:
      return {
        ...state,
        loading: false,
        error: false,
        list: action.payload.list,
        meta: action.payload.meta,
        message: null
      }
    default:
      return state
  }
}
