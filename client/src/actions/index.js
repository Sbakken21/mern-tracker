import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

// Veryify user and return route
export const signinUser = ({ username, password }, history) => async dispatch => {
    try {
        const res = await axios.post('/auth/login', { username, password });
        history.push('/profile');
        dispatch({ type: AUTH_USER, payload: res.data });
    } catch (error) {
        dispatch(authError('invalid login info'));
    }
}
// Error handling
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

// Logout user and return route
export const signoutUser = (history) => async dispatch => {
    const res = await axios.post('/auth/signout');
    history.push('/login');
    dispatch({ type: UNAUTH_USER, payload: res.data });
}