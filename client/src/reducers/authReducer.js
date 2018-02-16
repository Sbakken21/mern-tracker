import { AUTH_USER, AUTH_ERROR } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case AUTH_USER:
            return action.payload || false;
        default:
            return state;

    }
}