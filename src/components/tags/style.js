'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30
  },
  tagViewStyle: {
    borderRadius: 10,
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6
  },
  tagTextStyle: {
    color: '#fff',
    fontSize: 12
  }
})