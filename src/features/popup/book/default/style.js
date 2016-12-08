'use strict';

import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    //justifyContent: 'center',
    //backgroundColor: '#F7F5EC'
  },
  headerViewStyle: {
    width: width,
    height: width * 0.65,
    //justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  headerTopbarViewStyle: {
    position: 'absolute',
    width: width,
    height: 50,
    //backgroundColor: '#666',
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingLeft: 5,
    paddingRight: 5
  },
  goBackButtonStyle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTopbarRightStyle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBodyViewStyle: {
    position: 'absolute',
    top: 70,
    flexDirection: 'row',
    width: width,
    height: width * 0.65 - 70
  },
  headerBodyImageViewStyle: {
    width: (width * 0.65 - 80) * 0.86,
    height: width * 0.65 - 80,
    marginTop: 10,
    marginLeft: 35
  },
  headerBodyImageStyle: {
    width: (width * 0.65 - 80) * 0.74,
    height: width * 0.65 - 80
  },
  headerBodyInfoViewStyle: {
    marginTop: 5
  },
  headerBodyInfoTitleStyle: {
    fontSize: 20,
    color: '#ccc',
    marginTop: 10
  },
  headerBodyInfoTextStyle: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5
  },
  headerBodyInfoTagsStyle: {
    marginTop: 15
  },
  headerBodyInfoStarBarStyle: {
    marginTop: 5
  },
  headerBodyInfoStarBarTextStyle: {
    color: '#ccc'
  },
  buttonLayerView: {
    width: width - 30,
    height: 70,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginTop: 15,
    paddingTop: 3
  },
  downloadButtonStyle: {
    width: (width - 45) / 2,
    backgroundColor: '#72d6df',
    borderRadius: 4
  },
  readRecButtonStyle: {
    width: (width - 45) / 2,
    backgroundColor: '#ff9b6a',
    borderRadius: 4
  },
  bodyViewStyle: {
    flex: 1,
    width: width - 30,
    marginLeft: 15,
    //height: height
  },
  bodyTabBarStyle: {
    backgroundColor: 'transparent',
    height: 50,
    paddingTop: 10
  }
})