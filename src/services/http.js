'use strict'

import qs from 'query-string'
import config from '../config'
import _ from 'lodash'

const urlPrefix = config.domain + config.apiPath

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  else {
    let error = new Error(response._bodyText)
    error.response = response
    throw error
  }
}

function parseJSON (response) {
  return response.json()
}

export const get = (url, params) => {
  url = getAPI(url)
  if (params) {
    url += `?${qs.stringify(params)}`
  }
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then( res => res )
    .catch( error => error )
}

export const post = (url, body) => {
  url = getAPI(url)
  return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then( res => res )
    .catch( error => error )
}

export function upload(url, path, key = 'file') {
  url = getAPI(url)
  let formData = new FormData()
  formData.append('file', {
    uri: path, 
    type: 'application/octet-stream', 
    name: key
  })
  formData.append('key', key)
  return fetch(url, {
      method: 'POST',
      body: formData
    })
		.then(checkStatus)
    .then(parseJSON)
    .then( res => res )
    .catch( error => error )
}

export const createAction = (type, response) => {
  let [payload, error] = _.isError(response) 
                       ? [null, response] 
                       : [response, null]
  return {
    type: type,
    payload: payload,
    error: error
  }
}

const getAPI = url => {
  let { domain, apiPath } = config
  return domain + apiPath + url
}

export const getImage = url => {
  let { domain, imgPath } = config
  return { uri: domain + imgPath + url }
}

export const pageSize = config.pageSize || 20