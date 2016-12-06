'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    //backgroundColor: '#F7F5EC'
  },
  headerViewStyle: {
    width: width,
    height: 180,
    paddingTop: 80,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  headerLogoStyle: {
    width: 120,
    height: 120,
    borderRadius: 20
  },
  softwareNameStyle: {
    color: '#666',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 15
  },
  versionTextStyle: {
    color: '#f60',
    fontSize: 18,
    marginTop: 10
  }
})