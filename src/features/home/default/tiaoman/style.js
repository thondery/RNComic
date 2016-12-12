'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  headerViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingLeft: 12,
    paddingRight: 12,
    borderColor: '#ddd',
    borderBottomWidth: 1
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
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //flexWrap: 'wrap',
  },
  itemViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 24,
    height: 120,
    //justifyContent: 'center',
    alignItems: 'center',
    //paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 12,
    marginRight: 12
    //backgroundColor: '#f60'
    //marginBottom: 12
  },
  itemImageStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 100,
    marginLeft: 10,
  },
  itemMainViewStyle: {
    //backgroundColor: '#333', 
    height: 120, 
    width: width - 150 - 34, 
    borderColor: '#ddd',
    borderTopWidth: 1,
    //padding: 7,
    paddingLeft: 10,
    paddingTop: 20,
    paddingRight: 5
  },
  itemTitleStyle: {
    fontSize: 18, 
    color: '#ff9a6a', 
    fontWeight: 'bold',
  },
  itemTextStyle: {
    fontSize: 12, 
    color: '#999',
    lineHeight: 14,
    marginTop: 7
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