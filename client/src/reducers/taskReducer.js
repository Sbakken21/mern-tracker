import { FETCH_TASKS, FETCH_DETAILS, DELETE_TASK } from '../actions/types';

export default function (state= [], action) {
    switch (action.type) {
        case FETCH_TASKS:
            return action.payload;
        case DELETE_TASK:
            return state.reverse().filter((task) => task._id !== action.payload._id);
        case FETCH_DETAILS:
            return action.payload;
        default:
            return state;
    }
}