'use strict';

import * as types from './constant'
import * as storageService from '../services/storage'
import { setToken } from '../services/token'

const initState = {
  isAccesstokenPending: false,
  isAccesstokenError: null,
  loginPending: false,
  loginError: null,
  registerPending: false,
  registerError: null,
  loginOutPending: false,
  loginOutError: null,
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
    case types.APPLICATION_USER_LOGIN_BEGIN: {
      return {
        ...state,
        loginError: null,
        loginPending: true
      }
    }
    case types.APPLICATION_USER_LOGIN_SUCCESS: {
      let auth = payload.code === 0 ? payload.data : null
      let error = null
      if (auth) {
        storageService.setItem('auth', auth)
        setToken(payload.data.token_key)
      }
      else {
        error = payload
      }
      return {
        ...state,
        loginError: error,
        loginPending: false,
        auth: auth
      }
    }
    case types.APPLICATION_USER_LOGIN_FAILURE: {
      return {
        ...state,
        loginError: error,
        loginPending: false
      }
    }
    case types.APPLICATION_USER_REGISTER_BEGIN: {
      return {
        ...state,
        registerError: null,
        registerPending: true
      }
    }
    case types.APPLICATION_USER_REGISTER_SUCCESS: {
      let auth = payload.code === 0 ? payload.data : null
      let error = null
      if (auth) {
        storageService.setItem('auth', auth)
        setToken(payload.data.token_key)
      }
      else {
        error = payload
      }
      return {
        ...state,
        registerError: error,
        registerPending: false,
        auth: auth
      }
    }
    case types.APPLICATION_USER_REGISTER_FAILURE: {
      return {
        ...state,
        registerError: error,
        registerPending: false
      }
    }
    case types.APPLICATION_USER_LOGINOUT_BEGIN: {
      return {
        ...state,
        loginOutError: null,
        loginOutPending: true
      }
    }
    case types.APPLICATION_USER_LOGINOUT_SUCCESS: {
      return {
        ...state,
        loginOutError: null,
        loginOutPending: false,
        auth: null
      }
    }
    case types.APPLICATION_USER_LOGINOUT_FAILURE: {
      return {
        ...state,
        loginOutError: error,
        loginOutPending: false
      }
    }
    default: {
      return state
    }

  }
}

export default Root