'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
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
  Loading 
} from 'kn-react-native-views'
import Toast from 'react-native-root-toast'
import DefaultContainer from './default'

class BookContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      disable: false
    }
  }

  componentDidMount () {
    let { Router } = this.props
    let { query } = Router
    this.props.actions.getBook(query.id)
  }

  componentWillReceiveProps (nextProps) {
    let { getBookError, auth, useCollect } = nextProps
    let { Router } = this.props
    let { query } = Router
    if (getBookError) {
      this.showToast(_.isError(getBookError) ? '无法连接到服务器，请稍后再试' : getBookError.message)
    }
    if (auth && !this.props.auth) {
      this.props.actions.getBook(query.id)
    }
    if (useCollect !== -1 && this.props.useCollect !== useCollect) {
      this.showToast(useCollect === 1 ? '收藏成功，书架可以查看哦～' : '已从我的书架移除')
    }
  }

  componentWillUnmount () {
    this.props.actions.collectInit()
  }

  render () {
    let { classType, getBookPending, getBookError, getBookData, bookCollect, useCollect, bookReadrec, Router } = this.props
    if (getBookPending || getBookError) {
      return (
        <View style={styles.container}>
          <Loading isOpen={getBookPending} />
        </View>
      )
    }
    switch (classType) {
      case 0: {
        return getBookData ? (
          <DefaultContainer bookData={getBookData}
                            collect={useCollect === -1 ? bookCollect : useCollect}
                            readrec={bookReadrec}
                            onCollect={this.onCollectHandle.bind(this)}
                            Router={Router} />
        ) : null
      }
      case 1: {
        return null
      }
      default: {
        return null
      }
    }
  }

  onCollectHandle (isCollect) {
    let { auth, Router, getBookData } = this.props
    if (!auth) {
      Router.push('login', '登录')
    }
    else {
      if (isCollect) {
        this.props.actions.collect(getBookData._id)
      }
      else {
        this.props.actions.reCollect(getBookData._id)
      }
    }
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
    getBookPending: state.Book.getBookPending,
    getBookError: state.Book.getBookError,
    getBookData: state.Book.getBookData,
    bookCollect: state.Book.bookCollect,
    useCollect: state.Shelf.useCollect,
    bookReadrec: state.Book.bookReadrec,
    classType: state.Book.classType,
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
  )(BookContainer)