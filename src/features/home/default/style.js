'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  footerViewStyle: {
    position: 'absolute', 
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 540,
    width: width,
    bottom: -530,
    //left: (width - 50) / 2
  },
  footerBarViewStyle: {
    backgroundColor: '#f60',
    alignItems: 'center',
    height: 540,
    width: 50,
  },
  footerTextStyle: {
    flexWrap: 'wrap', 
    lineHeight: 30, 
    color: '#fff', 
    marginTop: 50
  }
})