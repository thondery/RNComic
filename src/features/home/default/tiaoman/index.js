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

const initItemData = null

export default class Tiaoman extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps = {
    data: null
  }

  render () {
    let { data, Router } = this.props
    if (data.length < 3) {
      for (let i = data.length; i < 3; i++) {
        data.push(null)
      }
    }
    data = data.slice(0, 3)
    return (
      <View style={styles.container} >
        <View style={styles.headerViewStyle}>
          <View style={styles.headerLeftViewStyle}>
            <Text style={styles.headerTextStyle}>条漫每日君</Text>
          </View>
          <View style={styles.headerRightViewStyle}>
            <Button style={styles.moreButtonStyle}
                label={'更多'}
                labelStyle={styles.moreButtonLabelStyle}
                icon={'opencart'}
                iconSize={10}
                iconColor={'#999'}
                onPress={() => Router.push(`recommend?tab=tiaoman`, '条漫每日君')} />
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
                <View style={[styles.itemMainViewStyle, {borderTopWidth: i === 0 ? 0 : 1}]}>
                  <Text style={styles.itemTitleStyle} numberOfLines={1}>{recommend_name || recommend_book.bookname}</Text>
                  <Text style={styles.itemTextStyle} numberOfLines={2}>{recommend_content || recommend_book.content}</Text>
                  <Text style={styles.itemTextStyle} numberOfLines={1}>{recommend_book.author.username}</Text>
                </View>
                <Image source={getImage(recommend_img)} style={styles.itemImageStyle} />
              </TouchableOpacity>
            )
          }
          else {
            return (
              <View key={i} style={styles.itemViewStyle}>
                <View style={[styles.itemMainViewStyle, {borderTopWidth: i === 0 ? 0 : 1}]}>
                  
                </View>
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