import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="container">
            <h1>Profile</h1>
            <div>
                <Link to="/task/create">
                    <button className="btn btn-primary">Add Task</button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;