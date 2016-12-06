'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import AboutContainer from './container'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class AboutNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'about'
      this.container = AboutContainer
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_ABOUT]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(AboutNavigator)