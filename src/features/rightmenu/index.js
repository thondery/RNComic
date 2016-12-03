'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles, { width, height } from './style'

export default class RightMenu extends Component {

  render () {
    let { Router } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle}
                          onPress={() => null} >
          <Icon name={'wrench'} size={24} color={'#999'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}
                          onPress={() => Router.push('login', '登录')} >
          <Icon name={'cog'} size={24} color={'#999'} />
        </TouchableOpacity>
      </View>
    )
  }
}