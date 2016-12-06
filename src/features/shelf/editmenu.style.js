'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width,
    height: 50,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#eee'
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    width: width / 2,
    borderColor: '#eee'
  },
  buttonTextStyle: {
    color: '#666',
    fontSize: 16
  }
})