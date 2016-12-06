'use strict'

import { combineReducers } from 'redux'

import navigation from './navigation'
import Root from './containers/reducer'
import Home from './features/home/reducer'
import Shelf from './features/shelf/reducer'

export default combineReducers({
  navigation,
  Root,
  Home,
  Shelf
})