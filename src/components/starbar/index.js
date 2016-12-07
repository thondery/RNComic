'use strict'

import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash'
import styles, { width, height } from './style'

const Stars = [
  {scores: 0,  icon: ['star-o',      'star-o',      'star-o',      'star-o',      'star-o'     ]},
  {scores: 1,  icon: ['star-half-o', 'star-o',      'star-o',      'star-o',      'star-o'     ]},
  {scores: 2,  icon: ['star',        'star-o',      'star-o',      'star-o',      'star-o'     ]},
  {scores: 3,  icon: ['star',        'star-half-o', 'star-o',      'star-o',      'star-o'     ]},
  {scores: 4,  icon: ['star',        'star',        'star-o',      'star-o',      'star-o'     ]},
  {scores: 5,  icon: ['star',        'star',        'star-half-o', 'star-o',      'star-o'     ]},
  {scores: 6,  icon: ['star',        'star',        'star',        'star-o',      'star-o'     ]},
  {scores: 7,  icon: ['star',        'star',        'star',        'star-half-o', 'star-o'     ]},
  {scores: 8,  icon: ['star',        'star',        'star',        'star',        'star-o'     ]},
  {scores: 9,  icon: ['star',        'star',        'star',        'star',        'star-half-o']},
  {scores: 10, icon: ['star',        'star',        'star',        'star',        'star'       ]}
]

export default class StarBar extends Component {

  static propTypes = {
    scores: PropTypes.number,
    style: View.propTypes.style,
    textStyle: Text.propTypes.style
  }

  static defaultProps = {
    scores: 0,
    style: null,
    textStyle: null
  }

  render () {
    let { scores, style, textStyle } = this.props
    let star = _.find(Stars, (chr) => chr.scores <= scores && chr.scores > scores - 1)
    return (
      <View style={[styles.container, style]}>
        {star.icon.map((item, i) => {
            return (
              <Icon key={i} 
                    name={item} 
                    size={12} 
                    color={'#f60'} 
                    style={{margin: 1}} />
            )
        })}
        <Text style={[styles.scoresText, textStyle]}>{scores.toFixed(1)}</Text>
      </View>
    )
  }
  
}