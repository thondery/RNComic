'use strict'

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width - 10,
    height: 70 * 1.3 + 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5
  },
  imageView: {
    //backgroundColor: 'red',
    height: 70 * 1.3 + 10,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainView: {
    //backgroundColor: 'blue',
    height: 70 * 1.3 + 10,
    width: width - 80 - 80 - 10
  },
  toolView: {
    //backgroundColor: 'green',
    height: 80 * 1.3 + 10,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 70,
    height: 70 * 1.3
  },
  toolButtonStyle: {
    width: 50, 
    height: 70, 
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolButtonView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolButtonTextStyle: {
    padding: 5,
    color: '#333'
  },
  mainTextStyle: {
    lineHeight: 20,
    color: '#999'
  },
  titleNameStyle: {
    fontSize: 17,
    lineHeight: 30,
    color: '#666',
    marginBottom: 1
  }
})