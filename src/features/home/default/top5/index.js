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
const topIcon = [
  {
    color: '#fff',
    bgColor: '#fc8571',
    imgUrl: require('../../../../assets/images/re_top1.png')
  },
  {
    color: '#fff',
    bgColor: '#ff9e73',
    imgUrl: require('../../../../assets/images/re_top2.png')
  },
  {
    color: '#fff',
    bgColor: '#ffca68',
    imgUrl: require('../../../../assets/images/re_top3.png')
  },
  {
    color: '#666',
    bgColor: '#f5f4ef',
    imgUrl: require('../../../../assets/images/re_top4.png')
  },
  {
    color: '#666',
    bgColor: '#f5f4ef',
    imgUrl: require('../../../../assets/images/re_top5.png')
  }
]

export default class Top5 extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps = {
    data: null
  }

  render () {
    let { data, Router } = this.props
    if (data.length < 5) {
      for (let i = data.length; i < 5; i++) {
        data.push(null)
      }
    }
    data = data.slice(0, 5)
    return (
      <View style={styles.container} >
        <View style={styles.headerViewStyle}>
          <View style={styles.headerLeftViewStyle}>
            <Text style={styles.headerTextStyle}>今日TOP5</Text>
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
                                style={[styles.itemViewStyle, {backgroundColor: topIcon[i].bgColor}]}
                                onPress={() => Router.push(`book?id=${recommend_book._id}`)} >
                <Image source={getImage(recommend_img)} style={styles.itemImageStyle} />
                <Image source={topIcon[i].imgUrl} style={styles.itemIndexImageStyle} resizeMode={'contain'} />
                <View style={styles.itemMainViewStyle}>
                  <Text style={[styles.itemTitleStyle, {color: topIcon[i].color}]} numberOfLines={1}>{recommend_name || recommend_book.bookname}</Text>
                  <Text style={[styles.itemTextStyle, {color: topIcon[i].color}]}>{_.join(['玄幻', '搞笑', '恋爱'], ' ')}</Text>
                  <View style={styles.itemFireViewStyle}>
                    <Icon name={'fire'} size={14} color={topIcon[i].color} style={styles.itemFireIconStyle} />
                    <Text style={[styles.itemTextStyle, {color: topIcon[i].color}]}>13.5亿</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }
          else {
            return (
              <View key={i} style={[styles.itemViewStyle, {backgroundColor: topIcon[i].bgColor}]}>
                <View style={styles.itemImageStyle}>
                  <Icon name={'image'} size={40} color={'#ccc'} />
                </View>
                <Image source={topIcon[i].imgUrl} style={styles.itemIndexImageStyle} resizeMode={'contain'} />
              </View>
            )
          }
        })}
        </View>
      </View>
    )
  }

}