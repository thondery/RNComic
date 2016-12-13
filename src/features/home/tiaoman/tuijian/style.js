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
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  itemViewStyle: {
    width: (width - 36) / 2,
    height: (width - 36) / 2 * 0.47 + 45,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 20
  },
  itemImageStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 36) / 2,
    height: (width - 36) / 2 * 0.47,
  },
  itemMainViewStyle: {
    width: (width - 36) / 2,
    height: 45,
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 10
  },
  itemTitleStyle: {
    fontSize: 14,
    color: '#999'
  },
  itemTextStyle: {
    fontSize: 13,
    color: '#ccc',
    lineHeight: 24
  },
})