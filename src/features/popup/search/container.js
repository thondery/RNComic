'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import styles, { width, height } from './style'
import SearchBar from './searchbar'
import RowItem from './rowitem'
import * as storageService from '../../../services/storage'
import Icon from 'react-native-vector-icons/FontAwesome'
import { 
  Loading 
} from 'kn-react-native-views'
import validator from 'validator'

class SearchContainer extends Component {

  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      searchText: '',
      searchHistory: [],
    }
  }

  componentDidMount () {
    this.onChangeTextHandle('')
  }

  componentWillReceiveProps (nextProps) {
    let { searchList, searchText, clearHistory } = nextProps
    if (clearHistory) {
      this.onChangeTextHandle('')
    }
  }

  render () {
    let { Router, searchList, searchListPending, searchText, searchListSkip } = this.props
    return (
      <View style={styles.container}>
        <SearchBar placeholder={'输入作品名'}
                   onCancel={() => Router.pop()}
                   onChangeText={this.onChangeTextHandle.bind(this)}
                   />
        {this.state.searchHistory.length > 0 ? (
          <ScrollView style={styles.bodyerView}>
            {this.renderHistoryComponent()}
          </ScrollView>
        ) : (
          <View style={styles.bodyerView}>
            <ListView enableEmptySections
                      dataSource={this.ds.cloneWithRows(searchList)}
                      renderRow={this.renderRow.bind(this)}
                      initialListSize={5} 
                      onEndReachedThreshold={30}
                      onEndReached={this.onEndReached.bind(this)}
                      //renderHeader={this.renderHeader.bind(this)}
                      renderFooter={this.renderFooter.bind(this)}
                      />
            <Loading isOpen={searchListPending && searchListSkip === 0} />
          </View>
        )}
      </View>
    )
  }

  renderHistoryComponent () {
    let { searchHistory } = this.state
    return (
      <View style={styles.historyViewStyle}>
        <View style={styles.historyHeadViewStyle}>
          <Text style={styles.historyHeadTextStyle}>最近搜索</Text>
          <TouchableOpacity style={styles.historyHeadButtonStyle}
                            onPress={this.clearHistoryHandle.bind(this)} >
            <Icon name={'trash-o'} size={16} color={'#666'} />
          </TouchableOpacity>
        </View>
        {searchHistory.map( (item, i) => {
          return (
            <TouchableOpacity key={i} 
                              style={styles.historyItemStyle}
                              onPress={() => this.onSearchHandle(item)} >
              <Icon name={'history'} size={20} color={'#ccc'} style={styles.historyItemIconStyle} />
              <Text style={styles.historyItemTextStyle}>{item}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  renderFooter () {
    let { searchListTotal, searchList, searchListPending, searchText, searchListSkip } = this.props
    if (searchList.length > searchListTotal) return null
    if (searchListPending && searchListSkip > 0) {
      return (
        <View style={styles.footerViewStyle}>
          <Icon name={'user-secret'} size={18} color={'#999'} />
          <Text style={styles.footerTextStyle}>数据加载中...</Text>
        </View>
      )
    }
    return searchList.length <= searchListTotal && !searchListPending && searchText.length > 0 ? 
      searchListTotal > 0 ? (
        <View style={styles.footerViewStyle}>
          <Icon name={'user-secret'} size={18} color={'#999'} />
          <Text style={styles.footerTextStyle}>没有更多了</Text>
        </View>
      ) : (
        <View style={[styles.footerViewStyle, styles.notSearchStyle]}>
          <Text style={styles.footerTextStyle}>木有搜索到&nbsp;“<Text style={{color: 'red'}}>{searchText}</Text>”&nbsp;一词哦：）</Text>
        </View>
      )
     : null
  }

  renderRow (data) {
    let { Router } = this.props
    return (
      <RowItem data={data}
               onPushByBook={id => Router.push(`book?id=${id}`)}
               onPushByChapter={id => Router.push(`reader?id=${id}`)} />
    )
  }

  onEndReached () {
    let { pageSize, searchListSkip, searchText, searchListTotal } = this.props
    if (searchListTotal <= searchListSkip + pageSize) return
    searchText = validator.trim(searchText)
    if (validator.isEmpty(searchText)) return
    this.props.actions.searchBook(searchText, searchListSkip + pageSize)
  }

  onSearchHandle (searchText) {
    this.setState({searchHistory: []})
    searchText = validator.trim(searchText)
    if (validator.isEmpty(searchText)) return
    this.props.actions.searchBook(searchText)
  }

  async onChangeTextHandle (searchText) {
    try {
      let history = await storageService.getItem('search') || []
      this.setState({searchHistory: searchText.length === 0 ? history : []})
      this.props.actions.clearSearch()
    } catch (error) {
      console.log(error)
    }
  }

  clearHistoryHandle () {
    this.props.actions.clearHistory()
  }
}

function mapStateToProps (state) {
  return {
    searchListPending: state.Search.searchListPending,
    searchListError: state.Search.searchListError,
    searchListSkip: state.Search.searchListSkip,
    searchList: state.Search.searchList,
    searchListTotal: state.Search.searchListTotal,
    pageSize: state.Search.pageSize,
    searchText: state.Search.searchText,
    clearHistory: state.Search.clearHistory
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
  )(SearchContainer)