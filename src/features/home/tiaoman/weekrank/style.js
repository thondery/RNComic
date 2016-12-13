'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    paddingLeft: 12,
    paddingRight: 12,
    //backgroundColor: '#fff',
  },
  headerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50
  },
  headerLeftViewStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerRightViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextStyle: {
    color: '#666',
    fontSize: 15,
    fontWeight: 'bold'
  },
  bodyerViewStyle: {
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
  },
  itemViewStyle: {
    width: width - 48,
    height: ((width - 36) / 2 - 20) * 0.47 + 20,
    //backgroundColor: '#F7F5EC',
    flexDirection: 'row',
    borderColor: '#eee',
    borderBottomWidth: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: 12
  },
  itemImageStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 36) / 2 - 20,
    height: ((width - 36) / 2 - 20) * 0.47,
  },
  itemMainViewStyle: {
    width: (width - 30) - (width - 36) / 2,
    height: (width - 36) / 2 * 0.47,
    paddingLeft: 16,
    paddingTop: 10,
    paddingRight: 10
  },
  itemTitleStyle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10
  },
  itemTextStyle: {
    fontSize: 13,
    color: '#999',
    lineHeight: 20
  },
  itemIndexImageStyle: {
    position: 'absolute',
    bottom: 1,
    right: 0,
    width: 36, 
    height: 60
  },
  itemIndexTextStyle: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    fontSize: 28, 
    color: '#ddd'
  }
})