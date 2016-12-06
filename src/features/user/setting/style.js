'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    //backgroundColor: '#F7F5EC'
  },
  userButtonStyle: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  userButtonTextStyle: {
    color: '#666',
    fontSize: 16
  }
})