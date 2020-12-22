import baseUrl from '../shared/baseUrl';
//import { authHeader } from '../_helpers';

export const modeService = {
    directlogin,
    removeUser
};

 async function directlogin(school_name, view_mode) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({school_name, view_mode})
        // schoolname, password 
    };
// durga will give this url 
    return await fetch(`${baseUrl}/gettoken`, requestOptions) 
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            // To get login time
            var moment = require('moment');
            const logintime = moment();
            localStorage.setItem('lastlogin', logintime.toJSON());
            return user;
        });
}

function removeUser() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.clear();
    sessionStorage.clear();
    	
    	
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                removeUser();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
