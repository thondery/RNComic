'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'
import { Button } from 'kn-react-native-views'
import * as actions from './action'

import Icon from 'react-native-vector-icons/FontAwesome'
import styles, { width, height } from './editmenu.style'

class EditMenuView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bottomVaule: new Animated.Value(-50)
    }
  }

  componentWillReceiveProps (nextProps) {
    let { isOpen } = nextProps
    if (nextProps.isOpen !== this.props.isOpen) {
      if (isOpen) {
        this.showHandle()
      }
      else {
        this.hideHandle()
      }
    }
  }

  render () {
    let { isOpen, tabLabel, selectItem } = this.props
    return (
      <Animated.View style={[styles.container, {bottom: this.state.bottomVaule}]}>
        <Button style={styles.buttonStyle}
                label={'全选'}
                labelStyle={styles.buttonTextStyle}
                icon={'check-square-o'}
                iconColor={'#85b200'}
                iconSize={24}
                />
        <Button style={[styles.buttonStyle, {borderLeftWidth: 1}]}
                label={'删除'}
                labelStyle={styles.buttonTextStyle}
                icon={'trash-o' || 'times-circle-o'}
                iconColor={selectItem.length > 0 ? '#ffa500' : '#ccc'}
                iconSize={24}
                />
      </Animated.View>
    )
  }

  showHandle() {
    Animated.sequence([
      Animated.timing(this.state.bottomVaule, {
        toValue: 0,
        duration: 150,
        easing: Easing.linear
      })
    ])
    .start()
  }

  hideHandle() {
    Animated.sequence([
      Animated.timing(this.state.bottomVaule, {
        toValue: -50,
        duration: 150,
        easing: Easing.linear
      })
    ])
    .start()
  }
  
}

export default EditMenuView