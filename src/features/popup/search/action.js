'use strict';

import * as types from './constant'
import * as httpService from '../../../services/http'
import * as storageService from '../../../services/storage'
import _ from 'lodash'
import validator from 'validator'

export function searchBook (searchText, skip = 0) {
  return dispatch => {
    searchText = validator.trim(searchText)
    dispatch(httpService.createAction(types.SEARCH_BOOK_LIST_BEGIN, {skip: skip, searchText: searchText}))
    setTimeout(() => {
      return new Promise(async (resolve, reject) => {
        try {
          let searchHistory = await storageService.getItem('search') || []
          if (!validator.isEmpty(searchText) && searchHistory.indexOf(searchText) === -1) {
            searchHistory = _.concat(searchHistory, searchText)
            storageService.setItem('search', searchHistory)
          }
          let ret = await httpService.get('/book/search/', {
            key: searchText,
            limit: httpService.pageSize,
            skip: skip
          })
          if (_.isError(ret)) {
            throw ret
          }
          dispatch(httpService.createAction(types.SEARCH_BOOK_LIST_SUCCESS, ret))
          resolve(ret)
        }
        catch (err) {
          dispatch(httpService.createAction(types.SEARCH_BOOK_LIST_FAILURE, err))
          reject(err)
        }
      }).catch(() => {})
    }, 500)
  }
}

export function clearSearch () {
  return dispatch => {
    dispatch(httpService.createAction(types.SEARCH_BOOK_LIST_CLEAR, null))
  }
}

export function clearHistory () {
  return dispatch => {
    storageService.removeItem('search')
    dispatch(httpService.createAction(types.SEARCH_BOOK_LIST_HISTORY_CLEAR, null))
  }
}