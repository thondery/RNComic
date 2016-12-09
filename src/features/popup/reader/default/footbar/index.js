'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  Slider,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'
import styles, { width, height } from './style'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FootBar extends Component {

  static propTypes = {
    isOpen: PropTypes.bool,
    pageIndex: PropTypes.number,
    maxPageIndex: PropTypes.number
  }

  static defaultProps = {
    isOpen: false,
    pageIndex: 0,
    maxPageIndex: 0
  }

  constructor(props) {
    super(props)
    this.state = {
      bottomVaule: new Animated.Value(-50)
    }
  }

  componentDidMount () {
    let { isOpen } = this.props
    if (isOpen) {
      this.showHandle()
    }
  }

  componentWillReceiveProps (nextProps) {
    let { isOpen } = nextProps
    if (nextProps.isOpen !== this.props.isOpen) {
      if (isOpen) {
        this.showHandle()
      }
      else {
        this.hideHandle()
      }
    }
  }

  render () {
    let { maxPageIndex, pageIndex, gotoPageChange, prevChapter, nextChapter, isOpen } = this.props
    return (
      <Animated.View style={[styles.container, {bottom: this.state.bottomVaule}]} >
        <View style={styles.stripViewStyle}>
          <View style={styles.leftViewStyle}>
            <TouchableOpacity style={styles.buttonStyle}
                              onPress={() => prevChapter()} >
              <Icon name={'xing'} size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
          
          <Slider style={{width: width - 120, height: 50}}
                    maximumValue={maxPageIndex}
                    step={1}
                    value={pageIndex}
                    minimumTrackTintColor={'#f60'}
                    maximumTrackTintColor={'#999'}
                    onValueChange={(value) => {
                      //this._ltr = null
                      //this.setState({timeOut: 5000})
                      if (pageIndex !== parseInt(value) && isOpen) {
                        gotoPageChange(parseInt(value) - pageIndex)
                      //  onPressed('gotoPage', parseInt(value) - pageIndex)
                      }
                    }}
                    onSlidingComplete={(value) => {
                      //this.setState({initializaTopValue: new Animated.Value(-60)})
                      //onPressed('restorePause', null)
                    }}/>
          
          <View style={styles.rightViewStyle}>
            <TouchableOpacity style={styles.buttonStyle}
                              onPress={() => nextChapter()} >
              <Icon name={'chevron-right'} size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
        
      </Animated.View>
    )
  }

  showHandle() {
    Animated.sequence([
      Animated.timing(this.state.bottomVaule, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear
      })
    ])
    .start()
  }

  hideHandle() {
    Animated.sequence([
      Animated.timing(this.state.bottomVaule, {
        toValue: -60,
        duration: 300,
        easing: Easing.linear
      })
    ])
    .start()
  }

}