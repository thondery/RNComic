'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: '#000'
  },
  screenTipsView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  screenTipsCenterView: {
    width: 200,
    height: 120,
    backgroundColor: '#333',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  screenTipsCenterTextStyle: {
    color: '#ccc',
    fontSize: 20
  }
})