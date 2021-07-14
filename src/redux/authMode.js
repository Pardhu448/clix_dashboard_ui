import { loginViaModeConstants } from './ActionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { view_mode: true, user ,school_name: ''} : {};

export function authmode(state = initialState, action) {
  switch (action.type) {
    case loginViaModeConstants.FETCH_REQUEST:
      return {
        user: action.user,
        view_mode:true,
      };
    case loginViaModeConstants.FETCH_SUCCESS:
      return {
        view_mode: true,
        user: action.user
      };
    case loginViaModeConstants.FETCH_FAILURE:
      return {
        view_mode: false,
        loginFailed: true
      };
    case loginViaModeConstants.REMOVE:
      return {
        view_mode: false
      };
    default:
      return state
  }
}
