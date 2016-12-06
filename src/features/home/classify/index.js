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

class ClassifyTabView extends Component {

  constructor(props){
    super(props)
    this.refreshControl = null
		this.state = {
			isRefreshing: false
		}
  }

  componentDidMount () {
    this.props.actions.getClassifyList()
  }

  renderRefreshControl () {
    return (
      <RefreshControl ref={view => this.refreshControl = view}
                      refreshing={this.state.isRefreshing}
                      onRefresh={this.props.actions.getClassifyList.bind(this)} />
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
    classifyListError: state.Home.classifyListError,
    classifyListPending: state.Home.classifyListPending,
    classifyList: state.Home.classifyList
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
  )(ClassifyTabView)