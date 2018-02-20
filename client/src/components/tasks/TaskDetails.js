import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../../actions';

class TaskDetails extends Component {

    componentDidMount() {
        this.props.fetchDetails(this.props.match.params.id);  
    }

    render() {
         
        
        // // Convert array of objects into single object
        const task = this.props.tasks[0] || [];
            
        return (
            <div className="container">
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
                </div>
                
            </div>
        );
    }
}

function mapDispatchToProps({ tasks }) {
    return { tasks };
}



export default connect(mapDispatchToProps, { fetchDetails })(TaskDetails);