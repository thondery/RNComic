'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import BookContainer from './container'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class BookNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'book'
      this.container = BookContainer
      this.showHeader = false
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_BOOK]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(BookNavigator)