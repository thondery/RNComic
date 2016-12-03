'use strict';

import { StyleSheet } from 'react-native'
import styles, { width, height } from '../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    ...styles.container,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timesText: {
    fontSize: 240,
    fontWeight: '500',
    color: '#999'
  }
})