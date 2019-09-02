//import * as ActionTypes from './ActionTypes';
import { GET_SCHOOL, userConstants } from './ActionTypes';
import { userService } from '../services/userservices';
//import { alertActions } from './';
//import { history } from '../_helpers';


export const get_school = (school_id) => ({
  type: ActionTypes.GET_SCHOOL,
  payload: {
    school_id: school_id
  }
});

export const userActions = {
    login,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
