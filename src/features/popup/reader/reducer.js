'use strict';

import * as types from './constant'
import * as httpService from '../../../services/http'
import * as storageService from '../../../services/storage'
import { setToken } from '../../../services/token'
import _ from 'lodash'

const initState = {
  getChapterPending: false,
  getChapterError: null,
  chapterData: null,
  bookCollect: 0,
  bookReadrec: null,
  classType: 0,
  connectionInfo: null,
  toolBarShow: true,
  toolBarTime: 5
}

const Reader = (state = initState, action) => {
  let { payload, error } = action
  switch (action.type) {
    case types.READER_GET_INFO_BEGIN: {
      return {
        ...state,
        getChapterPending: true,
        getChapterError: null
      }
    }
    case types.READER_GET_INFO_SUCCESS: {
      let error = null
      let stateData = null
      if (payload.code > 0) {
        error = payload
      }
      else {
        let { chapter, readrec } = payload.data
        let book = chapter.inbook
        stateData = {
          chapterData: chapter,
          bookReadrec: payload.isRec ? readrec : { lastpage: 0 },
          classType: book.classify.classtype
        }
      }
      return {
        ...state,
        getChapterPending: false,
        getChapterError: error,
        ...stateData
      }
    }
    case types.READER_GET_INFO_FAILURE: {
      return {
        ...state,
        getChapterPending: false,
        getChapterError: null
      }
    }
    case types.READER_GET_NETINFO: {
      return {
        ...state,
        connectionInfo: payload
      }
    }
    default: {
      return state
    }
  }
}

export default Reader