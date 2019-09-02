import { SCHOOLS } from '../shared/schools';
import * as ActionTypes from './ActionTypes';

export const Schools = (state=SCHOOLS, action) => {
  switch(action.type) {
    case(ActionTypes.GET_SCHOOL):
       return state;       
    default:
       return state;
  }
}
