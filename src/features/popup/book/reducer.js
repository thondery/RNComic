'use strict';

import * as types from './constant'
import * as httpService from '../../../services/http'
import * as storageService from '../../../services/storage'
import { setToken } from '../../../services/token'
import _ from 'lodash'

const initState = {
  getBookPending: false,
  getBookError: null,
  getBookData: null,
  bookCollect: 0,
  bookReadrec: null,
  classType: 0
}

const Book = (state = initState, action) => {
  let { payload, error } = action
  switch (action.type) {
    case types.BOOK_GET_INFO_BEGIN: {
      return {
        ...state,
        getBookPending: true,
        getBookError: null,
        getBookData: null,
        bookCollect: 0,
        bookReadrec: null,
        classType: 0
      }
    }
    case types.BOOK_GET_INFO_SUCCESS: {
      let error = null
      let stateData = null
      if (payload.code > 0) {
        error = payload
      }
      else {
        let book = payload.data.book
        let readrec = _.has(payload.data.readrec, 'chapter') ? payload.data.readrec : null
        stateData = {
          bookCollect: payload.data.collect,
          bookReadrec: readrec,
          getBookData: payload.data.book,
          classType: book.classify.classtype
        }
      }
      return {
        ...state,
        getBookPending: false,
        getBookError: error,
        ...stateData
      }
    }
    case types.BOOK_GET_INFO_FAILURE: {
      return {
        ...state,
        getBookPending: false,
        getBookError: error,
        getBookData: null,
        bookCollect: 0,
        bookReadrec: null,
        classType: 0
      }
    }
    default: {
      return state
    }
  }
}

export default Book