'use strict';

import * as types from './constant'
import * as httpService from '../services/http'
import * as storageService from '../services/storage'
import _ from 'lodash'

export function isAccessToken () {
  return dispatch => {
    dispatch(httpService.createAction(types.APPLICATION_USER_ISACCESSTOKEN_BEGIN, null))
    return new Promise(async (resolve, reject) => {
      try {
        let res = await storageService.getItem('auth')
        let token = res && res.token_key || undefined
        let ret = await httpService.post('/accesstoken', {
                    accesstoken: 'token'
                  })
        if (_.isError(ret)) {
          throw ret
        }
        dispatch(httpService.createAction(types.APPLICATION_USER_ISACCESSTOKEN_SUCCESS, ret))
        resolve(ret)
      }
      catch (err) {
        dispatch(httpService.createAction(types.APPLICATION_USER_ISACCESSTOKEN_FAILURE, err))
        reject(err)
      }
    }).catch(() => {})
  }
}

export function login (info) {
  return dispatch => {
    dispatch(httpService.createAction(types.APPLICATION_USER_LOGIN_BEGIN, null))
    setTimeout(() => {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await storageService.getItem('auth')
          let token = res && res.token_key || undefined
          let ret = await httpService.post('/sign-in', info)
          if (_.isError(ret)) {
            throw ret
          }
          dispatch(httpService.createAction(types.APPLICATION_USER_LOGIN_SUCCESS, ret))
          resolve(ret)
        }
        catch (err) {
          dispatch(httpService.createAction(types.APPLICATION_USER_LOGIN_FAILURE, err))
          reject(err)
        }
      }).catch(() => {})
    }, 500)
  }
}

export function register (info) {
  return dispatch => {
    dispatch(httpService.createAction(types.APPLICATION_USER_REGISTER_BEGIN, null))
    setTimeout(() => {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await storageService.getItem('auth')
          let token = res && res.token_key || undefined
          let ret = await httpService.post('/sign-up', info)
          if (_.isError(ret)) {
            throw ret
          }
          dispatch(httpService.createAction(types.APPLICATION_USER_REGISTER_SUCCESS, ret))
          resolve(ret)
        }
        catch (err) {
          dispatch(httpService.createAction(types.APPLICATION_USER_REGISTER_FAILURE, err))
          reject(err)
        }
      }).catch(() => {})
    }, 500)
  }
}