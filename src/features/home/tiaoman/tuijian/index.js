'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  Image,
  TouchableOpacity 
} from 'react-native'
import styles, { width, height } from './style'
import { getImage } from '../../../../services/http'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button } from 'kn-react-native-views'
import _ from 'lodash'

const initItemData = null

export default class Tuijian extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps = {
    data: null
  }

  render () {
    let { data, Router } = this.props
    if (data.length < 6) {
      for (let i = data.length; i < 6; i++) {
        data.push(null)
      }
    }
    data = data.slice(0, 6)
    return (
      <View style={styles.container} >
        <View style={styles.headerViewStyle}>
          <View style={styles.headerLeftViewStyle}>
            <Text style={styles.headerTextStyle}>人气推荐</Text>
          </View>
          <View style={styles.headerRightViewStyle}>
            
          </View>
        </View>
        <View style={styles.bodyerViewStyle}>
        {data.map( (item, i) => {
          if (item) {
            let { recommend_book, recommend_img, recommend_content, recommend_name } = item
            return (
              <TouchableOpacity key={i}
                                style={styles.itemViewStyle}
                                onPress={() => Router.push(`book?id=${recommend_book._id}`)} >
                <Image source={getImage(recommend_img)} style={styles.itemImageStyle} />
                <View style={styles.itemMainViewStyle}>
                  <Text style={styles.itemTitleStyle}>{recommend_name || recommend_book.bookname}</Text>
                  <Text style={styles.itemTextStyle} numberOfLines={1}>{recommend_content || recommend_book.content}</Text>
                </View>
              </TouchableOpacity>
            )
          }
          else {
            return (
              <View key={i} style={styles.itemViewStyle}>
                <View style={styles.itemImageStyle}>
                  <Icon name={'image'} size={40} color={'#ccc'} />
                </View>
              </View>
            )
          }
        })}
        </View>
      </View>
    )
  }

}