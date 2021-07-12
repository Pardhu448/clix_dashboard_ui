import { userConstants } from './ActionTypes';

let user = JSON.parse(localStorage.getItem('loggedIn'));
const initialState = user ? { loggedIn: true, user } : {};

export function authenticate(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        loggedIn: false
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        loginFailed: true
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state
  }
}
