import { FETCH_TASKS, DELETE_TASK } from '../actions/types';

export default function (state= [], action) {
    switch (action.type) {
        case FETCH_TASKS:
            return action.payload;
        case DELETE_TASK:
            return state.reverse().filter((task) => task._id !== action.payload._id);
        default:
            return state;
    }
}