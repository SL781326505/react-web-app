import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { user } from './user'

const reducers = combineReducers({
  user
})

const isDev = (process.env.NODE_ENV === 'development')

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  isDev && window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
