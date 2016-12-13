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
import * as actions from './action'
import styles, { width, height } from './style'
import { 
  Loading 
} from 'kn-react-native-views'
import Icon from 'react-native-vector-icons/FontAwesome'
import RowItem from './rowitem'

class RankingContainer extends Component {

  constructor (props) {
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      classType: 0,
      classId: '',
      isRefreshing: false
    }
    this.refreshControl = null
  }

  componentDidMount () {
    let { Router } = this.props
    let { query } = Router
    //this.setState({classType: query.classtype, classId: query.class_id})
    this.props.actions.getBookList(query.tab)
  }

  componentWillReceiveProps (nextProps) {
    
  }

  render () {
    let { bookListPending, bookList, bookListSkip } = this.props
    return (
      <View style={styles.container}>
        <ListView enableEmptySections
                  dataSource={this.ds.cloneWithRows(bookList)}
                  renderRow={this.renderRow.bind(this)}
                  initialListSize={5} 
                  onEndReachedThreshold={30}
                  refreshControl={this.renderRefreshControl()}
                  onEndReached={this.onEndReached.bind(this)}
                  //renderHeader={this.renderHeader.bind(this)}
                  renderFooter={this.renderFooter.bind(this)}
                  />
        <Loading isOpen={bookListPending && bookListSkip === 0} />
      </View>
    )
  }

  renderRefreshControl () {
    let { Router } = this.props
    let { query } = Router
    return (
      <RefreshControl ref={view => this.refreshControl = view}
                      refreshing={this.state.isRefreshing}
                      onRefresh={() => this.props.actions.getBookList(query.tab)} />
    )
  }

  onEndReached () {
    let { pageSize, bookListSkip, bookListTotal, Router } = this.props
    let { query } = Router
    if (bookListTotal <= bookListSkip + pageSize) return
    this.props.actions.getBookList(query.tab, bookListSkip + pageSize)
  }

  renderRow (data, selectId, rowId) {
    let { Router } = this.props
    return (
      <RowItem data={data}
               rowId={rowId}
               onPushByBook={id => Router.push(`book?id=${id}`)} />
    )
  }

  renderFooter () {
    let { bookListTotal, bookList, bookListPending, bookListSkip } = this.props
    if (bookList.length > bookListTotal) return null
    if (bookListPending && bookListSkip > 0) {
      return (
        <View style={styles.footerViewStyle}>
          <Icon name={'user-secret'} size={18} color={'#999'} />
          <Text style={styles.footerTextStyle}>数据加载中...</Text>
        </View>
      )
    }
    return bookList.length <= bookListTotal && !bookListPending ? 
      bookListTotal > 0 ? (
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
    bookListPending: state.Ranking.bookListPending,
    bookListError: state.Ranking.bookListError,
    bookListSkip: state.Ranking.bookListSkip,
    bookList: state.Ranking.bookList,
    bookListTotal: state.Ranking.bookListTotal,
    pageSize: state.Ranking.pageSize,
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
  )(RankingContainer)