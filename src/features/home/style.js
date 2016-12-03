'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#F7F5EC'
  },
  tabBarStyle: {

  },
  tabView: {
    flex: 1
  }
})