'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  ScrollView,
  ListView,
  RefreshControl,
  TouchableOpacity 
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../action'
import styles from './style'
import { Tips, Loading } from 'kn-react-native-views'
import RowItem from './rowitem'
import Icon from 'react-native-vector-icons/FontAwesome'

class CollectTabView extends Component {

  constructor(props){
    super(props)
    this.refreshControl = null
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
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
    let { auth, collectUpdate } = nextProps
    if (auth && (auth !== this.props.auth || collectUpdate)) {
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
    let { style, auth, Router, collectList, collectListPending, editState } = this.props
    return auth ? (
      
      <View style={[styles.container, style]} >
        <ListView enableEmptySections
                  dataSource={this.ds.cloneWithRows(collectList)}
                  contentContainerStyle={styles.listView}
                  renderRow={this.renderRow.bind(this)}
                  initialListSize={5} 
                  onEndReachedThreshold={30}
                  refreshControl={this.renderRefreshControl()}
                  //onEndReached={this.onEndReached.bind(this)}
                  //renderHeader={this.renderHeader.bind(this)}
                  renderFooter={this.renderFooter.bind(this)}
                  />
        <Loading isOpen={collectListPending} />
      </View>
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

  renderRow (data) {
    let { Router, editState } = this.props
    let { selectItem } = editState
    let selected = selectItem.length > 0 && selectItem.indexOf(data.collect_book._id) > -1
    return (
      <RowItem data={data}
               editMode={editState.isOpen}
               selected={selected && editState.isOpen}
               onPushByBook={id => this.onPushByBook(id)} />
    )
  }

  onPushByBook (id) {
    let { Router, editState } = this.props
    if (editState.isOpen) {
      //this.props.actions.selectItemByEditMode([])
      let { selectItem } = editState
      if (selectItem.length > 0 && selectItem.indexOf(id) > -1) {
        selectItem.splice(selectItem.indexOf(id), 1)
      } else {
        selectItem.push(id)
      }
      this.props.actions.selectItemByEditMode(selectItem)
    }
    else {
      Router.push(`book?id=${id}`)
    }
  }

  renderFooter () {
    let { collectListTotal, collectList, collectListPending } = this.props
    if (collectList.length > collectListTotal) return null
    return collectList.length <= collectListTotal && !collectListPending ? 
      collectListTotal > 0 ? (
        <View style={styles.footerViewStyle}>
          <Icon name={'user-secret'} size={18} color={'#999'} />
          <Text style={styles.footerTextStyle}>没有更多了</Text>
        </View>
      ) : (
        <View style={[styles.footerViewStyle, styles.notSearchStyle]}>
          <Text style={styles.footerTextStyle}>暂时木有数据：）</Text>
        </View>
      )
     : null
  }

}

function mapStateToProps (state) {
  return {
    collectListError: state.Shelf.collectListError,
    collectListPending: state.Shelf.collectListPending,
    collectList: state.Shelf.collectList,
    collectListTotal: state.Shelf.collectListTotal,
    collectUpdate: state.Shelf.collectUpdate,
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