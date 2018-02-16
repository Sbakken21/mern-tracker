import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { withRouter } from 'react-router-dom';

class Signin extends Component {
    

    handleFormSubmit({ username, password }) {
        console.log(username, password);
        // Allow use of React-Router in actions
        this.props.signinUser({ username, password }, this.props.history);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="text-center alert alert-danger my-2">
                    <strong>Oops an error occured: </strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
                {this.renderAlert()}
                    <div className="form-group row">
                        
                        <div className="col-md-4">
                        
                            <label htmlFor="username">Username</label>
                            <Field className="form-control" type="text" name="username" component="input" />
                            <label htmlFor="password">Password</label>
                            <Field className="form-control" type="password" name="password" component="input" />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

Signin = reduxForm({ form: 'signin', fields: ['username', 'password'] })(Signin);
export default withRouter(connect(mapStateToProps, actions)(Signin));