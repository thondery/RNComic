'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#fff',
    marginBottom: 10
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
    width: (width - 48) / 3,
    height: (width - 48) / 3 * 1.35 + 45,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 12
  },
  itemImageStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 48) / 3,
    height: (width - 48) / 3 * 1.35,
  },
  itemMainViewStyle: {
    //backgroundColor: '#fff', 
    height: 45, 
    width: (width - 48) / 3, 
    padding: 7,
    paddingLeft: 0
  },
  itemTitleStyle: {
    fontSize: 14, 
    color: '#333', 
    fontWeight: 'bold'
  },
  itemTextStyle: {
    fontSize: 12, 
    color: '#777', 
    marginTop: 6
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
  },
  itemTopViewStyle: {
    width: width - 24,
    height: (width - 98) / 3 * 1.35 + 10,
    flexDirection: 'row',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  itemTopImageStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 98) / 3,
    height: (width - 98) / 3 * 1.35,
  },
  itemTopMainViewStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    width: width - (width - 98) / 3 - 24
  },
  itemTopTitleStyle: {
    fontSize: 18, 
    color: '#ff9a6a', 
    fontWeight: 'bold',
    marginTop: 12
  },
  itemTopTextStyle: {
    fontSize: 12, 
    color: '#666',
    lineHeight: 16,
    marginTop: 12
  },
  itemTopContentStyle: {
    fontSize: 12, 
    color: '#999',
    lineHeight: 16,
    marginTop: 12
  },
  itemTopIconStyle: {
    position: 'absolute', 
    top: 0, 
    right: 0, 
    width: 50, 
    height: 50
  }
})