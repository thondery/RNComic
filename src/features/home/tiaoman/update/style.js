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
    
  },
  itemViewStyle: {
    width: width - 24,
    height: (width - 24) * 0.47 + 50,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  itemImageStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 24,
    height: (width - 24) * 0.47,
  },
  itemMainViewStyle: {
    width: width - 24,
    height: 50,
    paddingLeft: 10,
    paddingTop: 5
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
  itemAuthorStyle: {
    position: 'absolute',
    right: 10,
    top: 5,
    fontSize: 13,
    color: '#ccc'
  },
  moreButtonStyle: {
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 10,
    justifyContent: 'center',
    height: 20,
    padding: 3,
    paddingLeft: 8,
    paddingRight: 8
  },
  moreButtonLabelStyle: {
    fontSize: 10,
    color: '#999'
  }
})