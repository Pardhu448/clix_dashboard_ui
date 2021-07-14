
import { schoolInfoConstants } from './ActionTypes';
import { schoolinfoservices } from '../services/schooldataservices';
//import { alertActions } from './';
//import { history } from '../_helpers';

export const schoolInfoFetch = {
    getschoolname,
    getdistrict,
};



function getschoolname(_id,id) {
    return dispatch => {
        dispatch(request({ _id,id}));

        schoolinfoservices.getschoolname(_id,id)
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type : schoolInfoConstants.FETCH_PENDING, user } }
    function success(data) { return { type : schoolInfoConstants.FETCH_SUCCESS, data } }
    function failure(error) { return { type : schoolInfoConstants.FETCH_FAILURE, error } }
}


function getdistrict(_id) {
    return dispatch => {
        dispatch(request({_id}));

        schoolinfoservices.getdistrict(_id)
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type : schoolInfoConstants.FETCH_PENDING, user } }
    function success(data) { return { type : schoolInfoConstants.FETCH_SUCCESS, data } }
    function failure(error) { return { type : schoolInfoConstants.FETCH_FAILURE, error } }
}

