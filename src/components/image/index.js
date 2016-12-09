'use strict'

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import Spinner from 'react-native-spinkit'
import styles, { width, height } from './style'

export default class ImageContainer extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      loadPrefetched: false
    }
  }

  render () {
    let { style } = this.props
    let { loadPrefetched } = this.state
    return (
      <Image {...this.props}
             style={[styles.container, style]}
             onLoad={this.onLoadHandle.bind(this)} >
        {loadPrefetched ? this.props.children : (
          <Spinner type={'FadingCircleAlt'} color={'#333'} size={20} />
        )}
      </Image>
    )
  }

  onLoadHandle () {
    this.setState({ loadPrefetched: true })
  }

}