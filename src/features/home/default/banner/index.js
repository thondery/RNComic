'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity 
} from 'react-native'
import styles, { width, height } from './style'
import Swiper from 'react-native-swiper'
import { getImage } from '../../../../services/http'

export default class Banner extends Component {

  static propTypes = {
    data: PropTypes.array
  }

  static defaultProps = {
    data: null
  }

  render () {
    let { data, Router } = this.props
    return (
      <Swiper style={styles.container}
              height={width * .45} 
              paginationStyle={{bottom: 10}}
              autoplay={true} 
              autoplayTimeout={5}
              >
      {data && data.map( (item, i) => {
        let { recommend_book } = item
        return (
          <TouchableOpacity key={i}
                            style={styles.itemViewStyle}
                            onPress={() => Router.push(`book?id=${recommend_book._id}`)} >
            <Image source={getImage(item.recommend_img)} style={styles.itemImageStyle} />
          </TouchableOpacity>
        )
      })}
      </Swiper>
    )
  }

}