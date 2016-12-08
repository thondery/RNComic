'use strict';

import * as types from './constant'
import * as httpService from '../../services/http'
import * as storageService from '../../services/storage'
import { getToken } from '../../services/token'
import _ from 'lodash'

export function openEditMode(isopen = true) {
  return dispatch => {
    dispatch(httpService.createAction(types.SHELF_MENU_EDITMODE_OPEN, isopen))
  }
}

export function initEditMode(tablabel) {
  return dispatch => {
    dispatch(httpService.createAction(types.SHELF_MENU_EDITMODE_INIT, tablabel))
  }
}

export function selectItemByEditMode(selectitem) {
  return dispatch => {
    dispatch(httpService.createAction(types.SHELF_MENU_EDITMODE_SELECT, selectitem))
  }
}

export function removeCollect(selectitem) {
  return dispatch => {
    dispatch(httpService.createAction(types.SHELF_MENU_EDITMODE_REMOVE_BEGIN, null))
    return new Promise(async (resolve, reject) => {
      try {
        let res = await storageService.getItem('auth')
        let token = res && res.token_key || undefined
        let ret = await httpService.post('/book/re_collect', {
                    accesstoken: token,
                    book_id: selectitem,
                  })
        if (_.isError(ret)) {
          throw ret
        }
        dispatch(httpService.createAction(types.SHELF_MENU_EDITMODE_REMOVE_SUCCESS, ret))
        resolve(ret)
      }
      catch (err) {
        dispatch(httpService.createAction(types.SHELF_MENU_EDITMODE_REMOVE_FAILURE, err))
        reject(err)
      }
    }).catch(() => {})
  }
}

export function getCollectList () {
  return dispatch => {
    dispatch(httpService.createAction(types.SHELF_COLLECT_LIST_BEGIN, null))
    return new Promise(async (resolve, reject) => {
      try {
        let res = await storageService.getItem('auth')
        let token = res && res.token_key || undefined
        let ret = await httpService.get('/book/collect', {
                    accesstoken: token
                  })
        if (_.isError(ret)) {
          throw ret
        }
        dispatch(httpService.createAction(types.SHELF_COLLECT_LIST_SUCCESS, ret))
        resolve(ret)
      }
      catch (err) {
        dispatch(httpService.createAction(types.SHELF_COLLECT_LIST_FAILURE, err))
        reject(err)
      }
    }).catch(() => {})
  }
}

export function collect(book_id) {
  return dispatch => {
    dispatch(httpService.createAction(types.SHELF_COLLECT_ADD_BEGIN, null))
    return new Promise(async (resolve, reject) => {
      try {
        let token = getToken()
        let ret = await httpService.post('/book/collect', {
                    accesstoken: token,
                    book_id: book_id,
                  })
        if (_.isError(ret)) {
          throw ret
        }
        dispatch(httpService.createAction(types.SHELF_COLLECT_ADD_SUCCESS, ret))
        resolve(ret)
      }
      catch (err) {
        dispatch(httpService.createAction(types.SHELF_COLLECT_ADD_FAILURE, err))
        reject(err)
      }
    }).catch(() => {})
  }
}

export function reCollect(book_id) {
  return dispatch => {
    dispatch(httpService.createAction(types.SHELF_COLLECT_REMOVE_BEGIN, null))
    return new Promise(async (resolve, reject) => {
      try {
        let token = getToken()
        let ret = await httpService.post('/book/re_collect', {
                    accesstoken: token,
                    book_id: book_id,
                  })
        if (_.isError(ret)) {
          throw ret
        }
        dispatch(httpService.createAction(types.SHELF_COLLECT_REMOVE_SUCCESS, ret))
        resolve(ret)
      }
      catch (err) {
        dispatch(httpService.createAction(types.SHELF_COLLECT_REMOVE_FAILURE, err))
        reject(err)
      }
    }).catch(() => {})
  }
}

export function collectInit() {
  return dispatch => {
    dispatch(httpService.createAction(types.SHELF_INIT_COLLECT_BOOK, null))
  }
}

export function getReadrecList () {

}