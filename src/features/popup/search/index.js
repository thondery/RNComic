'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import SearchContainer from './container'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class SearchNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'search'
      this.container = SearchContainer
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_SEARCH]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(SearchNavigator)