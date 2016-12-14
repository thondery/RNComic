'use strict'

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: (width - 10 - 50) / 3,
    height: (width - 10 - 50) / 3 * 1.3 + 50,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 15
  },
  imageView: {
    backgroundColor: '#000',
    height: (width - 10 - 50) / 3 * 1.3,
    width: (width - 10 - 50) / 3,
    alignItems: 'center',
    //justifyContent: 'center'
  },
  imageStyle: {
    width: (width - 10 - 50) / 3,
    height: (width - 10 - 50) / 3 * 1.3
  },
  mainView: {
    //backgroundColor: 'blue',
    height: 50,
    width: (width - 10 - 50) / 3,
    alignItems: 'center',
    paddingTop: 8
  },
  mainTextStyle: {
    fontSize: 13,
    lineHeight: 20,
    color: '#999'
  },
  titleNameStyle: {
    fontSize: 15,
    color: '#666',
  },
  clickImageStyle: {
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    width: 60, 
    height: 64
  }
})