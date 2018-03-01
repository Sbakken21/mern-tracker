import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDetails } from '../../actions';

class TaskDetails extends Component {

    componentDidMount() {
        this.props.fetchDetails(this.props.match.params.id);  
    }

    renderContent() {
        // Convert array of objects into single object
        const task = this.props.tasks[0] || [];

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
                    <div className="row details-info">
                        <div className="col s8 offset-s2">
                        <div className= "row details-header">
                            <h2>{task.subject || ''}</h2>
                            <div className="divider deep-orange"></div>
                        </div>

                        <div className="row">
                            <h4>Client Info</h4>
                            <ul className="client-list">
                                <li>
                                    {task.clientName ? <h6><b>Client: </b>{task.clientName}</h6> : ''}     
                                </li>
                                <li>
                                    {task.clientPhone ? <h6><b>Phone: </b>{task.clientPhone}</h6> : ''}
                                </li>
                                <li>
                                    {task.clientEmail ? <h6><b>Email: </b>{task.clientEmail}</h6> : ''}
                                </li>
                            </ul>
                            <div className="divider grey darken-2"></div>
                        </div>

                        <div className="row">
                        <h4>Project Description</h4>
                        <p className="description">{task.description || ''}</p>
                        <div className="divider grey darken-2"></div>
                        </div>

                        <div className="row">
                            <h4>Dates</h4>
                            <ul className="date-list">
                                <li>
                                    {task.beginDate ? <h6><b>Begin: </b>{task.beginDate}</h6> : ''}
                                </li>
                                <li>
                                    {task.expectedDate ? <h6><b>Expected: </b>{task.expectedDate}</h6> : ''}
                                </li>
                            </ul>
                        </div>
 
                        <div className="row">
                        <Link to="/profile">
                            <button className="btn red">Back to profile</button>
                        </Link>
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
}

function mapDispatchToProps({ tasks, auth }) {
    return { tasks, auth };
}



export default connect(mapDispatchToProps, { fetchDetails })(TaskDetails);