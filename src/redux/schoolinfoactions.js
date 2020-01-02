
import { schoolInfoConstants } from './ActionTypes';
import { schoolInfoService } from '../services/schoolinfoservices';
//import { alertActions } from './';
//import { history } from '../_helpers';

export const schoolInfoActions = {
    updatedescription,
    uploadimage,
    getdescription,
    getimage,
    updateimagehoverin,
    updateimagehoverout
};

function updatedescription(schoolDescription) {
    return dispatch => {
        dispatch(request({ schoolDescription }));

        schoolInfoService.updatedescription(schoolDescription)
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(schoolDescription) { return { type : schoolInfoConstants.UPDATE_PENDING, schoolDescription } }
    function success(data) { return { type : schoolInfoConstants.UPDATE_SUCCESS, data } }
    function failure(error) { return { type : schoolInfoConstants.UPDATE_FAILURE, error } }
}


function uploadimage(schoolImage, user_token) {
    return dispatch => {
        dispatch(request({ user_token }));

        schoolInfoService.uploadimage(schoolImage)
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type : schoolInfoConstants.IMAGE_UPLOAD_PENDING, user }}
    function success(data) { return { type : schoolInfoConstants.IMAGE_UPLOAD_SUCCESS, data } }
    function failure(error) { return { type : schoolInfoConstants.IMAGE_UPLOAD_FAILURE, error } }
}


function getdescription(user_token) {
    return dispatch => {
        dispatch(request({ user_token }));

        schoolInfoService.getdescription(user_token)
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


function getimage(user_token) {
    return dispatch => {
        dispatch(request({ user_token }));

        schoolInfoService.getimage(user_token)
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type : schoolInfoConstants.IMAGE_FETCH_PENDING, user } }
    function success(data) { return { type : schoolInfoConstants.IMAGE_FETCH_SUCCESS, data } }
    function failure(error) { return { type : schoolInfoConstants.IMAGE_FETCH_FAILURE, error } }
}

function updateimagehoverin() {
    return dispatch => {
        dispatch(updatehover());
    };

    function updatehover(){ return {type: schoolInfoConstants.UPDATE_IMAGE_HOVER_IN } }
}

function updateimagehoverout() {
    return dispatch => {
        dispatch(updatehover());
    };

    function updatehover(){ return {type: schoolInfoConstants.UPDATE_IMAGE_HOVER_OUT } }
}
