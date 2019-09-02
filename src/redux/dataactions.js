
import { dataConstants } from './ActionTypes';
import { dataService } from '../services/dataservices';
//import { alertActions } from './';
//import { history } from '../_helpers';

export const dataActions = {
    getdata
};

function getdata(user_token) {
    return dispatch => {
        dispatch(request({ user_token }));

        dataService.getdata(user_token)
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type : dataConstants.FETCH_PENDING, user } }
    function success(data) { return { type : dataConstants.FETCH_SUCCESS, data } }
    function failure(error) { return { type : dataConstants.FETCH_FAILURE, error } }
}
