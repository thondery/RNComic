'use strict'

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width,
    height: 70 * 1.3 + 20,
    flexDirection: 'row'
  },
  imageView: {
    //backgroundColor: 'red',
    height: 70 * 1.3 + 10,
    width: 80,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 70,
    height: 70 * 1.3
  },
  mainView: {
    //backgroundColor: 'blue',
    height: 70 * 1.3 + 20,
    width: width - 80 - 10 - 10,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  mainTextStyle: {
    lineHeight: 20,
    color: '#999'
  },
  titleNameStyle: {
    fontSize: 17,
    marginTop: 20,
    color: '#666',
    marginBottom: 5
  }
})