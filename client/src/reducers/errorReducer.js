import { AUTH_ERROR, AUTH_CLEAR } from '../actions/types';

export default function(state= null, action) {
    switch (action.type) {
        case AUTH_ERROR:
            return action.payload;
        case AUTH_CLEAR:
            return action.payload;
        default:
            return state;
    }
}