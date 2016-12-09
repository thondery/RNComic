'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import ReaderContainer from './container'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class ReaderNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'reader'
      this.container = ReaderContainer
      this.showHeader = false
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_READER]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(ReaderNavigator)