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
const initChapter = {
  _id: '',
  chapter_tab: 0
}
const topIcon = [
  require('../../../../assets/images/top1.png'),
  require('../../../../assets/images/top2.png')
]

export default class FastRise extends Component {

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
            <Text style={styles.headerTextStyle}>上升最快</Text>
          </View>
          <View style={styles.headerRightViewStyle}>
            <Button style={styles.moreButtonStyle}
                label={'更多'}
                labelStyle={styles.moreButtonLabelStyle}
                icon={'opencart'}
                iconSize={10}
                iconColor={'#999'}
                onPress={() => null} />
          </View>
        </View>
        <View style={styles.bodyerViewStyle}>
        {data.map( (item, i) => {
          if (i < 2) {
            return this.renderRowTop(item, i)
          }
          if (item) {
            let { recommend_book, recommend_img, recommend_content, recommend_name } = item
            return (
              <TouchableOpacity key={i}
                                style={styles.itemViewStyle}
                                onPress={() => Router.push(`book?id=${recommend_book._id}`)} >
                <Image source={getImage(recommend_img)} style={styles.itemImageStyle} />
                <View style={styles.itemMainViewStyle}>
                  <Text style={styles.itemTitleStyle} numberOfLines={1}>{recommend_name || recommend_book.bookname}</Text>
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

  renderRowTop (item, index) {
    if (item) {
      let { recommend_book, recommend_img, recommend_content, recommend_name } = item
      let { chapterId, chapterText } = this.getLastChapter(recommend_book.chapters)
      let tagsText = _.join(['玄幻', '搞笑', '恋爱'], ' ')
      return (
        <TouchableOpacity key={index}
                          style={styles.itemTopViewStyle}
                          onPress={() => Router.push(`book?id=${recommend_book._id}`)} >
          <Image source={getImage(recommend_img)} style={styles.itemTopImageStyle} />
          <View style={styles.itemTopMainViewStyle}>
            <Text style={styles.itemTopTitleStyle} numberOfLines={1}>{recommend_name || recommend_book.bookname}</Text>
            <Text style={styles.itemTopTextStyle} numberOfLines={2}>{`${chapterText}\n${tagsText}`}</Text>
            <Text style={styles.itemTopContentStyle} numberOfLines={2}>{recommend_content || recommend_book.content}</Text>
          </View>
          <Image source={topIcon[index]} style={styles.itemTopIconStyle} />
        </TouchableOpacity>
      )
    }
    else {
      return (
        <View key={index} style={styles.itemTopViewStyle}>
          <View style={styles.itemTopImageStyle}>
            <Icon name={'image'} size={40} color={'#ccc'} />
          </View>
          <Image source={topIcon[index]} style={styles.itemTopIconStyle} />
        </View>
      )
    }
  }

  getLastChapter (data) {
    if (!(data.length > 0)) {
      return {
        chapterId: null,
        chapterText: `更新到0话`
      }
    }
    let lastChapter = _.assign(initChapter, data[0])
    return {
      chapterId: lastChapter._id,
      chapterText: `更新到${lastChapter.chapter_tab}话`
    }
  }

}