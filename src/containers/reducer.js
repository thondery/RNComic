'use strict';

import * as types from './constant'
import * as storageService from '../services/storage'
import { setToken } from '../services/token'

const initState = {
  isAccesstokenPending: false,
  isAccesstokenError: null,
  auth: null
}

const Root = (state = initState, action) => {
  let { payload, error } = action
  switch (action.type) {
    case types.APPLICATION_USER_ISACCESSTOKEN_BEGIN: {
      return {
        ...state,
        isAccesstokenError: null,
        isAccesstokenPending: true
      }
    }
    case types.APPLICATION_USER_ISACCESSTOKEN_SUCCESS: {
      let auth = payload.code === 0 ? payload.data : null
      if (auth) {
        storageService.setItem('auth', auth)
        setToken(payload.data.token_key)
      }
      return {
        ...state,
        isAccesstokenError: null,
        isAccesstokenPending: false,
        auth: auth
      }
    }
    case types.APPLICATION_USER_ISACCESSTOKEN_FAILURE: {
      return {
        ...state,
        isAccesstokenError: error,
        isAccesstokenPending: false
      }
    }
    default: {
      return state
    }

  }
}

export default Root