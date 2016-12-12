'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  ScrollView,
  TouchableOpacity 
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { ScrollableTabBar } from 'kn-react-native-views'
import styles, { width, height } from './style'
import ClassifyTabView from './classify'
import DefaultTabView from './default'
import TiaomanTabView from './tiaoman'
import RightMenu from './rightmenu'

class HomeContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      page: 0
    }
    this._scrollableTabView = null
  }

  componentDidMount () {
    //this.setState({page: 1})
    this._scrollableTabView.goToPage(1)
    this._scrollableTabView._onChangeTab(0, 1)
  }

  renderRightComponent () {
    return (
      <RightMenu {...this.props} />
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
    let { Router } = this.props
    return (
      <View style={styles.container}>
        <ScrollableTabView style={styles.container}
                           ref={(scrollableTabView) => { this._scrollableTabView = scrollableTabView }}
                           initialPage={0}
                           //page={0}
                           renderTabBar={() => this.renderScrollableTabBar()}
                           >
          <ClassifyTabView tabLabel="分类" 
                           style={styles.tabView} 
                           Router={Router} />
          <DefaultTabView tabLabel="推荐" 
                          style={styles.tabView} 
                          Router={Router} />
          <ScrollView tabLabel="动画" style={styles.tabView}/>
          <TiaomanTabView tabLabel="条漫" 
                          style={styles.tabView} />
          <ScrollView tabLabel="VIP" style={styles.tabView}/>
        </ScrollableTabView>
      </View>
    )
  }

  pressHandle () {
    this.props.Router.push('search', '搜索')
  }
}

export default HomeContainer