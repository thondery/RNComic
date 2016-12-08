'use strict'

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash'

import styles, { width, height } from './style'

const tagColor = ['#7ead56', '#c09b3a', '#ba7156']

export default class Tags extends Component {

  static propTypes = {
    style: View.propTypes.style,
    tagsData: PropTypes.array
  }

  static defaultProps = {
    style: null,
    tagsData: []
  }

  render () {
    let { style, tagsData } = this.props
    return (
      <View style={[styles.container, style]}>
        {
          tagsData.map( (item, i) => {
            let index = tagsData.length - i - 1
            return (
              <View key={i}
                    style={[styles.tagViewStyle, {backgroundColor: tagColor[index]}, i > 0 ? { marginLeft: 4 } : null]}>
                <Text style={styles.tagTextStyle}>{item}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }

}