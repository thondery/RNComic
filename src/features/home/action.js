'use strict';

import * as types from './constant'
import * as httpService from '../../services/http'
import * as storageService from '../../services/storage'
import _ from 'lodash'

export function getClassifyList () {
  return dispatch => {
    dispatch(httpService.createAction(types.HOME_CLASSIFY_LIST_BEGIN, null))
    return new Promise(async (resolve, reject) => {
      try {
        let ret = await httpService.get('/book/classify')
        if (_.isError(ret)) {
          throw ret
        }
        dispatch(httpService.createAction(types.HOME_CLASSIFY_LIST_SUCCESS, ret))
        resolve(ret)
      }
      catch (err) {
        dispatch(httpService.createAction(types.HOME_CLASSIFY_LIST_FAILURE, err))
        reject(err)
      }
    }).catch(() => {})
  }
}

export function getDefaultInfo () {
  return dispatch => {
    dispatch(httpService.createAction(types.HOME_DEFAULT_INFO_BEGIN, null))
    return new Promise(async (resolve, reject) => {
      try {
        let ret = await httpService.get('/home')
        if (_.isError(ret)) {
          throw ret
        }
        dispatch(httpService.createAction(types.HOME_DEFAULT_INFO_SUCCESS, ret))
        resolve(ret)
      }
      catch (err) {
        dispatch(httpService.createAction(types.HOME_DEFAULT_INFO_FAILURE, err))
        reject(err)
      }
    }).catch(() => {})
  }
}

export function getTiaomanInfo () {
  return dispatch => {
    dispatch(httpService.createAction(types.HOME_TIAOMAN_INFO_BEGIN, null))
    return new Promise(async (resolve, reject) => {
      try {
        let ret = await httpService.get('/home/tiaoman')
        if (_.isError(ret)) {
          throw ret
        }
        dispatch(httpService.createAction(types.HOME_TIAOMAN_INFO_SUCCESS, ret))
        resolve(ret)
      }
      catch (err) {
        dispatch(httpService.createAction(types.HOME_TIAOMAN_INFO_FAILURE, err))
        reject(err)
      }
    }).catch(() => {})
  }
}