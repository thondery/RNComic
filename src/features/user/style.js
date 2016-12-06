'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#F7F5EC'
  },
  headerView: {
    width: width,
    height: 100,
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  headerLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightView: {

  },
  avatarView: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#999',
    //borderWidth: 4,
    borderRadius: 30
  },
  reportButtonStyle: {
    height: 30,
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  reportButtonTextStyle: {
    fontSize: 14
  },
  tipsTextStyle: {
    fontSize: 16,
    marginLeft: 15,
    color: '#666'
  }
})