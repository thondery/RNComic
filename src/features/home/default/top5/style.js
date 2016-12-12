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
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //flexWrap: 'wrap',
  },
  itemViewStyle: {
    width: width - 24,
    height: (width - 180) * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 12
  },
  itemIndexImageStyle: {
    width: 80,//(width - 180) * 0.47 * 1.17 * 0.7, 
    height: 65,//(width - 180) * 0.47 * 0.7, 
    position: 'absolute', 
    right: 0
  },
  itemImageStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 160,
    height: (width - 180) * 0.5,
  },
  itemMainViewStyle: {
    //backgroundColor: '#fff', 
    height: (width - 180) * 0.5, 
    width: 160 - 24,
    paddingLeft: 12,
    paddingTop: 15
  },
  itemTitleStyle: {
    fontSize: 14, 
    color: '#999', 
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  itemTextStyle: {
    fontSize: 12, 
    color: '#ccc', 
    marginTop: 6,
    opacity: .8,
    backgroundColor: 'transparent'
  },
  itemFireViewStyle: {
    flexDirection: 'row',
    marginTop: 10
  },
  itemFireIconStyle: {
    opacity: .8,
    marginRight: 10,
    marginTop: 5
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