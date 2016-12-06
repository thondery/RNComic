'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import SettingContainer from './container'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class SettingNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'setting'
      this.container = SettingContainer
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_SETTING]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(SettingNavigator)