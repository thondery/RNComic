'use strict'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from '../reducer'

export default function configureStore (initialState) {
  const middleware = process.env.NODE_ENV === 'production' 
                   ? [thunk] 
                   : [thunk, logger()]
  const store = createStore(reducers, initialState, applyMiddleware(...middleware))
  return store
}