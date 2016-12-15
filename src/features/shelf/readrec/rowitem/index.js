'use strict'

import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  Animated,
  Easing,
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
      widthVaule: new Animated.Value(0)
    }
  }

  componentWillReceiveProps (nextProps) {
    let { editMode } = nextProps
    if (nextProps.editMode !== this.props.editMode) {
      if (editMode) {
        this.showHandle()
      }
      else {
        this.hideHandle()
      }
    }
  }

  render () {
    let { data, onPushByBook, editMode, selected, onPushByChapter, chapter } = this.props
    let itemData = _.assign(initItem, data.read_book)
    let authorText = `作者：${itemData.author.username}`
    let { chapterId, chapterText } = this.getLastChapter(itemData.chapters)
    console.log(chapter)
    return (
      <TouchableOpacity style={[styles.container]}
                        onPress={onPushByBook.bind(this, itemData._id)} >
        <Animated.View style={[styles.editModeViewStyle, { width: this.state.widthVaule }]}>
          <Icon name={selected ? 'check-square-o' : 'square-o'} size={24} color={selected ? '#85b200' : '#999'} />
        </Animated.View>
        <View style={styles.itemViewStyle}>
          <View style={styles.imageView}>
            <Image source={getImage(itemData.book_img)} style={styles.imageStyle} />
          </View>
          <View style={styles.mainView}>
            <Text style={styles.titleNameStyle} numberOfLines={1}>{itemData.bookname}</Text>
            <Text style={styles.mainTextStyle} numberOfLines={1}>{authorText}</Text>
            <Text style={styles.mainTextStyle} numberOfLines={1}>{chapterText}</Text>
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
                  <Text style={styles.toolButtonTextStyle}>{`续看${chapter.chapter_tab}话`}</Text>
                </View>
              }
              onPress={onPushByChapter.bind(this, chapter._id)}
              />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  showHandle() {
    Animated.sequence([
      Animated.timing(this.state.widthVaule, {
        toValue: 60,
        duration: 150,
        easing: Easing.linear
      })
    ])
    .start()
  }

  hideHandle() {
    Animated.sequence([
      Animated.timing(this.state.widthVaule, {
        toValue: 0,
        duration: 150,
        easing: Easing.linear
      })
    ])
    .start()
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