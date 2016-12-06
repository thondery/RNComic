'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  MainNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../router'
import ShelfContainer from './container'

const { 
  navigationPop,
  navigationPush
} = actions

class ShelfNavigator extends MainNavigator {

  constructor(props) {
    super(props)
    this.name = 'shelf'
    this.container = ShelfContainer
    this.showHeader = false
  }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_SHELF]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush
    }
  )(ShelfNavigator)