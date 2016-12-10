'use strict';

import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import codePush from 'react-native-code-push'
import {
  Router,
  Route,
  TabRoute
} from 'kn-react-native-router'
import {
  HomeNavigator,
  UserNavigator,
  SearchNavigator,
  LoginNavigator,
  ShelfNavigator,
  SettingNavigator,
  AboutNavigator,
  BookNavigator,
  ReaderNavigator,
  ClassifyNavigator
} from '../features'

export default class App extends Component {

  componentDidMount () {
    // 提示更新
    codePush.sync({ 
      updateDialog: {
        appendReleaseDescription: true,
        descriptionPrefix: '\n\n更新内容：\n',
        title: '更新',
        mandatoryUpdateMessage: '上课上课考试考试',
        mandatoryContinueButtonLabel: '更新',
        optionalIgnoreButtonLabel: '取消',
        optionalInstallButtonLabel: '安装',
        optionalUpdateMessage: '有一个更新可用，是否更新它？'
      }, 
      installMode: codePush.InstallMode.IMMEDIATE 
    })
    // 静默更新
    codePush.sync()
  }

  render () {
    return (
      <Router {...this.props}>
        <Route name={'search'}
               component={SearchNavigator}
               />
        <Route name={'login'}
               component={LoginNavigator}
               />
        <Route name={'setting'}
               component={SettingNavigator}
               />
        <Route name={'about'}
               component={AboutNavigator}
               />
        <Route name={'book'}
               component={BookNavigator}
               />
        <Route name={'reader'}
               component={ReaderNavigator}
               />
        <Route name={'classify'}
               component={ClassifyNavigator}
               />
        <TabRoute>
          <Route name={'home'} 
                 title={'首页'}
                 icon={() => <Icon name={'home'} size={20} color={'#666'} />}
                 selectIcon={() => <Icon name={'home'} size={20} color={'#f60'} />} 
                 component={HomeNavigator}
                 />
          <Route name={'shelf'}
                 title={'书架'}
                 icon={() => <Icon name={'leanpub'} size={20} color={'#666'} />}
                 selectIcon={() => <Icon name={'leanpub'} size={20} color={'#f60'} />}
                 component={ShelfNavigator}
                 />
          <Route name={'user'} 
                 title={'我的'}
                 icon={() => <Icon name={'user'} size={20} color={'#666'} />}
                 selectIcon={() => <Icon name={'user'} size={20} color={'#f60'} />} 
                 component={() => <UserNavigator onToggleLeftPress={() => this.toggle()} />}
                 />
        </TabRoute>
      </Router>
    )
  }

}