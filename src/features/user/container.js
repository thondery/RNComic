'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Button, List } from 'kn-react-native-views'
import * as actions from '../../containers/action'
import styles, { width, height } from './style'

class UserContainer extends Component {

  renderHeaderComponent () {
    let { auth, Router } = this.props
    return auth ? (
      <View style={styles.headerView}>
        <View style={styles.headerLeftView}>
          <View style={styles.avatarView}>
            <Icon name={'drupal'} 
                  size={54}
                  color={'#999'} 
                  style={{backgroundColor: 'transparent'}} />
          </View>
          <Text style={styles.tipsTextStyle}>{auth.username}</Text>
        </View>
        <View style={styles.headerRightView}>
          <Button style={styles.reportButtonStyle}
                  label={'签到'}
                  labelStyle={styles.reportButtonTextStyle}
                  />
        </View>
      </View>
    ) : (
      <TouchableOpacity style={styles.headerView}
                        onPress={() => Router.push('login', '登录')}>
        <View style={styles.headerLeftView}>
          <View style={styles.avatarView}>
            <Icon name={'drupal'} 
                  size={54}
                  color={'#999'} 
                  style={{backgroundColor: 'transparent'}} />
          </View>
          <Text style={styles.tipsTextStyle}>大人，请登录</Text>
        </View>
        <View style={styles.headerRightView}>
          <Button style={styles.reportButtonStyle}
                  label={'签到'}
                  labelStyle={styles.reportButtonTextStyle}
                  />
        </View>
      </TouchableOpacity>
    )
  }

  render () {
    let { Router } = this.props
    let optons = [
      [
        {
          name: '我的VIP',
          icon: 'vimeo-square',
          note: '开通VIP',
          hot: false,
          onPress: () => null
        },
        {
          name: '我的账户',
          icon: 'drupal',
          note: '',
          hot: false,
          onPress: () => null
        },
        {
          name: '逗币商城',
          icon: 'shopping-cart',
          note: '',
          hot: false,
          onPress: () => null
        }
      ],
      [
        {
          name: '我的小纸条',
          icon: 'wpforms',
          note: '',
          hot: false,
          onPress: () => null
        }
      ],
      [
        {
          name: '问题反馈',
          icon: 'question-circle',
          note: '',
          hot: false,
          onPress: () => null
        },
        {
          name: '设置',
          icon: 'cog',
          note: '',
          hot: false,
          onPress: () => Router.push('setting', '设置')
        }
      ]
    ]
    return (
      <ScrollView style={styles.container}>
        {this.renderHeaderComponent()}
        {optons.map( (item, i) => {
          return (
            <List key={i} options={item} />
          )
        })}
        
      </ScrollView>
    )
  }

}

//export default UserContainer

function mapStateToProps (state) {
  return {
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
  )(UserContainer)