'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  scoresText: {
    color: '#f60',
    fontSize: 12,
    marginLeft: 4
  }
})