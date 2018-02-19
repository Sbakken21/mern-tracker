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
                    <li className="nav-item" key='login'>
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>,
                    <li className="nav-item" key='register'>
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                ];
            default:
                return (
                    <li className="nav-item">
                        {/* uses "a" tag to assure redirect w/ proxy */}
                        <a href="/auth/logout" className="nav-link">Logout</a>
                    </li>
                );
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand" >MERN</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {this.renderLinks()}
                        </ul>
                    </div>
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