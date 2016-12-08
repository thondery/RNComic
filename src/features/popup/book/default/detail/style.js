'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width - 30,
    minHeight: height,
    paddingLeft: 15,
    paddingRight: 15
    //backgroundColor: '#F7F5EC'
  },
  authorViewStyle: {
    width: width - 60,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginTop: 15,
    height: 45
  },
  authorTitleStyle: {
    marginLeft: 35,
    color: '#999',
    fontSize: 12
  },
  authorNameStyle: {
    marginLeft: 35,
    fontSize: 16,
    lineHeight: 20,
    color: '#666',
  },
  authorAvatarStyle: {
    position: 'absolute',
    top: 0,
    //left: 5
  },
  titleTextStyle: {
    fontSize: 14,
    color: '#999',
    paddingTop: 15,
    paddingBottom: 10
  },
  contentViewStyle: {
    width: width - 60,
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
  contentTextStyle: {
    //width: width - 30,
    fontSize: 16,
    lineHeight: 20,
    color: '#666',
    paddingBottom: 20
  },
  tagsStyle: {
    marginTop: 0,
    marginBottom: 5
  },
  updateAtViewStyle: {
    width: width - 60
  },
  updateAtTextStyle: {
    color: '#f60'
  }
})