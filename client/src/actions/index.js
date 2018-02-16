import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

// Send user info and return route
export const signinUser = ({ username, password }, history) => async dispatch => {
    try {
        const res = await axios.post('/auth/login', { username, password });

        history.push('/profile');
        dispatch({ type: AUTH_USER, payload: res.data });
        
    } catch (error) {
        dispatch(authError('invalid login info'));
    }
}

// Verify user info
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/user');
    dispatch({ type: AUTH_USER, payload: res.data });
}

// Error handling
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}