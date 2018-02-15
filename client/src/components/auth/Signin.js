import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions/';

class Signin extends Component {
    submit = (values) => {
        console.log(values);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.submit)}>
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

export default reduxForm({
    form: 'signinForm',
    fields: ['username', 'password']
}, null, actions)(Signin);