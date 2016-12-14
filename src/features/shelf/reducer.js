'use strict';

import * as types from './constant'
import * as storageService from '../../services/storage'
import { setToken } from '../../services/token'

const initState = {
  collectListPending: false,
  collectListError: null,
  collectList: [],
  collectListTotal: 0,
  readrecListPending: false,
  readrecListError: null,
  readrecList: [],
  readrecListTotal: 0,
  collectPending: false,
  collectError: null,
  useCollect: -1,
  collectUpdate: false,
  editState: {
    tabLabel: 'collect',
    isOpen: false,
    selectItem: [],
    counts: 0
  }
}

const Shelf = (state = initState, action) => {
  let { payload, error } = action
  switch (action.type) {
    case types.SHELF_MENU_EDITMODE_OPEN: {
      return {
        ...state,
        editState: {
          ...state.editState,
          selectItem: [],
          isOpen: payload
        }
      }
    }
    case types.SHELF_MENU_EDITMODE_INIT: {
      let counts = 0
      switch (payload) {
        case 'collect':
          counts = state.collectListTotal
          break
        case 'readrec':
          counts = state.readrecListTotal
        default:
          break
      }
      return {
        ...state,
        editState: {
          tabLabel: payload,
          isOpen: false,
          selectItem: [],
          counts: counts
        }
      }
    }
    case types.SHELF_MENU_EDITMODE_SELECT: {
      return {
        ...state,
        editState: {
          ...state.editState,
          selectItem: payload
        }
      }
    }
    case types.SHELF_COLLECT_LIST_BEGIN: {
      return {
        ...state,
        collectListPending: true,
        collectListError: null,
        collectUpdate: false,
        editState: {
          ...state.editState,
          isOpen: false,
          selectItem: [],
          counts: 0
        }
      }
    }
    case types.SHELF_COLLECT_LIST_SUCCESS: {
      return {
        ...state,
        collectListPending: false,
        collectListError: null,
        collectList: payload.data.list,
        collectListTotal: payload.data.counts,
        editState: {
          ...state.editState,
          counts: payload.data.counts
        }
      }
    }
    case types.SHELF_COLLECT_LIST_FAILURE: {
      return {
        ...state,
        collectListPending: false,
        collectListError: error
      }
    }
    case types.SHELF_MENU_EDITMODE_REMOVE_BEGIN: {
      return {
        ...state,
        collectListPending: true,
        collectListError: null,
      }
    }
    case types.SHELF_MENU_EDITMODE_REMOVE_SUCCESS: {
      return {
        ...state,
        collectListPending: false,
        collectListError: null,
        collectList: payload.data.list,
        collectListTotal: payload.data.counts,
        editState: {
          ...state.editState,
          isOpen: false,
          selectItem: [],
          counts: payload.data.counts
        }
      }
    }
    case types.SHELF_MENU_EDITMODE_REMOVE_FAILURE: {
      return {
        ...state,
        collectListPending: false,
        collectListError: error
      }
    }
    case types.SHELF_COLLECT_ADD_BEGIN: {
      return {
        ...state,
        collectPending: true,
        collectError: null,
        collectUpdate: false
      }
    }
    case types.SHELF_COLLECT_ADD_SUCCESS: {
      return {
        ...state,
        collectPending: false,
        collectError: null,
        useCollect: 1,
        collectUpdate: true
      }
    }
    case types.SHELF_COLLECT_ADD_FAILURE: {
      return {
        ...state,
        collectPending: false,
        collectError: null
      }
    }
    case types.SHELF_COLLECT_REMOVE_BEGIN: {
      return {
        ...state,
        collectPending: true,
        collectError: null,
        collectUpdate: false
      }
    }
    case types.SHELF_COLLECT_REMOVE_SUCCESS: {
      return {
        ...state,
        collectPending: false,
        collectError: null,
        useCollect: 0,
        collectUpdate: true
      }
    }
    case types.SHELF_COLLECT_REMOVE_FAILURE: {
      return {
        ...state,
        collectPending: false,
        collectError: null
      }
    }
    case types.SHELF_INIT_COLLECT_BOOK: {
      return {
        ...state,
        collectPending: false,
        collectError: null,
        useCollect: -1
      }
    }
    default: {
      return state
    }

  }
}

export default Shelf