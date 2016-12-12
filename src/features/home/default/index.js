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
import Banner from './banner'
import Tuijian from './tuijian'
import Renqi from './renqi'
import Update from './update'
import Tiaoman from './tiaoman'
import FastRise from './fastrise'
import NewBook from './newbook'
import Top5 from './top5'

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

  renderBanner () {
    let { defaultInfo, Router } = this.props
    return defaultInfo && defaultInfo.banner ? (
      <Banner data={defaultInfo.banner} Router={Router} />
    ) : null
  }

  renderTuijian () {
    let { defaultInfo, Router } = this.props
    return defaultInfo && defaultInfo.tuijian ? (
      <Tuijian data={defaultInfo.tuijian} Router={Router} />
    ) : null
  }

  renderRenqi () {
    let { defaultInfo, Router } = this.props
    return defaultInfo && defaultInfo.renqi ? (
      <Renqi data={defaultInfo.renqi} Router={Router} />
    ) : null
  }

  renderUpdate () {
    let { defaultInfo, Router } = this.props
    return defaultInfo && defaultInfo.update ? (
      <Update data={defaultInfo.update} Router={Router} />
    ) : null
  }

  renderTiaoman () {
    let { defaultInfo, Router } = this.props
    return defaultInfo && defaultInfo.tiaoman ? (
      <Tiaoman data={defaultInfo.tiaoman} Router={Router} />
    ) : null
  }

  renderFastRise () {
    let { defaultInfo, Router } = this.props
    return defaultInfo && defaultInfo.fastrise ? (
      <FastRise data={defaultInfo.fastrise} Router={Router} />
    ) : null
  }

  renderNewBook () {
    let { defaultInfo, Router } = this.props
    return defaultInfo && defaultInfo.newbook ? (
      <NewBook data={defaultInfo.newbook} Router={Router} />
    ) : null
  }

  renderTop5 () {
    let { defaultInfo, Router } = this.props
    return defaultInfo && defaultInfo.top5 ? (
      <Top5 data={defaultInfo.top5} Router={Router} />
    ) : null
  }

  render () {
    let { style } = this.props
    return (
      <ScrollView style={[styles.container, style]}
                  refreshControl={this.renderRefreshControl()}>
        {this.renderBanner()}
        {this.renderTuijian()}
        {this.renderRenqi()}
        {this.renderUpdate()}
        {this.renderTiaoman()}
        {this.renderFastRise()}
        {this.renderNewBook()}
        {this.renderTop5()}
        {this.renderFooter()}
      </ScrollView>
    )
  }

  renderFooter () {
    return (
      <View style={styles.footerViewStyle}>
        <View style={styles.footerBarViewStyle}>
          <Text style={styles.footerTextStyle}>{'你\n知\n道\n的\n太\n多\n了'}</Text>
        </View>
      </View>
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