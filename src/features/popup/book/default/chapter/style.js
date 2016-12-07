'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width - 30,
    //justifyContent: 'center',
    //backgroundColor: '#F7F5EC'
  },
  headerViewStyle: {
    width: width - 30,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 14,
    color: '#999'
  },
  headerButtonStyle: {
    //width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  bodyViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chapterButtonStyle: {
    width: (width - 70) / 3,
    height: 45,
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 4
  },
  nextReadButtonStyle: {
    backgroundColor: '#ff9b6a'
  },
  showAllButtonStyle: {
    width: width - 30,
    height: 45,
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 4
  }
})