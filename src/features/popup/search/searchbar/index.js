'use strict'

import React, { Component, PropTypes } from 'react'
import {
  View,
  TextInput
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../action'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles, { width, height } from './style'
import { Button } from 'kn-react-native-views'
import validator from 'validator'
import Toast from 'react-native-root-toast'

class SearchBarContainer extends Component {

  static propTypes = {
    style: View.propTypes.style,
    placeholder: PropTypes.string,
    onCancel: PropTypes.func,
    onChangeText: PropTypes.func
  }

  static defaultProps = {
    style: {},
    placeholder: undefined,
    onCancel: () => null,
    onChangeText: () => null
  }

  constructor (props) {
    super(props)
    this.state = {
      searchText: '',
      disable: false
    }
  }

  componentWillReceiveProps (nextProps) {
    let { searchText, searchListPending } = nextProps
    if (searchListPending) {
      this.setState({ searchText: searchText })
    }
  }

  renderClearButton () {
    return this.state.searchText.length > 0 ? (
      <Button style={styles.clearButtonStyle} 
              viewControl={
                <Icon name={'times'}
                      size={10}
                      color={'#fff'}
                      style={styles.clearButtonIconStyle} />
              }
              onPress={() => this.clearSearchTextHandle()}
              />
    ) : null
  }

  clearSearchTextHandle () {
    this.setState({ searchText: '' })
    this.props.onChangeText('')
  }

  render () {
    let { style, placeholder, onCancel, onSubmit, searchText } = this.props
    return (
      <View style={[styles.container, style]}>
        <View style={styles.inputView}>
          <Icon name={'search'} size={20} color={'#ccc'} style={styles.iconStyle} />
          <TextInput style={styles.textInputStyle}
                     autoCapitalize={'none'}
                     placeholder={placeholder}
                     placeholderColor={'#ccc'}
                     returnKeyType={'search'}
                     onSubmitEditing={this.onSubmitEditingHandel.bind(this)}
                     value={this.state.searchText}
                     onChangeText={this.onChangeTextHandle.bind(this)}
                     />
          { this.renderClearButton() }
        </View>
        <Button style={styles.cancelButtonStyle}
                label={'取消'}
                labelStyle={styles.cancelButtonTextStyle}
                onPress={onCancel.bind(this)} />
      </View>
    )
  }

  onChangeTextHandle (value) {
    this.setState({ searchText: value })
    this.props.onChangeText(value)
  }

  onSubmitEditingHandel () {
    let { searchText } = this.state
    searchText = validator.trim(searchText)
    if (validator.isEmpty(searchText)) {
      return this.showToast('请输入作品名称！')
    }
    this.props.actions.searchBook(searchText)
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
    searchListPending: state.Search.searchListPending,
    searchText: state.Search.searchText
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
  )(SearchBarContainer)