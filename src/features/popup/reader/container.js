'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  NetInfo,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import styles, { width, height } from './style'
import _ from 'lodash'

import * as storageService from '../../../services/storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import { 
  Loading,
  Tips
} from 'kn-react-native-views'
import Toast from 'react-native-root-toast'
import DefaultContainer from './default'

class ReaderContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      disable: false,
      pageIndex: 0,
      outRange: false,
      rec_page: 0,
      setPage: false
    }
  }


  _handleConnectionInfoChange (connectionInfo) {
    this.props.actions.getNetInfo(connectionInfo)
  }

  componentDidMount () {
    let { Router } = this.props
    let { query } = Router
    this.props.actions.getChapter(query.id)
    NetInfo.addEventListener(
      'change',
      this._handleConnectionInfoChange.bind(this)
    )
    let that = this
    NetInfo.fetch().done(
      (connectionInfo) => { 
        this.props.actions.getNetInfo(connectionInfo)
       }
    )
  }

  componentWillReceiveProps (nextProps) {
    let { getChapterError, auth, bookReadrec, chapterData } = nextProps
    let { Router } = this.props
    if (getChapterError) {
      this.showToast(_.isError(getChapterError) ? '无法连接到服务器，请稍后再试' : getChapterError.message)
    }
    if (chapterData && chapterData._id === Router.query.id && this.state.setPage) {
      //this.setState({pageIndex: bookReadrec.lastpage, setPage: false})
    }
  }

  componentWillUnmount () {
    //this.props.actions.collectInit()
    NetInfo.removeEventListener(
      'change',
      this._handleConnectionInfoChange.bind(this)
    )
    console.log(this.props.chapterData)
    console.log(this.state.rec_page)
    let { _id, inbook } = this.props.chapterData
    if (this.props.auth) {
      this.props.actions.updateReadrec(inbook._id, _id, this.state.rec_page)
    }
  }

  _handleConnectionInfoChange (connectionInfo) {
    this.props.actions.getNetInfo(connectionInfo)
  }

  render () {
    let { classType, getChapterPending, getChapterError, chapterData, bookReadrec, Router, connectionInfo } = this.props
    if (getChapterPending || getChapterError) {
      return (
        <View style={styles.container}>
          <Loading isOpen={getChapterPending} />
        </View>
      )
    }
    
    switch (classType) {
      case 0: {
        return (
          <View style={styles.container}>
            <DefaultContainer chapterData={chapterData}
                              //collect={useCollect === -1 ? bookCollect : useCollect}
                              readrec={this.state.setPage ? {lastpage: 0} : bookReadrec}
                              //onCollect={this.onCollectHandle.bind(this)}
                              pageIndex={this.state.pageIndex}
                              connectionInfo={connectionInfo}
                              prevChapter={this.prevChapterChange.bind(this)}
                              nextChapter={this.nextChapterChange.bind(this)}
                              onPageChange={this.onPageChange.bind(this)}
                              Router={Router} />
            { this.state.outRange ?
              <Tips isOpen={this.state.outRange}
                tipsText={this.state.pageIndex === 0 ? '没有上一章了～' : '没有下一章了～'} />
              : null }
          </View>
        )
      }
      case 1: {
        return null
      }
      default: {
        return null
      }
    }
  }

  prevChapterChange () {
    let { chapterData } = this.props
    let that = this
    if (chapterData) {
      let { chapters } = chapterData.inbook
      let index = _.findIndex(chapters, {_id: chapterData._id})
      if (index <= 0) {
        //没有上一章了～
        this.setState({outRange: true, pageIndex: index})
        let ltr = setTimeout(function() {
          that.setState({outRange: false, setPage: true})
          clearTimeout(ltr)
          ltr = null
        }, 1500)
        return
      }
      this.props.actions.getChapter(chapters[index - 1]._id, false)
    }
  }

  nextChapterChange () {
    let { chapterData } = this.props
    let that = this
    if (chapterData) {
      let { chapters } = chapterData.inbook
      let index = _.findIndex(chapters, {_id: chapterData._id})
      if (index >= chapters.length - 1) {
        //没有下一章了～
        this.setState({outRange: true, pageIndex: index})
        let ltr = setTimeout(function() {
          that.setState({outRange: false, setPage: true})
          clearTimeout(ltr)
          ltr = null
        }, 1500)
        return
      }
      this.props.actions.getChapter(chapters[index + 1]._id, false)
    }
  }

  onPageChange (index) {
    this.setState({rec_page: index})

    /*let { _id, inbook } = this.props.chapterData
    if (this.props.auth) {
      this.props.actions.updateReadrec(inbook._id, _id, index)
    }*/
  }

  showToast (message, disable = false) {
    Toast.show(message, {
      duration: Toast.durations.SHORT, // toast显示时长
      position: Toast.positions.CENTER, // toast位置
      shadow: false, // toast是否出现阴影
      animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
      hideOnPress: false, // 是否可以通过点击事件对toast进行隐藏
      delay: 0, // toast显示的延时
      onShow: () => {
        if (disable) {
          this.setState({disable: true})
        }
      },
      onHidden: () => {
        if (disable) {
          this.setState({disable: false})
        }
      }
    })
  }

}

function mapStateToProps (state) {
  return {
    getChapterPending: state.Reader.getChapterPending,
    getChapterError: state.Reader.getChapterError,
    chapterData: state.Reader.chapterData,
    //bookCollect: state.Reader.bookCollect,
    bookReadrec: state.Reader.bookReadrec,
    classType: state.Reader.classType,
    readrecInfo: state.Shelf.readrecInfo,
    //useCollect: state.Shelf.useCollect,
    connectionInfo: state.Reader.connectionInfo,
    auth: state.Root.auth
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(ReaderContainer)