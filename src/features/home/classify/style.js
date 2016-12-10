'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  rankingViewStype: {
    width: width,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    marginBottom: 10
  },
  rankingButtonStyle: {
    width: (width - 65) / 2,
    height: (width - 70) / 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 0
  },
  rankingButtonIconStyle: {
    width: (width - 70) / 2,
    height: (width - 70) / 4
  },
  classifyViewStype: {
    width: width,

  },
  classifyHeadViewStyle: {
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  classifyHeadTitleStyle: {
    color: '#999',
    fontSize: 14
  },
  classifyBodyViewStyle: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  classifyItemViewStyle: {
    width: width / 2,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderBottomWidth: 1,
    borderRightWidth: 1
  },
  classifyItemImageStyle: {
    width: width / 2 - 1,
    height: 99,
    justifyContent: 'center',
    paddingLeft: 20
  },
  classifyItemNameStyle: {
    fontSize: 16,
    color: '#999',
    backgroundColor: 'transparent'
  }
})