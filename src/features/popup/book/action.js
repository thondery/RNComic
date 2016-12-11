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

export function getBook (book_id) {
  return dispatch => {
    dispatch(httpService.createAction(types.BOOK_GET_INFO_BEGIN, null))
    //setTimeout(() => {
      return new Promise(async (resolve, reject) => {
        try {
          let token = getToken()
          let ret = await httpService.get(`/book/${book_id}`, {
            accesstoken: token
          })
          if (_.isError(ret)) {
            throw ret
          }
          dispatch(httpService.createAction(types.BOOK_GET_INFO_SUCCESS, ret))
          resolve(ret)
        }
        catch (err) {
          dispatch(httpService.createAction(types.BOOK_GET_INFO_FAILURE, err))
          reject(err)
        }
      }).catch(() => {})
    //}, 500)
  }
}