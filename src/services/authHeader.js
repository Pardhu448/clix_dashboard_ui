export default function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user') || localStorage.getItem('loggedIn'));

    if (user && user.auth_token) {
        return { 'Authorization': user.auth_token };
    } else {
        return {};
    }
}
