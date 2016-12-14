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
import StarBar from '../../../../components/starbar'
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

const selectIcon = [
  require('../../../../assets/images/click_me.png'),
  require('../../../../assets/images/click_me_on.png')
]

class RowItem extends Component {

  static propTypes = {
    editMode: PropTypes.bool,
    selected: PropTypes.bool
  }

  static defaultProps = {
    editMode: false,
    selected: false
  }

  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  render () {
    let { data, onPushByBook, editMode, selected } = this.props
    let itemData = _.assign(initItem, data.collect_book)
    let authorText = `作者：${itemData.author.username}`
    let { chapterId, chapterText } = this.getLastChapter(itemData.chapters)
    return (
      <TouchableOpacity style={styles.container}
                        onPress={onPushByBook.bind(this, itemData._id)} >
        <View style={styles.imageView}>
          <Image source={getImage(itemData.book_img)} style={[styles.imageStyle, editMode ? {opacity: .4} : null]} />
          {editMode ? <Image source={selectIcon[selected ? 1 : 0]} style={styles.clickImageStyle} /> : null}
        </View>
        <View style={styles.mainView}>
          <Text style={styles.titleNameStyle} numberOfLines={1}>{itemData.bookname}</Text>
          <Text style={styles.mainTextStyle} numberOfLines={1}>{chapterText}</Text>
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