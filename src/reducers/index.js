import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import saveData from './saveData';

const rootReducer = combineReducers({
  saveData
});

const store = configureStore({
  reducer: rootReducer
});

export default store;