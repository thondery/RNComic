'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text 
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import * as Animatable from 'react-native-animatable'
import App from './app'
import styles, { width, height } from './index.style'

const AppContainer = Animatable.createAnimatableComponent(App)

class Application extends Component {

  constructor(props) {
    super(props)
    this.state = {
      times: 0
    }
  }

  componentDidMount () {
    this.timesHandle()
    this.props.actions.isAccessToken()
  }

  render () {
    let { times } = this.state
    return times > 0 
      ? <Animatable.View style={styles.container} animation="fadeIn">
          <Text style={styles.timesText}>{times}</Text>
        </Animatable.View>
      : <AppContainer animation="fadeIn" />

  }

  timesHandle () {
    let that = this
    let { times } = this.state
    let ltr = setInterval( () => {
      that.setState({times: times--})
      if (times < 0) {
        clearInterval(ltr)
        ltr = null
      }
    }, 1000)
  }

}

function mapStateToProps (state) {
  return {
    isAccesstokenError: state.Root.isAccesstokenError,
    isAccesstokenPending: state.Root.isAccesstokenPending
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
  )(Application)