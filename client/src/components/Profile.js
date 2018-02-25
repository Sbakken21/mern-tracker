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
                    <div className="center-align">
                        <h4>YOU MUST BE LOGGED IN TO VIEW THIS PAGE</h4>
                        <Link to='/login'><button className="btn deep-orange">Go to login</button></Link>
                        <Link to='/register'><button className="btn">Create an account</button></Link>
                    </div>
                );
            default:
                return (
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col s12 m8 offset-m2">
                                    <h1>Freelance Jobs/Clients</h1>
                                <span><Link to="/create">
                                    <button className="btn deep-orange"><i class="large material-icons">add</i> <span>Add Job</span></button>
                                </Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <TaskList />
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