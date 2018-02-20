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
                <div className= "row">
                    <h2 className="center-align">{task.subject || 'N/A'}</h2>
                    <div className="card grey darken-4">
                        <div className="card-action">
                            <h5>Client: <span className="task-data">{task.clientName || 'N/A'}</span></h5>
                        </div>
                        <div className="card-action">
                            <h5>Client Phone: <span className="task-data">{task.clientPhone || 'N/A'}</span></h5>
                        </div>
                        <div className="card-action">
                            <h5>Client Email: <span className="task-data">{task.clientEmail || 'N/A'}</span></h5>
                        </div>
                        <div className="card-action">
                            <h5>Project Description: <span className="task-data">{task.description || 'N/A'}</span></h5>
                        </div>
                    </div>
                    <Link to="/profile">
                        <button className="btn red">Back to profile</button>
                    </Link>
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