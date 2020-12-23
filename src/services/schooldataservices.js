import baseUrl from '../shared/baseUrl';
import notauthHeader from './notAuthHeader';
//import { authHeader } from '../_helpers';
import axios from 'axios';


export const schoolinfoservices = {
    getdistrict,

    getschoolname,
};



  function getdistrict(_id) {
    const requestOptions = {
        method: 'GET',
    };

    return  fetch(`http://103.36.84.138:5001/districts/${_id}`, requestOptions)
        .then(handleResponseDisc);
        
}


function getschoolname(_id,id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`http://103.36.84.138:5001/schools/1/1`, requestOptions)
        .then(handleResponse);
//      return axios.get(`${baseUrl}/schoolimage`,
//                         requestOptions,
//                         { responseType: 'ArrayBuffer' }).then(handleResponseImage)
    }


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');	
}

function handleResponse(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}


function handleResponseDisc(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
// function handleResponseAxios(response) {

//         const data = response.data;
//         if (response.statusText !== 'OK') {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//                 //location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
// }
