'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../containers/action'
import styles, { width, height } from './style'
import List from '../../../components/list'
import { Button } from 'kn-react-native-views'
import config from '../../../config'

class AboutContainer extends Component {

  render () {
    let { auth, Router } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.headerViewStyle}>
          <Image source={require('../../../../ios/RNComic/Images.xcassets/AppIcon.appiconset/Icon-60@2x.png')}
                 style={styles.headerLogoStyle} />
          <Text style={styles.softwareNameStyle}>{config.softwareName}</Text>
          <Text style={styles.versionTextStyle}>{config.version}</Text>
        </View>
      </View>
    )
  }

}

function mapStateToProps (state) {
  return {
    auth: state.Root.auth
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(AboutContainer)