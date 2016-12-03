'use strict';

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  PageNavigator,
  actions
} from 'kn-react-native-router'
import * as types from '../../../router'
import LoginContainer from './login'
import RegisterContainer from './register'

const { 
  navigationPop,
  navigationPush,
  navigationLoginReset
} = actions

class LoginNavigator extends PageNavigator {

    constructor(props) {
      super(props)
      this.name = 'login'
      this.container = {
        LoginPage: {
          routeKey: 'LoginPage',
          component: LoginContainer
        },
        RegisterPage: {
          routeKey: 'RegisterPage',
          component: RegisterContainer
        }
      }
      //this.showHeader = false
    }

}

function mapStateToProps(state) {
  return {
    navigationState: state.navigation.navigationStates[types.NAVIGATOR_NAME_LOGIN]
  }
}

export default connect(mapStateToProps, {
      navigationPop,
      navigationPush,
      navigationLoginReset
    }
  )(LoginNavigator)