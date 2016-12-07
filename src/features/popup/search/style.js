'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: '#F7F5EC'
  },
  bodyerView: {
    //backgroundColor: '#666',
    alignItems: 'center',
    //justifyContent: 'center',
    width: width,
    height: height - 64
  },

  historyViewStyle: {
    width: width,
    backgroundColor: '#fff'
  },
  historyHeadViewStyle: {
    width: width,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#F7F5EC',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  historyHeadTextStyle: {
    color: '#ccc',
    fontSize: 14
  },
  historyHeadButtonStyle: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  historyItemStyle: {
    width: width,
    height: 45,
    borderColor: '#F7F5EC',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15
    //justifyContent: 'center'
  },
  historyItemTextStyle: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10
  },
  historyItemIconStyle: {

  },
  footerViewStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5
  },
  footerTextStyle: {
    color: '#999',
    lineHeight: 15,
    marginLeft: 5
  },
  notSearchStyle: {
    width: width,
    backgroundColor: '#fff',
    height: 120,
    alignItems: 'center',
    opacity: .6
  }
})