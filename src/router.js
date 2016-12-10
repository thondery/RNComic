'use strict';

import {
  types
} from 'kn-react-native-router'

export const NAVIGATOR_NAME_ROOT                = types.NAVIGATOR_NAME_ROOT
export const NAVIGATOR_NAME_LOGIN               = types.NAVIGATOR_NAME_LOGIN
export const NAVIGATOR_NAME_HOME                = types.NAVIGATOR_NAME_HOME
export const NAVIGATOR_NAME_USER                = 'NAVIGATOR_NAME_USER'
export const NAVIGATOR_NAME_SEARCH              = 'NAVIGATOR_NAME_SEARCH'
export const NAVIGATOR_NAME_SHELF               = 'NAVIGATOR_NAME_SHELF'
export const NAVIGATOR_NAME_SETTING             = 'NAVIGATOR_NAME_SETTING'
export const NAVIGATOR_NAME_ABOUT               = 'NAVIGATOR_NAME_ABOUT'
export const NAVIGATOR_NAME_BOOK                = 'NAVIGATOR_NAME_BOOK'
export const NAVIGATOR_NAME_READER              = 'NAVIGATOR_NAME_READER'
export const NAVIGATOR_NAME_CLASSIFY            = 'NAVIGATOR_NAME_CLASSIFY'
export const NAVIGATOR_NAME_RANKING             = 'NAVIGATOR_NAME_RANKING'
export const NAVIGATOR_NAME_RECOMMEND           = 'NAVIGATOR_NAME_RECOMMEND'

export const navigationState = {
  [NAVIGATOR_NAME_ROOT]: {
    index: 0,
    routes: [{
      key: 'MainPage'
    }]
  },
  [NAVIGATOR_NAME_LOGIN]: {
    index: 0,
    routes: [{
      key: 'LoginPage',
      title: '登录'
    }]
  },
  [NAVIGATOR_NAME_HOME]: {
    index: 0,
    routes: [{
      key: 'HomePage',
      title: '首页'
    }]
  },
  [NAVIGATOR_NAME_USER]: {
    index: 0,
    routes: [{
      key: 'UserPage',
      title: '我的'
    }]
  },
  [NAVIGATOR_NAME_SEARCH]: {
    index: 0,
    routes: [{
      key: 'SearchPage',
      title: '搜索'
    }]
  },
  [NAVIGATOR_NAME_SHELF]: {
    index: 0,
    routes: [{
      key: 'ShelfPage',
      title: '书架'
    }]
  },
  [NAVIGATOR_NAME_SETTING]: {
    index: 0,
    routes: [{
      key: 'SettingPage',
      title: '设置'
    }]
  },
  [NAVIGATOR_NAME_ABOUT]: {
    index: 0,
    routes: [{
      key: 'AboutPage',
      title: '关于我们'
    }]
  },
  [NAVIGATOR_NAME_BOOK]: {
    index: 0,
    routes: [{
      key: 'BookPage',
      title: '图书'
    }]
  },
  [NAVIGATOR_NAME_READER]: {
    index: 0,
    routes: [{
      key: 'ReaderPage',
      title: '阅读器'
    }]
  },
  [NAVIGATOR_NAME_CLASSIFY]: {
    index: 0,
    routes: [{
      key: 'ClassifyPage',
      title: '分类列表'
    }]
  },
  [NAVIGATOR_NAME_RANKING]: {
    index: 0,
    routes: [{
      key: 'RankingPage',
      title: '排行榜'
    }]
  },
  [NAVIGATOR_NAME_RECOMMEND]: {
    index: 0,
    routes: [{
      key: 'RecommendPage',
      title: '推荐列表'
    }]
  },
}