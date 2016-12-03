'use strict';

import {
  types
} from 'kn-react-native-router'

export const NAVIGATOR_NAME_ROOT                = types.NAVIGATOR_NAME_ROOT
export const NAVIGATOR_NAME_LOGIN               = types.NAVIGATOR_NAME_LOGIN
export const NAVIGATOR_NAME_HOME                = types.NAVIGATOR_NAME_HOME
export const NAVIGATOR_NAME_USER                = 'NAVIGATOR_NAME_USER'
export const NAVIGATOR_NAME_SEARCH              = 'NAVIGATOR_NAME_SEARCH'

export const navigationState = {
  [NAVIGATOR_NAME_ROOT]:                        {
                                                  index: 0,
                                                  routes: [{
                                                    key: 'MainPage'
                                                  }]
                                                },
  [NAVIGATOR_NAME_LOGIN]:                       {
                                                  index: 0,
                                                  routes: [{
                                                    key: 'LoginPage',
                                                    title: '登录'
                                                  }]
                                                },
  [NAVIGATOR_NAME_HOME]:                        {
                                                  index: 0,
                                                  routes: [{
                                                    key: 'HomePage',
                                                    title: '首页'
                                                  }]
                                                },
  [NAVIGATOR_NAME_USER]:                        {
                                                  index: 0,
                                                  routes: [{
                                                    key: 'UserPage',
                                                    title: '我的'
                                                  }]
                                                },
  [NAVIGATOR_NAME_SEARCH]:                      {
                                                  index: 0,
                                                  routes: [{
                                                    key: 'SearchPage',
                                                    title: '搜索'
                                                  }]
                                                },
}