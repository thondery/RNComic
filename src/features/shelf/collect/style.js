'use strict';

import { StyleSheet, Platform } from 'react-native'
import styles, { width, height } from '../../../stylesheets/global'

export { width, height }

export default StyleSheet.create({
  container: {
    flex: 1,
    width: width
  },
  footerViewStyle: {
    width: width,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
    paddingTop: 10
  },
  footerTextStyle: {
    color: '#999',
    lineHeight: 15,
    marginLeft: 5
  },
  listView: {  
    //marginTop: 5,  
    marginLeft: 5,
    marginRight: 5,
    //justifyContent: 'flex-start',  
    flexDirection: 'row',  
    flexWrap: 'wrap'  
  },
})