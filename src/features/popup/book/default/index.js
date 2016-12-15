'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  Image,
  ScrollView,
  StatusBar,
  Platform,
  TouchableOpacity
} from 'react-native'
import styles, { width, height } from './style'
import { VibrancyView } from 'react-native-blur'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getImage } from '../../../../services/http'
import Tags from '../../../../components/tags'
import StarBar from '../../../../components/starbar'
import { Button } from 'kn-react-native-views'
import ScrollableTabView from 'react-native-scrollable-tab-view'
//import ScrollableTabBar from './scrollableTabBar'
import { ScrollableTabBar } from 'kn-react-native-views'
import DetailTabView from './detail'
import ChapterTabView from './chapter'
import TopicTabView from './topic'
import _ from 'lodash'

const initBookData = {
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

export default class DefaultContainer extends Component {

  renderHeader () {
    let { Router, collect, bookData, onCollect } = this.props
    bookData = {...initBookData, ...bookData}
    return (
      <Image source={require('../../../../assets/images/2.jpg')}
             style={[styles.headerViewStyle]} >
        {Platform.OS === 'ios' ? (
          <VibrancyView blurType="dark" 
                        style={[styles.headerViewStyle]} />
        ) : null}
          {/*<StatusBar barStyle="light-content" />*/}
        <View style={styles.headerTopbarViewStyle}>
          <TouchableOpacity style={styles.goBackButtonStyle}
                            onPress={() => Router.pop() }>
            <Icon name={'angle-left'} size={30} color={'#ccc'} />
          </TouchableOpacity>
          <View style={styles.headerTopbarRightStyle}>
            <TouchableOpacity style={styles.goBackButtonStyle}
                            onPress={() => onCollect(collect !== 1) }>
              <Icon name={collect === 1 ? 'heart' : 'heart-o'} size={24} color={'#f60'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.goBackButtonStyle}
                            onPress={() => Router.pop() }>
              <Icon name={'share-square-o'} size={24} color={'#ccc'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerBodyViewStyle}>
          <Image source={require('../../../../assets/images/cover_shadow.png')}
                 style={styles.headerBodyImageViewStyle}>
            <Image source={getImage(bookData.book_img)}
                   style={styles.headerBodyImageStyle} />
          </Image>
          <View style={styles.headerBodyInfoViewStyle}>
            <Tags style={styles.headerBodyInfoTagsStyle}
                  tagsData={['玄幻', '搞笑', '恋爱']} />
            <Text style={styles.headerBodyInfoTitleStyle}>{bookData.bookname}</Text>
            <Text style={styles.headerBodyInfoTextStyle}>{bookData.author.username}</Text>
            <StarBar scores={7.5} 
                     style={styles.headerBodyInfoStarBarStyle}
                     textStyle={styles.headerBodyInfoStarBarTextStyle} />
            <Text style={styles.headerBodyInfoTextStyle}>{'人气： 8.77亿'}</Text>
          </View>
        </View>
        
      </Image>
    )
  }

  renderButtonLayer () {
    let { Router, bookData, readrec } = this.props
    bookData = {...initBookData, ...bookData}
    let _readrec = this.getReadrec(bookData, readrec)
    return (
      <View style={styles.buttonLayerView}>
        <Button style={styles.downloadButtonStyle}
                label={'下载'}
                onPress={() => null} />
        <Button style={styles.readRecButtonStyle}
                label={readrec && readrec.chapter && readrec.read_book === bookData._id ?  `续看${_readrec.chapter_tab}话` : '开始阅读'}
                icon={'book'}
                iconColor={'#fff'}
                onPress={() => bookData.chapters.length > 0 ?  Router.push(`reader?id=${_readrec._id}`) : null} />
      </View>
    )
  }

  getReadrec (bookData, readrec) {
    if (bookData.chapters.length <= 0) {
      return null
    }
    let firstChapter = _.nth(bookData.chapters, -1)
    if (!readrec) return firstChapter
    let { chapter, read_book } = readrec
    if (!chapter) return firstChapter
    if (read_book !== bookData._id) return firstChapter
    return chapter
  }

  renderBody () {
    let { Router, bookData, readrec } = this.props
    bookData = {...initBookData, ...bookData}
    return (
      <ScrollableTabView style={styles.bodyViewStyle}
                         initialPage={1}
                         page={1}
                         renderTabBar={() => this.renderScrollableTabBar()}
                         >
        <DetailTabView tabLabel={'详情'}
                       author={bookData.author}
                       content={bookData.content}
                       tags={bookData.tags}
                       updateAt={bookData.update_at} />
        <ChapterTabView tabLabel={'目录'}
                        chapters={bookData.chapters}
                        readrec={readrec}
                        updateAt={bookData.update_at}
                        onPushByChapter={chapter_id => Router.push(`reader?id=${chapter_id}`)} />
        <TopicTabView tabLabel={'话题'}
                      />
      </ScrollableTabView>
    )
  }

  renderScrollableTabBar () {
    return (
      <ScrollableTabBar style={styles.bodyTabBarStyle}
                        tabWidth={(width - 30) / 3}
                        backgroundColor={'transparent'}
                        textStyle={{fontSize: 18, paddingBottom: 10}}
                        inactiveTextColor={'#666'}
                        activeTextColor={'#f60'}
                        underlineColor={'#f60'}
                        leftMenu={null}
                        rightMenu={null} />
    )
  }

  render () {
    let { bookData } = this.props
    let _scrollView
    return bookData ? (
      <ScrollView style={styles.container}
                  ref={(scrollView) => { _scrollView = scrollView }}
                  //onScroll={ e => this._handleEndDrag(_scrollView) }
                  >
        {this.renderHeader()}
        {this.renderButtonLayer()}
        {this.renderBody()}
      </ScrollView>
    ) : null
  }

  _handleEndDrag (_scrollView) {
    //var offsetY = evt.nativeEvent.contentOffset.y
    console.log(_scrollView)
  }
}