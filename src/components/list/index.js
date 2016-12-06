'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles, { width, height } from './style'

const initItem = {
  name: '',
  icon: '',
  note: '',
  hot: false,
  onPress: () => nul
}

export default class List extends Component {

  render () {
    let { options } = this.props
    return (
      <View style={styles.container}>
        {options.map( (item, i) => {
          let itemData = {
            ...initItem,
            ...item
          }
          return (
            <TouchableOpacity key={i}
                              style={styles.listViewStyle}
                              onPress={itemData.onPress} >
              <View style={styles.listLeftViewStyle}>
                {itemData.icon ? <Icon name={itemData.icon} size={22} color={'#999'} style={{marginLeft: 15}} /> : null}
                <Text style={styles.listLeftTextStyle}>{itemData.name}</Text>
              </View>
              <View style={styles.listRightViewStyle}>
                <Text style={[styles.listRightTextStyle, {color: itemData.hot ? '#c33' : '#ddd'}]}>{itemData.note}</Text>
                <Icon name={'angle-right'} size={24} color={'#ccc'} style={{marginRight: 15}} />
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}