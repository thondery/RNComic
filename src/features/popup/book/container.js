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
    let { getBookError } = nextProps
    if (getBookError) {
      this.showToast(_.isError(getBookError) ? '无法连接到服务器，请稍后再试' : getBookError.message)
    }
  }

  render () {
    let { classType, getBookPending, getBookError, getBookData, bookCollect, bookReadrec, Router } = this.props
    if (getBookPending || getBookError) {
      return (
        <View style={styles.container}>
          <Loading isOpen={getBookPending} />
        </View>
      )
    }
    switch (classType) {
      case 0: {
        return (
          <DefaultContainer bookData={getBookData}
                            collect={bookCollect}
                            readrec={bookReadrec}
                            Router={Router} />
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
    bookReadrec: state.Book.bookReadrec,
    classType: state.Book.classType
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