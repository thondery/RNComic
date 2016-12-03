'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import styles, { width, height } from './style'

class UserContainer extends Component {

  render () {
    return (
      <ScrollView style={styles.container}>
        
      </ScrollView>
    )
  }

  pressHandle () {
    this.props.Router.push('login', '登录')
  }
}

export default UserContainer