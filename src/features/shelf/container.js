'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  ScrollView,
  TouchableOpacity 
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { ScrollableTabBar } from 'kn-react-native-views'
import styles, { width, height } from './style'
import RightMenuView from './rightmenu'
import EditMenuView from './editmenu'
import CollectTabView from './collect'
import _ from 'lodash'

const tabNames = ['collect', 'readrec', 'download']

class ShelfContainer extends Component {

  renderRightComponent () {
    return (
      <RightMenuView {...this.props} />
    )
  }

  renderScrollableTabBar () {
    return (
      <ScrollableTabBar style={styles.tabBarStyle}
                        tabWidth={50}
                        inactiveTextColor={'#666'}
                        activeTextColor={'#f60'}
                        underlineColor={'#f60'}
                        leftMenu={null}
                        rightMenu={this.renderRightComponent()} />
    )
  }

  render () {
    let { editState, Router } = this.props
    return (
      <View style={styles.container}>
        <ScrollableTabView style={[styles.container]}
                           initialPage={0}
                           onChangeTab={this.changeTabHandle.bind(this)}
                           renderTabBar={() => this.renderScrollableTabBar()}>
          <CollectTabView {...this.props}
                          tabLabel="收藏" 
                          style={styles.tabView}
                           />
          <ScrollView tabLabel="历史" style={styles.tabView}/>
          <ScrollView tabLabel="下载" style={styles.tabView}/>
        </ScrollableTabView>
        <EditMenuView {...editState}
                      onSelectAll={this.onSelectAll.bind(this)}
                      onRemoveItem={this.onRemoveItem.bind(this)} />
      </View>
    )
  }

  onSelectAll (isTrue) {
    let { editState, collectList, readrecList } = this.props
    if (isTrue) {
      let _selectItem = []
      switch (editState.tabLabel) {
        case 'collect':
          _selectItem = _.map(_.map(collectList, 'collect_book'), '_id')
          break
        case 'readrec':
          _selectItem = []
          break
        default:
          break
      }
      this.props.actions.selectItemByEditMode(_selectItem)
    }
    else {
      this.props.actions.selectItemByEditMode([])
    }
  }

  onRemoveItem () {
    let { editState } = this.props
    switch (editState.tabLabel) {
        case 'collect':
          console.log(editState.selectItem)
          this.props.actions.removeCollect(editState.selectItem)
          break
        case 'readrec':
          
          break
        default:
          break
      }
  }

  changeTabHandle (evt) {
    let tabLabel = tabNames[evt.i]
    this.props.actions.initEditMode(tabLabel)
  }
}

function mapStateToProps (state) {
  return {
    editState: state.Shelf.editState,
    collectList: state.Shelf.collectList,
    readrecList: state.Shelf.readrecList,
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
  )(ShelfContainer)