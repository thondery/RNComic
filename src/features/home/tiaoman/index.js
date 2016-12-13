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
import styles, { width, height } from './style'
import Update from './update'
import Tuijian from './tuijian'
import Fensi from './fensi'
import WeekRank from './weekrank'

class TiaomanTabView extends Component {

  constructor(props){
    super(props)
    this.refreshControl = null
		this.state = {
			isRefreshing: false
		}
  }

  componentDidMount () {
    this.props.actions.getTiaomanInfo()
  }

  renderRefreshControl () {
    return (
      <RefreshControl ref={view => this.refreshControl = view}
                      refreshing={this.state.isRefreshing}
                      onRefresh={this.props.actions.getTiaomanInfo.bind(this)} />
    )
  }

  renderUpdate () {
    let { tiaomanInfo, Router } = this.props
    return tiaomanInfo && tiaomanInfo.update ? (
      <Update data={tiaomanInfo.update} Router={Router} />
    ) : null
  }

  renderTuijian () {
    let { tiaomanInfo, Router } = this.props
    return tiaomanInfo && tiaomanInfo.tuijian ? (
      <Tuijian data={tiaomanInfo.tuijian} Router={Router} />
    ) : null
  }

  renderFensi () {
    let { tiaomanInfo, Router } = this.props
    return tiaomanInfo && tiaomanInfo.fensi ? (
      <Fensi data={tiaomanInfo.fensi} Router={Router} />
    ) : null
  }

  renderWeekRank () {
    let { tiaomanInfo, Router } = this.props
    return tiaomanInfo && tiaomanInfo.weekrank ? (
      <WeekRank data={tiaomanInfo.weekrank} Router={Router} />
    ) : null
  }

  render () {
    let { style } = this.props
    return (
      <ScrollView style={[styles.container, style]}
                  refreshControl={this.renderRefreshControl()}>
        {this.renderUpdate()}
        {this.renderTuijian()}
        {this.renderFensi()}
        {this.renderWeekRank()}
      </ScrollView>
    )
  }

}

function mapStateToProps (state) {
  return {
    tiaomanInfoError: state.Home.tiaomanInfoError,
    tiaomanInfoPending: state.Home.tiaomanInfoPending,
    tiaomanInfo: state.Home.tiaomanInfo
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
  )(TiaomanTabView)