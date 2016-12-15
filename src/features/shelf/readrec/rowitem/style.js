'use strict'

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    //backgroundColor: '#fff',
    //width: width,
    height: 80 * 1.3 + 10,
    //marginLeft: 65,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5
  },
  itemViewStyle: {
    backgroundColor: '#fff',
    width: width - 10,
    height: 80 * 1.3 + 10,
    flexDirection: 'row',
  },
  editModeViewStyle: {
    width: 0,
    height: 80 * 1.3 + 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageView: {
    //backgroundColor: '#000',
    height: 80 * 1.3 + 10,
    width: 80 + 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 80,
    height: 80 * 1.3
  },
  mainView: {
    //backgroundColor: 'blue',
    paddingLeft: 10,
    paddingTop: 15
  },
  mainTextStyle: {
    fontSize: 13,
    lineHeight: 20,
    color: '#999'
  },
  titleNameStyle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 6
  },
  clickImageStyle: {
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    width: 60, 
    height: 64
  },
  toolView: {
    //backgroundColor: 'green',
    position: 'absolute', 
    right: 0,
    height: 80 * 1.3 + 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolButtonStyle: {
    width: 100, 
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
    color: '#999',
    fontSize: 13
  },
})