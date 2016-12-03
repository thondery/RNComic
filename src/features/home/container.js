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

class HomeContainer extends Component {

  renderRightComponent () {
    return (
      <View>
        <Text>ssss</Text>
      </View>
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
    return (
      <ScrollableTabView style={styles.container}
                         initialPage={0}
                         renderTabBar={() => this.renderScrollableTabBar()}>
        <ClassifyTabView tabLabel="分类" style={styles.tabView} />
        <DefaultTabView tabLabel="推荐" style={styles.tabView}/>
        <ScrollView tabLabel="动画" style={styles.tabView}/>
        <TiaomanTabView tabLabel="条漫" style={styles.tabView}/>
        <ScrollView tabLabel="VIP" style={styles.tabView}/>
      </ScrollableTabView>
    )
  }

  pressHandle () {
    this.props.Router.push('search', '搜索')
  }
}

export default HomeContainer