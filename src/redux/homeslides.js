//A reducer to modify the state of home slider_items
//It takes state and action as input and does a switch operation
// based on action ActionTypes

import { SLIDER_ITEMS } from '../shared/home_sliders';

export const Slider_items = (state=SLIDER_ITEMS, action) => {
  switch(action.type) {
    default:
       return state;
  }
}
