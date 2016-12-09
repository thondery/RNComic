'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    height: 60,
    backgroundColor: '#222',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center'
  },
  stripViewStyle: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
  leftViewStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightViewStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }

})