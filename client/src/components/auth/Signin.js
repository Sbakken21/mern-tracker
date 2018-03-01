import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { withRouter, Link } from 'react-router-dom';

class Signin extends Component {

    componentWillMount () {
        // set default error state to null
        this.props.authClear();
    }

    

    handleFormSubmit({ username, password }) {
        // Allow use of React-Router in actions
        this.props.signinUser({ username, password }, this.props.history);
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="card-panel red lighten-1 center-align">
                    <strong>Oops an error occured: </strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {

        return (
            <div className="container">
                <form className="col s12" onSubmit={this.props.handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className="row">
                        <div className="col s6">
                            <h2>Login</h2>
                            {this.renderAlert()}
                        </div>
                    </div>
                
                    <div className="row">                    
                        <div className="input-field col s6">
                            <Field id="username" placeholder="Username" type="text" name="username" component="input" />
                        </div>
                    </div>
                    <div className="row"> 
                        
                        <div className="input-field col s6">
                            <Field placeholder="Password" type="password" name="password" component="input" /> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <button className="btn deep-orange waves-effect waves-light" type="submit">Login</button>
                            <span className="right">Don't have an account?<Link to="/register"> Register</Link></span>
                        </div>
                    </div>
                </form>
            </div>

            
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.authErr };
}

Signin = reduxForm({ form: 'signin' })(Signin);
export default withRouter(connect(mapStateToProps, actions)(Signin));