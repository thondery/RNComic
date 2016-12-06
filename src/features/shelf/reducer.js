'use strict';

import * as types from './constant'
import * as storageService from '../../services/storage'
import { setToken } from '../../services/token'

const initState = {
  collectListPending: false,
  collectListError: null,
  collectList: null,
  readrecListPending: false,
  readrecListError: null,
  readrecList: null,
  editState: {
    tabLabel: 'collect',
    isOpen: false,
    selectItem: []
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
          isOpen: payload
        }
      }
    }
    case types.SHELF_MENU_EDITMODE_INIT: {
      return {
        ...state,
        editState: {
          tabLabel: payload,
          isOpen: false,
          selectItem: []
        }
      }
    }
    case types.SHELF_COLLECT_LIST_BEGIN: {
      return {
        ...state,
        collectListPending: true,
        collectListError: null,
        editState: {
          ...state.editState,
          isOpen: false,
          selectItem: []
        }
      }
    }
    case types.SHELF_COLLECT_LIST_SUCCESS: {
      return {
        ...state,
        collectListPending: false,
        collectListError: null,
        collectList: payload.data
      }
    }
    case types.SHELF_COLLECT_LIST_FAILURE: {
      return {
        ...state,
        collectListPending: false,
        collectListError: error
      }
    }
    default: {
      return state
    }

  }
}

export default Shelf