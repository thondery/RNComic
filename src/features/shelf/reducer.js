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
  readrecUpdate: false,
  readrecPending: false,
  readrecError: null,
  readrecInfo: null,
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
      let tabLabel = payload ? payload : state.editState.tabLabel
      switch (tabLabel) {
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
          tabLabel: tabLabel,
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
    case types.SHELF_READREC_LIST_BEGIN: {
      return {
        ...state,
        readrecListPending: true,
        readrecListError: null,
        readrecUpdate: false,
        editState: {
          ...state.editState,
          isOpen: false,
          selectItem: [],
          counts: 0
        }
      }
    }
    case types.SHELF_READREC_LIST_SUCCESS: {
      return {
        ...state,
        readrecListPending: false,
        readrecListError: null,
        readrecList: payload.data.list,
        readrecListTotal: payload.data.counts,
        editState: {
          ...state.editState,
          counts: payload.data.counts
        }
      }
    }
    case types.SHELF_READREC_LIST_FAILURE: {
      return {
        ...state,
        readrecListPending: false,
        readrecListError: error
      }
    }
    case types.SHELF_MENU_EDITMODE_REMOVE_BEGIN: {
      let tabLabel = state.editState.tabLabel
      let stateData = null
      switch (tabLabel) {
        case 'collect':
          stateData = {
            collectListPending: true,
            collectListError: null
          }
          break
        case 'readrec':
          stateData = {
            readrecListPending: true,
            readrecListError: null
          }
        default:
          break
      }
      return {
        ...state,
        ...stateData
      }
    }
    case types.SHELF_MENU_EDITMODE_REMOVE_SUCCESS: {
      let tabLabel = state.editState.tabLabel
      let stateData = null
      switch (tabLabel) {
        case 'collect':
          stateData = {
            collectListPending: false,
            collectListError: null,
            collectList: payload.data.list,
            collectListTotal: payload.data.counts,
          }
          break
        case 'readrec':
          stateData = {
            readrecListPending: false,
            readrecListError: null,
            readrecList: payload.data.list,
            readrecListTotal: payload.data.counts,
          }
        default:
          break
      }
      return {
        ...state,
        ...stateData,
        editState: {
          ...state.editState,
          isOpen: false,
          selectItem: [],
          counts: payload.data.counts
        }
      }
    }
    case types.SHELF_MENU_EDITMODE_REMOVE_FAILURE: {
      let tabLabel = state.editState.tabLabel
      let stateData = null
      switch (tabLabel) {
        case 'collect':
          stateData = {
            collectListPending: false,
            collectListError: error
          }
          break
        case 'readrec':
          stateData = {
            readrecListPending: false,
            readrecListError: error
          }
        default:
          break
      }
      return {
        ...state,
        ...stateData
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
    case types.SHELF_READREC_UPDATE_BEGIN: {
      return {
        ...state,
        readrecUpdate: false,
        readrecPending: false,
        readrecError: null,
        //readrecInfo: null
      }
    }
    case types.SHELF_READREC_UPDATE_SUCCESS: {
      return {
        ...state,
        readrecUpdate: true,
        readrecPending: false,
        readrecError: null,
        readrecInfo: payload.data.readrec
      }
    }
    case types.SHELF_READREC_UPDATE_FAILURE: {
      return {
        ...state,
        readrecPending: false,
        readrecError: error
      }
    }
    default: {
      return state
    }

  }
}

export default Shelf