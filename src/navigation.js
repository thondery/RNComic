'use strict'

import { combineReducers } from 'redux'
import KNRouter, { navigation } from 'kn-react-native-router'
import { navigationState } from './router'

const initialState = {
  navigationStates: navigationState,
  tabbarState: {
    selectedTab: 'HomeTab'
  }
}

export default (state = initialState, action) => navigation(state, action)