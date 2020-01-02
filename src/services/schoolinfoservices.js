import baseUrl from '../shared/baseUrl';
import authHeader from './authHeader';
//import { authHeader } from '../_helpers';
import axios from 'axios';


export const schoolInfoService = {
    updatedescription,
    uploadimage,
    getdescription,
    getimage
};

function updatedescription(schoolDescription) {

    const user_token = authHeader()['Authorization']
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': user_token },
        body: JSON.stringify({ schoolDescription })
    };

    return fetch(`${baseUrl}/schoolinfo`, requestOptions)
        .then(handleResponse);
}

function uploadimage(imageFile) {
   const schoolImageFile = imageFile.pop()
   const user_token = authHeader()['Authorization']

   var formData = new FormData();
   formData.append("ImageFile", schoolImageFile);

    const requestOptions = {
        headers: { 'Content-Type': 'multipart/form-data', 'Authorization': user_token },
    };

    return axios.post(`${baseUrl}/schoolimage`, formData, requestOptions)
        .then(handleResponseAxios);
}

function getdescription(user_token) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${baseUrl}/schoolinfo`, requestOptions)
        .then(handleResponse);
}


function getimage(user_token) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${baseUrl}/schoolimage`, requestOptions)
        .then(handleResponseImage);
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

function handleResponseImage(response) {
    //console.log(Buffer.from(response.data, 'binary').toString('base64'))
    //console.log(response.blob())
    //return response.blob().then(image => {
    //    const schoolImage = URL.createObjectURL(image)

      //console.log(Buffer.from(response.data, 'binary').toString('base64'))
      return response.blob().then(blob => {
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            const error = response.statusText;
            return Promise.reject(error);
        }

      var content_type = response.headers['content-type'];
      var responseBlob = new Blob([blob], {type: content_type });
      var reader = new window.FileReader();

      reader.readAsDataURL(responseBlob);
     //Created a Promise which resolves to 'data' on completion of file read
      let onImageload = new Promise(function(resolve, reject){
        reader.onload = function(){
               var imageDataUrl = reader.result;
               var data = {schoolImage: imageDataUrl};

               //data.schoolImage = imageDataUrl;
               resolve(data);
             }
      }
      );

      return onImageload.then(function(data) { return data });
    })
}

function handleResponseAxios(response) {

        const data = response.data;
        if (response.statusText !== 'OK') {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
}
