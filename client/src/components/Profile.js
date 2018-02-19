import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TaskList from './tasks/TaskList';

class Profile extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div>
                        <h4>YOU MUST BE LOGGED IN TO VIEW THIS PAGE</h4>
                    </div>
                );
            default:
                return (
                    <div>
                        <h1>Profile</h1>
                        <div>
                            <Link to="/task/create">
                                <button className="btn btn-primary">Add Task</button>
                            </Link>
                            <div>
                                <TaskList />
                            </div>
                        </div>
                    </div>

                );
        }
    }

   render() { 
       return (
            <div className="container">
                {this.renderContent()}
            </div>
        );
    }
};

function mapStateToPros({ auth }) {
    return { auth };
}

export default connect(mapStateToPros)(Profile);