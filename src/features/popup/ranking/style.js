'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: '#F7F5EC',
    paddingTop: 7
  },
  footerViewStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
    paddingTop: 10
  },
  footerTextStyle: {
    color: '#999',
    lineHeight: 15,
    marginLeft: 5
  },
  notSearchStyle: {
    width: width,
    backgroundColor: '#fff',
    height: 120,
    alignItems: 'center',
    opacity: .6
  }
})