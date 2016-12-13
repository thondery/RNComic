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
  chapter_tab: 0,
  chaptername: ''
}

export default class Update extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps = {
    data: null
  }

  render () {
    let { data, Router } = this.props
    if (data.length < 1) {
      for (let i = data.length; i < 1; i++) {
        data.push(null)
      }
    }
    data = data.slice(0, 1)
    return (
      <View style={styles.container} >
        <View style={styles.headerViewStyle}>
          <View style={styles.headerLeftViewStyle}>
            <Text style={styles.headerTextStyle}>今日更新</Text>
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
          if (item) {
            let { recommend_book, recommend_img, recommend_content, recommend_name } = item
            let { chapterId, chapterText } = this.getLastChapter(recommend_book.chapters)
            return (
              <TouchableOpacity key={i}
                                style={styles.itemViewStyle}
                                onPress={() => Router.push(`book?id=${recommend_book._id}`)} >
                <Image source={getImage(recommend_img)} style={styles.itemImageStyle} />
                <View style={styles.itemMainViewStyle}>
                  <Text style={styles.itemTitleStyle}>{recommend_name || recommend_book.bookname}</Text>
                  <Text style={styles.itemTextStyle}>{chapterText}</Text>
                  <Text style={styles.itemAuthorStyle}>{`作者: ${recommend_book.author.username}`}</Text>
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

  getLastChapter (data) {
    if (!(data.length > 0)) {
      return {
        chapterId: null,
        chapterText: `第0话:`
      }
    }
    let lastChapter = _.assign(initChapter, data[0])
    return {
      chapterId: lastChapter._id,
      chapterText: `第${lastChapter.chapter_tab}话: ${lastChapter.chaptername}`
    }
  }

}