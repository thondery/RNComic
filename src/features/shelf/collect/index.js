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
import { Tips } from 'kn-react-native-views'

class CollectTabView extends Component {

  constructor(props){
    super(props)
    this.refreshControl = null
		this.state = {
			isRefreshing: false
		}
  }

  componentDidMount () {
    let { auth } = this.props
    if (auth) {
      this.props.actions.getCollectList()
    }
  }

  componentWillReceiveProps (nextProps) {
    let { auth } = nextProps
    if (auth && auth !== this.props.auth) {
      this.props.actions.getCollectList()
    }
  }

  renderRefreshControl () {
    return (
      <RefreshControl ref={view => this.refreshControl = view}
                      refreshing={this.state.isRefreshing}
                      onRefresh={this.props.actions.getCollectList.bind(this)} />
    )
  }

  render () {
    let { style, auth, Router } = this.props
    return auth ? (
      
      <ScrollView style={[styles.container, style]}
                  refreshControl={this.renderRefreshControl()}>
        <Text>fkdkdkf</Text>
      </ScrollView>
    ) : (
      <View style={[styles.container, style]}>
        <Tips isOpen={true}
              tipsText={'登录同步后可展示书架中的漫画'}
              showButton={true}
              buttonLabel={'登录'}
              buttonPress={() => Router.push('login', '登录')}
              />
      </View>
    )// tipsText, tipsTextStyle, showButton, buttonLabel, buttonStyle, buttonTextStyle,  buttonPress
  }

}

function mapStateToProps (state) {
  return {
    collectListError: state.Shelf.collectListError,
    collectListPending: state.Shelf.collectListPending,
    collectList: state.Shelf.collectList,
    //editState: state.Shelf.editState,
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
  )(CollectTabView)