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

class ReadrecTabView extends Component {

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
      this.props.actions.getReadrecList()
    }
  }

  componentWillReceiveProps (nextProps) {
    let { auth, readrecUpdate } = nextProps
    if (auth && (auth !== this.props.auth || readrecUpdate)) {
      this.props.actions.getReadrecList()
    }
  }

  renderRefreshControl () {
    return (
      <RefreshControl ref={view => this.refreshControl = view}
                      refreshing={this.state.isRefreshing}
                      onRefresh={this.props.actions.getReadrecList.bind(this)} />
    )
  }

  render () {
    let { style, auth, Router, readrecList, readrecListPending, editState } = this.props
    return auth ? (
      
      <View style={[styles.container, style]} >
        <ListView enableEmptySections
                  dataSource={this.ds.cloneWithRows(readrecList)}
                  //contentContainerStyle={styles.listView}
                  renderRow={this.renderRow.bind(this)}
                  initialListSize={5} 
                  onEndReachedThreshold={30}
                  refreshControl={this.renderRefreshControl()}
                  //onEndReached={this.onEndReached.bind(this)}
                  //renderHeader={this.renderHeader.bind(this)}
                  renderFooter={this.renderFooter.bind(this)}
                  />
        <Loading isOpen={readrecListPending} />
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
    let selected = selectItem.length > 0 && selectItem.indexOf(data.read_book._id) > -1
    return (
      <RowItem data={data}
               editMode={editState.isOpen}
               selected={selected && editState.isOpen}
               chapter={data.chapter}
               onPushByBook={id => this.onPushByBook(id)}
               onPushByChapter={chapter_id => Router.push(`reader?id=${chapter_id}`)} />
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
    let { readrecListTotal, readrecList, readrecListPending } = this.props
    if (readrecList.length > readrecListTotal) return null
    return readrecList.length <= readrecListTotal && !readrecListPending ? 
      readrecListTotal > 0 ? null : (
        <View style={[styles.footerViewStyle, styles.notSearchStyle]}>
          <Text style={styles.footerTextStyle}>暂时木有数据：）</Text>
        </View>
      )
     : null
  }

}

function mapStateToProps (state) {
  return {
    readrecListError: state.Shelf.readrecListError,
    readrecListPending: state.Shelf.readrecListPending,
    readrecList: state.Shelf.readrecList,
    readrecListTotal: state.Shelf.readrecListTotal,
    readrecUpdate: state.Shelf.readrecUpdate,
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
  )(ReadrecTabView)