'use strict'

import React from 'react'
import { AsyncStorage } from 'react-native'

export async function setItem (key, value) {
  if (value === null) return Promise.reject('StorageService Error: value should not be null or undefined')
  return await AsyncStorage.setItem(key, JSON.stringify(value))
}

export function getItem (key) {
	return AsyncStorage.getItem(key)
		.then( value => JSON.parse(value) )
}

export const clear = AsyncStorage.clear

export async function removeItem(...args) {
	return await AsyncStorage.removeItem(...args)
}

export function multiGet (keys) {
	return AsyncStorage.multiGet(keys)
		.then( results => 
      results.map( item => 
        [item[0], JSON.parse(item[1])] 
      ) 
    )
}

export function multiRemove(keys) {
	return AsyncStorage.multiRemove(keys)
}