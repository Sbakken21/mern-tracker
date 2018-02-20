import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../actions';

class Navbar extends Component {

    renderLinks() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <li className="deep-orange nav-login" key='login'>
                        <Link to="/login">Login</Link>
                    </li>,
                    <li key='register'>
                        <Link to="/register">Register</Link>
                    </li>
                ];
               
            default:
                return [
                    <li>
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>,
                    <li>
                        {/* uses "a" tag to assure redirect w/ proxy */}
                        <a href="/auth/logout" className="nav-link">Logout</a> 
                    </li>
                ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">FTrak</Link>
                    <ul className="left hide-on-med-and-down left-item">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <ul className="right">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );

    }
}

// Checks for user authentication
function mapStateToProps({ auth }) {
    return { auth };
}

export default withRouter(connect(mapStateToProps, actions)(Navbar));