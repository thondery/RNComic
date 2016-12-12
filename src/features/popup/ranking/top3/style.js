'use strict'

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width - 12,
    height: 70 * 1.3 + 10,
    flexDirection: 'row',
    marginBottom: 6
  },
})