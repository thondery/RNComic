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

class LoginContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      disable: false
    }
  }

  componentWillReceiveProps (nextProps) {
    let { loginPending, loginError, auth } = nextProps
    if (loginError) {
      this.showToast(_.isError(loginError) ? '无法连接到服务器，请稍后再试' : loginError.message)
      if (!_.isError(loginError)) {
        this.refs.formlogin.refs.password.refs.password.focus()
      }
    }
    if (auth) {
      this.props.Router.pop()
    }
  }

  render () {
    let { loginPending, loginError } = this.props
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
              ref={'formlogin'}
              buttonLabel={'登 录'}
              disable={this.state.disable}
              buttonPress={this.buttonPressHandle.bind(this)} />
        <View style={styles.footerViewStyle}>
          <Button style={styles.footerButtonStyle}
                  label={'忘记密码'} 
                  labelStyle={styles.footerButtonTextStyle}
                  onPress={() => null}/>
          <Button style={styles.footerButtonStyle}
                  label={'注册新用户'} 
                  labelStyle={styles.footerButtonTextStyle}
                  onPress={this.props.Router.push.bind(this, 'RegisterPage', '注册', 'login')}/>
        </View>
        <Loading isOpen={loginPending} />
      </View>
    )
  }

  buttonPressHandle (body) {
    let { username, password } = body
    if (!username || username === '') {
      this.refs.formlogin.refs.username.refs.username.focus()
      return this.showToast('用户名不能为空')
    }
    if (!password || password === '') {
      this.refs.formlogin.refs.password.refs.password.focus()
      return this.showToast('密码不能为空')
    }
    this.refs.formlogin.refs.username.refs.username.blur()
    this.refs.formlogin.refs.password.refs.password.blur()
    this.props.actions.login(body)
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
    loginError: state.Root.loginError,
    loginPending: state.Root.loginPending,
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
  )(LoginContainer)