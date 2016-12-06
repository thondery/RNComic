'use strict';

import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  TextInput 
} from 'react-native'
import styles, { width, height } from './style'

export default class FormInput extends Component {

  static propTypes = {
    style: View.propTypes.style,
    textInputRef: PropTypes.string,
    textInputStyle: TextInput.propTypes.style,
    labelText: PropTypes.string,
    password: PropTypes.bool,
    placeholder: PropTypes.string,
    placeholderColor: PropTypes.string,
    returnKeyType: PropTypes.string,
    keyboardType: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func
  }

  static defaultProps = {
    style: null,
    textInputRef: '',
    textInputStyle: null,
    labelText: undefined,
    password: false,
    placeholder: '',
    placeholderColor: '#ccc',
    returnKeyType: 'default',
    keyboardType: 'default',
    autoFocus: false,
    onChangeText: () => null,
    onSubmitEditing: () => null
  }

  focus() {
    const ref = this.props.textInputRef
    this.refs[ref].focus()
  }

  blur() {
    const ref = this.props.textInputRef
    this.refs[ref].blur()
  }

  render () {
    let { 
      style,
      textInputRef,
      textInputStyle,
      labelText,
      password,
      placeholder,
      placeholderColor,
      returnKeyType,
      keyboardType,
      autoFocus,
      onChangeText,
      onSubmitEditing
    } = this.props
    return (
      <View style={[styles.container, style]}>
        {labelText ?
          <View style={styles.labelViewStyle}>
            <Text style={styles.labelTextStyle} numberOfLines={1}>{labelText}</Text>
          </View>
        : null}
        <TextInput ref={textInputRef}
                   style={[styles.textInputStyle, textInputStyle, labelText ? {width: width - 110} : null]}
                   autoCapitalize={'none'}
                   password={password}
                   placeholder={placeholder}
                   placeholderColor={placeholderColor}
                   returnKeyType={returnKeyType}
                   keyboardType={keyboardType}
                   autoFocus={autoFocus}
                   onChangeText={onChangeText}
                   onSubmitEditing={onSubmitEditing} />
      </View>
    )
  }
}