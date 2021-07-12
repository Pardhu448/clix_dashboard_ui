import { loginViaModeConstants } from './ActionTypes';
import { modeService } from '../services/fetchModeServices';
//import { alertActions } from './';
//import { history } from '../_helpers';

export const userActionsLogin = {
    directlogin,
    removeUser
};

function directlogin(school_name, view_mode) {
    return dispatch => {
        dispatch(request({  school_name  ,view_mode}));
        modeService.directlogin(school_name, view_mode)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: loginViaModeConstants.FETCH_REQUEST , user } }
    function success(user) { return { type:loginViaModeConstants.FETCH_SUCCESS, user } }
    function failure(error) { return { type: loginViaModeConstants.FETCH_FAILURE, error } }
}

function removeUser() {
  
    modeService.removeUser();
    // modeService.removeUser();
    return { type: loginViaModeConstants.REMOVE };
}
