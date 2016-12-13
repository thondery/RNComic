'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#fff',
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
    
  },
  itemViewStyle: {
    width: width - 24,
    height: (width - 36) / 2 * 0.47,
    backgroundColor: '#F7F5EC',
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 12
  },
  itemImageStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 36) / 2,
    height: (width - 36) / 2 * 0.47,
  },
  itemMainViewStyle: {
    width: (width - 24) - (width - 36) / 2,
    height: (width - 36) / 2 * 0.47,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10
  },
  itemTitleStyle: {
    fontSize: 14,
    color: '#666'
  },
  itemTextStyle: {
    fontSize: 13,
    color: '#999',
    lineHeight: 30
  },
})