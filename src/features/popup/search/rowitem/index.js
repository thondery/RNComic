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

import { Button } from 'kn-react-native-views'
import { getImage } from '../../../../services/http'

const initItem = {
  _id: '',
  bookname: '',
  book_img: '',
  book_tm_img: '',
  author: {
    _id: '',
    username: ''
  },
  chapters: [],
  tags: [],
  content: ''
}

const initChapter = {
  _id: '',
  chapter_tab: 0
}

class RowItem extends Component {

  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  render () {
    let { data, onPushByBook, onPushByChapter } = this.props
    let itemData = _.assign(initItem, data)
    let authorText = `作者：${itemData.author.username}`
    let { chapterId, chapterText } = this.getLastChapter(itemData.chapters)
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPushByBook.bind(this, itemData._id)}
        >
        <View style={styles.imageView}>
          <Image 
            source={getImage(itemData.book_img)}
            style={styles.imageStyle} />
        </View>
        <View style={styles.mainView}>
          <Text style={styles.titleNameStyle}>{itemData.bookname}</Text>
          <Text style={styles.mainTextStyle}>{authorText}</Text>
          <Text style={styles.mainTextStyle}>{chapterText}</Text>
          <Text style={styles.mainTextStyle} numberOfLines={1} >{itemData.content}</Text>
        </View>
        <View style={styles.toolView}>
          <Button 
            style={styles.toolButtonStyle}
            viewControl={
              <View style={styles.toolButtonView}>
                <Icon 
                  name={'book'} 
                  size={28} 
                  color={'#4898FC'} 
                  style={styles.toolButtonIconStyle} />
                <Text style={styles.toolButtonTextStyle}>速看</Text>
              </View>
            }
            onPress={onPushByChapter.bind(this, chapterId)}
            />
        </View>
      </TouchableOpacity>
    )
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

export default RowItem