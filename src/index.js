'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Application from './containers/index'

const store = configureStore()

export default class KNRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    )
  }
}