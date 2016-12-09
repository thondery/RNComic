'use strict';

import * as types from './constant'
import * as httpService from '../../../services/http'
import * as storageService from '../../../services/storage'
import { getToken } from '../../../services/token'
import _ from 'lodash'
import * as shelfActions from '../../shelf/action'

export const collectInit = shelfActions.collectInit
export const collect = shelfActions.collect
export const reCollect = shelfActions.reCollect

export function getChapter (book_id) {
  return dispatch => {
    dispatch(httpService.createAction(types.READER_GET_INFO_BEGIN, null))
    setTimeout(() => {
      return new Promise(async (resolve, reject) => {
        try {
          let token = getToken()
          let ret = await httpService.get(`/book/chapter/${book_id}`, {
            accesstoken: token
          })
          if (_.isError(ret)) {
            throw ret
          }
          dispatch(httpService.createAction(types.READER_GET_INFO_SUCCESS, ret))
          resolve(ret)
        }
        catch (err) {
          dispatch(httpService.createAction(types.READER_GET_INFO_FAILURE, err))
          reject(err)
        }
      }).catch(() => {})
    }, 500)
  }
}

export function getNetInfo (connectionInfo) {
  return dispatch => {
    dispatch(httpService.createAction(types.READER_GET_NETINFO, connectionInfo))
  }
}

export function prevChapter () {
  return dispatch => {
    dispatch(httpService.createAction(types.READER_GET_INFO_BEGIN, null))
    setTimeout(() => {
      dispatch(httpService.createAction(types.READER_GET_INFO_SUCCESS, {code: 1000, message: '没有上一章了～'}))
    }, 500)
  }
}