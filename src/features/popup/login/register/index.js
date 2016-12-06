'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import Toast from 'react-native-root-toast'
import { 
  Button, 
  Form, 
  FormInput, 
  Loading 
} from 'kn-react-native-views'
import * as actions from '../../../../containers/action'
import styles, { width, height } from './style'

class RigisterContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      disable: false
    }
  }

  componentWillReceiveProps (nextProps) {
    let { registerPending, registerError, auth } = nextProps
    if (registerError) {
      this.showToast(_.isError(registerError) ? '无法连接到服务器，请稍后再试' : registerError.message)
      if (!_.isError(registerError)) {
        this.refs.formreg.refs.username.refs.username.focus()
      }
    }
    if (auth) {
      this.props.Router.pop()
    }
  }

  render () {
    let { registerPending, registerError } = this.props
    let options = [
      {
        type: 'forminput',
        name: 'username',
        label: '用户名',
        placeholder: '请输入用户名',
        returnKeyType: 'next'
      },
      {
        type: 'forminput',
        name: 'email',
        label: '邮箱',
        placeholder: '请输入邮箱地址',
        keyboardType: 'email-address',
        returnKeyType: 'next'
      },
      {
        type: 'forminput',
        name: 'password',
        label: '密  码',
        placeholder: '请输入密码',
        password: true,
        returnKeyType: 'default'
      }
    ]
    return (
      <View style={styles.container}>
        <Form options={options}
              ref={'formreg'}
              buttonLabel={'注 册'}
              disable={this.state.disable}
              buttonPress={this.buttonPressHandle.bind(this)} />
        <View style={styles.footerViewStyle}>
          <Text />
          <Button style={styles.footerButtonStyle}
                  label={'已有账号？马上登录'} 
                  labelStyle={styles.footerButtonTextStyle}
                  onPress={this.props.Router.pop.bind(this, 'login')}/>
        </View>
        <Loading isOpen={registerPending} />
      </View>
    )
  }

  buttonPressHandle (body) {
    let { username, email, password } = body
    if (!username || username === '') {
      this.refs.formreg.refs.username.refs.username.focus()
      return this.showToast('用户名不能为空')
    }
    if (!email || email === '') {
      this.refs.formreg.refs.email.refs.email.focus()
      return this.showToast('邮箱不能为空')
    }
    if (!password || password === '') {
      this.refs.formreg.refs.password.refs.password.focus()
      return this.showToast('密码不能为空')
    }
    this.refs.formreg.refs.username.refs.username.blur()
    this.refs.formreg.refs.email.refs.email.blur()
    this.refs.formreg.refs.password.refs.password.blur()
    this.props.actions.register(body)
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
    registerError: state.Root.registerError,
    registerPending: state.Root.registerPending,
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
  )(RigisterContainer)