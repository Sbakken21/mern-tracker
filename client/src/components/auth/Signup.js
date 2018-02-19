import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { renderField } from '../RenderField';

class Signup extends Component {

    handleFormSubmit(values) {
        // Call action creator to sign up user
        this.props.signupUser(values, this.props.history);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        
                        <h2>Register</h2>
                        {this.renderAlert()}
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <Field
                                name="username"
                                type="text"
                                component={renderField}
                                label="Username"
                            />

                            <Field
                                name="password"
                                type="password"
                                component={renderField}
                                label="Password"
                            />

                            <Field
                                name="confirmPassword"
                                type="password"
                                component={renderField}
                                label="Confirm Password"
                            />

                            <button type="submit" className="btn btn-success">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// form validation
function validate(values) {
    const error = {};

    if(!values.username) {
        error.username = 'You must provide a username';
    } else if (values.username.length < 2 || values.username.length > 15) {
        error.username = 'Username must be between 2-15 characters';
    } else if (!/^[a-zA-Z0-9-_]+$/.test(values.username)) {
        error.username = 'Username cannot contain special characters';
    }

    if(!values.password) {
        error.password = 'You must provide a password';
    } else if (values.password.length < 5) {
        error.password = 'Password must be at least 5 characters';
    }

    if (values.confirmPassword !== values.password) {
        error.confirmPassword = 'Passwords do not match';
    } 

    return error;
}

function mapStateToProps(state) {
    return { errorMessage: state.authErr };
}

Signup = reduxForm({ 
    validate,
    form: 'signup' 
})(Signup);
export default withRouter(connect(mapStateToProps, actions)(Signup));