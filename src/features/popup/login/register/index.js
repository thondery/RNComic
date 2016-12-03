'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity
} from 'react-native'


class RigisterContainer extends Component {

  render () {
    return (
      <View style={{
              flex:1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
        <Text style={{fontSize:18}}>Register Page</Text>
        <TouchableOpacity onPress={this.pressHandle.bind(this)}>
          <Text>Back User Page</Text>
        </TouchableOpacity>
      </View>
    )
  }

  pressHandle () {
    this.props.Router.pop()
  }

}

export default RigisterContainer