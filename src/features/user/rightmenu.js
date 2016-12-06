'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles, { width, height } from './rightmenu.style'

export default class RightMenu extends Component {

  render () {
    let { Router } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle}
                          onPress={() => Router.push('setting', '设置')} >
          <Icon name={'cog'} size={24} color={'#f60'} />
        </TouchableOpacity>
      </View>
    )
  }
}