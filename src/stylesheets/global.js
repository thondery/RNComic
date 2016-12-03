'use strict';

import { Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default {
  container: {
    flex: 1,
    width: width,
    height: height
  }
}