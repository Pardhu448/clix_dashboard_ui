//We are creating store by combining reducers
//import { createStore, combineReducers } from 'redux';

import { Slider_items } from './homeslides';
import { Schools } from './searchschool';
/*
export const ConfigStore = () => {
   const store = createStore(
     combineReducers({
      slider_items: Slider_items,
      schools: Schools
     })
   );
   return store;
};
*/
import { combineReducers } from 'redux';

import { authenticate } from './authenticateUser';
import { authmode } from './authMode';
import { fetchdata } from './fetchData';
import { fetchschoolnamefetch } from './fetchSchoolNameFetch'
import { fetchschoolinfo } from './fetchSchoolInfo';

//import { users } from './users.reducer';
//import { alert } from './alert.reducer';


import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import rootReducer from '../_reducers';

const rootReducer = combineReducers({
  authenticate,
  authmode,
  fetchdata,
  fetchschoolinfo,
  fetchschoolnamefetch,
  slider_items: Slider_items,
  schools: Schools
});


const loggerMiddleware = createLogger();
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
    return undefined;
  }
}
const persistedState = loadFromLocalStorage();


export const ConfigStore = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
ConfigStore.subscribe(() => saveToLocalStorage(ConfigStore.getState()))
