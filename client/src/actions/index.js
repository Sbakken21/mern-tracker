import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// Login and return route
export const signinUser = ({ username, password }, history) => async dispatch => {
    try {
        const res = await axios.post('/auth/login', { username, password });

        history.push('/profile');
        console.log(res.data.username);
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

// Register user and redirect 
export const signupUser = ({ username, password }, history) => async dispatch => {
    const res = await axios.post('/auth/signup', { username, password });
    if (!res.data.error) {
        history.push('/login');
    } else {
        dispatch(authError(res.data.error));
    }
}

// Error handling
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

// Task actions
// Submit task
export const submitTask = (values, history) => async dispatch => {
    try {
        await axios.post ('/task/create', values);
        history.push('/profile');
    } catch (error) {
        console.log(error);
    }
};