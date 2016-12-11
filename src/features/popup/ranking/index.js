'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import RankingContainer from './container'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class RankingNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'ranking'
      this.container = RankingContainer
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_RANKING]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(RankingNavigator)