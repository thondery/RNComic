'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  MainNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../router'
import UserContainer from './container'
//import RightMenu from '../rightmenu'

const { 
  navigationPop,
  navigationPush
} = actions

class UserNavigator extends MainNavigator {

  constructor(props) {
    super(props)
    this.name = 'user'
    this.container = UserContainer
  }

  /*renderRightComponent(sceneProps) {
    let route = sceneProps.scene.route
    return (
      <RightMenu Router={this.Router} />
    )
  }*/

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_USER]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush
    }
  )(UserNavigator)