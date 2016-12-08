'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import styles, {width, height} from './style'
import moment from 'moment'
import _ from 'lodash'
import { Button } from 'kn-react-native-views'

export default class ChapterTabView extends Component {

  static ropTypes = {
    chapters: PropTypes.array,
    readrec: PropTypes.object,
    updateAt: PropTypes.string
  }

  static defaultProps = {
    chapters: [],
    readrec: null,
    updateAt: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      desc: true,
      chapterList: [],
      showAll: false
    }
    this.initNum = 9
  }

  componentDidMount () {
    let { chapters } = this.props
    this.setState({chapterList: chapters})
  }

  renderHeader () {
    let { updateAt, chapters } = this.props
    updateAt = moment(updateAt).format('YYYY.MM.DD')
    let lastChapter = chapters.length > 0 ? chapters[0].chapter_tab : 0
    return (
      <View style={styles.headerViewStyle}>
        <Text style={styles.headerTextStyle}>
          <Text style={{color: '#f60', fontSize: 16}}>{updateAt}</Text>
          &nbsp;更新到{lastChapter}话
        </Text>
        <Button style={styles.headerButtonStyle}
                label={this.state.desc ? '正序' : '倒序'} 
                labelStyle={{color: '#999', fontSize: 14}}
                icon={this.state.desc ? 'arrow-up' : 'arrow-down'}
                iconColor={'#ccc'}
                iconSize={18}
                onPress={this.sortByHandle.bind(this)} />
      </View>
    )
  }

  sortByHandle () {
    let { chapters } = this.props
    let _chapters = _.sortBy(chapters, ['chapter_tab', 'asc'])
    this.setState({ 
      chapterList: this.state.desc ? _chapters : chapters, 
      desc: !this.state.desc 
    })
  }

  renderBody () {
    let { chapters, readrec } = this.props
    let { chapterList } = this.state
    return (
      <View style={styles.bodyViewStyle}>
        {chapterList.map( (item, i) => {
          let nextRead = readrec && readrec.chapter._id === item._id
          return i < this.initNum || this.state.showAll ? (
            <Button key={i} 
                    style={[styles.chapterButtonStyle, i % 3 > 0 ? {marginLeft: 20} : null, nextRead ? styles.nextReadButtonStyle : null]}
                    label={item.chapter_tab.toString()} 
                    labelStyle={{color: nextRead ? '#fff' : '#666'}}
                    onPress={() => null} />
          ) : null
        })}
      </View>
    )
  }
  
  renderFooter () {
    let { chapterList, showAll } = this.state
    return chapterList.length > this.initNum && !this.state.showAll ? (
      <Button style={[styles.showAllButtonStyle]}
              label={'大人，查看更多目录'} 
              labelStyle={{color: '#666'}}
              onPress={this.showAllHandle.bind(this)} />
    ) : null
  }

  showAllHandle () {
    this.setState({ showAll: true })
  }

  render () {
    let _View
    return (
      <View style={styles.container} >
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </View>
    )
  }

}