'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    height: 50,
    backgroundColor: '#222',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 10
  },
  leftViewStyle: {
    //width: width - 100,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row'
  },
  rightViewStyle: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row'
  },
  backButtonStyle: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextStyle: {
    color: '#ccc',
    fontSize: 16
  }
})