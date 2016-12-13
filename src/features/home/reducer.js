'use strict';

import * as types from './constant'
import * as storageService from '../../services/storage'
import { setToken } from '../../services/token'

const initState = {
  classifyListPending: false,
  classifyListError: null,
  classifyList: null,
  defaultInfoPending: false,
  defaultInfoError: null,
  defaultInfo: null,
  tiaomanInfoPending: false,
  tiaomanInfoError: null,
  tiaomanInfo: null
}

const Home = (state = initState, action) => {
  let { payload, error } = action
  switch (action.type) {
    case types.HOME_CLASSIFY_LIST_BEGIN: {
      return {
        ...state,
        classifyListError: null,
        classifyListPending: true
      }
    }
    case types.HOME_CLASSIFY_LIST_SUCCESS: {
      let error = null
      let stateData = null
      if (payload.code > 0) {
        error = payload
      }
      else {
        stateData = {
          classifyList: payload.data
        }
      }
      return {
        ...state,
        classifyListError: error,
        classifyListPending: false,
        ...stateData
      }
    }
    case types.HOME_CLASSIFY_LIST_FAILURE: {
      return {
        ...state,
        classifyListError: error,
        classifyListPending: false
      }
    }
    case types.HOME_DEFAULT_INFO_BEGIN: {
      return {
        ...state,
        defaultInfoError: null,
        defaultInfoPending: true
      }
    }
    case types.HOME_DEFAULT_INFO_SUCCESS: {
      let stateData = null
      if (payload.data) {
        let { banner, tuijian, renqi, update, tiaoman, fastrise, newbook, top5 } = payload.data
        stateData = {
          banner: banner.list,
          tuijian: tuijian.list,
          renqi: renqi.list,
          update: update.list,
          tiaoman: tiaoman.list,
          fastrise: fastrise.list,
          newbook: newbook.list,
          top5: top5.list
        }
      }
      return {
        ...state,
        defaultInfoError: null,
        defaultInfoPending: false,
        defaultInfo: stateData
      }
    }
    case types.HOME_DEFAULT_INFO_FAILURE: {
      return {
        ...state,
        defaultInfoError: error,
        defaultInfoPending: false
      }
    }
    case types.HOME_TIAOMAN_INFO_BEGIN: {
      return {
        ...state,
        tiaomanInfoError: null,
        tiaomanInfoPending: true
      }
    }
    case types.HOME_TIAOMAN_INFO_SUCCESS: {
      let stateData = null
      if (payload.data) {
        let { update_tm, tuijian_tm, fensi_tm, weekrank_tm } = payload.data
        stateData = {
          update: update_tm.list,
          tuijian: tuijian_tm.list,
          fensi: fensi_tm.list,
          weekrank: weekrank_tm.list
        }
      }
      return {
        ...state,
        tiaomanInfoError: null,
        tiaomanInfoPending: false,
        tiaomanInfo: stateData
      }
    }
    case types.HOME_TIAOMAN_INFO_FAILURE: {
      return {
        ...state,
        tiaomanInfoError: error,
        tiaomanInfoPending: false
      }
    }
    default: {
      return state
    }

  }
}

export default Home