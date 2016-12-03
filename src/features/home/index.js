'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  MainNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../router'
import HomeContainer from './container'

const { 
  navigationPop,
  navigationPush
} = actions

class HomeNavigator extends MainNavigator {

    constructor(props) {
      super(props)
      this.name = 'home'
      this.container = HomeContainer
      this.showHeader = false
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_HOME]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush
    }
  )(HomeNavigator)