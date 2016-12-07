'use strict';

import * as types from './constant'
import * as httpService from '../../../services/http'
import * as storageService from '../../../services/storage'
import { setToken } from '../../../services/token'
import _ from 'lodash'

const initState = {
  searchListPending: false,
  searchListError: null,
  searchListSkip: 0,
  searchList: [],
  searchListTotal: 0,
  pageSize: httpService.pageSize,
  searchText: '',
  clearHistory: false
}

const Search = (state = initState, action) => {
  let { payload, error } = action
  switch (action.type) {
    case types.SEARCH_BOOK_LIST_BEGIN: {
      return {
        ...state,
        searchListError: null,
        searchListPending: true,
        searchListSkip: payload.skip,
        searchText: payload.searchText,
        clearHistory: false
      }
    }
    case types.SEARCH_BOOK_LIST_SUCCESS: {
      let list = state.searchListSkip > 0 ? _.concat(state.searchList, payload.data.list) : payload.data.list
      return {
        ...state,
        searchListError: null,
        searchListPending: false,
        searchList: list,
        searchListTotal: payload.data.counts
      }
    }
    case types.SEARCH_BOOK_LIST_FAILURE: {
      return {
        ...state,
        searchListError: error,
        searchListPending: false
      }
    }
    case types.SEARCH_BOOK_LIST_CLEAR: {
      return {
        ...state,
        searchListError: null,
        searchListPending: false,
        searchList: [],
        searchListTotal: 0,
        searchListSkip: 0,
        searchText: '',
        clearHistory: false
      }
    }
    case types.SEARCH_BOOK_LIST_HISTORY_CLEAR: {
      return {
        ...state,
        clearHistory: true
      }
    }
    default: {
      return state
    }

  }
}

export default Search