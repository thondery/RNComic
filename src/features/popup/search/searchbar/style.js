'use strict'

import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    height: 64,
    backgroundColor: '#F7F5EC',
    flexDirection: 'row',
    paddingTop: 24
  },
  inputView: {
    backgroundColor: '#fff',
    width: width - 70,
    height: 30,
    marginLeft: 10,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 4
  },
  iconStyle: {
    marginLeft: 5, 
    marginRight: 5
  },
  textInputStyle: {
    width: width -140, 
    height: 20, 
    fontSize: 14, 
    paddingTop: 2
  },
  clearButtonStyle: {
    width: 18, 
    height: 18, 
    backgroundColor: '#ccc', 
    borderRadius: 9, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 2, 
    marginLeft: 10
  },
  clearButtonIconStyle: {
    marginTop: -1, 
    marginLeft: 0
  },
  cancelButtonStyle: {
    width: 60, 
    height: 30, 
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButtonTextStyle: {
    color: '#f60', 
    fontSize: 16
  }
})