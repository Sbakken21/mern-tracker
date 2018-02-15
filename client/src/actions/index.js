import axios from 'axios';

export function signinUser({ username, password }) {
    return function(dispatch) {
       axios.post('/login', { username, password })
    }
}