'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  TextInput 
} from 'react-native'
import FormInput from '../formInput'
import { Button } from 'kn-react-native-views'
import styles, { width, height } from './style'

const initItem = {
  type: 'forminput',
  name: '',
  label: '',
  password: false,
  placeholder: '',
  placeholderColor: '#ccc',
  keyboardType: 'default',  // enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
  returnKeyType: 'default',  // enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
}

export default class Form extends Component {

  static propTypes = {
    style: View.propTypes.style,
    options: PropTypes.array,
    buttonLabel: PropTypes.string,
    buttonPress: PropTypes.func,
    disable: PropTypes.bool
  }

  static defaultProps = {
    style: null,
    options: [],
    buttonLabel: 'Submit',
    buttonPress: () => null,
    disable: false
  }

  constructor (props) {
    super(props)
    this.state = {
      body: {}
    }
  }


  render () {
    let { style, options, buttonLabel, buttonPress, disable } = this.props
    return (
      <View style={[styles.container, style]}>
        {options.map( (item, i) => {
          let itemData = {
            ...initItem,
            ...item
          }
          switch (item.type) {
            case 'forminput': {
              return (
                <FormInput key={i}
                           ref={itemData.name}
                           textInputRef={itemData.name}
                           labelText={itemData.label}
                           password={itemData.password} 
                           placeholder={itemData.placeholder}
                           placeholderColor={itemData.placeholderColor}
                           keyboardType={itemData.keyboardType}
                           returnKeyType={itemData.returnKeyType}
                           onChangeText={this.onChangeTextHandle.bind(this, itemData.name)}
                           onSubmitEditing={this.onSubmitEditingHandle.bind(this, {key: i, type: itemData.returnKeyType})}
                           />
              )
            }
            default:
              break
          }
        })}
        <Button style={styles.buttonStyle}
                label={buttonLabel}
                labelStyle={styles.buttonTextStyle}
                onPress={this.onPressHandle.bind(this)}
                />
        {disable ? 
          <View style={styles.disableLayer} />
        : null}
      </View>
    )
  }

  onChangeTextHandle (key, val) {
    let { body } = this.state
    let temp = {}
    temp[key] = val
    body = { ...body, ...temp }
    this.setState({ body: body })
  }

  onPressHandle () {
    let { body } = this.state
    this.props.buttonPress(body)
  }

  onSubmitEditingHandle (evt) {
    let { options } = this.props
    switch (evt.type) {
      case 'next':
        if (evt.key >= options.length) return
        let name = options[evt.key + 1].name
        this.refs[name].refs[name].focus()
        break
      case 'default':
        this.onPressHandle()
        break
      default:
        break
    }
  }

}

