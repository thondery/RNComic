'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    //width: width
    //justifyContent: 'center',
    //backgroundColor: '#F7F5EC'
  },
  itemViewStyle: {
    height: width * .45,
    width: width
  },
  itemImageStyle: {
    height: width * .45,
    resizeMode: 'stretch'
  }
})