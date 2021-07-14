import baseUrl from '../shared/baseUrl';
//import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
        // schoolname, password 
    };

    return fetch(`${baseUrl}/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // console.log(user)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('loggedIn', JSON.stringify(user));
            sessionStorage.setItem('loggedIn', JSON.stringify(user))
            // To get login time
            var moment = require('moment');
            const logintime = moment();
            localStorage.setItem('lastlogin', logintime.toJSON());
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('loggedIn');
    // localStorage.clear();
    // sessionStorage.clear();
    	
    	
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        // console.log(data)
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
