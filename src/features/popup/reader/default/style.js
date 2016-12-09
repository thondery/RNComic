'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    //justifyContent: 'center',
    backgroundColor: '#333'
  },
  bodyViewStyle: {
    
  },
  imageViewStyle: {
    width: width,
    height: height,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  clickPageStyle: {
    height: height,
    width: 80
  },
  clickToolStyle: {
    height: height,
    width: width - 160
  },

  pageInfoViewStyle: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 24,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#000',
    opacity: .6
  },
  pageInfoTextStyle: {
    lineHeight: 20,
    color: '#999'
  },
})