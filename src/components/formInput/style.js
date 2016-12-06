'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width - 30,
    height: 50,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  textInputStyle: {
    width: width - 30,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10
  },
  labelViewStyle: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelTextStyle: {
    fontSize: 16
  }
})