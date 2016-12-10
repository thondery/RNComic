'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity 
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../action'
import styles from './style'
import { getImage } from '../../../services/http'
import { 
  Tips 
} from 'kn-react-native-views'
import _ from 'lodash'

const Rankings = [
  {
    name: '人气榜',
    link: 'ranking?tag=popular',
    icon: require('../../../assets/images/bang1.png')
  },
  {
    name: '更新榜',
    link: 'ranking?tag=update',
    icon: require('../../../assets/images/bang2.png')
  },
  {
    name: '月票榜',
    link: 'ranking?tag=popular',
    icon: require('../../../assets/images/bang3.png')
  },
  {
    name: '畅销榜',
    link: 'ranking?tag=popular',
    icon: require('../../../assets/images/bang4.png')
  },
]

class ClassifyTabView extends Component {

  constructor(props){
    super(props)
    this.refreshControl = null
		this.state = {
			isRefreshing: false,
      showTips: false
		}
  }

  componentDidMount () {
    this.props.actions.getClassifyList()
    
  }

  componentWillReceiveProps (nextProps) {
    let { classifyListError } = nextProps
    if (classifyListError) {
      this.setState({showTips: true})
      let ltr = setTimeout( () => {
        this.setState({showTips: false})
        clearTimeout(ltr)
        ltr = null
      }, 3000)
    }
  }

  renderRefreshControl () {
    return (
      <RefreshControl ref={view => this.refreshControl = view}
                      refreshing={this.state.isRefreshing}
                      onRefresh={this.props.actions.getClassifyList.bind(this)} />
    )
  }

  renderRanking () {
    let { Router } = this.props
    return (
      <View style={styles.rankingViewStype}>
      {Rankings.map( (item, i) => {
        return (
          <TouchableOpacity key={i}
                            style={styles.rankingButtonStyle}
                            onPress={() => Router.push(item.link, item.name)} >
            <Image source={item.icon} style={styles.rankingButtonIconStyle} />
          </TouchableOpacity>
        )
      })}
      </View>
    )
  }

  renderClassify () {
    let { classifyList, Router } = this.props
    return (
      <View style={styles.classifyViewStyle}>
        <View style={styles.classifyHeadViewStyle}>
          <Text style={styles.classifyHeadTitleStyle}>热门分类</Text>
        </View>
        <View style={styles.classifyBodyViewStyle}>
        {classifyList && classifyList.map( (item, i) => {
          return (
            <TouchableOpacity key={i}
                              style={styles.classifyItemViewStyle}
                              onPress={() => Router.push(`classify?id=${item._id}`, item.classname)} >
              <Image source={getImage(item.class_img)} style={styles.classifyItemImageStyle} >
                <Text style={styles.classifyItemNameStyle}>{item.classname}</Text>
              </Image>
            </TouchableOpacity>
          )
        })}
        </View>
      </View>
    )
  }

  render () {
    let { style, classifyListPending, classifyListError } = this.props
    return (
      
      <ScrollView style={[styles.container, style]}
                  refreshControl={this.renderRefreshControl()}>
        {this.renderRanking()}
        {this.renderClassify()}
        {classifyListError && this.state.showTips ? (
          <Tips isOpen={true}
                tipsText={_.isError(classifyListError) ? '无法连接到服务器，请稍后再试' : classifyListError.message} />
        ): null}
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