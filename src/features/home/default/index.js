'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity 
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../action'
import styles from './style'

class DefaultTabView extends Component {

  constructor(props){
    super(props)
    this.refreshControl = null
		this.state = {
			isRefreshing: false
		}
  }

  componentDidMount () {
    this.props.actions.getDefaultInfo()
  }

  renderRefreshControl () {
    return (
      <RefreshControl ref={view => this.refreshControl = view}
                      refreshing={this.state.isRefreshing}
                      onRefresh={this.props.actions.getDefaultInfo.bind(this)} />
    )
  }

  render () {
    let { style } = this.props
    return (
      <ScrollView style={[styles.container, style]}
                  refreshControl={this.renderRefreshControl()}>
        <Text>fkdkdkf</Text>
      </ScrollView>
    )
  }

}

function mapStateToProps (state) {
  return {
    defaultInfoError: state.Home.defaultInfoError,
    defaultInfoPending: state.Home.defaultInfoPending,
    defaultInfo: state.Home.defaultInfo
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
  )(DefaultTabView)