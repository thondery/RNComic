'use strict'

import { combineReducers } from 'redux'

import navigation from './navigation'
import Root from './containers/reducer'
import Home from './features/home/reducer'
import Shelf from './features/shelf/reducer'
import Search from './features/popup/search/reducer'
import Book from './features/popup/book/reducer'
import Reader from './features/popup/reader/reducer'
import Classify from './features/popup/classify/reducer'
import Ranking from './features/popup/ranking/reducer'

export default combineReducers({
  navigation,
  Root,
  Home,
  Shelf,
  Search,
  Book,
  Reader,
  Classify,
  Ranking
})