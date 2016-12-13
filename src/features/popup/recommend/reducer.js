'use strict';

import * as types from './constant'
import * as httpService from '../../../services/http'
import * as storageService from '../../../services/storage'
import { setToken } from '../../../services/token'
import _ from 'lodash'

const initState = {
  bookListPending: false,
  bookListError: null,
  bookListSkip: 0,
  bookList: [],
  bookListTotal: 0,
  pageSize: httpService.pageSize
}

const Recommend = (state = initState, action) => {
  let { payload, error } = action
  switch (action.type) {
    case types.RECOMMEND_BOOK_LIST_BEGIN: {
      let stateData = null
      if (payload.skip === 0) {
        stateData = {
          bookList: [],
          bookListTotal: 0
        }
      }
      return {
        ...state,
        bookListError: null,
        bookListPending: true,
        bookListSkip: payload.skip,
        ...stateData
      }
    }
    case types.RECOMMEND_BOOK_LIST_SUCCESS: {
      let list = state.bookListSkip > 0 ? _.concat(state.bookList, payload.data.list) : payload.data.list
      return {
        ...state,
        bookListError: null,
        bookListPending: false,
        bookList: list,
        bookListTotal: payload.data.counts
      }
    }
    case types.RECOMMEND_BOOK_LIST_FAILURE: {
      return {
        ...state,
        bookListError: error,
        bookListPending: false
      }
    }
    default: {
      return state
    }
  }
}

export default Recommend