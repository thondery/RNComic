'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  //Image,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../action'
import styles, { width, height } from './style'
import Swiper from 'react-native-swiper'
import { getImage } from '../../../../services/http'
import Image from '../../../../components/image'
import HeadBar from './headbar'
import FootBar from './footbar'

export default class DefaultContainer extends Component {

  constructor (props) {
    super(props)
		this.state = {
			toolBarOpen: true,
      pageIndex: 0,
      inSlider: false,
      isSet: false
		}
    this._swiperView = null
  }

  componentDidMount () {
    //this.props.actions.showToolBar(true)
    //this.autoHideToolBar()
    let { readrec } = this.props
    //this._swiperView && readrec && this._swiperView.scrollBy(readrec.lastpage, false)
    this._swiperView && readrec && this.gotoPageChange(readrec.lastpage)
    console.log(readrec)
  }

  componentWillReceiveProps (nextProps) {
    let { pageIndex, readrec, chapterData } = nextProps
    //console.log(nextProps)
    if (chapterData && this.state.chapterData && chapterData._id !== this.state.chapterData._id) {
      console.log(chapterData)
      //this._swiperView && readrec && this.gotoPageChange(readrec.lastpage)
    }
    
  }

  componentWillUnmount () {
    this._swiperView = null
  }

  renderBody () {
    let { chapterData } = this.props
    let { chapter_img, chaptername, chapter_tab } = chapterData
    let chapterImage = chapter_img || []
    let total = chapterImage.length
    return (
      <Swiper style={styles.bodyViewStyle}
              ref={(swiperView) => { this._swiperView = swiperView }}
              height={height}
              showsPagination={true}
              autoplay={false}
              loop={false}
              renderPagination={this.renderPagination.bind(this)}
              onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
              >
        {chapterImage.length > 0 ? chapterImage.map( (item, i) => {
          return (
            <Image key={i}
                   source={getImage(item)}
                   style={styles.imageViewStyle} >
              <TouchableOpacity style={styles.clickPageStyle}
                                onPress={() => this.prevPage()} />
              <TouchableOpacity style={styles.clickToolStyle}
                                onPress={() => this.showTools()} />
              <TouchableOpacity style={styles.clickPageStyle}
                                onPress={() => this.nextPage()} />
            </Image>
          )
        }) : (
          <TouchableOpacity style={[styles.clickToolStyle, {width: width}]}
              onPress={() => null} >
          </TouchableOpacity>
        )}
      </Swiper>
    )
  }

  renderPagination (index, total, context) {
    let { chapterData, connectionInfo } = this.props
    let { chapter_tab } = chapterData
    return (
      <View style={styles.pageInfoViewStyle}>
        <Text style={styles.pageInfoTextStyle}>
          {chapter_tab}话 {index+1}/{total} {connectionInfo}
        </Text>
      </View>
    )
  }

  onMomentumScrollEnd (e, state) {
    console.log(state)
    let { index, total} = state
    let { inSlider, pageIndex } = this.state
    console.log(pageIndex)
    if (pageIndex === 0 && index > 1) {
      // 进入上一章节
      console.log('进入上一章节')
      //this.props.prevChapter()
      return
    }
    if (index === 0 && pageIndex === total - 1) {
      // 进入下一章节
      console.log('进入下一章节')
      return
    }
    if (inSlider) {
      this.setState({inSlider: false, pageIndex: state.index, isSet: true})
    }
    else {
      this.setState({toolBarOpen: false, pageIndex: state.index, isSet: true})
    }
    this.props.onPageChange(state.index)
  }

  showTools () {
    let { toolBarOpen } = this.state
    this.setState({toolBarOpen: !toolBarOpen})
  }

  prevPage () {
    let { pageIndex } = this.state
    let { chapterData } = this.props
    if (pageIndex === 0) {
      // 进入上一章节
      this.props.prevChapter()
      return
    }
    this._swiperView.scrollBy(-1, false)
    this.setState({toolBarOpen: false})
  }

  nextPage () {
    let { pageIndex } = this.state
    let { chapterData } = this.props
    if (chapterData.chapter_img.length - 1 <= pageIndex) {
      // 进入下一章节
      this.props.nextChapter()
      return
    }
    this._swiperView.scrollBy(1, false)
    this.setState({toolBarOpen: false})
  }

  render () {
    let { chapterData, Router, prevChapter, nextChapter, pageIndex, readrec } = this.props
    //let { chaptername, chapter_tab } = chapterData
    return chapterData ? (
      <View style={styles.container}>
        <StatusBar hidden />
        {this.renderBody()}
        <HeadBar Router={Router}
                 title={`第${chapterData.chapter_tab}话 － ${chapterData.chaptername}`}
                 isOpen={this.state.toolBarOpen} />
        <FootBar Router={Router}
                 pageIndex={this.state.isSet || !readrec ? this.state.pageIndex : readrec.lastpage}
                 maxPageIndex={chapterData.chapter_img.length - 1}
                 gotoPageChange={this.gotoPageChange.bind(this)}
                 prevChapter={() => prevChapter()}
                 nextChapter={() => nextChapter()}
                 isOpen={this.state.toolBarOpen} />
      </View>
    ) : null
  }

  gotoPageChange(index) {
    //this._swiperView.scrollBy(index, false)
    let that = this
    this.setState({inSlider: true}, () => {
      that._swiperView.scrollBy(index, false)
    })
  }

}