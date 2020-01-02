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
import { fetchdata } from './fetchData';
import { fetchschoolinfo } from './fetchSchoolInfo';
//import { users } from './users.reducer';
//import { alert } from './alert.reducer';


import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import rootReducer from '../_reducers';

const rootReducer = combineReducers({
  authenticate,
  fetchdata,
  fetchschoolinfo,
  slider_items: Slider_items,
  schools: Schools
});
const loggerMiddleware = createLogger();

export const ConfigStore = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
