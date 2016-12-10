'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import ClassifyContainer from './container'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class ClassifyNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'classify'
      this.container = ClassifyContainer
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_CLASSIFY]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(ClassifyNavigator)