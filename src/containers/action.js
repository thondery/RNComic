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