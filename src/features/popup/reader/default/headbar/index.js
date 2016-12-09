'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'
import styles, { width, height } from './style'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HeadBar extends Component {

  static propTypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string
  }

  static defaultProps = {
    isOpen: false,
    title: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      topVaule: new Animated.Value(-50)
    }
  }

  componentDidMount () {
    let { isOpen } = this.props
    if (isOpen) {
      this.showHandle()
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
    let { title, Router } = this.props
    return (
      <Animated.View style={[styles.container, {top: this.state.topVaule}]} >
        <View style={styles.leftViewStyle}>
          <TouchableOpacity style={styles.backButtonStyle}
                            onPress={() => Router.pop() }>
            <Icon name={'angle-left'} size={40} color={'#ccc'} />
          </TouchableOpacity>
          <Text style={styles.titleTextStyle} numberOfLines={1}>{title}</Text>
        </View>
        <View style={styles.rightViewStyle}>
          
        </View>
      </Animated.View>
    )
  }

  showHandle() {
    Animated.sequence([
      Animated.timing(this.state.topVaule, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear
      })
    ])
    .start()
  }

  hideHandle() {
    Animated.sequence([
      Animated.timing(this.state.topVaule, {
        toValue: -50,
        duration: 300,
        easing: Easing.linear
      })
    ])
    .start()
  }

}