'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../containers/action'
import styles, { width, height } from './style'
import List from '../../../components/list'
import { Button } from 'kn-react-native-views'

class SettingContainer extends Component {

  componentWillReceiveProps (nextProps) {
    let { auth, Router, loginOutPending, loginOutError } = nextProps
    if (!auth && this.props.loginOutPending) {
      Router.pop()
    }
  }

  render () {
    let { auth, Router } = this.props
    let optons = [
      [
        {
          name: '版权声明',
          onPress: () => null
        },
        {
          name: '关于我们',
          onPress: () => Router.push('about', '关于我们')
        }
      ]
    ]
    return (
      <ScrollView style={styles.container}>
        {optons.map( (item, i) => {
          return (
            <List key={i} options={item} />
          )
        })}
        <Button style={styles.userButtonStyle}
                label={auth ? '退出当前账号' : '用户登录'}
                labelStyle={styles.userButtonTextStyle}
                onPress={this.userPresshandle.bind(this)}
                />
      </ScrollView>
    )
  }

  userPresshandle () {
    let { auth, Router } = this.props
    if (auth) {
      return Alert.alert('您确定要退出吗？', null, [
        { text: '取消', onPress: () => null },
        { text: '确定', onPress: () => this.props.actions.loginOut() }
      ])
    }
    else {
      Router.push('login', '登录')
    }
  }

}

function mapStateToProps (state) {
  return {
    auth: state.Root.auth,
    loginOutPending: state.Root.loginOutPending,
    loginOutError: state.Root.loginOutError
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
  )(SettingContainer)