'use strict';

import React, { Component } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles, { width, height } from './rightmenu.style'

class RightMenuView extends Component {

  render () {
    let { Router, editState, auth } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle}
                          onPress={() => Router.push('search', '搜索')} >
          <Icon name={'search'} size={22} color={'#f60'} />
        </TouchableOpacity>
        {auth ? 
          <TouchableOpacity style={styles.buttonStyle}
                            onPress={this.clickEditHandle.bind(this)} >
            <Icon name={editState.isOpen ? 'times' : 'pencil-square-o'} 
                  size={editState.isOpen ? 28 : 24} 
                  color={'#f60'} />
          </TouchableOpacity> 
        : null}
      </View>
    )
  }

  clickEditHandle () {
    let { editState } = this.props
    this.props.actions.openEditMode(!editState.isOpen)
  }
}

function mapStateToProps (state) {
  return {
    editState: state.Shelf.editState,
    auth: state.Root.auth
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
  )(RightMenuView)