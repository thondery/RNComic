'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity
} from 'react-native'

class LoginContainer extends Component {

  render () {
    return (
      <View style={{
              flex:1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
        <Text style={{fontSize:18}}>Login Page</Text>
        <TouchableOpacity onPress={this.pressHandle.bind(this)}>
          <Text>Goto Rigister Page</Text>
        </TouchableOpacity>
      </View>
    )
  }

  pressHandle () {
    this.props.Router.push('RegisterPage', '注册', 'login')
  }

}

export default LoginContainer