'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    marginRight: 5,
    marginTop: Platform.OS === 'ios' ? 8 : 15,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonStyle: {
    marginLeft: 3,
    marginRight: 3,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})