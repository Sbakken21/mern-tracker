import React from 'react';
import { Link } from 'react-router-dom';

const MainLogin = () => {
    return (
        <div className="container text-center mt-5">
            <h2>Login</h2>
            <p>Sign in to access your profile page and track your favorite television shows</p>
            <div className="col-md-4 mx-auto">
                <div className="btn-group-vertical">
                    <Link className="btn btn-danger" to="/TBA">Sign in with Google(TBA)</Link>
                    <Link className="btn btn-info" to="/TBA">Sign in with Facebook(TBA)</Link>
                    <Link className="btn btn-secondary" to="/signin">Sign in with email</Link>
                </div>
                <Link className="btn btn-success my-5" to = "/signup">Register</Link>
            </div>
           
        </div>
    );
}

export default MainLogin;