import { AUTH_ERROR } from '../actions/types';

export default function(state= null, action) {
    switch (action.type) {
        case AUTH_ERROR:
            return action.payload;
        default:
            return state;
    }
}