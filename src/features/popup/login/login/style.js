'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    //backgroundColor: '#F7F5EC'
  },
  footerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 40
  },
  footerButtonStyle: {
    backgroundColor: 'transparent'
  },
  footerButtonTextStyle: {
    color: '#666', 
    fontSize: 16
  }
})