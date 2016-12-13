'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import RecommendContainer from './container'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class RecommendNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'recommend'
      this.container = RecommendContainer
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_RECOMMEND]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(RecommendNavigator)