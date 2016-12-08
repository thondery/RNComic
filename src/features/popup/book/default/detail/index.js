'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import styles, {width, height} from './style'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'
import Tags from '../../../../../components/tags'

export default class DetailTabView extends Component {

  static ropTypes = {
    author: PropTypes.shape({
      _id: PropTypes.string,
      username: PropTypes.string
    }),
    content: PropTypes.string,
    tags: PropTypes.array,
    updateAt: PropTypes.string
  }

  static defaultProps = {
    author: {
      _id: '',
      username: ''
    },
    content: '',
    tags: [],
    updateAt: ''
  }

  renderAuthor () {
    let { author } = this.props
    return (
      <View style={styles.authorViewStyle}>
        <Text style={styles.authorTitleStyle}>作者</Text>
        <Text style={styles.authorNameStyle}>{author.username}</Text>
        <Icon name={'drupal'} size={30} color={'#f60'} style={styles.authorAvatarStyle} />
      </View>
    )
  }

  renderContent () {
    let { content } = this.props
    return (
      <View style={styles.contentViewStyle}>
        <Text style={styles.titleTextStyle}>作品介绍</Text>
        <Text style={styles.contentTextStyle}
              numberOfLines={8}>{content}</Text>
      </View>
    )
  }

  renderTags () {
    let { tags } = this.props
    return (
      <View style={styles.contentViewStyle}>
        <Text style={styles.titleTextStyle}>作品类型</Text>
        <Tags style={styles.tagsStyle}
              tagsData={['玄幻', '搞笑', '恋爱']} />
      </View>
    )
  }

  renderUpdateAt () {
    let { updateAt } = this.props
    updateAt = moment(updateAt).format('YYYY.MM.DD')
    return (
      <View style={styles.updateAtViewStyle}>
        <Text style={styles.titleTextStyle}>更新时间</Text>
        <Text style={styles.updateAtTextStyle}>{updateAt}</Text>
      </View>
    )
  }

  render () {
    let { author, content, tags, updateAt } = this.props
    return (
      <View style={styles.container}>
        {this.renderAuthor()}
        {this.renderContent()}
        {this.renderTags()}
        {this.renderUpdateAt()}
      </View>
    )
  }
}