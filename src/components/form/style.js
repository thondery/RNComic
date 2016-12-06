'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width - 30,
    alignItems: 'center',
    marginTop: 10
  },
  buttonStyle: {
    width: width - 30,
    marginTop: 10
  },
  disableLayer: {
    position: 'absolute', 
    top: -10, 
    left: -15, 
    width: width, 
    height: height, 
    backgroundColor: '#666', 
    opacity: .4
  }
})