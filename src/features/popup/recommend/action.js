'use strict';

import * as types from './constant'
import * as httpService from '../../../services/http'
import * as storageService from '../../../services/storage'
import _ from 'lodash'
import validator from 'validator'

export function getBookList (tab, skip = 0) {
  return dispatch => {
    dispatch(httpService.createAction(types.RECOMMEND_BOOK_LIST_BEGIN, {skip: skip}))
    let ltr = setTimeout(() => {
      return new Promise(async (resolve, reject) => {
        try {
          let ret = await httpService.get(`/recommend/${tab}`, {
            limit: httpService.pageSize,
            skip: skip
          })
          if (_.isError(ret)) {
            throw ret
          }
          dispatch(httpService.createAction(types.RECOMMEND_BOOK_LIST_SUCCESS, ret))
          resolve(ret)
        }
        catch (err) {
          dispatch(httpService.createAction(types.RECOMMEND_BOOK_LIST_FAILURE, err))
          reject(err)
        }
      }).catch(() => {})
      clearTimeout(ltr)
      ltr = null
    }, 500)
  }
}