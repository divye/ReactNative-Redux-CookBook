/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Author: Divye Gupta
 * Date: 7th September 2016
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers'
//Adding the params so that the logger works only in the development mode.
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});
//create the store
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});


import AppContainer from './app/containers/AppContainer'
const App = () => (
  <Provider store ={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('CookBook', () => App);
