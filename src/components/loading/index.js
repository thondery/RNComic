'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  Animated,
  Easing,
  TextInput 
} from 'react-native'
import Spinner from 'react-native-spinkit'
import styles, { width, height } from './style'

export default class Loading extends Component {

  static propTypes = {
    isOpen: PropTypes.bool
  }

  static defaultProps = {
    isOpen: false
  }

  constructor(props) {
    super(props)
    this.state = {
      topVaule: new Animated.Value(height)
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
    let { isOpen } = this.props
    return (
      <Animated.View style={[styles.container, {top: this.state.topVaule}]}>
        <View style={[styles.loadingViewStyle, {width: 80, height: 80}]}>
          <Spinner type="Wave" color={'#ffffff'} size={40} />
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
        toValue: height,
        duration: 300,
        easing: Easing.linear
      })
    ])
    .start()
  }

}