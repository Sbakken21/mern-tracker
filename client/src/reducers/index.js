import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    form: reduxForm,
    auth: authReducer,
    tasks: taskReducer,
    authErr: errorReducer
});
