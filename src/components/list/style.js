'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    marginTop: 10
  },
  listViewStyle: {
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 48,
    borderBottomWidth: 1,
  },
  listLeftViewStyle: {
    flexDirection: 'row',

    alignItems: 'center',
    height: 48
  },
  listLeftTextStyle: {
    marginLeft: 10, 
    fontSize: 16, 
    //lineHeight: 10, 
    color: '#666', 
    //paddingTop: 5
  },
  listRightViewStyle: {
    flexDirection: 'row',

    alignItems: 'center',
    height: 48
  },
  listRightTextStyle: {
    marginRight: 10, 
    fontSize: 15, 
  }
})// flexDirection: 'row',