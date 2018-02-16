import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../actions';

class Navbar extends Component {

    handleLogout() {
        console.log('user has been logged out');
        this.props.signoutUser(this.props.history);
    }

    renderLinks() {
        if (!this.props.authenticated) {
            return [
                <li className="nav-item" key='signup'>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>,
                <li className="nav-item" key='login'>
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            ];
        } else {
            return [
                <li className="nav-item" key='profile'>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>,
                <li className="nav-item" key='signout'>
                    <Link to="/" onClick={this.handleLogout} className="nav-link">Sign Out</Link>
                </li>
            ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container">
                    <Link to="/" className="navbar-brand" >MERN TV Tracker</Link>
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
                            {/* <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li> */}
                            {this.renderLinks()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

// Checks for user authentication
function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

export default withRouter(connect(mapStateToProps, actions)(Navbar));