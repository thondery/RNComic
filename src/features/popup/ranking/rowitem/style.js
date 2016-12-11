'use strict'

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width - 12,
    height: 70 * 1.3 + 10,
    flexDirection: 'row',
    marginBottom: 6
  },
  imageView: {
    //backgroundColor: 'red',
    height: 70 * 1.3,
    width: 80,
    //marginLeft: 5,
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
    width: width - 80 - 40,
    borderColor: '#eee',
    borderBottomWidth: 1
  },
  mainTextStyle: {
    lineHeight: 20,
    color: '#999',
    fontSize: 12
  },
  titleNameStyle: {
    fontSize: 17,
    marginTop: 10,
    color: '#666',
    marginBottom: 5
  },
  toolView: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  ranking: {
    color: '#eee',
    fontSize: 40
  },
})